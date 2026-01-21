---
title: "Frontmatter Explained"
description: "Complete reference for all supported frontmatter fields and how to use them."
navLabel: "Frontmatter"
navIcon: "📋"
draft: false
---

Frontmatter is the metadata at the top of your documentation files. It's written in YAML format (the section between the `---` markers).

## Required Fields

### `title`

- **Type:** String
- **Required:** Yes
- **Purpose:** The main heading of your page and default sidebar label
- **Example:**
```yaml
title: "Getting Started with CelestialDocs"
```

## Common Optional Fields

### `description`

- **Type:** String
- **Required:** No
- **Purpose:** Short summary shown in browser meta tags and search results
- **Example:**
```yaml
description: "Learn how to set up CelestialDocs and create your first page."
```

### `draft`

- **Type:** Boolean
- **Required:** No
- **Default:** `false`
- **Purpose:** Mark a page as work-in-progress. How you handle drafts (hide in production, etc.) is up to your workflow.
- **Example:**
```yaml
draft: true
```

### `authors`

- **Type:** Array of strings
- **Required:** No
- **Purpose:** List GitHub usernames of people who contributed to this page
- **Example:**
```yaml
authors: ["octocat", "hubot"]
```

## Navigation Controls (Important!)

These fields control how your page appears in the sidebar and how it integrates with the sidebar navigation system.

### `navLabel`

- **Type:** String
- **Required:** No
- **Purpose:** Override the sidebar label for this page. If not provided, `title` is used.
- **Use Case:** When your page title is long but you want a short sidebar label
- **Example:**
```yaml
title: "Getting Started with CelestialDocs and Astro"
navLabel: "Quick Start"  # Shorter label in sidebar
```

### `navIcon`

- **Type:** String (emoji or icon name)
- **Required:** No
- **Purpose:** Show an icon or emoji next to the sidebar entry
- **Options:**
  - **Emoji:** Use any emoji directly (e.g., `"📚"`, `"🚀"`, `"⚙️"`)
  - **Icon file:** Use an SVG icon from `src/assets/icons/` (e.g., `"rocket"` for `rocket.svg`)

- **Example (emoji):**
```yaml
navIcon: "📚"
```

- **Example (icon file):**
```yaml
navIcon: "book"  # Uses src/assets/icons/book.svg
```

**Icon priority:** If both an emoji and a matching SVG file exist, the SVG takes precedence.

### `navHidden`

- **Type:** Boolean
- **Required:** No
- **Default:** `false`
- **Purpose:** Hide the page from the sidebar while keeping it accessible via URL
- **Use Case:** Internal pages, utilities, or pages that are linked to but not meant for browsing
- **Example:**
```yaml
navHidden: true
```

If you set `navHidden: true`, the page is still reachable at its URL, just not shown in the sidebar.

### `hide_breadcrumbs`

- **Type:** Boolean
- **Required:** No
- **Default:** `false`
- **Purpose:** Hide the breadcrumb navigation at the top of the page
- **Use Case:** Custom layouts or minimalist pages where breadcrumbs are redundant
- **Example:**
```yaml
hide_breadcrumbs: true
```

## Complete Example

Here's a realistic frontmatter example with all fields:

```yaml
---
title: "How to Configure Your Sidebar Navigation"
description: "A comprehensive guide to configuring sidebar groups, entries, and tabs."
navLabel: "Sidebar Config"
navIcon: "📑"
authors: ["rajesh"]
draft: false
navHidden: false
hide_breadcrumbs: false
---
```

## How Frontmatter Affects Your Page

| Field | Affects |
|-------|---------|
| `title` | Page header, sidebar label (if `navLabel` not set) |
| `description` | Meta tags, SEO, some listing pages |
| `navLabel` | Sidebar text (overrides `title`) |
| `navIcon` | Icon/emoji shown in sidebar |
| `navHidden` | Whether page appears in sidebar (URL still works) |
| `hide_breadcrumbs` | Breadcrumb visibility at top of page |
| `draft` | (How you use this is up to you) |
| `authors` | Page metadata, attribution |

## Tips & Best Practices

- ✅ **Keep `title` clear and descriptive** - readers see this as the page heading
- ✅ **Use `navLabel` for long titles** - keep sidebar compact
- ✅ **Prefer emojis for icons** - simpler than managing SVG files
- ✅ **Use `navHidden` for utility pages** - like internal notes or drafts
- ✅ **Include meaningful `description`** - helps with SEO and browsing
- ❌ **Don't use special characters in `navLabel`** - keep it simple
- ❌ **Don't leave `title` empty** - it's required!

## More Information

- 📚 Learn more about [Understanding Markdown](/docs/1-start-here/understanding-markdown)
- 🎨 Explore [Icons & Emojis](/docs/4-sidebar-navigation/icons-and-emojis) for customization
- ⚙️ See [Sidebar Configuration Examples](/docs/4-sidebar-navigation/sidebar-config-examples) for context
