---
title: "Content Collections"
description: "Developer guide for `src/content.config.ts` and customizing collections."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "Content Collections"
---

This page explains how the site's content collections are defined and validated in `src/content.config.ts`, how the loader works, and how to add or change collections safely.

## Overview

Astro Content Collections let you define typed collections (e.g., `docs`, `blog`, `guides`) with a loader and a Zod schema that validates frontmatter. This template defines a `docs` collection using `defineCollection` and `glob()` as a loader.

Key concepts:
- **Loader**: tells Astro where to find files (`glob({ pattern, base })`).
- **Schema**: uses Zod to validate frontmatter and provide type safety.
- **Collections object**: exported `collections` (an object mapping names to collection definitions) that Astro uses at build time.

## Where to look

- `src/content.config.ts` — the canonical place to add/change collections and their schemas.
- `content/` — where the actual content files live (e.g., `content/docs/`).
- Use `getCollection('name')` in server code to retrieve collection entries.

## Example: the `docs` collection (what this template uses)

The `docs` collection in this template is defined with a glob loader and a Zod schema that includes common fields such as `title`, `description`, and navigation-related fields like `navLabel`/`navHidden`.

```ts
const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/docs" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean().optional().default(false),

      cover: image().optional(),
      coverAlt: z.string().optional(),

      navLabel: z.string().optional(),
      navIcon: z.string().optional(),
      navHidden: z.boolean().optional().default(false),
    }),
});

export const collections = { docs };
```

Notes:
- The `image()` helper (provided by Astro) validates image references where applicable.
- Use `.optional()` and `.default()` to keep the schema forgiving for existing content during incremental adoption.

## Adding a new collection (step-by-step)

1. **Define the collection** in `src/content.config.ts`:

```ts
const tutorials = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/tutorials" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),

      summary: z.string().optional(),
      cover: image().optional(),
    }),
});

export const collections = { docs, tutorials };
```

2. **Create the content folder**: add `content/tutorials/` and start adding files (`getting-started.md`, `advanced.md`, etc.) with matching frontmatter.

3. **Use the collection in code**: call `const tutorials = await getCollection('tutorials')` from server-side code (pages, API routes, or build scripts) to read entries.

4. **Update docs and navigation (optional)**: if you want `tutorials` to appear in the sidebar, add a top-level group in `data/config.ts` (`SIDEBAR_NAVIGATION`) or organize it under an existing group.

## Schema evolution and compatibility

- Be cautious when removing required fields — existing content without those fields will fail validation. Prefer adding optional fields first and migrate content incrementally.
- Use `.optional().nullable()` for fields that may be empty for older content.
- Use `.default()` to provide reasonable defaults and avoid breaking existing pages.

## Images & asset handling

- For simple workflows, place images in `public/images/` and reference them using absolute paths (e.g., `/images/cover.jpg`) in frontmatter.
- If you use the `image()` helper in your schema, prefer referencing assets in a supported way (Astro will validate image references at build time when possible).

## MD vs MDX

- `.md` files are plain Markdown and are simpler; `.mdx` files allow embedding React components (use only when needed).
- The loader above includes both `md` and `mdx` so either extension will be discovered.

## Testing and debugging

- Run `pnpm dev` and watch the build logs — schema validation errors will surface on build.
- Add temporary API routes or use the existing debug endpoints (e.g., `src/pages/debug/navigation.json.ts`) to inspect collection outputs and navigation results.

## Best practices

- Keep collection schemas small and additive — add new optional fields before making them required.
- Prefer human-readable frontmatter keys (`title`, `description`) to help non-developers author content.
- Add examples and templates in `content/` (e.g., `content/docs/_templates/`) to give contributors a starting point.

If you'd like, I can add a code example that demonstrates rendering a collection in a page, or add migration notes for converting an existing repository to use the `docs` collection format.
