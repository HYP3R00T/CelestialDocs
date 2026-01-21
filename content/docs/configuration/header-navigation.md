---
title: "Header Navigation"
description: "Configure navigation links and buttons in the header."
navLabel: "Header Navigation"
navIcon: "🔗"
draft: false
---

The header (top of every page) contains:

- **Site logo/title** (links to home)
- **Navigation links** (Docs, Notes, etc.)
- **Feature buttons** (GitHub button, theme toggle, layout toggle)

## Header Navigation Items

Configure header links in `data/config.ts`:

```typescript
export const HEADER_NAV_ITEMS = [
  { href: "/docs", label: "Docs", special: true },
  { href: "/notes", label: "Notes" },
  { href: "https://github.com", label: "GitHub", blank: true }
]
```

Each item in the array becomes a link in the header.

## Configuration Options

### `href` (Required)

The URL the link goes to.

```typescript
{ href: "/docs", label: "Docs" }      // Internal link
{ href: "https://example.com", label: "External" }  // External link
```

### `label` (Required)

The text shown for the link.

```typescript
{ href: "/docs", label: "Documentation" }
```

### `special` (Optional)

Mark a link as "special" (highlighted/styled differently).

```typescript
{ href: "/docs", label: "Docs", special: true }  // Appears highlighted
```

### `blank` (Optional)

Open link in a new tab.

```typescript
{ href: "https://github.com", label: "GitHub", blank: true }
```

## Header Features

Configure buttons and toggles:

```typescript
export const HEADER_FEATURES = {
  starCountThreshold: 0,           // Show GitHub stars count
  enableLayoutWidthToggle: true,   // Width toggle button (left sidebar)
  enableGitHubButton: true         // GitHub button (right sidebar)
}
```

### `starCountThreshold`

Show GitHub repository star count if it reaches this number.

```typescript
starCountThreshold: 0    // Always show
starCountThreshold: 50   // Show if 50+ stars
starCountThreshold: 100  // Show if 100+ stars
```

### `enableLayoutWidthToggle`

Show button to toggle layout width (narrow ↔ wide):

```typescript
enableLayoutWidthToggle: true   // Button appears in header
enableLayoutWidthToggle: false  // No button
```

### `enableGitHubButton`

Show GitHub repository button:

```typescript
enableGitHubButton: true   // Shows GitHub button
enableGitHubButton: false  // No GitHub button
```

The button links to the repository defined in `SITE.repo`.

## Example Configurations

### Simple Navigation

```typescript
export const HEADER_NAV_ITEMS = [
  { href: "/docs", label: "Docs", special: true },
  { href: "/notes", label: "Notes" }
]

export const HEADER_FEATURES = {
  starCountThreshold: 0,
  enableLayoutWidthToggle: true,
  enableGitHubButton: true
}
```

### Extended Navigation with External Links

```typescript
export const HEADER_NAV_ITEMS = [
  { href: "/docs", label: "Docs", special: true },
  { href: "/guides", label: "Guides" },
  { href: "/api", label: "API" },
  { href: "https://github.com/yourname/yourproject", label: "GitHub", blank: true },
  { href: "https://twitter.com/yourhandle", label: "Twitter", blank: true }
]

export const HEADER_FEATURES = {
  starCountThreshold: 10,
  enableLayoutWidthToggle: true,
  enableGitHubButton: true
}
```

### Minimal Header

```typescript
export const HEADER_NAV_ITEMS = [
  { href: "/docs", label: "Docs", special: true }
]

export const HEADER_FEATURES = {
  starCountThreshold: 0,
  enableLayoutWidthToggle: false,
  enableGitHubButton: false
}
```

## How It Appears

**With the simple configuration:**

```sh
[Logo]  Docs  Notes  [Theme Toggle] [GitHub Button]
```

**With extended navigation:**

```sh
[Logo]  Docs  Guides  API  [GitHub] [Twitter]  [Theme Toggle] [GitHub Button]
```

## Tips & Best Practices

- ✅ **Keep navigation items to 3-5** - Don't clutter the header
- ✅ **Use `special: true` for main docs link** - Makes it stand out
- ✅ **Use `blank: true` for external links** - Better UX
- ✅ **Match header links with footer links** - Keep consistent
- ✅ **Add important external links** - GitHub, Twitter, Discord, etc.
- ❌ **Don't make header links too long** - Keep labels short
- ❌ **Don't link to every page** - Use sidebar for that
- ❌ **Don't mix internal and external inconsistently** - Be consistent

## Syncing with Content Systems

If you create a new content system (like `/tutorials`), add it to header nav:

**In `data/config.ts`:**

```typescript
// Add system
export const CONTENT = {
  systems: [
    // ... existing ...
    {
      id: "tutorials",
      dir: "content/tutorials",
      defaultDocRedirect: "/tutorials/intro",
      route: "/tutorials"
    }
  ]
}

// Add nav link
export const HEADER_NAV_ITEMS = [
  { href: "/docs", label: "Docs", special: true },
  { href: "/notes", label: "Notes" },
  { href: "/tutorials", label: "Tutorials" }  // ← Add this
]
```

## Next Steps

- 📌 Learn about [Site Metadata](/docs/3-configuration/site-metadata)
- 📦 Set up [Content Systems](/docs/3-configuration/content-systems)
- 📑 Master [Sidebar Navigation](/docs/4-sidebar-navigation/sidebar-overview)
