import type { Entry, Group, GroupOrEntry } from "../docs/types";
import { processGroup } from "./process";
import type { DocEntry, NavigationItem } from "./types";

export function buildNavigationItems(
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
