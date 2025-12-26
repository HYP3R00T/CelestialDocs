---
title: "Breadcrumbs"
description: "Understand and customize breadcrumb navigation."
navLabel: "Breadcrumbs"
navIcon: "🔗"
draft: false
---

**Breadcrumbs** show your location in the document hierarchy and let you navigate back up.

## What Are Breadcrumbs?

```sh
Docs > Getting Started > Installation
 ↑        ↑                  ↑
 Root     Parent             Current
```

Clicking a breadcrumb takes you back to that section.

## How Breadcrumbs Work

Breadcrumbs are **automatically generated** from your page location:

```sh
File: content/docs/guides/configuration.md
URL:  /docs/guides/configuration

Breadcrumbs show:
Docs > Guides > Configuration
```

## Hiding Breadcrumbs

For a specific page, hide breadcrumbs in frontmatter:

```yaml
---
title: "My Page"
hide_breadcrumbs: true
---
```

**Result:** No breadcrumb shown, just the page title.

## When to Hide Breadcrumbs

✅ **Hide for:**
- Landing/home pages
- Custom layouts
- Pages where breadcrumbs seem redundant
- Minimalist designs

❌ **Keep for:**
- Regular documentation pages
- Nested content
- Large documentation sites

## Breadcrumb Styling

Breadcrumbs are styled with Tailwind. To customize:

Edit `src/components/Breadcrumb.astro` or related component.

## Best Practices

✅ **Keep folder structure flat** - Too much nesting = confusing breadcrumbs
✅ **Use descriptive names** - Folder names become breadcrumb labels
✅ **Show breadcrumbs on nested pages** - Helps navigation

❌ **Don't nest too many levels** - More than 3 is confusing
❌ **Don't use cryptic folder names** - Users read breadcrumbs

## Next Steps

- 🎨 Explore [Theme and Layout](/docs/5-features/theme-and-layout)
- 📊 Learn about [Table of Contents](/docs/5-features/table-of-contents)
- 👁️ See [Source Button](/docs/5-features/source-button)
