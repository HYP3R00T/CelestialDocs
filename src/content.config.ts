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
const collectionsMap: Record<string, any> = {};
// Prefer explicit `CONTENT.systems`. Fall back to legacy docs dir when absent.
const systems = CONTENT.systems ?? [{ id: "docs", dir: "content/docs", defaultDocRedirect: "/docs/getting-started/introduction" }];

for (const sys of systems) {
  collectionsMap[sys.id] = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: `./${sys.dir}` }),
    schema: createSchema,
  });
}

export const collections = collectionsMap;
