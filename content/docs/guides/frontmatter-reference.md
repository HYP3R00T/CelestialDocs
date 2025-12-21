---
title: "Frontmatter Reference"
description: "Reference for all supported frontmatter fields for docs."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "Frontmatter"
---

This page documents the supported frontmatter fields you can add to pages under `content/docs/` and how they affect the site. The collection schema is defined in `src/content.config.ts` and enforces types and some optional defaults.

## Required fields

- `title` (string) — Page title shown in the page header and used as the default sidebar label.

## Common optional fields

- `description` (string) — Short summary shown in meta tags and sometimes on listing pages.
- `draft` (boolean) — Mark a page as a draft while authoring. Treat drafts as not ready for publication; how you handle drafts in CI or publishing is up to your workflow.
- `category` (string) — Optional category label you can use for grouping or filtering.
- `tags` (string[]) — Array of tags to help categorize or filter pages (e.g., `tags: ["cli","guides"]`).

## Media

- `cover` (image) — Optional cover image. You can reference images placed in `public/` (e.g., `/images/my-cover.png`) or a path in your repository. The collection schema validates image values where possible.
- `coverAlt` (string) — Alt text for the cover image (important for accessibility).

Notes:
- For simple usage, place images in `public/images/` and reference them with their absolute path (e.g., `/images/guide-cover.jpg`).
- For advanced usage you can keep image assets under `src/assets/` and import them from pages; consult the Developer docs if you need explicit examples.

## Navigation controls (important for content authors)

These fields control how your page appears in the sidebar and how it interacts with the `SIDEBAR_NAVIGATION` configuration in `data/config.ts`.

- `navLabel` (string) — Override the label shown in the sidebar for this page. If not provided, the `title` is used.
- `navIcon` (string) — Optional icon name or an emoji to show beside the sidebar entry. Two options:
  - Emoji: use an emoji (e.g., `navIcon: "📚"`).
  - Icon file: place an SVG in `src/assets/icons/` named `myicon.svg` and set `navIcon: "myicon"` (the site will use the SVG if present, otherwise it falls back to a default document icon).
- `navHidden` (boolean) — If `true`, the page will be hidden from the sidebar but remains accessible by URL. Use this for utility pages or internal notes.

Behavior and precedence:
- The navigation is filesystem-driven by default (pages are discovered from `content/docs/`). If you add manual entries in `data/config.ts` (`SIDEBAR_NAVIGATION`), manual entries take precedence for placement.
- Use `navLabel` when you want a different short label in the sidebar than the page title.

## Example frontmatter

```yaml
---
title: "My Guide"
description: "A short summary of this guide."
draft: false
category: "Guides"
tags: ["getting-started","example"]
cover: "/images/guides/my-cover.jpg"
coverAlt: "Illustration showing guide flow"
navLabel: "Quick Guide"
navIcon: "📚"
navHidden: false
---
```

## Best practices & tips

- Keep `title` concise and descriptive—this is shown in the page header and in the sidebar (unless overridden).
- Use `description` for short summaries that help readers decide whether to read the page.
- Prefer simple `.md` files for most content; only use `.mdx` when you need interactive components.
- Use `navHidden` for pages that should be accessible but not shown in the public sidebar (e.g., internal notes or in-progress content).
- For icons, emoji are the simplest option; add custom SVGs to `src/assets/icons/` when you need a branded icon.

If you need help with advanced frontmatter (images, custom types, or collection schema changes), see the Developer docs under "Content Collections".
