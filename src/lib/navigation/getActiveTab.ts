import { containsSlug } from "./tabs";
import type { Tab } from "./types";

/**
 * Get the active tab based on the current page slug
 *
 * Example:
 * getActiveTab('guides/advanced/patterns', tabs)
 */
export function getActiveTab(slug: string, tabs: Tab[]): Tab | undefined {
    return (
        tabs.find((tab) => containsSlug(tab.group, slug)) ??
        tabs.find((tab) => tab.id === "_default") ??
        tabs[0]
    );
}
