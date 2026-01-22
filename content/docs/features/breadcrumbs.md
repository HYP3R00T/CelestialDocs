---
title: "Breadcrumbs"
description: "Learn how breadcrumb navigation works in CelestialDocs and how to customize it for your documentation pages"
---

Breadcrumbs are a navigation aid that shows users where they are in your documentation hierarchy. They appear at the top of each page, displaying the path from the home page to the current page.

## What Are Breadcrumbs?

Breadcrumbs show the navigation path to the current page:

```
Home > Getting Started > Installation
```

Each segment is clickable, allowing users to quickly jump back to any parent level. This is especially helpful in documentation with deep hierarchies or when users arrive via search engines.

## How They Work

CelestialDocs automatically generates breadcrumbs based on:

1. **Collection**: The documentation collection (e.g., "Docs", "API")
2. **Folder structure**: The file's location in the content directory
3. **Page title**: The current page's title from frontmatter

For example, a file at `content/docs/features/breadcrumbs.md` generates:

```
Docs > Features > Breadcrumbs
```

## Breadcrumb Structure

### Collection Level

The first breadcrumb is always the collection name:

```
Docs > ...
```

This links to the collection's default redirect (configured in `CONTENT.systems`).

### Folder Levels

Middle breadcrumbs represent folders in the path:

```
Docs > Getting Started > ...
Docs > Core Concepts > ...
Docs > Configuration > ...
```

These link to the folder's index page (if it exists) or the first page in that folder.

### Current Page

The last breadcrumb is the current page title:

```
... > Installation
... > Frontmatter
... > Breadcrumbs
```

This is not clickable since you're already on that page.

## Automatic Features

### Smart Capitalization

Folder names are automatically formatted:

- `getting-started` → "Getting Started"
- `core-concepts` → "Core Concepts"
- `api-reference` → "API Reference"

### Responsive Design

Breadcrumbs adapt to screen size:

- **Desktop**: Full breadcrumb trail
- **Mobile**: May show abbreviated trail or just the last few segments

### Accessibility

Breadcrumbs are built with accessibility in mind:

- Semantic HTML with `<nav>` and proper ARIA labels
- Keyboard navigable
- Screen reader friendly
- Clear visual separators

## Hiding Breadcrumbs

You can hide breadcrumbs on specific pages using frontmatter:

```yaml
---
title: "Landing Page"
description: "Welcome to our documentation"
hide_breadcrumbs: true
---
```

### When to Hide Breadcrumbs

Consider hiding breadcrumbs on:

- **Landing pages**: Where breadcrumbs don't add value
- **Full-width pages**: Where you need maximum space
- **Custom layouts**: Where breadcrumbs don't fit the design
- **Single-page sections**: Where navigation context is obvious

### When to Keep Breadcrumbs

Keep breadcrumbs on:

- **Deep pages**: Where users need context
- **Search landing pages**: Where users arrive from external links
- **Complex hierarchies**: Where navigation path is important
- **Most documentation pages**: They're helpful by default!

## Customizing Breadcrumb Labels

### Folder Labels

By default, folder names become breadcrumb labels. To customize, you can:

1. **Use descriptive folder names**: `getting-started` is better than `gs`
2. **Use kebab-case**: It converts nicely to title case
3. **Keep names concise**: Long folder names create long breadcrumbs

### Page Labels

The page title from frontmatter is used in breadcrumbs:

```yaml
---
title: "Installation Guide"  # This appears in breadcrumbs
---
```

If you want a different label in the sidebar vs. breadcrumbs, use `navLabel` for the sidebar:

```yaml
---
title: "Installation Guide"  # Used in breadcrumbs
navLabel: "Install"          # Used in sidebar only
---
```

## Breadcrumbs vs. Other Navigation

CelestialDocs provides multiple navigation aids:

### Breadcrumbs (Top)

- **Purpose**: Show where you are in the hierarchy
- **Direction**: Backward navigation (to parent pages)
- **Scope**: Current page's path
- **Best for**: Understanding context, jumping to parent sections

### Sidebar (Left)

- **Purpose**: Browse all pages in the collection
- **Direction**: Lateral navigation (to sibling pages)
- **Scope**: Entire collection
- **Best for**: Exploring content, finding related pages

### Table of Contents (Right)

- **Purpose**: Navigate within the current page
- **Direction**: Jump to sections
- **Scope**: Current page only
- **Best for**: Scanning content, jumping to specific sections

