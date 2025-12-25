import { SIDEBAR_NAVIGATION, CONTENT } from "@data/config";
import type { Entry, Group, GroupOrEntry } from "./types";

/**
 * Find a group in the navigation tree by its path
 */
function isGroup(item: GroupOrEntry): item is Group {
    return "id" in item && typeof item.id === "string";
}

function getGroupsForCollection(collectionId?: string): GroupOrEntry[] {
    if ((SIDEBAR_NAVIGATION as any).groups) {
        // legacy single Sidebar config
        return (SIDEBAR_NAVIGATION as any).groups as GroupOrEntry[];
    }
    const map = SIDEBAR_NAVIGATION as Record<string, { groups: GroupOrEntry[] }>;
    const key = collectionId ?? "docs";
    return map[key]?.groups ?? map["docs"]?.groups ?? Object.values(map)[0]?.groups ?? [];
}

function findGroupByPath(path: string, groups: GroupOrEntry[] = getGroupsForCollection()): Group | undefined {
    for (const node of groups) {
        if (!isGroup(node)) {
            continue;
        }

        if (node.path === path || node.id === path) {
            return node;
        }
        if (node.groups) {
            const found = findGroupByPath(path, node.groups);
            if (found) return found;
        }
    }
    return undefined;
}

/**
 * Find an entry in the navigation tree by its slug
 */
function findEntryBySlug(slug: string, nodes: GroupOrEntry[] = getGroupsForCollection()): Entry | undefined {
    for (const node of nodes) {
        if (!isGroup(node)) {
            if (node.slug === slug) {
                return node;
            }
            continue;
        }

        if (node.entries) {
            for (const entry of node.entries) {
                if (entry.slug === slug) {
                    return entry;
                }
            }
        }
        if (node.groups) {
            const found = findEntryBySlug(slug, node.groups);
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
function isPageEntry(slug: string, collectionId?: string): boolean {
    function checkNodes(nodes: GroupOrEntry[]): boolean {
        for (const node of nodes) {
            if (!isGroup(node)) {
                if (node.slug === slug) {
                    return true;
                }
                continue;
            }

            if (node.entries) {
                for (const entry of node.entries) {
                    if (entry.slug === slug) {
                        return true;
                    }
                }
            }
            if (node.groups && checkNodes(node.groups)) {
                return true;
            }
        }
        return false;
    }

    return checkNodes(getGroupsForCollection(collectionId));
}

/**
 * Build breadcrumb items from a documentation slug
 * All segments are displayed with their titles, but only actual page entries are clickable
 * Examples:
 * "getting-started/introduction" -> [{ label: "Docs", href: "/docs" }, { label: "Getting Started" }, { label: "Introduction" }]
 * "guides/advanced/patterns" -> [{ label: "Docs", href: "/docs" }, { label: "Guides", href: "/docs/guides" }, { label: "Advanced Topics" }, { label: "Design Patterns" }]
 */
export function buildBreadcrumbItems(
    slug: string,
    collectionId?: string,
): Array<{ label: string; href?: string }> {
    const parts = slug.split("/");
    const system = (CONTENT.systems ?? []).find((s: any) => s.id === collectionId) ?? (CONTENT.systems ?? [])[0];

    const items: Array<{ label: string; href?: string }> = [
        { label: system ? (system.id.charAt(0).toUpperCase() + system.id.slice(1)) : "Docs", href: system ? (system.route ?? `/${system.id}`) : "/docs" },
    ];

    let currentPath = "";
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const isLast = i === parts.length - 1;

        currentPath += (currentPath ? "/" : "") + part;

        // Get the proper label for this segment
        const label = getBreadcrumbLabel(currentPath) || part;

        // Only make it clickable if it's an actual page entry and not the last item
        const isPagePath = isPageEntry(currentPath, collectionId);
        const shouldBeClickable = isPagePath && !isLast;

        items.push({
            label,
            href: shouldBeClickable ? `${system?.route ?? `/${system?.id ?? 'docs'}/${currentPath}`}` : undefined,
        });
    }

    return items;
}
