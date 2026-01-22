---
title: "Creating Your First Page"
description: "A comprehensive step-by-step guide to creating your first documentation page in CelestialDocs, including frontmatter, file placement, and navigation."
navLabel: "First Page"
navIcon: "📄"
---

Let's walk through creating your first documentation page from scratch. By the end of this guide, you'll understand how to create pages, add frontmatter, organize files, and make your pages appear in navigation. 📝

## Overview

Creating a documentation page in CelestialDocs involves three main steps:

1. **Create a Markdown file** in the appropriate location
2. **Add frontmatter** with required metadata
3. **Configure navigation** to make your page discoverable

Let's go through each step in detail!

## Step 1: Choose Your File Location

All documentation content lives in the `content/` directory. CelestialDocs supports multiple collections, but for now, we'll focus on the main `docs` collection.

### Understanding the Content Structure

```
content/
├── docs/              # Main documentation collection
│   ├── getting-started/
│   ├── core-concepts/
│   ├── configuration/
│   └── ...
└── funnydocs/         # Example secondary collection
```

### Where to Place Your File

The location of your file determines its URL:

| File Path | URL |
| --------- | --- |
| `content/docs/my-page.md` | `/docs/my-page` |
| `content/docs/guides/tutorial.md` | `/docs/guides/tutorial` |
| `content/docs/api/reference.md` | `/docs/api/reference` |

### Organizing with Folders

For related pages, create a folder:

```
content/docs/
└── my-feature/
    ├── overview.md      # /docs/my-feature/overview
    ├── setup.md         # /docs/my-feature/setup
    └── examples.md      # /docs/my-feature/examples
```

**Best Practice**: Use folders to group related content. This keeps your documentation organized and makes URLs more meaningful.

## Step 2: Create Your Markdown File

Let's create a new documentation page. For this example, we'll create a page about a fictional feature called "Smart Search".

### File Naming Conventions

Follow these naming rules:

- ✅ **Use kebab-case**: `smart-search.md`, `getting-started.md`
- ✅ **Use lowercase**: `my-feature.md` not `My-Feature.md`
- ✅ **Use hyphens**: `user-guide.md` not `user_guide.md`
- ✅ **Be descriptive**: `installation.md` not `install.md`
- ❌ **Avoid spaces**: Not `my page.md`
- ❌ **Avoid special characters**: Not `my@page.md`

### Create the File

Create a new file at `content/docs/features/smart-search.md`:

```bash
# Create the features folder if it doesn't exist
mkdir -p content/docs/features

# Create the file
touch content/docs/features/smart-search.md
```

Or simply create it in your code editor!

## Step 3: Add Frontmatter

Frontmatter is YAML metadata at the top of your Markdown file. It's required for every documentation page.

### Required Fields

Every page **must** have these two fields:

```yaml
---
title: "Smart Search"
description: "Learn how to use CelestialDocs' powerful smart search feature to find content quickly."
---
```

- **`title`**: The page title shown in the browser tab and page header
- **`description`**: A brief summary for SEO and social media previews

### Optional Fields

You can add these optional fields to customize your page:

```yaml
---
title: "Smart Search"
description: "Learn how to use CelestialDocs' powerful smart search feature to find content quickly."
navLabel: "Search"              # Override sidebar text (shorter than title)
navIcon: "🔍"                   # Add an icon to sidebar
navHidden: false                # Hide from sidebar navigation
hide_breadcrumbs: false         # Hide breadcrumb navigation
draft: false                    # Mark as draft (won't be published)
---
```

### Complete Frontmatter Example

Here's a complete example with all commonly used fields:

```yaml
---
title: "Smart Search"
description: "Learn how to use CelestialDocs' powerful smart search feature to find content quickly and efficiently."
navLabel: "Search"
navIcon: "🔍"
---
```

### Frontmatter Tips

**When to use `navLabel`**:

- When your title is long but you want shorter sidebar text
- Example: Title "Understanding Content Collections" → navLabel "Collections"

**When to use `navIcon`**:

- To add visual interest to navigation
- To help users quickly identify sections
- Use emoji (🔍) or SVG references (see [Icons guide](/docs/features/icons))

**When to use `navHidden`**:

- For pages you want accessible by URL but not in navigation
- For landing pages or special pages
- For work-in-progress content

## Step 4: Write Your Content

After the frontmatter, write your content using Markdown:

