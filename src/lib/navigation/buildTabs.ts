import { collectTabGroups, stripTabGroups } from "./tabs";
import type { NavigationItem, ProcessedGroup, Tab } from "./types";

export function buildTabs(items: NavigationItem[]): Tab[] {
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
