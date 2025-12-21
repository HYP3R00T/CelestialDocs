---
title: "Contributing"
description: "How to contribute documentation and follow this project's doc standards."
pubDatetime: 2025-12-21T00:00:00Z
navLabel: "Contributing"
---

Contributions are welcome! Below are clear steps and a checklist to help content authors add or improve docs with minimal friction.

## Quick workflow (recommended)

1. **Fork** the repository on GitHub and clone your fork locally.
2. Create a feature branch: `git checkout -b docs/your-topic`.
3. Add or edit files under `content/docs/`. Keep changes focused and small.
4. Run the dev server locally and verify: `pnpm install && pnpm dev`.
5. Commit your changes, push the branch to your fork, and open a Pull Request (PR) against the `main` branch of this repo.

## Contribution checklist (use when opening a PR)

- [ ] The docs page has valid frontmatter (`title`, `pubDatetime` at minimum).
- [ ] Headings are semantic (H1 for page title, H2/H3 for sections) to make the TOC useful.
- [ ] Images are added to `public/images/` and referenced by absolute path, and `coverAlt` is provided when using `cover`.
- [ ] If relevant, `navLabel` or `navIcon` frontmatter is set to control sidebar presentation.
- [ ] If the page is a draft or internal note, set `draft: true` or `navHidden: true` as appropriate (see Drafts & Visibility).
- [ ] The PR description explains the change and includes a link to the docs preview (if applicable).

## Frontmatter template

Use this template for new pages:

```yaml
---
title: "Short, descriptive title"
description: "One-line summary"
pubDatetime: 2025-12-21T00:00:00Z
# Optional:
# modDatetime: 2025-12-22T00:00:00Z
# tags: ["example","guide"]
# navLabel: "Short label"
# navIcon: "📚"
# navHidden: false
# draft: false
---
```

## Writing & style guidelines

- Keep paragraphs short and focused (2–4 sentences). Use lists and code blocks where it helps readability.
- Prefer plain Markdown (`.md`) for most pages. Use MDX (`.mdx`) only when you need interactive components or custom React work.
- Use examples and copyable snippets for commands and configuration.
- Add links to related docs and tag pages with `tags` where relevant.

## PR review & acceptance criteria

- Editors should check for clarity, accuracy, and whether the content follows the frontmatter rules.
- Verify that the page renders correctly locally and that the sidebar placement is correct.
- If the PR changes `data/config.ts`, reviewers should confirm the config is valid and does not introduce dead/manual slugs.

## Drafts & visibility

- Use `draft: true` to indicate a page is a work-in-progress — note that drafts are still present in the repo and served by the source endpoint unless you keep them in a private branch.
- Use `navHidden: true` to keep a page accessible by URL but hidden from the sidebar.

## Troubleshooting common PR issues

- Missing page in sidebar after merge: confirm slug and frontmatter and check for `navHidden`.
- Broken images: ensure images are committed to `public/images/` and referenced with an absolute path.
- Navigation warnings about missing slugs: verify the entry slug in `data/config.ts` matches the actual file path (no extension).

## How to preview your changes in a PR

- Use a branch deploy or container-based preview if your CI supports it. Alternatively, reviewers can run `pnpm dev` locally and check the branch tip.

## Where to ask for help

- Open an issue on the repo for larger changes or unclear behavior.
- Add a comment on the PR tagging the maintainer or team for a timely review.

If you'd like, I can add a “docs template” page in `content/docs/_templates/` for contributors, or set up a PR checklist automation (GitHub Actions) to validate frontmatter and required fields.
