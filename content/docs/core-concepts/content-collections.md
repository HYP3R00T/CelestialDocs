---
title: "Content Collections"
description: "Learn how CelestialDocs uses Astro's content collections to organize and validate your documentation with type safety and flexibility."
navLabel: "Content Collections"
navIcon: "📚"
---

Content collections are the foundation of how CelestialDocs organizes your documentation. They provide structure, type safety, and flexibility to manage multiple documentation sites within a single project.

## What are Content Collections?

A content collection is a group of related documents that share the same schema and live in their own directory. Think of it as a separate documentation site with its own content, navigation, and routing.

In CelestialDocs, each collection is:

- **Independent** - Has its own content directory and URL route
- **Type-safe** - Validated against a schema for consistency
- **Flexible** - Can have different structures and purposes

## Why Use Collections?

Collections solve several common documentation challenges:

### Organization

Keep different types of documentation separate:

- Main user documentation
- API reference docs
- Tutorial series
- Internal developer guides

### Type Safety

Every document is validated against a schema, catching errors like:

- Missing required fields (title, description)
- Invalid frontmatter syntax
- Incorrect field types

### Multi-Site Support

Run multiple documentation sites from one codebase:

- Different audiences (users vs developers)
- Different tones (serious vs playful)
- Different structures (linear vs reference)

## How Collections Work in CelestialDocs

### Configuration

Collections are configured in two places:

1. **Content systems** - Defined in `data/config.ts`
2. **Schema validation** - Defined in `src/content.config.ts`

### Content Systems Configuration

The `CONTENT` configuration in `data/config.ts` defines your collections:

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

Each system defines:

- **id** - Unique identifier for the collection
- **dir** - Directory path where content lives
- **defaultDocRedirect** - Where to redirect when visiting the collection root
- **route** - URL prefix for all pages in this collection

### Schema Configuration

The schema in `src/content.config.ts` validates all your content:

```typescript
const createSchema = ({ image }: { image?: any } = {}) =>
  z.object({
    // Required fields
    title: z.string(),
    description: z.string(),

    // Optional fields with defaults
    draft: z.boolean().optional().default(false),
    authors: z.array(z.string()).optional().default([]),

    // Navigation overrides
    navLabel: z.string().optional(),
    navIcon: z.string().optional(),
    navHidden: z.boolean().optional().default(false),
    hide_breadcrumbs: z.boolean().optional().default(false),
  });
```

This schema is automatically applied to all collections, ensuring consistency across your documentation.

## Example: Two Collections

CelestialDocs comes with two example collections:

### Main Documentation (`docs`)

- **Purpose**: Comprehensive documentation for users
- **Route**: `/docs/*`
- **Directory**: `content/docs/`
- **Tone**: Professional and helpful
- **Structure**: Organized into sections (Getting Started, Core Concepts, etc.)

### Funny Documentation (`funnydocs`)

- **Purpose**: Humorous examples demonstrating multi-collection support
- **Route**: `/funnydocs/*`
- **Directory**: `content/funnydocs/`
- **Tone**: Playful and entertaining
- **Structure**: Simple, flat structure

Both collections share the same schema but have completely different content, navigation, and purposes.

## Creating a New Collection

Want to add another collection? Here's how:

### Step 1: Add to CONTENT Configuration

Edit `data/config.ts` and add a new system:

```typescript
export const CONTENT: ContentConfig = {
    systems: [
        // ... existing collections
        {
            id: "api",
            dir: "content/api",
            defaultDocRedirect: "/api/overview",
            route: "/api",
        }
    ],
};
```

### Step 2: Create Content Directory

Create the directory for your new collection:

```bash
mkdir -p content/api
```

### Step 3: Add Navigation Configuration

Add sidebar navigation in `data/config.ts`:

```typescript
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
    // ... existing collections
    api: {
        defaultTab: {
            label: "API Reference",
            icon: "document",
        },
        groups: [
            {
                id: "endpoints",
                label: "Endpoints",
                autoGenerated: true,
            }
        ],
    },
};
```

### Step 4: Add Content

Create your first page:

```markdown
---
title: "API Overview"
description: "Overview of our API endpoints and authentication"
---

# API Overview

Welcome to the API documentation!
```

That's it! Your new collection is ready to use.

## Collection Best Practices

### Keep Collections Focused

Each collection should have a clear purpose:

- ✅ User docs + API reference (different audiences)
- ✅ Main docs + tutorials (different formats)
- ❌ Mixing unrelated topics in one collection

### Use Consistent Schemas

While you can customize schemas per collection, keeping them consistent makes maintenance easier. The default schema works well for most documentation needs.

### Plan Your Routes

Choose route prefixes that make sense:

- `/docs` - Main documentation
- `/api` - API reference
- `/guides` - Tutorial guides
- `/blog` - Blog posts (if you add that collection)

### Consider Your Audience

Different collections can target different audiences:

- Technical vs non-technical users
- Internal vs external documentation
- Beginners vs advanced users

## What's Next?

Now that you understand content collections, explore:

- [Markdown & MDX](markdown-mdx) - Learn how to write content
- [Frontmatter](frontmatter) - Understand all available metadata fields
- [Navigation System](navigation-system) - Learn how to organize your sidebar

Or dive into configuration:

- [Content Systems Configuration](/docs/configuration/content-systems) - Detailed configuration guide
- [Multiple Collections Feature](/docs/features/multiple-collections) - Advanced multi-collection patterns
