import { containsSlug } from "./tabs";
import type { Tab } from "./types";

/**
 * Get the active tab based on the current page slug
 *
 * Example:
 * getActiveTab('guides/advanced/patterns', tabs)
 */
export function getActiveTab(slug: string, tabs: Tab[]): Tab | undefined {
  // Find which tab contains this slug
  for (const tab of tabs) {
    if (containsSlug(tab.group, slug)) {
      return tab;
    }
  }

  return tabs.find((t) => t.id === "_default") || tabs[0];
}
