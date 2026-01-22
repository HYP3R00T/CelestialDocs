import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CONTENT } from "@data/config";

// Reusable schema for all content systems
const createSchema = ({ image }: { image?: any } = {}) =>
    z.object({
        // ===== Basic Metadata =====
        title: z.string(),
        description: z.string(),
        draft: z.boolean().optional().default(false),
        authors: z.array(z.string()).optional().default([]),

        // ===== Navigation Overrides =====
        navLabel: z.string().optional(),
        navIcon: z.string().optional(),
        navHidden: z.boolean().optional().default(false),
        hide_breadcrumbs: z.boolean().optional().default(false),
    });

// Build collection definitions dynamically from `CONTENT.systems`.
// Each collection is completely separate to avoid ID conflicts
const collectionsMap: Record<string, any> = {};

for (const sys of CONTENT.systems) {
    collectionsMap[sys.id] = defineCollection({
        loader: glob({
            pattern: "**/*.{md,mdx}",
            base: `./${sys.dir}`
        }),
        schema: createSchema,
    });
}

export const collections = collectionsMap;
