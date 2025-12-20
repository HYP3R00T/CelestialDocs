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
    navOrder?: number;
    navHidden?: boolean;
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
  defaultTab?: Tab;
}

export type { Entry, Group, Sidebar };
