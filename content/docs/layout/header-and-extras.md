---
title: "Header & Extras"
description: "Header behavior and Table of Contents basics."
navLabel: "Header & TOC"
---

This page explains the **header features** you can control from `data/config.ts` and how they affect the site user experience.

## Header features at a glance

- **GitHub button** — an optional button that links to the configured repository. Enable it with `HEADER_FEATURES.enableGitHubButton`.
- **Layout width toggle** — a user control to switch between wide and comfortable reading widths. Enable with `HEADER_FEATURES.enableLayoutWidthToggle`.
- **Theme toggle** — a separate control in the header toggles dark/light theme (enabled by default in the template).
- **Header navigation items** — add links (e.g., `Docs`, external pages) to the header via `HEADER_NAV_ITEMS`.
- **Social links** — quick access icons (GitHub, Mastodon, email) controlled by `HEADER_SOCIAL_LINKS`.

## Where to change these settings

Open `data/config.ts` and update the following exports:

- `HEADER_FEATURES` controls feature toggles (example shown below).
- `HEADER_NAV_ITEMS` is an array of `NavItem` objects (`{ href, label, special?, blank? }`).
- `HEADER_SOCIAL_LINKS` is an array of `SocialObjects` (`{ name, href, active, linkTitle? }`).
- `SITE.defaultDocRedirect` controls where `/docs` sends visitors.

### Example `HEADER_FEATURES`

```ts
export const HEADER_FEATURES = {
  starCountThreshold: 0,
  enableLayoutWidthToggle: true,
  enableGitHubButton: true,
};
```

### Example header nav and socials

```ts
export const HEADER_NAV_ITEMS = [
  { href: '/docs', label: 'Docs', special: true },
];

export const HEADER_SOCIAL_LINKS = [
  { name: 'github', href: 'https://github.com/HYP3R00T/', linkTitle: 'Checkout my GitHub profile', active: true }
];
```

## Behavior and notes for end users

- The **GitHub button** links to the project repo configured in `SITE.repo`. The template may show a star count if available and above `starCountThreshold`.
- The **Layout width toggle** remembers an individual's preference in localStorage and toggles `data-layout` on the `<body>` element for simple CSS rules to apply.
- The **Theme toggle** persists theme preference using localStorage and applies the `dark` class to the document element.
- **Header nav items** support `special` (a flag used by the header styling) and `blank` to open links in a new tab.

## Accessibility & UX considerations

- Buttons expose appropriate ARIA attributes (e.g., `aria-pressed` or `aria-expanded`) and are keyboard focusable.
- Keep header labels short for readability and to avoid wrapping on small screens.

## Troubleshooting

- Toggle not appearing: check `HEADER_FEATURES` in `data/config.ts` and ensure the corresponding flag is `true`.
- Social link not visible: confirm the `active` field in `HEADER_SOCIAL_LINKS` is `true` and the `href` is correct.
- `Docs` not going where you expect: update `SITE.defaultDocRedirect` to the desired default (e.g., `/docs/getting-started/introduction`).

If you'd like, I can add an annotated screenshot of the header with callouts for each control, or include a short GIF showing the layout width and theme toggles in action.
