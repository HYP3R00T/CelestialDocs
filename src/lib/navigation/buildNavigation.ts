import type { Sidebar } from "../docs/types";
import { getDocsFromFilesystem } from "./loader";
import { buildFilesystemStructure } from "./buildFilesystemStructure";
import { buildNavigationItems } from "./buildNavigationItems";
import { buildTabs } from "./buildTabs";
import { buildDefaultChildren, createDefaultTab } from "./defaultChildren";
import { buildRootEntries } from "./rootEntries";
import type { NavigationResult, NavigationItem, ProcessedGroup } from "./types";

/**
 * Build the navigation tabs and default area from the sidebar configuration.
 */
export async function buildNavigation(config: Sidebar): Promise<NavigationResult> {
  const allDocs = await getDocsFromFilesystem();
  const filesystemStructure = buildFilesystemStructure(allDocs);

  const navigationItems = buildNavigationItems(config.groups, filesystemStructure, allDocs);
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

  const defaultTab = children.length ? createDefaultTab(children) : undefined;
  const visibleTabs = defaultTab ? [defaultTab, ...tabs] : tabs;

  return {
    tabs: visibleTabs,
    showTabs: visibleTabs.length >= 2,
  };
}
