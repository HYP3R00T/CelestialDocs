import type { CollectionEntry } from "astro:content";
import type { MarkdownHeading } from "astro";

// Make similar changes to config.ts in content folder
export type DocData = {
  title: string;
  author: string;
  pubDatetime: Date | string;
  modDatetime?: Date | string;
  description?: string;
  draft: boolean;
  tags: string[];
};

// Define the type for docs collection
export type DocEntry = CollectionEntry<"docs"> & {
  data: DocData;
};

// Define the type for menu items
export type MenuItem = {
  title?: string;
  slug: string;
  darft: boolean;
  children: MenuItem[];
};

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
  items: MenuItem[];
  level: number;
};

// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}

export interface HeadingProps {
  headings: {
    depth: number;
    text: string;
    slug: string;
  }[];
}
