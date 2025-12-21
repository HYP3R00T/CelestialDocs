---
title: "Quick Start"
description: "Minimal steps to add content and see it on the site."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "Quick Start"
---

Follow these minimal steps to add your first documentation page and have it show up in the sidebar.

1. Create a file under `content/docs/` (e.g., `content/docs/getting-started/my-topic.md`).
2. Add required frontmatter. At minimum include `title` and `pubDatetime` (see the Frontmatter Reference for all fields):

```yaml
---
title: "My Topic"
description: "A short summary of this page"
pubDatetime: 2025-12-21T00:00:00Z
---
```

3. Add content below the frontmatter using normal Markdown syntax.
4. Save the file; the dev server will pick it up automatically. Commit and push to your fork when ready.

Optional frontmatter and tips:

- `navLabel`: override how the page appears in the sidebar.
- `navOrder`: provide an ordering hint within a group if you need custom ordering.
- `navHidden`: set to `true` to keep a page accessible via URL but hidden from the sidebar.
- `draft`: mark as `true` while working on a page; treat drafts as not-ready-for-publication (how you handle drafts in your workflow is up to your repository/CI).

How the page appears in the docs site:

- Pages are discovered from the filesystem and automatically added to groups that match their path unless you add a manual `entries` config in `data/config.ts`.
- To control placement, use `data/config.ts` (`SIDEBAR_NAVIGATION`) to add manual entries or adjust group behavior.

Next: see the Frontmatter Reference to learn every supported field and examples you can reuse.
