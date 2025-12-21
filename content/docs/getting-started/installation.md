---
title: "Installation"
description: "Fork, clone, and run the site locally (recommended workflow)."
navLabel: "Installation"
---

This project assumes a basic development environment with Node.js. The recommended, supported workflow for end users is:

1. Fork this repository on GitHub (use the Fork button).
2. Clone your fork locally and change into the project directory:

```bash
git clone https://github.com/YOUR_USERNAME/CelestialDocs.git
cd CelestialDocs
```

3. Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Notes and tips:

- Node.js 18+ is recommended. If you don't have `pnpm`, install it (`npm i -g pnpm`) or use it from npx if needed.
- The development server supports live reload — save changes to files in `content/docs/` and the site will update automatically.
- Keep your work on a feature branch and open a pull request against your fork when ready to merge.

If you need CI or deployment help, see the Reference section for common build commands (`pnpm build`, `pnpm preview`).
