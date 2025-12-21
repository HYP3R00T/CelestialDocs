import type { DocEntry, ProcessedEntry } from "./types";

export function buildRootEntries(
  filesystemStructure: Map<string, DocEntry[]>,
  slugs: Set<string>,
): ProcessedEntry[] {
  const rootDocs = filesystemStructure.get("") ?? [];

  const rootEntries = rootDocs
    .filter((doc) => !doc.data.navHidden && doc.slug !== "index" && !slugs.has(doc.slug))
    .map((doc) => ({
      slug: doc.slug,
      label: doc.data.navLabel || doc.data.title || doc.slug,
      icon: doc.data.navIcon,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  rootEntries.forEach((entry) => slugs.add(entry.slug));
  return rootEntries;
}
