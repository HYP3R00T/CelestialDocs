import type { Entry, Group, GroupOrEntry, Sidebar } from "../docs/types";
import { getDocsFromFilesystem } from "./loader";
import { buildFilesystemStructure } from "./buildFilesystemStructure";
import { processGroup } from "./process";
import { collectTabGroups, stripTabGroups } from "./tabs";
import type { DocEntry, NavigationResult, ProcessedEntry, ProcessedGroup, Tab } from "./types";

type NavigationItem = NavigationEntryItem | NavigationGroupItem;

interface NavigationEntryItem {
  type: "entry";
  entry: ProcessedEntry;
}

interface NavigationGroupItem {
  type: "group";
  group: ProcessedGroup;
}

/**
 * Build the navigation tabs and default area from the sidebar configuration.
 */
export async function buildNavigation(config: Sidebar): Promise<NavigationResult> {
  const allDocs = await getDocsFromFilesystem();
  const filesystemStructure = buildFilesystemStructure(allDocs);

  const navigationItems = buildNavigationItems(config.groups, filesystemStructure, allDocs);
  const tabs = buildTabs(navigationItems);

  const { children: defaultChildren, slugs } = buildDefaultChildren(navigationItems);
  const rootEntries = buildRootEntries(filesystemStructure, slugs);
  const children = [...defaultChildren, ...rootEntries];

  const defaultTab = children.length ? createDefaultTab(children) : undefined;
  const visibleTabs = defaultTab ? [defaultTab, ...tabs] : tabs;

  return {
    tabs: visibleTabs,
    showTabs: visibleTabs.length >= 2,
  };
}

function buildNavigationItems(
  items: GroupOrEntry[],
  filesystemStructure: Map<string, DocEntry[]>,
  allDocs: DocEntry[],
): NavigationItem[] {
  const navigationItems: NavigationItem[] = [];

  for (const item of items) {
    if (isEntryConfig(item)) {
      const doc = allDocs.find((d) => d.slug === item.slug);
      if (!doc) {
        console.warn(`Top-level entry ${item.slug} not found in docs collection`);
        continue;
      }

      if (item.hidden || doc.data.navHidden) {
        continue;
      }

      navigationItems.push({
        type: "entry",
        entry: {
          slug: item.slug,
          label: item.label || doc.data.navLabel || doc.data.title,
          icon: item.icon || doc.data.navIcon,
          hidden: false,
          order: doc.data.navOrder,
        },
      });
      continue;
    }

    navigationItems.push({
      type: "group",
      group: processGroup(item as Group, filesystemStructure, allDocs),
    });
  }

  return navigationItems;
}

function isEntryConfig(item: GroupOrEntry): item is Entry {
  return "slug" in item && typeof item.slug === "string";
}

function buildTabs(items: NavigationItem[]): Tab[] {
  const tabGroups: ProcessedGroup[] = [];

  for (const item of items) {
    if (item.type !== "group") {
      continue;
    }

    collectTabGroups([item.group]).forEach((group) => {
      tabGroups.push(stripTabGroups(group));
    });
  }

  return tabGroups.map((group) => ({
    id: group.id,
    label: group.label,
    icon: group.icon,
    group,
  }));
}

function buildDefaultChildren(items: NavigationItem[]): {
  children: Array<ProcessedGroup | ProcessedEntry>;
  slugs: Set<string>;
} {
  const children: Array<ProcessedGroup | ProcessedEntry> = [];
  const slugs = new Set<string>();

  for (const item of items) {
    if (item.type === "entry") {
      if (slugs.has(item.entry.slug)) {
        continue;
      }

      slugs.add(item.entry.slug);
      children.push(item.entry);
      continue;
    }

    if (item.group.tab) {
      continue;
    }

    const normalizedGroup = stripTabGroups(item.group);
    children.push(normalizedGroup);
    collectGroupSlugs(normalizedGroup, slugs);
  }

  return { children, slugs };
}

function createDefaultTab(children: Array<ProcessedGroup | ProcessedEntry>): Tab {
  return {
    id: "_default",
    label: "Docs",
    group: {
      id: "_default",
      label: "Docs",
      entries: [],
      groups: [],
      children,
    },
  };
}

function collectGroupSlugs(group: ProcessedGroup, slugs: Set<string>): void {
  (group.entries ?? []).forEach((entry) => slugs.add(entry.slug));
  (group.groups ?? []).forEach((child) => collectGroupSlugs(child, slugs));
}

function buildRootEntries(
  filesystemStructure: Map<string, DocEntry[]>,
  slugs: Set<string>,
): ProcessedEntry[] {
  const rootDocs = filesystemStructure.get("") ?? [];

  const rootEntries = rootDocs
    .filter((doc) => !doc.data.navHidden && doc.slug !== "index" && !slugs.has(doc.slug))
    .map((doc) => ({
      slug: doc.slug,
      label: doc.data.navLabel || doc.data.title || doc.slug,
      icon: doc.data.navIcon,
      order: doc.data.navOrder,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  rootEntries.forEach((entry) => slugs.add(entry.slug));
  return rootEntries;
}
