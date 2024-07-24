import type { CollectionEntry } from "astro:content";

// Make similar changes to config.ts in content folder
export type DocData = {
    title?: string;
    description?: string;
};

// Define the type for docs collection
export type DocEntry = CollectionEntry<'docs'> & {
    data: DocData;
};

// Define the type for menu items
export type MenuItem = {
    title?: string;
    slug: string;
    children: MenuItem[];
}

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
    items: MenuItem[];
    level: number;
}