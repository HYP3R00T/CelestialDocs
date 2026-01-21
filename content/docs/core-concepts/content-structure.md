---
title: "Content Structure"
description: "How files in content/docs map to URLs and sidebar structure."
navLabel: "Content Structure"
navIcon: "📁"
draft: false
---

CelestialDocs uses a **filesystem-driven** approach. Your file organization in `content/docs/` directly maps to URLs and sidebar groups.

## How File Paths Map to URLs

Your files become URLs automatically:

```sh
content/docs/
├─ introduction.md
│  └─ URL: /docs/introduction

├─ getting-started/
│  ├─ installation.md
│  │  └─ URL: /docs/getting-started/installation
│  └─ quick-start.md
│     └─ URL: /docs/getting-started/quick-start

└─ guides/
   ├─ advanced.md
   │  └─ URL: /docs/guides/advanced
   └─ basics.md
      └─ URL: /docs/guides/basics
```

**Rule:** Drop `content/docs/` and `.md`/`.mdx` extension, prepend `/docs/`

## How Structure Maps to Sidebar

By default, folder structure becomes sidebar groups:

```sh
content/docs/
├─ getting-started/      ← Gets its own group in sidebar
│  ├─ introduction.md    ← Entry
│  ├─ installation.md    ← Entry
│  └─ quick-start.md     ← Entry
├─ guides/               ← Gets its own group in sidebar
│  ├─ advanced.md        ← Entry
│  └─ basics.md          ← Entry
└─ reference/            ← Gets its own group in sidebar
   ├─ api.md             ← Entry
   └─ types.md           ← Entry
```

**Sidebar shows:**
```sh
Getting Started
├─ Introduction
├─ Installation
└─ Quick Start
Guides
├─ Advanced
└─ Basics
Reference
├─ API
└─ Types
```

## Organizing Your Content

### Simple Structure (Flat)

Good for small docs:

```sh
content/docs/
├─ introduction.md
├─ installation.md
├─ configuration.md
└─ troubleshooting.md
```

All pages appear in one group.

### Organized Structure (Nested)

Good for complex docs:

```sh
content/docs/
├─ 1-start-here/
│  ├─ what-is.md
│  ├─ installation.md
│  └─ your-first-page.md
├─ 2-core-concepts/
│  ├─ markdown-basics.md
│  ├─ frontmatter.md
│  └─ mdx.md
├─ 3-configuration/
│  ├─ overview.md
│  ├─ site-metadata.md
│  └─ header.md
└─ 4-reference/
   ├─ api.md
   └─ types.md
```

Numbers help control sidebar ordering (1, 2, 3, 4 appear in order).

### Multi-Level Nesting

Good for very large docs:

```sh
content/docs/
├─ guides/
│  ├─ getting-started/
│  │  ├─ introduction.md
│  │  └─ installation.md
│  └─ advanced/
│     ├─ performance.md
│     └─ scaling.md
└─ reference/
   ├─ api/
   │  ├─ endpoints.md
   │  └─ errors.md
   └─ types/
      ├─ request.md
      └─ response.md
```

**Sidebar shows:**
```sh
Guides
├─ Getting Started
│  ├─ Introduction
│  └─ Installation
└─ Advanced
   ├─ Performance
   └─ Scaling
Reference
├─ API
│  ├─ Endpoints
│  └─ Errors
└─ Types
   ├─ Request
   └─ Response
```

## Naming Conventions

### File Names

Use **lowercase with hyphens**:

```sh
✅ good-file-name.md
✅ introduction.md
❌ GoodFileName.md
❌ Good_File_Name.md
```

### Folder Names

Use **lowercase with hyphens**:

```sh
✅ content/docs/getting-started/
✅ content/docs/api-reference/
❌ content/docs/GettingStarted/
❌ content/docs/API_Reference/
```

### URLs

Automatically lowercase, hyphen-separated:

```sh
content/docs/Getting-Started/Installation.md
         ↓ (automatically becomes) ↓
/docs/getting-started/installation
```

## Auto-Generated vs Manual Groups

### Auto-Generated (Default)

If you don't configure a group in `data/config.ts`, the system automatically:
- Discovers all files in that folder
- Creates a group named after the folder
- Lists entries alphabetically

### Manual Configuration

In `data/config.ts`, you can:
- Define exact group structure
- Control ordering
- Add custom labels
- Include/exclude files

**Example:**

```typescript
// Without config: folder becomes group automatically
content/docs/getting-started/ → "Getting Started" group (alphabetical)

// With config: you control it
{
  id: 'getting-started',
  label: 'Get Started',  // Custom label
  entries: [
    { slug: 'getting-started/introduction' },
    { slug: 'getting-started/installation' },
    { slug: 'getting-started/quick-start' }
  ]
}
```

## Best Practices

✅ **Use shallow hierarchy** - 2-3 levels max for sidebar clarity
✅ **Use descriptive names** - folder names should be self-explanatory
✅ **Use numbers for ordering** - `1-`, `2-`, `3-` prefixes control order
✅ **Group related content** - content about similar topics in same folder
✅ **Limit entries per group** - 15+ entries in one group gets unwieldy

❌ **Don't use spaces in filenames** - use hyphens instead
❌ **Don't nest too deep** - more than 3 levels is confusing
❌ **Don't use inconsistent naming** - stick to one convention

## Example: CelestialDocs Structure

The documentation you're reading uses this structure:

```sh
content/docs/
├─ 1-start-here/
│  ├─ what-is-celestialdocs.md
│  ├─ your-first-page.md
│  └─ understanding-markdown.md
├─ 2-core-concepts/
│  ├─ frontmatter-explained.md
│  ├─ what-is-an-entry.md
│  ├─ what-is-a-group.md
│  └─ mdx-and-components.md
├─ 3-configuration/
│  ├─ config-overview.md
│  ├─ site-metadata.md
│  ├─ content-systems.md
│  └─ header-navigation.md
├─ 4-sidebar-navigation/
│  ├─ sidebar-overview.md
│  ├─ icons-and-emojis.md
│  ├─ what-is-a-tab.md
│  ├─ auto-generation.md
│  ├─ ordering-and-hidden.md
│  └─ sidebar-config-examples.md
└─ ...
```

## Next Steps

- 📍 Learn about [Frontmatter Explained](/docs/2-core-concepts/frontmatter-explained) for metadata
- 📦 Understand [What is a Group?](/docs/2-core-concepts/what-is-a-group) for navigation
- ⚙️ See [Sidebar Configuration Examples](/docs/4-sidebar-navigation/sidebar-config-examples) for real setups
