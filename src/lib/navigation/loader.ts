import { getCollection } from "astro:content";
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
      title: (doc.data as any).title,
      navLabel: (doc.data as any).navLabel,
      navIcon: (doc.data as any).navIcon,
      navHidden: (doc.data as any).navHidden,
    },
  }));
}
