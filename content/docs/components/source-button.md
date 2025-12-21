---
title: "Source Button (component)"
description: "User-facing notes for the Source Button component."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "Source Button"
---

A small utility in the docs header allows viewing or downloading the raw markdown/MDX source for the current page — useful for copying examples, inspecting frontmatter, or reviewing the original content.

## Where the button appears

- The button is rendered by `src/components/docs/SourceButton.astro` and included in the page header in `src/layouts/DocsLayout.astro`.
- The button label reads **"View as Markdown"** and opens a new tab to `/docs/<slug>.md` (the server route serves `.mdx` or `.md` as appropriate).

## How it works (implementation details)

- The link targets `/docs/<slug>.md`, which is handled by `src/pages/docs/[...slug].md.ts`.
- That route attempts to read the corresponding `.mdx` file first and falls back to `.md`. It then returns the raw file contents with headers:
  - `Content-Type: text/markdown; charset=utf-8`
  - `Content-Disposition: inline; filename="<slug>.md"`
- Because the source is served as plain markdown, you can open it in the browser, copy the content, or save it locally.

## What to expect

- If the page was authored as `.mdx`, the route still returns the original `.mdx` source — the `.md` extension in the URL is a stable endpoint.
- If the source file is missing, the route returns a `404` response.

## Security & privacy notes

- The source endpoint serves raw files directly from the `content/docs/` folder. **If you have pages that contain sensitive or internal information**, do not commit them to branches that are publicly accessible — use `navHidden: true` or keep them in private branches until ready.
- Marking a page as a draft (`draft: true` in frontmatter) does not automatically prevent the source endpoint from serving the file while it's present on the filesystem. If you need to prevent public access to drafts, consider filtering them at an API level or keeping them in private branches until publishing.

## Customization

- If you prefer a different behavior (for example, allow downloads with `.md` filenames or disallow serving drafts), edit `src/pages/docs/[...slug].md.ts` to add the desired checks or headers.
- To change the button location or label, modify `src/components/docs/SourceButton.astro` or the call site in `DocsLayout.astro`.

## Example usage

- Click **View as Markdown** in the docs header to open the source in a new tab.
- Right-click the link to copy address or download the raw file.

If you want, I can add a small screenshot showing the button's location in the header or implement the draft-filtering behavior in the API route as a small patch.
