---
title: "Content Systems Configuration"
description: "Configure multiple documentation collections with independent routes and navigation structures"
navLabel: "Content Systems"
---

Content systems allow you to create multiple independent documentation collections, each with its own directory, route, and navigation structure. This is perfect for separating different types of documentation or maintaining multiple documentation sets.

## What Are Content Systems?

A content system is a self-contained documentation collection that includes:

- **Directory** - A folder in your project containing Markdown/MDX files
- **Route** - A URL path prefix for accessing the documentation
- **Navigation** - An independent sidebar navigation structure
- **Default Redirect** - A landing page for the collection

CelestialDocs comes with two content systems by default: `docs` (main documentation) and `funnydocs` (a demo collection).

## Configuration Object

Content systems are configured in the `CONTENT` object in `data/config.ts`:

```typescript
export const CONTENT: ContentConfig = {
    systems: [
        {
            id: "docs",
            dir: "content/docs",
            defaultDocRedirect: "/docs/getting-started",
            route: "/docs",
        },
        {
            id: "funnydocs",
            dir: "content/funnydocs",
            defaultDocRedirect: "/funnydocs/getting-started",
            route: "/funnydocs",
        }
    ],
};
```

## Field Reference

### systems

- **Type:** `Array<ContentSystem>`
- **Required:** Yes
- **Description:** An array of content system configurations

Each system in the array defines a separate documentation collection.

### id

- **Type:** `string`
- **Required:** Yes
- **Description:** A unique identifier for the content system

This ID is used:

- To reference the system in `SIDEBAR_NAVIGATION`
- As the collection name in Astro's content collections
- For internal routing and organization

**Naming Rules:**

- Use lowercase letters
- Use hyphens for multi-word IDs (kebab-case)
- Keep it short and descriptive
- Must be unique across all systems

```typescript
id: "docs"           // Good
id: "api-reference"  // Good
id: "API Reference"  // Bad - use kebab-case
id: "docs"           // Bad if another system already uses "docs"
```

### dir

- **Type:** `string`
- **Required:** Yes
- **Description:** The directory path containing the content files

This path is relative to your project root and should point to a folder containing Markdown/MDX files.

```typescript
dir: "content/docs"
dir: "content/api-reference"
dir: "content/guides"
```

**Directory Structure Example:**

```
content/
├── docs/
│   ├── getting-started/
│   │   ├── index.md
│   │   └── installation.md
│   └── core-concepts/
│       └── navigation.md
└── api-reference/
    ├── authentication.md
    └── endpoints.md
```

### defaultDocRedirect

- **Type:** `string`
- **Required:** Yes
- **Description:** The default page to redirect to when accessing the collection root

When users visit the collection's base route (e.g., `/docs`), they'll be redirected to this page.

```typescript
defaultDocRedirect: "/docs/getting-started"
defaultDocRedirect: "/api-reference/overview"
```

**Important:**

- Must start with the collection's route prefix
- Should point to an existing page
- Typically points to an introduction or getting started page

### route

- **Type:** `string`
- **Required:** Yes
- **Description:** The URL path prefix for the collection

All pages in this collection will be accessible under this route.

```typescript
route: "/docs"          // Pages: /docs/page-name
route: "/api-reference" // Pages: /api-reference/page-name
route: "/guides"        // Pages: /guides/page-name
```

**Routing Rules:**

- Must start with `/`
- Should not end with `/`
- Must be unique across all systems
- Use kebab-case for multi-word routes

## Complete Examples

### Single Documentation Collection

The simplest setup with just one documentation collection:

```typescript
export const CONTENT: ContentConfig = {
    systems: [
        {
            id: "docs",
            dir: "content/docs",
            defaultDocRedirect: "/docs/introduction",
            route: "/docs",
        },
    ],
};
```

### Multiple Documentation Collections

A more complex setup with separate collections for different purposes:

```typescript
export const CONTENT: ContentConfig = {
    systems: [
        {
            id: "docs",
            dir: "content/docs",
            defaultDocRedirect: "/docs/getting-started",
            route: "/docs",
        },
        {
            id: "api-reference",
            dir: "content/api",
            defaultDocRedirect: "/api-reference/overview",
            route: "/api-reference",
        },
        {
            id: "guides",
            dir: "content/guides",
            defaultDocRedirect: "/guides/introduction",
            route: "/guides",
        },
        {
            id: "blog",
            dir: "content/blog",
            defaultDocRedirect: "/blog/latest",
            route: "/blog",
        },
    ],
};
```

## How Content Systems Work

### File to URL Mapping

Content systems automatically map files to URLs based on the route and file path:

```
File: content/docs/getting-started/installation.md
Route: /docs
URL: /docs/getting-started/installation

File: content/api/authentication/oauth.md
Route: /api-reference
URL: /api-reference/authentication/oauth
```

