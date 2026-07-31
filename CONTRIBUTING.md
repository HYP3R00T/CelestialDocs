# Contributing to CelestialDocs

Thank you for helping improve CelestialDocs. Keep contributions focused, explain the outcome they deliver, and verify the behavior they change.

## Before starting

Search existing issues and pull requests first.

- Use the bug form for reproducible incorrect behavior.
- Use the feature form for new user-facing capability.
- Use the maintenance form for refactoring, tooling, dependencies, documentation infrastructure, or repository workflow.
- Discuss substantial work in an issue before implementation.
- Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).

An issue is ready for implementation when it has one clear outcome, relevant context and constraints, testable acceptance criteria, a verification plan, explicit dependencies, and explicit non-goals.

An issue must be added to the CelestialDocs Project and placed in `Backlog` before refinement. Approval does not guarantee that every proposed implementation will be merged.

## Refine and deliver issues with a coding agent

Trusted checkouts include two manually invoked Agent Skills-compatible skills. Reload project skills in your client after a checkout gains or changes a skill.

Refine one backlog issue and move it to `Ready`:

```text
refine-issue https://github.com/HYP3R00T/CelestialDocs/issues/<number>
```

If a material decision remains, the skill leaves the issue in `Backlog` and asks for that decision. It does not implement work or create related issues.

Deliver one approved `Ready` issue to a pull request:

```text
issue-to-pr https://github.com/HYP3R00T/CelestialDocs/issues/<number>
```

The delivery skill creates or resumes an isolated worktree, implements and verifies the accepted issue, and stops with the Project item in `In Review`. It never merges, enables auto-merge, publishes a release, marks the issue `Done`, or removes the worktree.

Each invocation authorizes only its named lifecycle step. Review and merge the pull request manually.

## Set up the project

CelestialDocs requires Node.js 22.12 or newer, pnpm, and the tools declared in `mise.toml`.

```sh
mise install
pnpm install --frozen-lockfile
prek install --hook-type pre-commit --overwrite
prek install --hook-type commit-msg --overwrite
```

## Create a branch

Create one branch from the latest `origin/main` for each accepted issue:

```sh
git fetch origin
git switch -c issue-<number>-<short-description> origin/main
```

Use an isolated worktree when another task or uncommitted work occupies the main checkout. Never overwrite or clean unrelated work.

## Make a focused change

- Deliver the smallest cohesive outcome satisfying the issue.
- Keep unrelated refactoring and formatting out of the pull request.
- Add focused tests where the repository has an applicable test surface.
- Verify failure and fallback behavior affected by the change.
- Preserve accessibility, responsive layouts, dark mode, and reduced-motion behavior.
- Update user or contributor documentation when behavior or workflow changes.
- Do not commit credentials, `.env`, private content, personal data, caches, `dist/`, or generated `.astro/` output.

If implementation reveals a materially different requirement, stop and refine or split the issue before expanding the change.

## Verify the change

Run focused checks while developing, then run the full gate before requesting review:

```sh
pnpm validate
pnpm build
prek run --all-files
```

Exercise affected browser-visible behavior on the real site when applicable. Report unavailable browsers, platforms, or manual checks as unverified rather than passing.

## Commit and open a pull request

Use Conventional Commits:

```text
<type>(<optional-scope>): <description>
```

Complete the pull-request template. Link the accepted issue and use `Closes #<number>` only when the pull request fully resolves it. Keep acceptance evidence and verification results current after every push.

The default branch requires a pull request, current `quality` success, linear history, and resolved review conversations. Another person's approval is not assumed for this solo-maintained repository, but merge remains an explicit human action.

After merge, verify that the reviewed and checked head was integrated, close the resolved issue, update its Project status to `Done`, and preserve dirty worktrees or unpublished branches.

## Code of Conduct

Participation is governed by the [Code of Conduct](.github/CODE_OF_CONDUCT.md).
