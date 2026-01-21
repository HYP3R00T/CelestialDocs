---
title: "Custom Landing Page (But Funnier)"
description: "Create a custom home page for your documentation site and make your visitors chuckle on arrival."
navLabel: "Custom Landing"
navIcon: "🏠"
draft: false
---

The landing page (home page) can be customized to your brand and content. Bonus: sprinkle in tasteful jokes so users stay for the docs and the laughs.

## Default Landing

By default, visiting the root `/` redirects to your first documentation collection (usually `/docs`). That’s fine, but where’s the pizzazz?

## Custom Home Page

To create a custom home page that also sets the vibe:

### Option 1: Create index.md

Create `content/docs/index.md` (or your primary collection):

```yaml
---
title: "Welcome to MyDocs"
hide_breadcrumbs: true
navHidden: true
---

# Welcome to MyDocs

Your custom home page content here. Add a joke:

"Why do devs love dark mode? Because light attracts bugs."

[View Documentation](/docs/getting-started)
[View API Reference](/api/reference)
```

### Option 2: Create a Landing Page

Create `src/pages/index.astro` for a fully custom page:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout title="Welcome">
  <main>
    <h1>Welcome to MyProject</h1>
    <p>Your custom content here</p>
    <p>Pun of the day: There are 10 kinds of people in the world—those who understand binary and those who don’t.</p>
  </main>
</BaseLayout>
```

## Redirecting Home

In `data/config.ts`, control where `/` redirects:

```typescript
export const CONTENT = {
  systems: [
    {
      id: "docs",
      dir: "content/docs",
      defaultDocRedirect: "/docs/getting-started/introduction",  // Where /docs goes
      route: "/docs"
    }
  ]
}
```

## Tips

- ✅ **Create a welcoming landing** - First impression matters
- ✅ **Link to major sections** - Guide users where to go
- ✅ **Include hero image/CTAs** - Make it visually appealing
- ❌ **Don't duplicate content** - Keep it unique
- ❌ **Don't overcomplicate** - Simple is better

## Next Steps

- 🎨 Explore [Theme and Layout](/docs/5-features/theme-and-layout)
- 📚 Learn more [Sidebar Navigation](/docs/4-sidebar-navigation/sidebar-overview)
