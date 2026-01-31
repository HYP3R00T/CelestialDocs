import type { ProcessedGroup } from "./types";

/**
 * Recursively collect every sidebar group that is marked as a tab.
 */
export function collectTabGroups(groups: ProcessedGroup[]): ProcessedGroup[] {
    const tabs: ProcessedGroup[] = [];

    for (const group of groups) {
        gather(group);
    }

    return tabs;

    function gather(node: ProcessedGroup) {
        if (node.tab) {
            tabs.push(node);
        }

        for (const child of node.groups ?? []) {
            gather(child);
        }
    }
}

/**
 * Remove nested tab groups so that the sidebar renders a flattened hierarchy
 * inside tabs that should control their own tab area.
 */
export function stripTabGroups(group: ProcessedGroup): ProcessedGroup {
    return {
        ...group,
        groups: (group.groups ?? [])
            .filter((nested) => !nested.tab)
            .map((nested) => stripTabGroups(nested)),
    };
}

/**
 * Check whether a group or any of its descendants contains the provided slug.
 */
export function containsSlug(group: ProcessedGroup, slug: string): boolean {
    if (group.entries?.some((entry) => entry.slug === slug)) {
        return true;
    }

    for (const child of group.groups ?? []) {
        if (containsSlug(child, slug)) {
            return true;
        }
    }

    return false;
}
