---
title: "Quick Start"
description: "Get up and running with CelestialDocs in minutes. Learn the essential commands and first steps to start building your documentation."
navLabel: "Quick Start"
navIcon: "⚡"
---

Ready to dive in? This guide will get you from installation to your first documentation page in just a few minutes. Let's go! 🚀

## Prerequisites

Before starting, make sure you've completed the [Installation](installation) guide. You should have:

- ✅ CelestialDocs installed
- ✅ Dependencies installed (`npm install`)
- ✅ Development server running (`npm run dev`)

## Your First Steps

### 1. Start the Development Server

If you haven't already, start the development server:

```bash
npm run dev
```

Open your browser to `http://localhost:4321/` and you'll see the CelestialDocs homepage.

### 2. Explore the Example Content

CelestialDocs comes with example documentation to help you understand the structure. Browse through:

- **Main Documentation** (`/docs`) - The documentation you're reading right now
- **Funny Docs** (`/funnydocs`) - A humorous example showing multi-collection support

### 3. Understand the File Structure

All your documentation lives in the `content/` directory:

```
content/
├── docs/              # Main documentation collection
│   ├── getting-started/
│   ├── core-concepts/
│   ├── configuration/
│   └── ...
└── funnydocs/         # Secondary collection (example)
```

Each Markdown file becomes a page on your site. The folder structure determines the URL structure.

### 4. Create Your First Page

Let's create a simple documentation page. Create a new file at `content/docs/my-first-page.md`:

```markdown
---
title: "My First Page"
description: "This is my first documentation page in CelestialDocs"
---

# My First Page

Welcome to my first documentation page!

## What I Learned

- How to create a new page
- How to add frontmatter
- How to use Markdown

## Next Steps

I'm going to explore more features!
```

Save the file and check your browser - the page is now live at `http://localhost:4321/docs/my-first-page`!

### 5. Add Your Page to Navigation

To make your page appear in the sidebar, edit `data/config.ts`. Find the `SIDEBAR_NAVIGATION` section and add your page to a group:

```typescript
{
  id: "getting-started",
  label: "Getting Started",
  icon: "🚀",
  entries: [
    { slug: "getting-started/index" },
    { slug: "getting-started/installation" },
    { slug: "getting-started/quick-start" },
    { slug: "my-first-page" }, // Add your page here
  ],
}
```

Your page now appears in the sidebar! 🎉

## Core Commands

Here are the essential commands you'll use while working with CelestialDocs:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready site to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Validate TypeScript and content schema |

### Development Workflow

Your typical workflow will look like this:

1. **Start dev server**: `npm run dev`
2. **Edit content**: Make changes to Markdown files in `content/`
3. **See changes**: Browser automatically refreshes
4. **Update navigation**: Edit `data/config.ts` when adding new pages
5. **Build**: Run `npm run build` when ready to deploy

## Key Concepts to Know

### Frontmatter

Every documentation page needs frontmatter at the top:

```yaml
---
title: "Page Title"           # Required - shown in browser tab
description: "Page summary"   # Required - for SEO and previews
navLabel: "Sidebar Label"     # Optional - override sidebar text
navIcon: "🎯"                 # Optional - add an icon
---
```

### Content Collections

CelestialDocs supports multiple documentation collections. Each collection:

- Has its own directory in `content/`
- Has its own URL prefix (e.g., `/docs`, `/funnydocs`)
- Has its own sidebar navigation
- Can have a completely different structure and tone

### Navigation Structure

Navigation is organized in three levels:

1. **Entries** - Individual pages
2. **Groups** - Collections of related pages
3. **Tabs** - Top-level sections (optional)

You configure all of this in `data/config.ts`.

## Common Tasks

### Adding a New Page

1. Create a `.md` file in `content/docs/`
2. Add frontmatter with `title` and `description`
3. Write your content in Markdown
4. Add the page to navigation in `data/config.ts`

### Organizing Pages into Folders

Create folders to organize related pages:

```
content/docs/
└── my-feature/
    ├── overview.md
    ├── setup.md
    └── examples.md
```

These become URLs like `/docs/my-feature/overview`.

### Using Auto-Generated Navigation

Instead of manually listing every page, let CelestialDocs discover them automatically:

```typescript
{
  id: "my-feature",
  label: "My Feature",
  icon: "✨",
  autoGenerated: true,  // Automatically includes all files in content/docs/my-feature/
}
```

### Adding Icons

Use emoji or SVG icons in navigation:

```typescript
// Emoji icon
icon: "🚀"

// SVG icon (must exist in src/assets/icons/)
icon: "document"
```

## Next Steps

Now that you know the basics, here's what to explore next:

### Learn the Fundamentals

- **[First Page Guide](first-page)** - Detailed guide to creating documentation pages
- **[Content Collections](/docs/core-concepts/content-collections)** - Understand the collection system
- **[Frontmatter](/docs/core-concepts/frontmatter)** - Master all frontmatter options
- **[Navigation System](/docs/core-concepts/navigation-system)** - Deep dive into navigation

### Configure Your Site

- **[Site Metadata](/docs/configuration/site-metadata)** - Set your site title, description, and branding
- **[Sidebar Navigation](/docs/configuration/sidebar-navigation)** - Customize your navigation structure
- **[Header Navigation](/docs/configuration/header-navigation)** - Configure top navigation and social links

### Explore Features

- **[Auto-Generation](/docs/features/auto-generation)** - Let the system organize your pages
- **[Multiple Collections](/docs/features/multiple-collections)** - Create separate documentation sets
- **[Tabs and Groups](/docs/features/tabs-and-groups)** - Organize complex documentation

### Get Advanced

- **[Custom Components](/docs/advanced/custom-components)** - Use MDX to add interactive components
- **[Custom Styling](/docs/advanced/custom-styling)** - Customize the look and feel
- **[Deployment](/docs/advanced/deployment)** - Deploy your site to production

## Tips for Success

### 🎯 Start Simple

Don't try to configure everything at once. Start with a few pages and expand gradually.

### 📝 Write First, Organize Later

Focus on creating content first. You can always reorganize and refine navigation later.

### 🔄 Use Auto-Generation

For large sections with many pages, auto-generated navigation saves time and maintenance.

### 🎨 Customize Gradually

CelestialDocs looks great out of the box. Customize only when you have specific needs.

### 🧪 Experiment

The development server updates instantly. Try things out and see what works!

## Getting Help

Stuck on something? Here are your resources:

- **[FAQ](/docs/help/faq)** - Answers to common questions
- **[Troubleshooting](/docs/help/troubleshooting)** - Solutions to common issues
- **[Core Concepts](/docs/core-concepts/content-collections)** - Deeper understanding of how things work
- **[Configuration Guides](/docs/configuration/overview)** - Detailed configuration documentation

## What You've Learned

Congratulations! You now know how to:

- ✅ Start the development server
- ✅ Create new documentation pages
- ✅ Add frontmatter to pages
- ✅ Add pages to navigation
- ✅ Use core commands
- ✅ Organize content into folders
- ✅ Use auto-generated navigation

You're ready to start building your documentation! Happy writing! 📚✨
