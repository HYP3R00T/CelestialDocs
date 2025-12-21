import type { Entry, Group, Sidebar } from "../docs/types";

/**
 * A raw doc entry returned by the content loader
 * Example: { id: 'guides/intro', slug: 'guides/intro', data: { title: 'Intro' } }
 */
export interface DocEntry {
  id: string;
  slug: string;
  data: {
    title: string;
    navLabel?: string;
    navIcon?: string;
    navHidden?: boolean;
    hide_breadcrumbs?: boolean;
    authors?: string[];
  };
}

/**
 * A processed entry used for navigation rendering
 * Example: { slug: 'guides/intro', label: 'Intro', icon: 'book' }
 */
export interface ProcessedEntry extends Entry {
  label: string;
  order?: number;
}

/**
 * A processed group (sidebar group)
 * Example:
 * {
 *   id: 'guides',
 *   label: 'Guides',
 *   groups: [ ... ],
 *   entries: [ { slug: 'guides/intro', label: 'Intro' } ]
 * }
 */
export interface ProcessedGroup extends Group {
  groups: ProcessedGroup[];
  entries: ProcessedEntry[];
  // Optional ordered children when we need to preserve interleaved entries and groups
  children?: Array<ProcessedGroup | ProcessedEntry>;
}

export interface Tab {
  id: string;
  label: string;
  icon?: string;
  group: ProcessedGroup;
}

export interface NavigationResult {
  tabs: Tab[];
  showTabs: boolean;
}

export interface NavigationEntryItem {
  type: "entry";
  entry: ProcessedEntry;
}

export interface NavigationGroupItem {
  type: "group";
  group: ProcessedGroup;
}

export type NavigationItem = NavigationEntryItem | NavigationGroupItem;

export interface BuildDefaultChildrenResult {
  children: Array<ProcessedGroup | ProcessedEntry>;
  slugs: Set<string>;
}

export type { Entry, Group, Sidebar };
