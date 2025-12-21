import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/docs" }),
  schema: ({ image }) =>
    z.object({
      // ===== Basic Metadata =====
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      featured: z.boolean().optional().default(false),
      draft: z.boolean().optional().default(false),
      category: z.string().optional(),
      tags: z.array(z.string()).default([]),

      // ===== Media =====
      cover: image().optional(),
      coverAlt: z.string().optional(),

      // ===== Navigation Overrides =====
      /**
       * Override the label in sidebar navigation.
       * If not provided, the system will use the frontmatter `title`.
       */
      navLabel: z.string().optional(),

      /**
       * Optional icon name to show beside this page entry.
       */
      navIcon: z.string().optional(),

      /**
       * Hide this page from navigation while keeping its URL valid.
       * (Useful for utility pages, partial chapters, or internal docs)
       */
      navHidden: z.boolean().optional().default(false),

    }),
});


export const collections = { docs };
