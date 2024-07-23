import type { CollectionEntry } from "astro:content";

// Make similar changes to config.ts in content folder
export type DocData = {
    title?: string;
    description?: string;
};

export type DocEntry = CollectionEntry<'docs'> & {
    data: DocData;
};
