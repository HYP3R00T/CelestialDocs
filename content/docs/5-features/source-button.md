---
title: "Source Button"
description: "View and edit documentation source files directly."
navLabel: "Source Button"
navIcon: "👁️"
draft: false
---

The **Source Button** lets viewers see and edit the Markdown/MDX source of any page.

## What is the Source Button?

In the header of documentation pages, you'll see a button (usually a code icon) that:

- **Shows** the raw Markdown source of the page
- **Links** to the file in GitHub (if configured)
- **Allows editing** in GitHub (fork/PR workflow)

## Enabling the Source Button

The source button is usually **enabled by default**.

To verify or customize, check your component configuration.

## How It Works

1. User clicks the source button
2. A modal or side panel opens showing raw Markdown
3. User can:
   - **Copy the source** to use elsewhere
   - **Click GitHub link** to edit on GitHub
   - **Create a pull request** with improvements

## Customizing Source Button

In your configuration:

```typescript
// If you want to hide it for specific pages:
// Add navHidden: true to frontmatter (hides from sidebar)
// Or set a config option to disable the button globally
```

## Linking to GitHub

For "Edit on GitHub" functionality:

1. Set your repository in `data/config.ts`:

```typescript
export const SITE = {
  repo: "https://github.com/yourname/yourproject",
  branch: "main"
}
```

2. The source button will automatically link to the GitHub file

## Tips & Best Practices

✅ **Keep source button enabled** - Users love transparency
✅ **Have a clear contribution guide** - Link in README
✅ **Make it easy to fork and edit** - Lower barrier to PRs
✅ **Review community contributions** - Encourage improvements

❌ **Don't hide source code** - Transparency builds trust
❌ **Don't make editing hard** - Remove friction from PRs

## Example: Source Button in Action

**User clicks source button:**
```sh
Raw Markdown shows:
───────────────────
---
title: "My Page"
# My Page

Content here...
───────────────────

[View on GitHub] [Copy Source]
```

## Next Steps

- 🎨 Explore [Theme and Layout](/docs/5-features/theme-and-layout)
- 📊 Learn about [Table of Contents](/docs/5-features/table-of-contents)
- 🔗 Understand [Breadcrumbs](/docs/5-features/breadcrumbs)
