import type { Sidebar } from "../docs/types";
import { getDocsFromFilesystem } from "./loader";
import { buildFilesystemStructure } from "./buildFilesystemStructure";
import { processGroup } from "./process";
import { collectTabs, removeTabGroups } from "./tabs";
import type { ProcessedGroup, ProcessedEntry, Tab, NavigationResult } from "./types";

/**
 * Build the complete navigation structure
 *
 * Example config fragment:
 * {
 *   groups: [
 *     { id: 'getting-started', label: 'Getting started', entries: [{slug: 'getting-started/installation'}] },
 *     { id: 'guides', tab: true, groups: [{ id: 'advanced'}] }
 *   ]
 * }
 */
export async function buildNavigation(config: Sidebar): Promise<NavigationResult> {
  // Get all docs from filesystem
  const allDocs = await getDocsFromFilesystem();
  const filesystemStructure = buildFilesystemStructure(allDocs);

  // Map configuration items (Group or bare Entry) into processed items while preserving original order
  const orderedConfigItems = config.groups
    .map((item: any, idx: number) => {
      if (item && (item as any).slug) {
        const entrySlug = (item as any).slug as string;
        const doc = allDocs.find((d) => d.slug === entrySlug);
        if (!doc) {
          console.warn(`Top-level entry ${entrySlug} not found in docs collection`);
          return null;
        }
        if (item.hidden || doc.data.navHidden) return null;

        return {
          type: "entry",
          index: idx,
          entry: {
            slug: entrySlug,
            label: (item as any).label || doc.data.navLabel || doc.data.title,
            icon: (item as any).icon || doc.data.navIcon,
            hidden: false,
            order: doc.data.navOrder,
          } as ProcessedEntry,
        };
      }

      // Process group
      const processed = processGroup(item as any, filesystemStructure, allDocs);
      return { type: "group", index: idx, group: processed } as any;
    })
    .filter(Boolean) as Array<{ type: "entry" | "group"; index: number; entry?: ProcessedEntry; group?: ProcessedGroup }>;

  // Extract processed groups for tab computations (from orderedConfigItems)
  const processedGroups = orderedConfigItems.filter((i) => i?.type === "group").map((i) => (i as any).group as ProcessedGroup);

  // Collect all groups that should be tabs (at any level)
  const allTabGroups = collectTabs(processedGroups);

  // For tabs that have subgroups, also remove nested tabs from their structure
  const cleanedTabGroups = allTabGroups.map((tabGroup) => {
    if (tabGroup.groups && tabGroup.groups.length > 0) {
      const nonTabSubgroups = tabGroup.groups.filter((g) => (g as any).tab !== true);
      return {
        ...tabGroup,
        groups: removeTabGroups(nonTabSubgroups),
      } as ProcessedGroup;
    }
    return tabGroup;
  });

  // Get non-tab groups (with tab groups removed from hierarchy)
  const defaultGroups = removeTabGroups(processedGroups);

  // Create tabs
  const tabs: Tab[] = cleanedTabGroups.map((group) => ({
    id: group.id,
    label: group.label,
    icon: group.icon,
    group: group,
  }));

  // Create default tab if there are non-tab groups
  let defaultTab: Tab | undefined;
  if (defaultGroups.length > 0) {
    // Collect all existing slugs from processed groups to avoid duplicates
    const existingSlugs = new Set<string>();
    function collectSlugs(groups: ProcessedGroup[]) {
      groups.forEach((g) => {
        (g.entries || []).forEach((e) => existingSlugs.add(e.slug));
        if (g.groups && g.groups.length) collectSlugs(g.groups);
      });
    }
    collectSlugs(defaultGroups);

    // Build ordered children: iterate original orderedConfigItems to preserve configured ordering
    const defaultChildren: Array<ProcessedGroup | ProcessedEntry> = [];

    orderedConfigItems.forEach((item) => {
      if (item.type === "entry" && item.entry) {
        const entry = item.entry;
        if (!existingSlugs.has(entry.slug)) {
          defaultChildren.push(entry);
          existingSlugs.add(entry.slug);
        }
      } else if (item.type === "group" && item.group) {
        const group = item.group;
        if ((group as any).tab !== true) {
          const cleaned = {
            ...group,
            groups: removeTabGroups(group.groups || []),
          } as ProcessedGroup;
          defaultChildren.push(cleaned);
        }
      }
    });

    // Add root-level docs as top-level entries (not grouped), excluding index and already included slugs
    const rootDocs = filesystemStructure.get("") || [];
    const rootEntries = rootDocs
      .filter((doc) => !doc.data.navHidden && doc.slug !== "index" && !existingSlugs.has(doc.slug))
      .map((doc) => ({
        slug: doc.slug,
        label: doc.data.navLabel || doc.data.title,
        icon: doc.data.navIcon,
        order: doc.data.navOrder,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));

    // Finally append root entries (filesystem-root docs) after configured items
    const children = [...defaultChildren, ...rootEntries];

    defaultTab = {
      id: "_default",
      label: "Docs",
      group: {
        id: "_default",
        label: "Docs",
        groups: defaultGroups,
        entries: [],
        // ordered mix of entries and groups for rendering
        children: children as any,
      },
    };
  }

  // Determine if we should show tabs
  const visibleTabs = defaultTab ? [defaultTab, ...tabs] : tabs;
  const showTabs = visibleTabs.length >= 2;

  return {
    tabs: visibleTabs,
    showTabs,
    defaultTab,
  } as NavigationResult;
}