### Previous/Next Links (Bottom)

- **Purpose**: Sequential navigation
- **Direction**: Forward/backward through pages
- **Scope**: Adjacent pages in sidebar order
- **Best for**: Reading documentation in order

All four work together to provide comprehensive navigation!

## Best Practices

### Keep Hierarchies Shallow

Breadcrumbs get long with deep nesting:

✅ **Good:**

```
Docs > Features > Breadcrumbs
```

❌ **Bad:**

```
Docs > Navigation > Features > UI Elements > Breadcrumbs > Overview
```

Aim for 2-4 levels maximum.

### Use Descriptive Names

Make each breadcrumb segment meaningful:

✅ **Good:**

```
Docs > Getting Started > Installation
```

❌ **Bad:**

```
Docs > GS > Install
```

### Match Sidebar Structure

Breadcrumbs should reflect your sidebar organization:

- If "Features" is a group in the sidebar, it should appear in breadcrumbs
- If pages are nested in folders, breadcrumbs should show that nesting

### Test on Mobile

Check how breadcrumbs look on small screens:

- Do they wrap properly?
- Are they still readable?
- Do they take up too much space?

## Examples

### Simple Documentation

```
Docs > Introduction
Docs > Quick Start
Docs > Configuration
```

Flat structure with minimal breadcrumbs.

### Organized Documentation

```
Docs > Getting Started > Introduction
Docs > Getting Started > Installation
Docs > Getting Started > Quick Start
Docs > Features > Auto-Generation
Docs > Features > Multiple Collections
```

Clear sections with logical grouping.

### Deep Documentation

```
Docs > API Reference > Authentication > OAuth > Setup
Docs > API Reference > Endpoints > Users > Create User
```

Deeper hierarchy for complex content (but consider if this is too deep!).

## Technical Details

### URL Structure

Breadcrumbs are generated from the file path, not the URL:

**File path:**

```
content/docs/features/breadcrumbs.md
```

**URL:**

```
/docs/features/breadcrumbs
```

**Breadcrumbs:**

```
Docs > Features > Breadcrumbs
```

### Index Pages

Index pages (like `index.md`) don't add an extra breadcrumb level:

**File path:**

```
content/docs/getting-started/index.md
```

**Breadcrumbs:**

```
Docs > Getting Started
```

Not:

```
Docs > Getting Started > Index
```

### Special Characters

Folder names with special characters are handled gracefully:

- `api-v2` → "API V2"
- `oauth-2.0` → "OAuth 2.0"
- `getting_started` → "Getting Started"

## Styling Breadcrumbs

Breadcrumbs use the site's theme colors and adapt to light/dark mode automatically. If you want to customize their appearance, you can modify the breadcrumb component styles.

See [Custom Styling](../advanced/custom-styling) for details on customizing component styles.

## Accessibility Features

### Semantic HTML

Breadcrumbs use proper semantic markup:

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/docs">Docs</a></li>
    <li><a href="/docs/features">Features</a></li>
    <li aria-current="page">Breadcrumbs</li>
  </ol>
</nav>
```

### Screen Readers

Screen readers announce:

- "Breadcrumb navigation"
- Each link in the path
- "Current page: [page name]" for the last item

### Keyboard Navigation

All breadcrumb links are keyboard accessible:

- Tab through links
- Enter to activate
- Standard focus indicators

## Common Issues

### Breadcrumbs Too Long

**Problem:** Breadcrumbs wrap to multiple lines or get truncated.

**Solution:**

- Shorten folder names
- Reduce hierarchy depth
- Consider hiding breadcrumbs on that page

### Wrong Breadcrumb Labels

**Problem:** Breadcrumb shows "api-ref" instead of "API Reference".

**Solution:**

- Rename the folder to `api-reference` (kebab-case converts better)
- Or customize the breadcrumb component to handle special cases

### Missing Breadcrumbs

**Problem:** Breadcrumbs don't appear on a page.

**Solution:**

- Check if `hide_breadcrumbs: true` is set in frontmatter
- Verify the page is in a valid content collection
- Check the page layout is using the breadcrumb component

## Next Steps

- Learn about [Table of Contents](./table-of-contents) for in-page navigation
- Explore [Navigation System](../core-concepts/navigation-system) to understand the full hierarchy
- Check out [Frontmatter](../core-concepts/frontmatter) to learn about `hide_breadcrumbs` and other options
