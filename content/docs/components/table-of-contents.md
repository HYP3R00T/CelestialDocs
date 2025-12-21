---
title: "Table of Contents"
description: "How the on-page Table of Contents behaves and how to control it."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "Table of Contents"
---

The on-page Table of Contents (TOC) helps readers navigate long pages by listing headings from the current document.

## What it includes

- The TOC displays only H2 and H3 headings by design (to keep the list concise and useful).
- Headings are shown in the order they appear in the document; H3 items are indented beneath their H2 parent.
- Each TOC entry links to the heading's anchor on the page (anchors are generated from heading text using typical slug rules).

## Configuring the TOC

The global configuration object `TABLE_OF_CONTENTS` in `data/config.ts` exposes options that control TOC behavior. For example:

```ts
export const TABLE_OF_CONTENTS = {
  enableExtra: false,
}
```

- `enableExtra` (boolean) — when `true`, an additional panel area (if implemented) is shown under the TOC; this can be used for links, metadata, or promotional content (see `src/components/docs/TableOfContentsExtra.astro` for the extra panel implementation).

Notes:
- The TOC is rendered only on larger screens (desktop) to avoid consuming valuable space on mobile devices.

## Writing headings for good TOC entries

- Use H2 for major sections and H3 for subsections. Avoid using too many H3 levels — keep the TOC scannable.
- Headings should be short and descriptive so the link text is useful in a sidebar-style TOC.
- If you need a custom anchor, you can add an explicit HTML anchor above a heading (advanced use); otherwise rely on the automatic anchor generation.

## Examples

Given this content:

```md
## Installation

### Requirements

### Steps

## Usage

### Quick examples
```

The TOC will show:
- Installation
  - Requirements
  - Steps
- Usage
  - Quick examples

## Accessibility & UX

- Keep headings consistent and meaningful for readers who use assistive technologies.
- The TOC links are plain anchor links — they support keyboard navigation and screen readers.

## Troubleshooting

- No TOC shown: ensure your page has H2/H3 headings. If the page has only H1 or H4 headings, the TOC will be empty.
- Missing heading entries: the MD renderer must produce a heading slug; unusual characters may affect slug generation — prefer plain text headings.

If you'd like, I can add a small screenshot showing a page with TOC and an example of using `enableExtra` to display additional content.