### Independent Navigation

Each content system has its own sidebar navigation configuration in `SIDEBAR_NAVIGATION`:

```typescript
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
    docs: {
        defaultTab: { label: "Documentation", icon: "document" },
        groups: [ /* docs navigation */ ],
    },
    "api-reference": {
        defaultTab: { label: "API Reference", icon: "code" },
        groups: [ /* API navigation */ ],
    },
};
```

The key in `SIDEBAR_NAVIGATION` must match the `id` in your content system.

### Content Collections Integration

Content systems integrate with Astro's content collections. Each system becomes a collection that you can query:

```typescript
import { getCollection } from 'astro:content';

// Get all docs
const docs = await getCollection('docs');

// Get all API reference pages
const apiPages = await getCollection('api-reference');
```

## Adding a New Content System

Here's a step-by-step guide to adding a new content system:

### Step 1: Create the Content Directory

```bash
mkdir -p content/api-reference
```

### Step 2: Add the System Configuration

Update `data/config.ts`:

```typescript
export const CONTENT: ContentConfig = {
    systems: [
        // ... existing systems
        {
            id: "api-reference",
            dir: "content/api-reference",
            defaultDocRedirect: "/api-reference/overview",
            route: "/api-reference",
        },
    ],
};
```

### Step 3: Configure Sidebar Navigation

Add navigation for the new system:

```typescript
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
    // ... existing systems
    "api-reference": {
        defaultTab: {
            label: "API Reference",
            icon: "code",
        },
        groups: [
            {
                id: "endpoints",
                label: "Endpoints",
                autoGenerated: true,
            },
        ],
    },
};
```

### Step 4: Add Content Files

Create your first page:

```markdown
---
title: "API Overview"
description: "Introduction to the API"
---

# API Overview

Welcome to the API documentation!
```

### Step 5: Update Header Navigation (Optional)

Add a link to the new collection in the header:

```typescript
export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "Docs" },
    { href: "/api-reference", label: "API" },
];
```

## Use Cases

### Separate User and Developer Docs

```typescript
systems: [
    {
        id: "user-guide",
        dir: "content/user-guide",
        defaultDocRedirect: "/user-guide/introduction",
        route: "/user-guide",
    },
    {
        id: "developer-docs",
        dir: "content/developer-docs",
        defaultDocRedirect: "/developer-docs/getting-started",
        route: "/developer-docs",
    },
]
```

### Version-Specific Documentation

```typescript
systems: [
    {
        id: "v2-docs",
        dir: "content/v2",
        defaultDocRedirect: "/v2/introduction",
        route: "/v2",
    },
    {
        id: "v1-docs",
        dir: "content/v1",
        defaultDocRedirect: "/v1/introduction",
        route: "/v1",
    },
]
```

### Multi-Product Documentation

```typescript
systems: [
    {
        id: "product-a",
        dir: "content/product-a",
        defaultDocRedirect: "/product-a/overview",
        route: "/product-a",
    },
    {
        id: "product-b",
        dir: "content/product-b",
        defaultDocRedirect: "/product-b/overview",
        route: "/product-b",
    },
]
```

## Best Practices

### Naming Conventions

- **IDs:** Use descriptive, lowercase, kebab-case names
- **Routes:** Match the ID for consistency
- **Directories:** Use clear, organized folder names

### Organization

- Keep related content in the same system
- Use separate systems for distinctly different content types
- Don't create too many systems - it can confuse users
- Consider your navigation structure when planning systems

### Default Redirects

- Point to an introduction or overview page
- Ensure the target page exists before deploying
- Use descriptive page names for better UX

### Performance

- Each system is loaded independently
- More systems don't significantly impact performance
- Content is statically generated at build time

## Troubleshooting

### "Collection not found" Error

**Problem:** Astro can't find your content collection

**Solution:** Ensure the `id` in `CONTENT` matches the directory name and is referenced correctly in `SIDEBAR_NAVIGATION`

### Pages Not Appearing

**Problem:** Pages exist but don't show up in navigation

**Solution:** Check that:

1. Files have proper frontmatter with `title` and `description`
2. Sidebar navigation is configured for the system
3. Files are in the correct directory specified in `dir`

### Redirect Not Working

**Problem:** Visiting the collection root doesn't redirect

**Solution:** Verify:

1. `defaultDocRedirect` path is correct
2. The target page exists
3. The path includes the route prefix

## Next Steps

Now that you understand content systems, explore:

- **[Header Navigation](./header-navigation)** - Add links to your collections in the header
- **[Sidebar Navigation](./sidebar-navigation)** - Configure navigation for each system
- **[Multiple Collections](../features/multiple-collections)** - Learn more about multi-collection patterns
