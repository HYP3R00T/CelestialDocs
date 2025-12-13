import { navigation } from "@data/config";
import type { Group, Entry } from "./types";

/**
 * Find a group in the navigation tree by its path
 */
function findGroupByPath(path: string, groups: Group[] = navigation.groups): Group | undefined {
    for (const group of groups) {
        if (group.path === path || group.id === path) {
            return group;
        }
        if (group.groups) {
            const found = findGroupByPath(path, group.groups);
            if (found) return found;
        }
    }
    return undefined;
}

/**
 * Find an entry in the navigation tree by its slug
 */
function findEntryBySlug(slug: string, groups: Group[] = navigation.groups): Entry | undefined {
    for (const group of groups) {
        if (group.entries) {
            for (const entry of group.entries) {
                if (entry.slug === slug) {
                    return entry;
                }
            }
        }
        if (group.groups) {
            const found = findEntryBySlug(slug, group.groups);
            if (found) return found;
        }
    }
    return undefined;
}

/**
 * Get breadcrumb label for a path segment
 * Returns the group label if it's a group, or entry label if it's an entry
 */
function getBreadcrumbLabel(currentPath: string): string | null {
    // Check if it's a group
    const group = findGroupByPath(currentPath);
    if (group) {
        return group.label;
    }

    // Check if it's an entry
    const entry = findEntryBySlug(currentPath);
    if (entry?.label) {
        return entry.label;
    }

    // Fallback: convert slug to label
    const lastPart = currentPath.split("/").pop() || "";
    return lastPart
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

/**
 * Check if a path corresponds to an actual page entry (not just a group)
 */
function isPageEntry(slug: string): boolean {
    function checkGroups(groups: Group[]): boolean {
        for (const group of groups) {
            // Check entries in this group
            if (group.entries) {
                for (const entry of group.entries) {
                    if (entry.slug === slug) {
                        return true;
                    }
                }
            }
            // Recursively check subgroups
            if (group.groups && checkGroups(group.groups)) {
                return true;
            }
        }
        return false;
    }

    return checkGroups(navigation.groups);
}

/**
 * Build breadcrumb items from a documentation slug
 * All segments are displayed with their titles, but only actual page entries are clickable
 * Examples:
 * "getting-started/introduction" -> [{ label: "Docs", href: "/docs" }, { label: "Getting Started" }, { label: "Introduction" }]
 * "guides/advanced/patterns" -> [{ label: "Docs", href: "/docs" }, { label: "Guides", href: "/docs/guides" }, { label: "Advanced Topics" }, { label: "Design Patterns" }]
 */
export function buildBreadcrumbItems(
    slug: string
): Array<{ label: string; href?: string }> {
    const parts = slug.split("/");
    const items: Array<{ label: string; href?: string }> = [
        { label: "Docs", href: "/docs" },
    ];

    let currentPath = "";
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const isLast = i === parts.length - 1;

        currentPath += (currentPath ? "/" : "") + part;

        // Get the proper label for this segment
        const label = getBreadcrumbLabel(currentPath) || part;

        // Only make it clickable if it's an actual page entry and not the last item
        const isPagePath = isPageEntry(currentPath);
        const shouldBeClickable = isPagePath && !isLast;

        items.push({
            label,
            href: shouldBeClickable ? `/docs/${currentPath}` : undefined,
        });
    }

    return items;
}
