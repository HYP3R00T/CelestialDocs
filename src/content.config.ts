import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CONTENT } from "@data/config";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: `./${CONTENT.dir}` }),
  schema: ({ image }) =>
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
    }),
});


export const collections = { docs };
