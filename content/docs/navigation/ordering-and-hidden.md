---
title: "Ordering and Hidden Pages"
description: "How `navHidden` affects navigation."
navLabel: "Order & Hidden"
---

- `navHidden` (frontmatter) prevents a page from appearing in the sidebar while keeping the page accessible by URL.

Behavior notes:
- Manual entries in `SIDEBAR_NAVIGATION` take precedence; if an entry's `hidden` is set or page has `navHidden`, it will not show.
- Auto-generated entries are appended in alphabetical order by label.

<!-- TODO: add visual examples -->
