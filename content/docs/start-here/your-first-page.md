---
title: "Your First Page"
description: "Create your first documentation page in under 5 minutes."
navLabel: "Your First Page"
navIcon: "✏️"
draft: false
---

Let's create your first documentation page right now. This should take less than 5 minutes.

## Step 1: Create a new file

Create a new markdown file in the `content/docs/` folder. For example:

```
content/docs/my-first-page.md
```

Or organize it in a folder:

```
content/docs/tutorials/getting-started.md
```

## Step 2: Add frontmatter

At the very top of your file, add frontmatter (metadata). The only **required** field is `title`:

```yaml
---
title: "My First Page"
description: "A short description of this page"
---
```

## Step 3: Write your content

Below the frontmatter, write anything using Markdown syntax:

```markdown
---
title: "My First Page"
description: "A short description of this page"
---

# Your heading

This is your first paragraph. You can write anything here!

- List item 1
- List item 2
- List item 3

[Learn more](https://example.com)
```

## Step 4: Save and see it live

When you save the file:
1. The dev server detects the change
2. The page appears in your sidebar automatically
3. Visit it at: `http://localhost:3000/docs/my-first-page`

## What happens next?

The site automatically:
- ✅ Discovers your new file
- ✅ Adds it to the sidebar based on its folder structure
- ✅ Generates a nice-looking page with:
  - Title and description
  - Table of contents (sidebar on the right)
  - Breadcrumb navigation
  - View source button (optional)

## Customizing your page

Want more control? Add these optional frontmatter fields:

```yaml
---
title: "My First Page"
description: "A short description"
navLabel: "Custom Sidebar Label"  # Override sidebar label
navIcon: "📚"                      # Add an emoji or icon
navHidden: false                   # Hide from sidebar (but keep URL accessible)
draft: false                        # Mark as in-progress
authors: ["your-username"]         # Who wrote this
---
```

**Want to learn all the frontmatter options?** See [Frontmatter Explained](/docs/2-core-concepts/frontmatter-explained).

## Next Steps

- 📖 Learn about [Understanding Markdown](/docs/1-start-here/understanding-markdown) for formatting options
- 🎨 Explore [Icons & Emojis](/docs/4-sidebar-navigation/icons-and-emojis) to customize your sidebar
- ⚙️ Configure the sidebar layout in [Sidebar Configuration Examples](/docs/4-sidebar-navigation/sidebar-config-examples)