```markdown
---
title: "Smart Search"
description: "Learn how to use CelestialDocs' powerful smart search feature."
navLabel: "Search"
navIcon: "🔍"
---

# Smart Search

CelestialDocs includes a powerful smart search feature that helps users find content quickly.

## How It Works

The search feature indexes all your documentation and provides instant results as you type.

### Key Features

- **Instant results** - See results as you type
- **Keyboard shortcuts** - Press `Ctrl+K` or `Cmd+K` to open search
- **Smart ranking** - Most relevant results appear first

## Using Search

To use search, simply click the search icon in the header or use the keyboard shortcut.

```

### Markdown Basics

CelestialDocs supports standard Markdown:

- **Headings**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[link text](url)`
- **Lists**: Use `-` or `1.` for lists
- **Code blocks**: Use triple backticks with language
- **Images**: `![alt text](image-url)`

### Code Blocks

Always specify the language for syntax highlighting:

````markdown
```typescript
export const config = {
  title: "My Docs",
  description: "Documentation site"
};
```
````

````markdown
```bash
npm install celestialdocs
```
````

## Step 5: Add to Navigation

Your page is now accessible by URL, but it won't appear in the sidebar until you add it to navigation.

### Option 1: Manual Navigation

Edit `data/config.ts` and add your page to a group:

```typescript
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
  docs: {
    defaultTab: {
      label: "Documentation",
      icon: "document",
    },
    groups: [
      {
        id: "features",
        label: "Features",
        icon: "✨",
        entries: [
          { slug: "features/auto-generation" },
          { slug: "features/multiple-collections" },
          { slug: "features/smart-search" },  // Add your page here
        ],
      },
    ],
  },
};
```

**Key points**:

- The `slug` is the file path without `content/docs/` and without `.md`
- Order matters - pages appear in the order you list them
- You can override labels and icons per entry

### Option 2: Auto-Generated Navigation

For folders with many pages, use auto-generation:

```typescript
{
  id: "features",
  label: "Features",
  icon: "✨",
  autoGenerated: true,  // Automatically includes all files in content/docs/features/
}
```

With auto-generation:

- All files in `content/docs/features/` are automatically included
- Pages are sorted alphabetically by filename
- Each page uses its frontmatter `title` and `navIcon` (if provided)

**When to use auto-generation**:

- ✅ For large sections with many pages
- ✅ When alphabetical order works well
- ✅ To reduce maintenance

**When to use manual entries**:

- ✅ When you need specific ordering
- ✅ For small, curated sections
- ✅ When you want to exclude certain files

## Step 6: Preview Your Page

Start the development server if it's not already running:

```bash
npm run dev
```

Navigate to your page:

- **By URL**: `http://localhost:4321/docs/features/smart-search`
- **By navigation**: Click through the sidebar to find your page

### What to Check

- ✅ Page title appears correctly
- ✅ Content renders properly
- ✅ Code blocks have syntax highlighting
- ✅ Links work correctly
- ✅ Page appears in sidebar navigation
- ✅ Breadcrumbs show correct path
- ✅ Table of contents appears (for headings)

## Complete Example

Here's a complete example file at `content/docs/features/smart-search.md`:

```markdown
---
title: "Smart Search"
description: "Learn how to use CelestialDocs' powerful smart search feature to find content quickly and efficiently."
navLabel: "Search"
navIcon: "🔍"
---

# Smart Search

CelestialDocs includes a powerful smart search feature that helps users find content quickly and efficiently.

## Overview

The search feature indexes all your documentation content and provides instant, relevant results as you type. It's designed to help users find what they need without clicking through multiple pages.

## Key Features

### Instant Results

See search results in real-time as you type. No need to press Enter or wait for results to load.

### Keyboard Shortcuts

Open search quickly with keyboard shortcuts:

- **Windows/Linux**: `Ctrl + K`
- **macOS**: `Cmd + K`

### Smart Ranking

Results are ranked by relevance, with exact matches and page titles appearing first.

## How to Use

1. Click the search icon in the header, or use the keyboard shortcut
2. Start typing your search query
3. Browse results and click to navigate to a page
4. Press `Esc` to close the search modal

## Search Tips

- **Be specific**: More specific queries return better results
- **Use keywords**: Search for key terms rather than full sentences
- **Try variations**: If you don't find what you need, try different words

## Configuration

Search is enabled by default. To customize search behavior, see the [Configuration guide](/docs/configuration/site-metadata).

## Coming Soon

We're working on additional search features:

- Search filters by section
- Search history
- Fuzzy matching for typos

Stay tuned for updates! 🚀
```

