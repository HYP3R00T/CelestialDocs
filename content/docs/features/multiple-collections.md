---
title: "Multiple Collections"
description: "Learn how to set up and manage multiple documentation collections with different purposes, styles, and navigation structures"
---

CelestialDocs supports multiple independent documentation collections, each with its own content directory, URL route, and navigation structure. This powerful feature lets you organize different types of documentation—like user guides, API references, or even fun demo content—in completely separate spaces.

## What Are Collections?

A **collection** is an independent set of documentation with:

- Its own content folder (e.g., `content/docs/`, `content/api/`)
- Its own URL route (e.g., `/docs/`, `/api/`)
- Its own sidebar navigation configuration
- Its own style and tone

Collections are completely isolated from each other, making it easy to maintain different types of documentation without mixing concerns.

## Real Example: This Site

This very site uses two collections:

1. **docs** - The main documentation you're reading now (serious, comprehensive)
2. **funnydocs** - A humorous demo collection showing tech humor (playful, entertaining)

You can switch between them using the collection selector in the header!

## Setting Up Collections

Collections are configured in two places: `data/config.ts` and `src/content.config.ts`.

### 1. Define Content Systems

First, define your collections in the `CONTENT` configuration:

```typescript
export const CONTENT: ContentConfig = {
  systems: [
    {
      id: "docs",
      dir: "docs",
      defaultDocRedirect: "/docs/getting-started",
      route: "docs",
    },
    {
      id: "api",
      dir: "api",
      defaultDocRedirect: "/api/overview",
      route: "api",
    },
  ],
};
```

Each system needs:

- **id**: Unique identifier for the collection
- **dir**: Folder name inside `content/`
- **defaultDocRedirect**: Where to redirect when visiting the root route
- **route**: URL path prefix

### 2. Configure Navigation

Then, add sidebar navigation for each collection:

```typescript
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
  docs: {
    defaultTab: {
      label: "Documentation",
      icon: "document",
    },
    groups: [
      // Your docs navigation groups
    ],
  },
  api: {
    defaultTab: {
      label: "API Reference",
      icon: "code",
    },
    groups: [
      // Your API navigation groups
    ],
  },
};
```

### 3. Create Content Folders

Create the corresponding folders in your project:

```
content/
├── docs/
│   ├── getting-started/
│   └── features/
└── api/
    ├── endpoints/
    └── authentication/
```

## Use Cases

### User Docs + API Reference

Perfect for projects that need both conceptual documentation and technical API docs:

```typescript
systems: [
  {
    id: "docs",
    dir: "docs",
    defaultDocRedirect: "/docs/introduction",
    route: "docs",
  },
  {
    id: "api",
    dir: "api",
    defaultDocRedirect: "/api/getting-started",
    route: "api",
  },
]
```

### Multi-Language Documentation

Separate collections for different languages:

```typescript
systems: [
  {
    id: "en",
    dir: "en",
    defaultDocRedirect: "/en/introduction",
    route: "en",
  },
  {
    id: "es",
    dir: "es",
    defaultDocRedirect: "/es/introduccion",
    route: "es",
  },
]
```

### Product + Developer Docs

Different documentation for different audiences:

```typescript
systems: [
  {
    id: "users",
    dir: "users",
    defaultDocRedirect: "/users/getting-started",
    route: "users",
  },
  {
    id: "developers",
    dir: "developers",
    defaultDocRedirect: "/developers/setup",
    route: "developers",
  },
]
```

## Collection Switcher

CelestialDocs automatically adds a collection switcher to the header when you have multiple collections. Users can easily switch between collections without losing their place in the navigation.

The switcher shows:

- Collection name (from the `label` in `defaultTab`)
- Collection icon (from the `icon` in `defaultTab`)
- Current active collection

## Independent Navigation

Each collection has completely independent navigation:

- **Different structures**: One collection can use tabs, another can be flat
- **Different icons**: Mix emoji and SVG icons differently per collection
- **Different organization**: Auto-generated in one, manual in another
- **Different depth**: Simple navigation in one, complex nested structure in another

## Content Isolation

Collections are isolated at the content level:

- Files in `content/docs/` don't appear in the `api` collection
- Navigation configuration for `docs` doesn't affect `api`
- Each collection can have different frontmatter conventions
- Search results are scoped to the current collection

## Linking Between Collections

You can link between collections using absolute paths:

```markdown
Check out the [API Reference](/api/endpoints) for technical details.
```

Or use the collection switcher to guide users to switch collections.

## Best Practices

### Keep Collections Focused

Each collection should have a clear, distinct purpose:

- ✅ User guides vs. API reference
- ✅ Tutorials vs. conceptual docs
- ❌ Mixing unrelated content in one collection

### Use Consistent Naming

Use clear, descriptive collection IDs:

- ✅ `docs`, `api`, `guides`, `tutorials`
- ❌ `collection1`, `stuff`, `misc`

### Configure Sensible Defaults

Set `defaultDocRedirect` to the most logical starting page for each collection:

- User docs → Introduction or Getting Started
- API docs → API Overview or Authentication
- Tutorials → First Tutorial

### Consider Your Audience

Different collections can target different audiences:

- **Technical depth**: Beginner guides vs. advanced references
- **Tone**: Formal documentation vs. casual tutorials
- **Format**: Long-form guides vs. quick references

## Example: Docs + FunnyDocs

Here's the actual configuration for this site:

```typescript
export const CONTENT: ContentConfig = {
  systems: [
    {
      id: "docs",
      dir: "docs",
      defaultDocRedirect: "/docs/getting-started",
      route: "docs",
    },
    {
      id: "funnydocs",
      dir: "funnydocs",
      defaultDocRedirect: "/funnydocs/getting-started",
      route: "funnydocs",
    },
  ],
};
```

The `docs` collection is comprehensive and serious, while `funnydocs` is short and humorous. They coexist perfectly, demonstrating how flexible the multi-collection system is!

## Next Steps

- Learn about [Content Systems Configuration](../configuration/content-systems) for detailed setup
- Explore [Sidebar Navigation](../configuration/sidebar-navigation) to configure each collection's navigation
- Check out [Tabs and Groups](./tabs-and-groups) for organizing content within collections
