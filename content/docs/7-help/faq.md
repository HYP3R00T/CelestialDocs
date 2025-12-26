---
title: "Frequently Asked Questions"
description: "Common questions about CelestialDocs and answers."
navLabel: "FAQ"
navIcon: "❓"
draft: false
---

## Can I use CelestialDocs for my project?

**Yes!** CelestialDocs is a template repository. You can fork it and customize it for your needs.

## How do I add a new page?

1. Create a `.md` or `.mdx` file in `content/docs/` (or your collection folder)
2. Add frontmatter with `title` and `description`
3. Write your content
4. Save and refresh - it appears automatically!

See [Your First Page](/docs/1-start-here/your-first-page) for details.

## How do I organize pages?

Create folders under `content/docs/`:

```
content/docs/
├─ getting-started/
│  ├─ introduction.md
│  └─ installation.md
├─ guides/
│  ├─ configuration.md
│  └─ advanced.md
```

Folders become sidebar groups. See [Content Structure](/docs/2-core-concepts/content-structure).

## How do I control the sidebar?

Edit `data/config.ts` and modify `SIDEBAR_NAVIGATION`. See [Sidebar Configuration Examples](/docs/4-sidebar-navigation/sidebar-config-examples) for real examples.

## Can I have multiple documentation collections?

**Yes!** Create multiple content systems in `data/config.ts`. See [Content Systems](/docs/3-configuration/content-systems).

## How do I change the site title?

Edit `data/config.ts` and change the `SITE` object:

```typescript
export const SITE = {
  title: "My New Title",
  // ...
}
```

## How do I add images?

Place images in `public/images/` and reference them:

```markdown
![Alt text](/images/my-image.png)
```

Or store in `src/assets/` and import them in MDX files.

## Can I use React components?

**Yes!** Use `.mdx` files to embed React components:

```mdx
import { Button } from "@/components/ui/button";

<Button>Click me!</Button>
```

See [MDX and Components](/docs/2-core-concepts/mdx-and-components).

## How do I hide a page from the sidebar?

Set `navHidden: true` in frontmatter:

```yaml
---
title: "My Page"
navHidden: true
---
```

The page is still accessible via URL, just not shown in sidebar.

## How do I customize colors?

Edit `tailwind.config.ts` to change theme colors. Or use Tailwind's `dark:` classes for dark mode support.

## Can I deploy this?

**Yes!** CelestialDocs builds to static HTML. Deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

## Next Steps

- 📚 Explore [Sidebar Navigation](/docs/4-sidebar-navigation/sidebar-overview)
- 🔧 Configure [Header Navigation](/docs/3-configuration/header-navigation)
- 💡 Learn [MDX and Components](/docs/2-core-concepts/mdx-and-components)
