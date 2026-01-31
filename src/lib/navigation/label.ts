import type { DocEntry } from "./types";

/**
 * Convert the last segment of a slug into a human-friendly label.
 * Examples:
 *  - "getting-started/introduction" -> "Introduction"
 *  - "examples/grouping-and-ordering" -> "Grouping And Ordering"
 */
export function formatSlugToLabel(slug: string): string {
    const last = String(slug).split("/").pop() || slug;
    // Replace dashes/underscores with spaces and normalize spacing
    const spaced = last.replace(/[-_]+/g, " ").trim();
    // Title-case each word
    return spaced
        .split(/\s+/)
        .map((w) => (w.length === 0 ? w : w[0].toUpperCase() + w.slice(1)))
        .join(" ");
}

/**
 * Derive the navigation label for a doc with the following precedence:
 * 1. doc.data.navLabel
 * 2. configuredLabel (if provided)
 * 3. file name (derived from slug)
 */
export function deriveLabel(doc: DocEntry, configuredLabel?: string) {
    return doc.data.navLabel || configuredLabel || formatSlugToLabel(doc.slug || doc.id);
}
