---
title: "Types & Config"
description: "High-level reference for types and configuration."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "Types & Config"
---

This page maps the runtime configuration options in `data/config.ts` to the TypeScript types in `src/lib/types.ts` and `src/lib/docs/types.ts`. It also shows how to safely extend your config with new fields and add runtime validation if desired.

## Quick links

- Type definitions: `src/lib/types.ts` and `src/lib/docs/types.ts`
- Primary runtime config: `data/config.ts`

---

## Important types & where they map

- `SiteConfig` (`src/lib/types.ts`) — maps to the exported `SITE` object in `data/config.ts`.
  - Fields: `website`, `author`, `repo`, `branch?`, `title`, `description`, `image`, `imageAlt?`, `twitterHandle?`, `starCountThreshold?`, `enableLayoutWidthToggle?`, `enableGitHubButton?`, `defaultDocRedirect?`.

- `HeaderFeatures` — maps to `HEADER_FEATURES` (`starCountThreshold`, `enableLayoutWidthToggle`, `enableGitHubButton`).

- `NavItem` and `SocialObjects` — map to `HEADER_NAV_ITEMS` and `HEADER_SOCIAL_LINKS` respectively.

- `Sidebar` (`src/lib/docs/types.ts`) — maps to `SIDEBAR_NAVIGATION` and represents groups, entries, and nested groups used by the navigation builder.

- `TableOfContentsConfig` — maps to `TABLE_OF_CONTENTS` (currently `enableExtra` flag).

If you need exact field signatures, see the type files listed above. Keep these typed objects in sync when adding, removing, or renaming fields.

---

## Example: using types in code

If you import the config in a TypeScript file you get autocompletion and type checking:

```ts
import { SITE, SIDEBAR_NAVIGATION } from '@data/config';

function getDefaultRedirect(): string {
  return SITE.defaultDocRedirect || '/docs';
}

// ensure the sidebar structure is valid before passing to the builder
import type { Sidebar } from '@/lib/docs/types';
const nav: Sidebar = SIDEBAR_NAVIGATION; // type-checked
```

---

## Extending the config safely

If you want to add a new top-level setting (for example, `enableSearch: boolean`), keep these steps in mind:

1. Add the runtime value to `data/config.ts`:

```ts
export const FEATURE_FLAGS = {
  enableSearch: true,
};
```

2. Add a type to `src/lib/types.ts` (or an existing related type):

```ts
export interface FeatureFlags {
  enableSearch: boolean;
}
```

3. Export and use the type where needed in the app to get type checking:

```ts
export const FEATURE_FLAGS: FeatureFlags = { enableSearch: true };
```

4. Optional: add runtime validation to fail fast in non-TS contexts (recommended for shared or user-editable config). Example using Zod:

```ts
import { z } from 'zod';

const FeatureFlagsSchema = z.object({ enableSearch: z.boolean().default(false) });
const validated = FeatureFlagsSchema.parse(FEATURE_FLAGS);
```

---

## Runtime validation & CI checks

- Adding small runtime validation steps (using Zod or a lightweight schema) helps avoid silent misconfigurations in non-TypeScript consumers or at runtime in the server environment.
- Consider adding a CI check that imports `data/config.ts` and validates it against a Zod schema to prevent invalid changes from landing in the main branch.

---

## Best practices

- Prefer adding optional fields with sensible defaults so existing sites don't break.
- Keep the config surface small and focused — centralize global settings here and keep per-page concerns in frontmatter.
- Document new config fields in the Config Reference & Developer docs when you add them.

If you'd like, I can add a small TypeScript example that demonstrates runtime validation during the dev server start and a sample CI check using Node to run validation.
