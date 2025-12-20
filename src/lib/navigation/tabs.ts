import type { ProcessedGroup } from "./types";

/**
 * Collect groups that have `tab: true` recursively
 *
 * Example input:
 * [
 *   { id: 'guides', tab: true, groups: [ { id: 'advanced', tab: true } ] },
 *   { id: 'api' }
 * ]
 *
 * Example output:
 * [ { id: 'guides', tab: true, groups: [ ... ] }, { id: 'advanced', tab: true } ]
 */
export function collectTabs(groups: ProcessedGroup[]): ProcessedGroup[] {
  const tabs: ProcessedGroup[] = [];

  groups.forEach((group) => {
    if ((group as any).tab === true) {
      tabs.push(group);
    }
    // Recursively check subgroups
    if (group.groups && group.groups.length > 0) {
      tabs.push(...collectTabs(group.groups));
    }
  });

  return tabs;
}

/**
 * Remove groups marked as tabs from a group list and recurse
 *
 * Example input:
 * [ { id: 'guides', tab: true }, { id: 'usage', groups: [ { id: 'ref', tab: true }, { id: 'howto' } ] } ]
 *
 * Example output:
 * [ { id: 'usage', groups: [ { id: 'howto' } ] } ]
 */
export function removeTabGroups(groups: ProcessedGroup[]): ProcessedGroup[] {
  return groups
    .filter((group) => (group as any).tab !== true)
    .map((group) => {
      if (group.groups && group.groups.length > 0) {
        const nonTabSubgroups = group.groups.filter((g) => (g as any).tab !== true);
        return {
          ...group,
          groups: removeTabGroups(nonTabSubgroups),
        } as ProcessedGroup;
      }
      return group;
    });
}

/**
 * Check if a group contains a specific slug
 *
 * Example:
 * containsSlug(group, 'guides/advanced/patterns') => true
 */
export function containsSlug(group: ProcessedGroup, slug: string): boolean {
  // Check direct entries
  if (group.entries?.some((e) => e.slug === slug)) {
    return true;
  }

  // Check subgroups recursively
  if (group.groups) {
    for (const subgroup of group.groups) {
      if (containsSlug(subgroup, slug)) {
        return true;
      }
    }
  }

  return false;
}
