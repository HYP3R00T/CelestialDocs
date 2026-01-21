---
title: "Configuration Overview"
description: "Introduction to data/config.ts and how to customize your documentation site."
navLabel: "Config Overview"
navIcon: "⚙️"
draft: false
---

The main configuration file for CelestialDocs is `data/config.ts`. This single file controls most site settings.

## What is data/config.ts?

It's a TypeScript file that exports configuration objects for:

- **Site metadata**
- **Header**
- **Sidebar navigation**
- **Content systems**
- **Table of contents behavior**

## Location

```sh
your-project/
├─ data/
│  └─ config.ts  # The main config file
├─ content/
├─ src/
└─ ...
```

## Basic Structure

Here's the outline of `data/config.ts`:

```typescript
// System-wide configuration
export const LOCALE = { ... }
export const CONTENT = { ... }

// Site information
export const SITE = { ... }
export const HEADER_FEATURES = { ... }
export const HEADER_NAV_ITEMS = [ ... ]
export const HEADER_SOCIAL_LINKS = [ ... ]

// Sidebar navigation
export const SIDEBAR_NAVIGATION = { ... }

// Table of contents
export const TABLE_OF_CONTENTS = { ... }
```

Each section is independent and focuses on one aspect of your site.

## Configuration Sections

### 1. LOCALE
Language and regional settings:

```typescript
export const LOCALE = {
  lang: "en"  // ISO 639-1 language code
}
```

### 2. CONTENT
Define your documentation collections:

```typescript
export const CONTENT = {
  systems: [
    {
      id: "docs",
      dir: "content/docs",
      defaultDocRedirect: "/docs/getting-started/introduction",
      route: "/docs"
    },
    {
      id: "notes",
      dir: "notes",
      defaultDocRedirect: "/notes/index",
      route: "/notes"
    }
  ]
}
```

### 3. SITE
Site metadata (used in SEO, headers, etc.):

```typescript
export const SITE = {
  website: "https://example.com",
  title: "My Docs",
  description: "Documentation for my project",
  author: "Your Name",
  repo: "https://github.com/yourname/myproject",
  image: require("@/assets/og-image.png"),
  twitterHandle: "@yourhandle"
}
```

### 4. HEADER_FEATURES
Toggle header UI elements:

```typescript
export const HEADER_FEATURES = {
  starCountThreshold: 0,           // Show star count if ≥ this
  enableLayoutWidthToggle: true,   // Show width toggle button
  enableGitHubButton: true         // Show GitHub button
}
```

### 5. HEADER_NAV_ITEMS
Navigation links in the header:

```typescript
export const HEADER_NAV_ITEMS = [
  { href: "/docs", label: "Docs", special: true },
  { href: "/notes", label: "Notes" },
  { href: "https://github.com", label: "GitHub", blank: true }
]
```

### 6. SIDEBAR_NAVIGATION
The most complex section - controls sidebar structure:

```typescript
export const SIDEBAR_NAVIGATION = {
  docs: {
    defaultTab: { label: "Docs", icon: "book" },
    groups: [
      {
        id: "getting-started",
        label: "Getting Started",
        icon: "rocket",
        tab: true,
        entries: [
          { slug: "getting-started/introduction" },
          { slug: "getting-started/installation" }
        ]
      }
    ]
  }
}
```

### 7. TABLE_OF_CONTENTS
Right-side table of contents behavior:

```typescript
export const TABLE_OF_CONTENTS = {
  enableExtra: false  // Show extra TOC info
}
```

## How Changes Work

When you update `data/config.ts`:

1. **Save the file**
2. **Dev server auto-reloads** (if running `npm run dev`)
3. **Changes appear immediately** in your browser
4. **No rebuild needed** (mostly)

If you change content structure (CONTENT.systems), you may need to restart the dev server.

## Common Configuration Tasks

**Change site title:**
```typescript
export const SITE = {
  title: "My New Title"  // ← Change this
}
```

**Add a new navigation link in the header:**
```typescript
export const HEADER_NAV_ITEMS = [
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" }  // ← Add this
]
```

**Hide the GitHub button:**
```typescript
export const HEADER_FEATURES = {
  enableGitHubButton: false  // ← Change this
}
```

**Create a new documentation collection:**
```typescript
export const CONTENT = {
  systems: [
    { id: "docs", dir: "content/docs", ... },
    { id: "tutorials", dir: "content/tutorials", ... }  // ← Add this
  ]
}
```

## Configuration Validation

CelestialDocs uses TypeScript to validate your config:

- **Wrong type?** TypeScript catches it
- **Missing required field?** TypeScript catches it
- **Typo in icon name?** TypeScript catches it

The IDE will show errors if something is wrong.

## Next Steps

- 📍 Learn about [SITE and Metadata](/docs/3-configuration/site-metadata)
- 🔗 Configure [Header Navigation](/docs/3-configuration/header-navigation)
- 📦 Set up [Content Systems](/docs/3-configuration/content-systems) for multiple collections
- 📑 Master [Sidebar Navigation](/docs/4-sidebar-navigation/sidebar-overview)
