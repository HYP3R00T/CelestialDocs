---
title: "Config Modifications"
description: "How to edit `data/config.ts` to customize behavior for end users."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "Config Modifications"
---

Key top-level configuration objects in `data/config.ts`:

- `SITE` — high-level site metadata (title, description, defaultDocRedirect)
- `LOCALE` — language and locale options
- `HEADER_FEATURES` — toggles for header UI (GitHub button, layout toggle)
- `HEADER_NAV_ITEMS` — items to show in header navigation
- `HEADER_SOCIAL_LINKS` — social links shown in the header
- `SIDEBAR_NAVIGATION` — core places to configure groups, entries, and ordering
- `TABLE_OF_CONTENTS` — TOC settings (enableExtra etc.)

Notes for editors:
- Only `SIDEBAR_NAVIGATION` and `TABLE_OF_CONTENTS` are commonly changed by content authors.
- If you change `defaultDocRedirect`, it will change where the `/docs` link sends users.

<!-- TODO: provide step-by-step example: change a group label and add an entry -->
