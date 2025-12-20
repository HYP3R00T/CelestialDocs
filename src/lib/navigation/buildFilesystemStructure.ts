import type { DocEntry } from "./types";

/**
 * Extract folder structure from filesystem entries
 *
 * Example input:
 * [ { slug: 'index' }, { slug: 'getting-started/installation' }, { slug: 'guides/advanced/patterns' } ]
 *
 * Example output (Map):
 * Map {
 *  '': [ {slug: 'index'} ],
 *  'getting-started': [ {slug: 'getting-started/installation'} ],
 *  'guides/advanced': [ {slug: 'guides/advanced/patterns'} ]
 * }
 */
export function buildFilesystemStructure(docs: DocEntry[]): Map<string, DocEntry[]> {
  const structure = new Map<string, DocEntry[]>();

  docs.forEach((doc) => {
    const parts = doc.slug.split("/");

    // Add to root
    if (parts.length === 1) {
      const root = structure.get("") || [];
      root.push(doc);
      structure.set("", root);
    }

    // Add to each folder level
    for (let i = 0; i < parts.length - 1; i++) {
      const folderPath = parts.slice(0, i + 1).join("/");
      const entries = structure.get(folderPath) || [];

      // Only add if this file belongs directly to this folder
      if (i === parts.length - 2) {
        entries.push(doc);
        structure.set(folderPath, entries);
      }
    }
  });

  return structure;
}
