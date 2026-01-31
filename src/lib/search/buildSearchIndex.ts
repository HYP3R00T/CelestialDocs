import { getCollection } from "astro:content";
import type { CollectionEntry, CollectionKey } from "astro:content";
import { render } from "astro:content";
import { CONTENT } from "@data/config";
import type { SearchIndex, SearchItem } from "./types";

/**
 * Build the search index by extracting pages and headings from all content collections
 */
export async function buildSearchIndex(): Promise<SearchIndex> {
    const items: SearchItem[] = [];

    for (const sys of CONTENT.systems) {
        try {
            // Get all entries from this collection
            const collectionId = sys.id as CollectionKey;
            const entries = (await getCollection(collectionId)) as CollectionEntry<CollectionKey>[];

            for (const entry of entries) {
                // Add the page itself as a searchable item
                items.push({
                    type: "page",
                    slug: entry.id,
                    title: entry.data.title,
                    description: entry.data.description,
                    collection: sys.id,
                    url: `${sys.route}/${entry.id}`,
                });

                // Extract headings from the content
                try {
                    const { headings } = await render(entry);

                    // Filter to h2-h4 headings (following TOC pattern)
                    const filteredHeadings = headings.filter((h) => h.depth >= 2 && h.depth <= 4);

                    // Add each heading as a separate searchable item
                    for (const heading of filteredHeadings) {
                        items.push({
                            type: "heading",
                            slug: entry.id,
                            headingId: heading.slug,
                            headingText: heading.text,
                            pageTitle: entry.data.title,
                            collection: sys.id,
                            url: `${sys.route}/${entry.id}#${heading.slug}`,
                            depth: heading.depth,
                        });
                    }
                } catch (renderError) {
                    // Skip heading extraction if rendering fails
                    console.warn(
                        `Failed to extract headings from ${sys.id}/${entry.id}:`,
                        renderError,
                    );
                }
            }
        } catch (error) {
            console.error(`Failed to build index for collection ${sys.id}:`, error);
        }
    }

    return {
        items,
        timestamp: Date.now(),
    };
}
