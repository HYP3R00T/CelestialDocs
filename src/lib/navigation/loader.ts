import { getCollection } from "astro:content";
import type { CollectionKey } from "astro:content";

import type { DocEntry } from "./types";

/**
 * Get all documentation entries from the filesystem
 *
 * Example return value:
 * [
 *   {
 *     id: 'guides/advanced/patterns',
 *     slug: 'guides/advanced/patterns',
 *     data: { title: 'Patterns', navLabel: 'Patterns', navIcon: 'pattern' }
 *   },
 *   { id: 'index', slug: 'index', data: { title: 'Overview' } }
 * ]
 */
export async function getDocsFromFilesystem(): Promise<DocEntry[]> {
    const docs = await getCollection("docs");
    return docs.map((doc) => ({
        id: doc.id,
        slug: doc.id, // Using id as slug for the loader-based collection
        data: {
            title: (doc.data as DocEntry["data"]).title,
            navLabel: (doc.data as DocEntry["data"]).navLabel,
            navIcon: (doc.data as DocEntry["data"]).navIcon,
            navHidden: (doc.data as DocEntry["data"]).navHidden,
            authors: (doc.data as DocEntry["data"]).authors,
        },
    }));
}

/**
 * Generic: get entries for any registered collection name (e.g., 'notes', 'docs')
 */
export async function getCollectionFromFilesystem(collectionId: string): Promise<DocEntry[]> {
    const entries = await getCollection(collectionId as CollectionKey);
    return entries.map((doc) => ({
        id: doc.id,
        slug: doc.id,
        data: {
            title: (doc.data as DocEntry["data"]).title,
            navLabel: (doc.data as DocEntry["data"]).navLabel,
            navIcon: (doc.data as DocEntry["data"]).navIcon,
            navHidden: (doc.data as DocEntry["data"]).navHidden,
            authors: (doc.data as DocEntry["data"]).authors,
        },
    }));
}
