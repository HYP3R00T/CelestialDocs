import type { Sidebar } from "../docs/types";
import { getDocsFromFilesystem } from "./loader";
import { buildFilesystemStructure } from "./buildFilesystemStructure";
import { buildNavigationItems } from "./buildNavigationItems";
import { buildTabs } from "./buildTabs";
import { buildDefaultChildren, createDefaultTab } from "./defaultChildren";
import { buildRootEntries } from "./rootEntries";
import type { NavigationResult } from "./types";

/**
 * Build the navigation tabs and default area from the sidebar configuration.
 */
export async function buildNavigation(config: Sidebar): Promise<NavigationResult> {
  const allDocs = await getDocsFromFilesystem();
  const filesystemStructure = buildFilesystemStructure(allDocs);

  const navigationItems = buildNavigationItems(config.groups, filesystemStructure, allDocs);
  const tabs = buildTabs(navigationItems);

  const { children: defaultChildren, slugs } = buildDefaultChildren(navigationItems);
  const rootEntries = buildRootEntries(filesystemStructure, slugs);
  const children = [...defaultChildren, ...rootEntries];

  const defaultTab = children.length ? createDefaultTab(children) : undefined;
  const visibleTabs = defaultTab ? [defaultTab, ...tabs] : tabs;

  return {
    tabs: visibleTabs,
    showTabs: visibleTabs.length >= 2,
  };
}
