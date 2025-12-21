import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/docs" }),
  schema: ({ image }) =>
    z.object({
      // ===== Basic Metadata =====
      title: z.string(),
      description: z.string(),
      draft: z.boolean().optional().default(false),

      // ===== Navigation Overrides =====
      navLabel: z.string().optional(),
      navIcon: z.string().optional(),
      navHidden: z.boolean().optional().default(false),
    }),
});


export const collections = { docs };
