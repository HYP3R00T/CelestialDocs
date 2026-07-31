# AGENTS.md

Instructions for coding agents working in this repository.

## Project overview

- Repository: `HYP3R00T/CelestialDocs`
- Stack: Astro, TypeScript, React, Tailwind CSS, pnpm, Biome, Rumdl, and Prek
- Default branch: `main`

## Setup

```sh
mise install
pnpm install --frozen-lockfile
prek install --hook-type pre-commit --overwrite
prek install --hook-type commit-msg --overwrite
```

The Mise enter hook runs `scripts/enter_project.sh` and configures the local Git hooks.

## Important paths

| Concern | Paths |
|---|---|
| Site configuration | `astro.config.mjs`, `data/config.ts`, `src/content.config.ts` |
| Content | `content/` |
| Components and layouts | `src/components/`, `src/layouts/` |
| Pages and integrations | `src/pages/`, `src/integrations/` |
| Styling | `src/styles/` |
| CI | `.github/workflows/` |

## Commands

```sh
pnpm validate       # Biome and TypeScript checks
pnpm build          # Production build
pnpm check:fix      # Apply Biome fixes
pnpm dev            # Local development server
prek run --all-files
```

Run `pnpm validate`, `pnpm build`, and `prek run --all-files` before requesting review.

## Expectations

- Keep changes focused on one accepted issue.
- Use strict TypeScript and avoid `any` unless unavoidable.
- Prefer Astro components and server rendering; hydrate React components only when interaction requires it.
- Preserve accessibility, responsive behavior, dark mode, and reduced-motion support.
- Update content or contributor documentation when behavior, configuration, or workflow changes.
- Do not hand-edit generated `dist/` or `.astro/` output.
- Use Conventional Commits and `issue-<number>-<slug>` branches for planned work.
- Changes to `main` require a pull request, current `quality` success, and resolved review conversations. Merge remains a human action.
- Never commit credentials, `.env`, private content, personal data, caches, or generated build output.

## Agent workflow

An issue must be tracked in the Project's `Backlog` status before refinement. Use the manually invoked `refine-issue` skill to turn one backlog issue into a complete `Ready` issue. Invoke `issue-to-pr` separately to deliver one `Ready` issue through `In Progress` to a pull request in `In Review`.

Neither skill authorizes merge, auto-merge, issue closure, release publication, or destructive cleanup. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the complete lifecycle.

Prefer minimal diffs. Do not refactor adjacent code, weaken checks, or overwrite unrelated local work. If a requirement, dependency, or GitHub state is ambiguous, stop and report the smallest decision needed.
