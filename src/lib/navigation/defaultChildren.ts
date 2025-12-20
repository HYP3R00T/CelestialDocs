import { stripTabGroups } from "./tabs";
import type { BuildDefaultChildrenResult, NavigationItem, ProcessedEntry, ProcessedGroup, Tab } from "./types";

export function buildDefaultChildren(items: NavigationItem[]): BuildDefaultChildrenResult {
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

export function createDefaultTab(children: Array<ProcessedGroup | ProcessedEntry>): Tab {
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