## Common Patterns

### Index Pages

Create an `index.md` file in a folder to serve as the landing page for that section:

```
content/docs/
└── guides/
    ├── index.md         # /docs/guides (overview page)
    ├── tutorial-1.md
    └── tutorial-2.md
```

### Nested Organization

You can nest folders up to 3 levels deep:

```
content/docs/
└── api/
    └── reference/
        └── endpoints/
            └── users.md  # /docs/api/reference/endpoints/users
```

**Best Practice**: Keep nesting to 2-3 levels maximum for better user experience.

### Related Pages

Group related pages in the same folder and link between them:

```markdown
## Related Topics

- [Installation](../getting-started/installation)
- [Configuration](/docs/configuration/overview)
- [Deployment](/docs/advanced/deployment)
```

## Troubleshooting

### Page Not Appearing in Navigation

**Problem**: Created a page but it doesn't show in the sidebar.

**Solutions**:

- Check that you added the page to `SIDEBAR_NAVIGATION` in `data/config.ts`
- Verify the slug matches your file path exactly
- If using auto-generation, ensure the file is in the correct folder
- Check that `navHidden` is not set to `true` in frontmatter

### 404 Error When Accessing Page

**Problem**: Page shows 404 error.

**Solutions**:

- Verify the file exists in `content/docs/`
- Check the file extension is `.md` or `.mdx`
- Ensure the URL matches the file path
- Restart the development server

### Frontmatter Errors

**Problem**: Build fails with frontmatter validation errors.

**Solutions**:

- Ensure `title` and `description` are present and are strings
- Check YAML syntax (proper indentation, quotes for special characters)
- Verify frontmatter is between `---` markers
- Make sure there's no content before the opening `---`

### Content Not Updating

**Problem**: Changes don't appear in the browser.

**Solutions**:

- Wait a moment - hot reload takes 1-2 seconds
- Hard refresh the browser (`Ctrl+Shift+R` or `Cmd+Shift+R`)
- Check the terminal for build errors
- Restart the development server

## Best Practices

### Writing Great Documentation

1. **Start with why**: Explain the purpose before diving into details
2. **Use examples**: Show concrete code examples
3. **Be concise**: Get to the point quickly
4. **Use headings**: Break content into scannable sections
5. **Add links**: Link to related pages for deeper exploration

### File Organization

1. **Group related content**: Use folders for related pages
2. **Use descriptive names**: File names should indicate content
3. **Keep it flat**: Avoid deep nesting (2-3 levels max)
4. **Create index pages**: Add overview pages for sections

### Frontmatter

1. **Write good descriptions**: They appear in search results and social media
2. **Keep titles concise**: Long titles can break layouts
3. **Use navLabel wisely**: Only when you need shorter sidebar text
4. **Add icons thoughtfully**: Icons should add meaning, not clutter

## Next Steps

Now that you know how to create pages, explore these topics:

### Learn More About Content

- **[Markdown & MDX](/docs/core-concepts/markdown-mdx)** - Master Markdown and use components
- **[Frontmatter](/docs/core-concepts/frontmatter)** - Deep dive into all frontmatter options
- **[Content Collections](/docs/core-concepts/content-collections)** - Understand the collection system

### Configure Navigation

- **[Sidebar Navigation](/docs/configuration/sidebar-navigation)** - Master navigation configuration
- **[Auto-Generation](/docs/features/auto-generation)** - Use automatic navigation discovery
- **[Tabs and Groups](/docs/features/tabs-and-groups)** - Organize complex documentation

### Advanced Topics

- **[Custom Components](/docs/advanced/custom-components)** - Add interactive elements with MDX
- **[Nested Navigation](/docs/advanced/nested-navigation)** - Create complex navigation structures
- **[Custom Styling](/docs/advanced/custom-styling)** - Customize the look and feel

## Summary

You've learned how to:

- ✅ Choose the right location for your files
- ✅ Follow file naming conventions
- ✅ Add required and optional frontmatter
- ✅ Write content in Markdown
- ✅ Add pages to navigation (manual and auto-generated)
- ✅ Preview and troubleshoot your pages
- ✅ Follow best practices for documentation

You're now ready to create amazing documentation! Happy writing! 📚✨
