import type { CollectionEntry } from "astro:content";
import type { MarkdownHeading } from "astro";

// Make similar changes to config.ts in content folder
export type DocsData = {
  title: string;
  author: string;
  pubDatetime: Date;
  modDatetime?: Date | null;
  description?: string;
  draft: boolean;
  tags: string[];
};

// Define the type for docs collection
export type DocsEntry = CollectionEntry<"docs"> & {
  data: DocsData;
};

// For [...slug].astro
export interface Heading {
  text: string;
  depth: number;
  slug: string;
}

// For DocsLayout.astro
export interface DocsLayoutProps extends DocsData {
  headings: Heading[];
}

// For MainContent.astro
export interface MainContentProps extends DocsLayoutProps {}

// For TableofContents.astro
export interface HeadingProps {
  headings: {
    depth: number;
    text: string;
    slug: string;
  }[];
}

// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}

export type MenuItem = {
  title?: string;
  slug: string;
  children: MenuItem[];
};

// Define the type for menu items to created nested object
export type MenuItemWithDraft = {
  title?: string;
  slug: string;
  draft: boolean;
  children: MenuItemWithDraft[];
};

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
  items: MenuItemWithDraft[];
  level: number;
};

// For Breadcrumbs.astro
export type BreadcrumbsProps = {
  title: string;
  link: string;
}[];

// To format datetime
export interface DatetimesFormatProps {
  pubDatetime: Date;
  modDatetime?: Date | null;
  hide_time: boolean;
}

// For Datetime.tsx
export interface DatetimesProps extends DatetimesFormatProps {
  hide_datetime: boolean;
  className?: string;
}

// ! Organized above
