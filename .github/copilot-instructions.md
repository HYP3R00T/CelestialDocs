# Project Coding Standards

## Naming Conventions

- Use `camelCase` for variables, functions, and methods in TypeScript/JavaScript.
- Use `PascalCase` for React/JSX components, Astro components, and classes.
- Use `SCREAMING_SNAKE_CASE` for constants.
- File and folder names:
  - Components: `PascalCase.astro` / `PascalCase.tsx`
  - Utilities: `camelCase.ts`
  - Styles: `kebab-case.css`

- Prefix unused or private variables with an underscore (`_`).

## Type Safety

- All `.astro`, `.ts`, and `.tsx` files must use TypeScript with **strict mode** enabled.
- Prefer `unknown` over `any`. Avoid `any` unless unavoidable.
- Use `T | null` or `T | undefined` explicitly for nullable types.
- Narrow types aggressively:
  - Use `enum`, `as const`, or `type Literal = 'x' | 'y'`.
  - Use discriminated unions for variant handling.

- Validate runtime data with **Zod schemas** or Astro Content Collections.

## Component & Project Structure

- Keep components **small, reusable, and single-purpose**.
- Organize by function:
  - `src/components/` → shared UI elements
  - `src/layouts/` → page-level structure
  - `src/pages/` → route entry points
  - `src/lib/` → helpers/utilities
  - `content/` → content collections

- Prefer server-rendered Astro components. Use hydrated islands (`client:*`) only where interactivity is necessary.
- For hydration:
  - Prefer `client:idle`, `client:visible`, or `client:media` over `client:load`.

## Tailwind CSS Guidelines

- Use Tailwind utility classes for most styling.
- Class order should be **auto-sorted** by Prettier with `prettier-plugin-tailwindcss`.
- Use `@apply` only for **repeated patterns** in component-scoped CSS.
- Use responsive prefixes (`sm:`, `md:`, `lg:`, etc.) and dark mode (`dark:`) consistently.
- Prefer semantic class usage (`prose`, `btn`, `card`) when using plugin-based abstractions.

## Error Handling & Logging

- Handle async errors gracefully (fetch, API calls, dynamic imports).
- Provide **user-friendly fallback UI** for errors (404, 500, network issues).
- Do not log sensitive data to the console.
- Avoid swallowing errors silently; surface actionable messages during development.

## Formatting and Style

- Format code with **Prettier** (with Astro + Tailwind plugins).
- Lint with **ESLint** (with `eslint-plugin-astro`, `@typescript-eslint`).
- Organize imports:
  1. Node.js built-ins
  2. Third-party libraries
  3. Project aliases (e.g., `@/components`)

- Keep functions and components small and readable; avoid deep nesting.

## Accessibility (A11y)

- Use semantic HTML elements (`button`, `nav`, `main`, `header`, etc.).
- Ensure proper keyboard navigation and focus management.
- Provide descriptive `alt` text for images (or `alt=""` for decorative).
- Respect `prefers-reduced-motion` for animations.
- Maintain color contrast that meets WCAG 2.1 AA.
