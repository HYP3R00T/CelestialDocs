import { defineCollection, z } from "astro:content";
import { SITE } from "config";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().default(SITE.author),
    pubDatetime: z.date().optional(),
    modDatetime: z.date().optional().nullable(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  docs,
};
