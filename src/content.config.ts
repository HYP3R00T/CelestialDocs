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
      // `hide_breadcrumbs` — opt-out flag to hide breadcrumbs on an individual page
      hide_breadcrumbs: z.boolean().optional().default(false),

      /**
       * `authors` — optional list of GitHub usernames (string handles) for the page.
       * Example: ['octocat', 'another-user']
       */
      authors: z.array(z.string()).optional().default([]),
    }),
});


export const collections = { docs };
