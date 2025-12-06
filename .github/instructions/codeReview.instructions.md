# Code Review Instructions

The goal of code review is to ensure high-quality, maintainable, accessible, and secure code. Use the following checklist to review contributions.

## What to Look For

### Project Hygiene & Tooling

- Uses **pnpm** consistently (`pnpm-lock.yaml` committed; PRs avoid lockfile churn).
- Scripts exist and run cleanly: `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm typecheck`, `pnpm test`, `pnpm lint`, `pnpm format`.
- Lint/format enforced:
  - **ESLint** with `@typescript-eslint`, `eslint-plugin-astro`, and `eslint-plugin-import`.
  - **Prettier** with `prettier-plugin-astro` and Tailwind class sorter (e.g. `prettier-plugin-tailwindcss`).
  - Optional: `lint-staged` + `husky`/`lefthook` for pre-commit.

- TypeScript `strict` mode enabled; no `any` without justification; `unknown` preferred over `any`.
- No unused deps; dev/prod deps correctly split; `pnpm up -L` and `pnpm audit` issues addressed or justified.

### Code Style & Structure

- Astro file layout follows conventions: `src/pages`, `src/layouts`, `src/components`, `src/content`, `public/`.
- Components are small, single-purpose, and reusable; avoid deep prop drilling—prefer composition.
- Imports grouped and ordered: Node built-ins → third-party → internal aliases (use `tsconfig` path aliases).
- No duplicated logic; utilities extracted to `src/lib`/`src/utils`.
- Avoid magic numbers/strings; centralize constants and feature flags.
- **No** direct DOM mutation when a framework island is used—keep state within the island.

### Type Safety

- All `.astro` frontmatter and `.ts/.tsx` files typed; props/interfaces exported where reused.
- Enable `astro/tsconfigs/strict` (or equivalent) and fix all `tsc` errors.
- API and CMS responses validated and typed (prefer **Zod** schemas; derive `z.infer<>` types).
- Narrow `null/undefined` correctly; prefer explicit unions and `readonly` where applicable.
- Use `never` exhaustiveness checks in switch statements for variant logic.

### Data & Content Validation

- **Content Collections** use schemas (Zod) in `src/content/config.ts` for Markdown/MDX.
- Frontmatter fields validated; optional vs required clear; date/string/enum constraints enforced.
- External data (fetches, webhooks) validated against runtime schemas before use.
- Markdown rendering sanitizes HTML; avoid unsafe `set:html` unless sanitized.

### Astro Patterns & Islands

- Prefer server-rendered components; hydrate only when interactivity is required.
- Choose the lightest hydration directive:
  - `client:idle | client:visible | client:media` preferred over `client:load`.

- Avoid large framework islands for trivial UI; use vanilla/`<script>` where appropriate.
- No global side-effects in islands; cleanup event listeners/timeouts.

### Tailwind CSS

- Tailwind configured (`tailwind.config.{js,ts}`, `postcss.config.cjs`) with project paths correct.
- Class lists are readable and sorted (plugin or Prettier).
- Prefer utility classes; use `@apply` sparingly in component CSS for repeating patterns.
- Responsive, dark mode, and state variants used correctly (`sm:`, `md:`, `lg:`, `xl:`, `dark:`, `aria-*`, `data-*`).
- No dead global CSS; avoid leaking styles from `.astro` `<style>` blocks (use `is:global` only when needed).

### Accessibility (A11y)

- Semantic HTML: landmarks (`header`, `main`, `nav`, `footer`), headings in order, lists for lists.
- Interactive elements are native (`button`, `a`) or have correct roles, labels, and keyboard behavior.
- Sufficient color contrast; focus states visible; `:focus-visible` used appropriately.
- Forms: associated `<label>`s, `aria-describedby` for errors/hints; no placeholder-only labeling.
- Motion/animation respects `prefers-reduced-motion`.
- Images have descriptive `alt`; decorative images `alt=""`.

### Performance

- Images use `astro:assets` `<Image />` with width/height, `srcset`, and lazy loading where relevant.
- Avoid `client:load` unless necessary; split large islands; code-split big routes.
- Fonts: self-hosted where possible; `font-display: swap`; minimal weights/axes.
- No unbounded third-party scripts; load with `async`, `defer`, or via consent gate; sandbox iframes.
- Cache headers and ETags configured via adapter or platform config; static assets fingerprinted.
- Guard against layout shifts (set sizes/aspect ratios).
- Consider bundle analysis before/after large changes (Vite plugin or build stat output).

### SEO & Metadata

- `<head>` managed via layouts; consistent titles, descriptions, canonical URLs.
- Open Graph/Twitter Card tags present; per-page overrides allowed.
- `robots.txt`, `sitemap.xml`, and (if applicable) `rss.xml` generated and accurate.
- Avoid duplicate content; handle trailing slash behavior consistently (`trailingSlash` setting).

### Routing & Pages

- Clear route structure; dynamic routes typed and validated (`params`).
- 404/500 pages implemented; error boundaries or adapter-level fallbacks configured.
- Redirects handled in adapter/platform config where necessary.

### Error Handling & Observability

- Network calls have error paths; UI shows user-friendly states (loading/empty/error).
- Avoid silent failures in front-end logic; surface errors in dev tools.
- Optional: Client error reporting (e.g., Sentry) behind environment flag; avoid PII.

### Security

- Sanitize any user-generated content; never render raw HTML without sanitization.
- Avoid inline event handlers with unsanitized inputs; no eval/dynamic code execution.
- Strict CSP recommended on SSR/host (script/style nonces or hashes); limit `unsafe-inline`.
- Validate and constrain file uploads and external URLs (if any).
- Keep dependencies updated; address known vulns or document mitigations.

## Review Suggestions

- Be specific and constructive; cite files/lines and offer concise rationale.
- Prefer inline suggestions (small, safe diffs) over broad rewrites.
- Summarize overall quality, risks, and any blocking issues.
- Propose incremental, actionable improvements; link to docs or prior patterns in the repo.
- Celebrate good patterns to reinforce them.
