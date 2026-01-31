import type { Sidebar } from "../docs/types";

import { buildFilesystemStructure } from "./buildFilesystemStructure";
import { buildNavigationItems } from "./buildNavigationItems";
import { buildTabs } from "./buildTabs";
import { buildDefaultChildren, createDefaultTab } from "./defaultChildren";
import { getDocsFromFilesystem, getCollectionFromFilesystem } from "./loader";
import { buildRootEntries } from "./rootEntries";
import type { NavigationResult, NavigationItem, ProcessedGroup } from "./types";

/**
 * Build the navigation tabs and default area from the sidebar configuration.
 * Configuration must be a mapping of collectionId to Sidebar.
 * If a `collectionId` is provided, the filesystem discovery is scoped to that collection.
 */
export async function buildNavigation(
    config: Record<string, Sidebar>,
    collectionId?: string,
): Promise<NavigationResult> {
    const key = collectionId ?? "docs";
    const effectiveConfig = config[key];

    if (!effectiveConfig) {
        throw new Error(`Sidebar configuration not found for collection: ${key}`);
    }

    const allDocs = collectionId
        ? await getCollectionFromFilesystem(collectionId)
        : await getDocsFromFilesystem();
    const filesystemStructure = buildFilesystemStructure(allDocs);

    const navigationItems = buildNavigationItems(
        effectiveConfig.groups,
        filesystemStructure,
        allDocs,
    );
    const tabs = buildTabs(navigationItems);

    const { children: defaultChildren, slugs } = buildDefaultChildren(navigationItems);

    // Include slugs from all configured group entries (including tabbed groups)
    // so root entries don't duplicate docs already present in groups/tabs.
    (function collectSlugsFromItems(itemsArray: NavigationItem[], set: Set<string>) {
        function collectGroupSlugs(group: ProcessedGroup): void {
            (group.entries ?? []).forEach((e) => set.add(e.slug));
            (group.groups ?? []).forEach(collectGroupSlugs);
        }

        for (const item of itemsArray) {
            if (item.type === "entry") {
                set.add(item.entry.slug);
            } else {
                collectGroupSlugs(item.group);
            }
        }
    })(navigationItems, slugs);

    const rootEntries = buildRootEntries(filesystemStructure, slugs);
    const children = [...defaultChildren, ...rootEntries];

    const defaultTab = children.length
        ? createDefaultTab(
              children,
              effectiveConfig.defaultTab?.label ?? undefined,
              effectiveConfig.defaultTab?.icon ?? undefined,
          )
        : undefined;

    // Avoid duplicate tabs: if any computed tab has the same label as the default tab,
    // prefer the explicit tab and skip the default tab.
    const dedupedDefaultTab =
        defaultTab && tabs.some((t) => t.label === defaultTab.label) ? undefined : defaultTab;

    const visibleTabs = dedupedDefaultTab ? [dedupedDefaultTab, ...tabs] : tabs;

    return {
        tabs: visibleTabs,
        showTabs: visibleTabs.length >= 2,
    };
}
