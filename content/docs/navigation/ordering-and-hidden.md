---
title: "Ordering and Hidden Pages"
description: "How `navOrder` and `navHidden` affect navigation."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "Order & Hidden"
---

- `navOrder` (frontmatter) provides an explicit ordering hint within a group when mixed with manual entries.
- `navHidden` (frontmatter) prevents a page from appearing in the sidebar while keeping the page accessible by URL.

Behavior notes:
- Manual entries in `SIDEBAR_NAVIGATION` take precedence; if an entry's `hidden` is set or page has `navHidden`, it will not show.
- Auto-generated entries are appended in alpha order unless `navOrder` is used to adjust ordering.

<!-- TODO: add visual examples -->
