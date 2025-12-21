---
title: "MDX & Components"
description: "For developers: how to add MDX components and expose them to docs."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "MDX & Components"
---

This guide explains how to add and use MDX components in documentation pages, how to register components for rendering, and recommended best practices to keep docs fast and maintainable.

## MDX basics

- `.md` files are plain Markdown. `.mdx` files allow embedding JSX (React) components directly in content.
- The collection loader accepts both `.md` and `.mdx` and the renderer (`render(doc)`) will return a `Content` component that accepts a `components` mapping to override how elements render (e.g., custom `img` or `a`).

## Common built-ins in this template

- `MdxImage` (`src/components/docs/markdown/MdxImage.astro`) — a safe image wrapper that handles local and remote images and provides consistent classes/behaviour.
- `MdxLink` (`src/components/docs/markdown/MdxLink.astro`) — enhanced link handling for external links and styling.

The docs layout already wires these in the page renderer:

```ts
const components = {
  img: MdxImage,
  a: MdxLink,
};
```

Add more components to this map to make them available to all MDX content rendered via `DocsLayout`.

## Adding a custom MDX component

1. Create a component (React or Astro). Example React component (TypeScript):

```tsx
// src/components/docs/ExampleAlert.tsx
import React from 'react';
export default function ExampleAlert({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-yellow-50 p-4 border border-yellow-200">
      <strong className="block font-semibold">Note</strong>
      <div>{children}</div>
    </div>
  );
}
```

2. Import and add to the renderer in `src/pages/docs/[...slug].astro` (where `render(doc)` is used):

```ts
import ExampleAlert from '@/components/docs/ExampleAlert';
const components = { img: MdxImage, a: MdxLink, ExampleAlert };
```

3. Use the component in a `.mdx` file:

```mdx
---
title: "Tips"
pubDatetime: 2025-12-21T00:00:00Z
---

<ExampleAlert>
  This content will render inside the alert component.
</ExampleAlert>
```

Alternative: import components directly in the `.mdx` file:

```mdx
import ExampleAlert from '@/components/docs/ExampleAlert';

<ExampleAlert>Inline import example</ExampleAlert>
```

This approach scopes the component to the page and avoids adding it to the global `components` map.

## Hydration and client directives

If your component needs client-side behavior, use Astro's client directives to hydrate the component only when needed:

- `client:load` — hydrate as soon as possible on the client.
- `client:idle` — hydrate when the browser is idle.
- `client:visible` — hydrate when the component becomes visible.

Example (React component hydrated on idle):

```mdx
import Interactive from '@/components/interactive/Interactive.tsx'

<Interactive client:idle />
```

Best practices:
- Prefer `client:idle` or `client:visible` when possible to reduce initial bundle work.
- Keep interactive components focused and small; avoid placing large UI libraries inside MDX if you can extract into a lightweight custom component.

## SSR considerations

- MDX is server-side rendered by Astro. Ensure components used in MDX either work in SSR or are hydrated on the client using `client:*` directives.
- Avoid accessing `window` or `document` in top-level module code of components — use client directives or runtime guards (e.g., `if (typeof window !== 'undefined')`).

## TypeScript & types

- For React components, prefer typing props explicitly and exporting default components. This helps MDX authors discover props via editor tooling.
- If you want to have shared types or helper props available in MDX, consider adding a small TypeScript types file and importing it in component modules.

## Testing & examples

- Test your MDX pages locally using `pnpm dev` and verify that components render correctly both in SSR and when hydrated.
- Add example `.mdx` pages under `content/docs/examples/` to demonstrate component usage for other contributors.

## Security and content hygiene

- Treat MDX content like any user-facing content — avoid embedding secrets or runtime credentials in MDX files.
- Validate or sanitize any user-provided data that may be rendered into MDX-driven components (e.g., if you accept remote content or embed HTML strings).

## When to prefer `.md` over `.mdx`

- Use `.md` for most documentation pages — it's simpler and safer for non-developers.
- Use `.mdx` only when you need to embed interactive or specialized components that cannot be expressed as pure Markdown.

If you'd like, I can add a small example page `content/docs/examples/mdx-component-example.mdx` demonstrating a hydrated component with `client:visible` and explain trade-offs in the example content.
