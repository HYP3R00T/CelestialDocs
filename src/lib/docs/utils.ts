import type { SidebarGroupItem, SidebarEntryItem } from "@/lib/docs/types";

/**
 * Find the first entry slug inside a group (searches children, entries, groups recursively)
 */
export function findFirstEntry(group: SidebarGroupItem): string | null {
    if (group.children && group.children.length > 0) {
        for (const child of group.children) {
            if ("slug" in child) {
                return (child as SidebarEntryItem).slug;
            }

            const entry = findFirstEntry(child as SidebarGroupItem);
            if (entry) return entry;
        }
    }

    if (group.entries && group.entries.length > 0) {
        return group.entries[0].slug;
    }
    if (group.groups && group.groups.length > 0) {
        for (const subgroup of group.groups) {
            const entry = findFirstEntry(subgroup);
            if (entry) return entry;
        }
    }
    return null;
}
