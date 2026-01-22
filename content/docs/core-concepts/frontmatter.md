---
title: "Frontmatter"
description: "Complete guide to frontmatter fields in CelestialDocs - learn about required fields, optional metadata, and navigation overrides."
navLabel: "Frontmatter"
navIcon: "🏷️"
---

Frontmatter is the YAML metadata block at the top of your Markdown or MDX files. It provides essential information about your page and controls how it appears in navigation and search results.

## What is Frontmatter?

Frontmatter is a block of YAML between triple dashes (`---`) at the very beginning of your file:

```markdown
---
title: "My Page Title"
description: "A brief description of this page"
---

# My Page Title

Your content starts here...
```

CelestialDocs uses frontmatter to:

- Set page titles and descriptions
- Control navigation appearance
- Manage page visibility
- Add metadata for SEO
- Override default behaviors

## Required Fields

Every documentation page **must** include these two fields:

### title

The main title of your page.

```yaml
title: "Getting Started with CelestialDocs"
```

**Rules:**

- Must be a string
- Should be descriptive and concise
- Typically 3-8 words
- Used in browser tabs, search results, and page headers

**Examples:**

```yaml
✅ title: "Installation Guide"
✅ title: "Content Collections"
✅ title: "Configuring Sidebar Navigation"
❌ title: "Guide"  # Too vague
❌ title: "This is a Really Long Title That Goes On and On"  # Too long
```

### description

A brief summary of the page content.

```yaml
description: "Learn how to install and set up CelestialDocs in your project"
```

**Rules:**

- Must be a string
- Should be 10-30 words
- Used for SEO meta tags and search results
- Should accurately describe the page content

**Examples:**

```yaml
✅ description: "Complete guide to configuring sidebar navigation with groups, tabs, and auto-generation"
✅ description: "Learn how to write documentation using Markdown and MDX in CelestialDocs"
❌ description: "A page"  # Too short
❌ description: "This page contains information"  # Too generic
```

## Optional Fields

These fields are optional but provide additional control over your pages:

### draft

Mark a page as draft to exclude it from production builds.

```yaml
draft: true
```

**Type:** Boolean
**Default:** `false`

**When to use:**

- Work-in-progress pages
- Content under review
- Placeholder pages

**Example:**

```yaml
---
title: "Advanced Deployment Strategies"
description: "Coming soon - advanced deployment patterns"
draft: true
---
```

### authors

List of content authors.

```yaml
authors: ["Alice", "Bob"]
```

**Type:** Array of strings
**Default:** `[]` (empty array)

**When to use:**

- Multi-author documentation
- Attribution requirements
- Team documentation

**Examples:**

```yaml
# Single author
authors: ["Jane Smith"]

# Multiple authors
authors: ["John Doe", "Jane Smith", "Bob Johnson"]

# No authors (default)
authors: []
```

## Navigation Override Fields

These fields control how your page appears in the sidebar navigation:

### navLabel

Override the sidebar label for this page.

```yaml
navLabel: "Quick Start"
```

**Type:** String (optional)
**Default:** Uses the `title` field

**When to use:**

- Title is too long for sidebar
- Want different wording in navigation
- Need to save space

**Examples:**

```yaml
---
title: "Getting Started with Your First CelestialDocs Project"
description: "Complete beginner's guide to starting your first project"
navLabel: "Quick Start"  # Shorter for sidebar
---
```

```yaml
---
title: "Frequently Asked Questions"
description: "Common questions and answers about CelestialDocs"
navLabel: "FAQ"  # Abbreviation for sidebar
---
```

### navIcon

Add an icon to your page in the sidebar.

```yaml
navIcon: "🚀"
```

**Type:** String (optional)
**Default:** No icon

**Supported formats:**

- **Emoji:** Any Unicode emoji character
- **SVG reference:** Name of an SVG file in `src/assets/icons/` (without `.svg` extension)

**Examples:**

```yaml
# Emoji icons
navIcon: "🚀"  # Rocket
navIcon: "📚"  # Books
navIcon: "⚙️"  # Gear
navIcon: "💡"  # Light bulb

# SVG icons (must exist in src/assets/icons/)
navIcon: "document"  # Uses document.svg
navIcon: "github"    # Uses github.svg
navIcon: "theme"     # Uses theme.svg
```

**Available SVG icons:**

- `document`
- `github`
- `logo`
- `menu`
- `right`
- `spacing`
- `theme`
- `close`

### navHidden

Hide a page from sidebar navigation.

```yaml
navHidden: true
```

**Type:** Boolean
**Default:** `false`

**When to use:**

- Landing pages that shouldn't appear in sidebar
- Utility pages (404, search results)
- Pages accessed only via direct links

**Example:**

```yaml
---
title: "Search Results"
description: "Search results page"
navHidden: true
---
```

**Note:** Hidden pages are still accessible via their URL - they just don't appear in navigation.

### hide_breadcrumbs

Hide the breadcrumb navigation for this page.

```yaml
hide_breadcrumbs: true
```

**Type:** Boolean
**Default:** `false`

**When to use:**

- Landing pages
- Pages where breadcrumbs don't make sense
- Custom layouts

