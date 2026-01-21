---
title: "Table of Contents"
description: "Configure and customize the table of contents panel."
navLabel: "Table of Contents"
navIcon: "📊"
draft: false
---

The **Table of Contents (TOC)** is the right-side panel on documentation pages. It shows headings from the current page, making it easy to jump to sections.

## What is the TOC?

```
Page Content          Right Sidebar
═════════════════     ═════════════════
# Main Title          📋 On this page
                      • Main Title
## Section 1          • Section 1
                        - Subsection
### Subsection        • Section 2
                        - Another sub
## Section 2

### Another sub
```

Clicking a heading in the TOC jumps to that section.

## TOC Configuration

In `data/config.ts`:

```typescript
export const TABLE_OF_CONTENTS: TableOfContentsConfig = {
  enableExtra: false
}
```

### `enableExtra`

- **`false`** - Show basic TOC only
- **`true`** - Show TOC with extra information

## How TOC is Generated

The TOC is **automatically generated** from headings in your page:

```markdown
# Main Heading (H1)
## Section (H2)
### Subsection (H3)

## Another Section
### Another Subsection
```

**TOC shows:**
```
Main Heading
  Section
    Subsection
  Another Section
    Another Subsection
```

## Hiding TOC for a Page

In a page's frontmatter, you can hide the TOC:

```yaml
---
title: "My Page"
hide_toc: true  # (if supported in your config)
---
```

Or use frontmatter field:

```yaml
---
title: "My Page"
noTableOfContents: true
---
```

## Best Practices for TOC

- ✅ **Use clear, descriptive headings** - TOC shows heading text
- ✅ **Use proper heading hierarchy** - H2, H3, not H1 for sections
- ✅ **Keep heading short** - Long headings are hard to scan
- ✅ **Use meaningful anchor links** - Auto-generated from headings
- ❌ **Don't skip heading levels** - Go H2 → H3, not H2 → H4
- ❌ **Don't use too many headings** - Keep TOC scannable
- ❌ **Don't use special characters** - Stick to letters and numbers

## Example: Good Heading Structure

```markdown
# My Page Title

## Getting Started
### Installation
### Configuration
### First Run

## Advanced Usage
### Custom Settings
### Debugging

## FAQ

## Next Steps
```

**TOC shows:**
```
My Page Title
  Getting Started
    Installation
    Configuration
    First Run
  Advanced Usage
    Custom Settings
    Debugging
  FAQ
  Next Steps
```

## Next Steps

- 🔗 Learn about [Breadcrumbs](/docs/5-features/breadcrumbs)
- 👁️ See [Source Button](/docs/5-features/source-button)
- 🎨 Explore [Theme and Layout](/docs/5-features/theme-and-layout)