**Example:**

```yaml
---
title: "Welcome"
description: "Welcome to our documentation"
hide_breadcrumbs: true
---
```

## Complete Examples

### Minimal Page

The absolute minimum required:

```yaml
---
title: "Installation"
description: "How to install CelestialDocs"
---
```

### Standard Page

A typical documentation page:

```yaml
---
title: "Configuring Sidebar Navigation"
description: "Learn how to configure groups, tabs, and entries in your sidebar navigation"
navLabel: "Sidebar Config"
navIcon: "⚙️"
---
```

### Advanced Page

Using all available fields:

```yaml
---
title: "Advanced Deployment Strategies for Production"
description: "Comprehensive guide to deploying CelestialDocs to various hosting platforms with CI/CD integration"
navLabel: "Deployment"
navIcon: "🚀"
authors: ["DevOps Team", "Jane Smith"]
draft: false
navHidden: false
hide_breadcrumbs: false
---
```

### Landing Page

A landing page that doesn't appear in sidebar:

```yaml
---
title: "Welcome to CelestialDocs"
description: "Beautiful, flexible documentation template built with Astro"
navHidden: true
hide_breadcrumbs: true
---
```

### Work in Progress

A draft page:

```yaml
---
title: "Custom Themes"
description: "Guide to creating custom themes (coming soon)"
draft: true
navIcon: "🎨"
---
```

## Frontmatter Validation

CelestialDocs validates your frontmatter using Zod schemas defined in `src/content.config.ts`. This ensures:

- Required fields are present
- Field types are correct
- Invalid values are caught at build time

### Common Validation Errors

**Missing required field:**

```yaml
---
title: "My Page"
# ❌ Error: description is required
---
```

**Wrong type:**

```yaml
---
title: 123  # ❌ Error: title must be a string
description: "My page"
---
```

**Invalid boolean:**

```yaml
---
title: "My Page"
description: "Description"
draft: "yes"  # ❌ Error: draft must be true or false
---
```

## Best Practices

### Write Clear Titles

Your title should clearly describe the page content:

```yaml
✅ title: "Installing CelestialDocs"
✅ title: "Sidebar Navigation Configuration"
❌ title: "Setup"  # Too vague
❌ title: "Page 1"  # Not descriptive
```

### Write SEO-Friendly Descriptions

Descriptions should be informative and include relevant keywords:

```yaml
✅ description: "Learn how to configure sidebar navigation with groups, tabs, and auto-generated entries in CelestialDocs"
❌ description: "Navigation stuff"
```

### Use navLabel Wisely

Only override `navLabel` when necessary:

```yaml
# Good use case - title is too long
title: "Comprehensive Guide to Advanced Configuration Options"
navLabel: "Advanced Config"

# Bad use case - unnecessary override
title: "Installation"
navLabel: "Install"  # Not much shorter, keep it simple
```

### Choose Appropriate Icons

Match icons to content:

```yaml
✅ navIcon: "🚀"  # For getting started
✅ navIcon: "⚙️"  # For configuration
✅ navIcon: "📚"  # For guides
❌ navIcon: "🍕"  # Random, unrelated icon
```

### Keep Frontmatter Organized

Order fields consistently:

```yaml
---
# Required fields first
title: "Page Title"
description: "Page description"

# Optional metadata
draft: false
authors: ["Author Name"]

# Navigation overrides
navLabel: "Short Label"
navIcon: "🚀"
navHidden: false
hide_breadcrumbs: false
---
```

### Don't Over-Use Optional Fields

Only include optional fields when you need them:

```yaml
# ✅ Good - only includes what's needed
---
title: "Installation"
description: "How to install CelestialDocs"
navIcon: "🚀"
---

# ❌ Unnecessary - includes defaults
---
title: "Installation"
description: "How to install CelestialDocs"
navIcon: "🚀"
draft: false
authors: []
navHidden: false
hide_breadcrumbs: false
---
```

## Troubleshooting

### Build Fails with Frontmatter Error

**Problem:** Build fails with "Invalid frontmatter" error

**Solution:** Check that:

1. Frontmatter is at the very top of the file
2. Triple dashes (`---`) are on their own lines
3. YAML syntax is valid (proper indentation, quotes)
4. Required fields (`title`, `description`) are present

### Page Not Appearing in Navigation

**Problem:** Page exists but doesn't show in sidebar

**Possible causes:**

1. `navHidden: true` is set
2. Page is not referenced in `SIDEBAR_NAVIGATION` (for manual groups)
3. Page is in wrong directory (for auto-generated groups)
4. `draft: true` is set (in production builds)

### Icon Not Displaying

**Problem:** `navIcon` doesn't show up

**Possible causes:**

1. SVG file doesn't exist in `src/assets/icons/`
2. Emoji not supported by font
3. Typo in icon name

## What's Next?

Now that you understand frontmatter:

- Learn about the [Navigation System](navigation-system) to see how frontmatter affects navigation
- Explore [Sidebar Navigation Configuration](/docs/configuration/sidebar-navigation) for advanced navigation setup
- Check out [Icons Feature](/docs/features/icons) for more about using icons
