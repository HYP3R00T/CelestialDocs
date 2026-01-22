---
title: "Icons"
description: "Learn how to use emoji and SVG icons to enhance your navigation and make your documentation more visually appealing"
---

CelestialDocs supports two types of icons: **emoji** and **SVG**. You can use them throughout your navigation to add visual interest and help users quickly identify different sections of your documentation.

## Icon Types

### Emoji Icons 🎨

Emoji icons are the simplest option—just use any Unicode emoji character:

```typescript
{
  id: "getting-started",
  label: "Getting Started",
  icon: "🚀",  // Emoji icon
}
```

**Pros:**

- ✅ No files needed—just paste the emoji
- ✅ Colorful and expressive
- ✅ Universally supported
- ✅ Perfect for friendly, approachable documentation

**Cons:**

- ❌ Limited to available emoji
- ❌ May render differently across platforms
- ❌ Can't customize colors or style

### SVG Icons 📐

SVG icons reference files in `src/assets/icons/`:

```typescript
{
  id: "api",
  label: "API Reference",
  icon: "document",  // References src/assets/icons/document.svg
}
```

**Pros:**

- ✅ Professional and consistent appearance
- ✅ Customizable (edit the SVG file)
- ✅ Render identically everywhere
- ✅ Can match your brand colors

**Cons:**

- ❌ Requires SVG files
- ❌ Need to add new files for new icons
- ❌ Less colorful by default

## Available SVG Icons

CelestialDocs includes these built-in SVG icons:

| Icon Name | Usage | Best For |
|-----------|-------|----------|
| `document` | Documentation sections | General docs, guides |
| `github` | GitHub links | Social links, repository |
| `logo` | Branding | Site logo, home link |
| `menu` | Navigation | Mobile menu toggle |
| `close` | Dismissing | Closing modals, menus |
| `right` | Navigation | Next page, forward |
| `spacing` | Layout | Width toggle, spacing |
| `theme` | Appearance | Theme switcher, dark mode |

To use an SVG icon, reference it by filename without the `.svg` extension:

```typescript
icon: "document"  // Uses src/assets/icons/document.svg
```

## Using Icons in Navigation

### Group Icons

Add icons to sidebar groups:

```typescript
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
  docs: {
    groups: [
      {
        id: "getting-started",
        label: "Getting Started",
        icon: "🚀",  // Emoji
      },
      {
        id: "api",
        label: "API Reference",
        icon: "document",  // SVG
      },
    ],
  },
};
```

### Tab Icons

Tabs can have icons too:

```typescript
{
  id: "patterns",
  label: "Common Patterns",
  icon: "🎯",
  tab: true,
}
```

### Default Tab Icon

Set an icon for the default tab:

```typescript
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
  docs: {
    defaultTab: {
      label: "Documentation",
      icon: "document",  // SVG icon
    },
    groups: [
      // ...
    ],
  },
};
```

### Page Icons

Override icons for individual pages using frontmatter:

```yaml
---
title: "Quick Start Guide"
navIcon: "⚡"
---
```

This icon appears next to the page in the sidebar, overriding any group-level icon.

## Choosing Between Emoji and SVG

### Use Emoji When

- 🎨 You want a friendly, approachable feel
- 🚀 You're documenting user-facing features
- 📚 You want quick visual variety without managing files
- 🎯 Your documentation has a casual or creative tone

**Example: User Documentation**

```typescript
groups: [
  { id: "getting-started", label: "Getting Started", icon: "🚀" },
  { id: "features", label: "Features", icon: "✨" },
  { id: "tutorials", label: "Tutorials", icon: "📖" },
  { id: "faq", label: "FAQ", icon: "❓" },
]
```

### Use SVG When

- 🏢 You want a professional, corporate look
- 🎨 You need consistent branding
- 🔧 You're documenting technical/developer content
- 📐 You want precise control over appearance

**Example: Technical Documentation**

```typescript
groups: [
  { id: "api", label: "API Reference", icon: "document" },
  { id: "cli", label: "CLI Reference", icon: "terminal" },
  { id: "sdk", label: "SDK", icon: "code" },
]
```

### Mix Both

You can absolutely mix emoji and SVG icons in the same navigation:

```typescript
groups: [
  // Friendly sections use emoji
  { id: "getting-started", label: "Getting Started", icon: "🚀" },
  { id: "tutorials", label: "Tutorials", icon: "📖" },

  // Technical sections use SVG
  { id: "api", label: "API Reference", icon: "document" },
  { id: "configuration", label: "Configuration", icon: "settings" },
]
```

This approach combines the warmth of emoji with the professionalism of SVG!

## Adding Custom SVG Icons

Want to add your own SVG icons? It's easy!

### 1. Create Your SVG

Create or download an SVG file. Make sure it:

- Has a `viewBox` attribute (e.g., `viewBox="0 0 24 24"`)
- Uses `currentColor` for fills/strokes (so it inherits text color)
- Is optimized (remove unnecessary attributes)

Example SVG:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
  <path d="M2 17l10 5 10-5"/>
  <path d="M2 12l10 5 10-5"/>
</svg>
```

### 2. Add to Icons Folder

Save your SVG file to `src/assets/icons/`:

```
src/assets/icons/
├── document.svg
├── github.svg
├── my-custom-icon.svg  ← Your new icon
└── ...
```

### 3. Use in Configuration

Reference it by filename (without `.svg`):

```typescript
{
  id: "custom-section",
  label: "Custom Section",
  icon: "my-custom-icon",
}
```

That's it! Your custom icon will now appear in the navigation.

## Icon Best Practices

### Be Consistent

Choose a style and stick with it:

- ✅ All emoji or all SVG within a section
- ✅ Mix emoji and SVG by purpose (friendly vs. technical)
- ❌ Random mixing without purpose

### Use Meaningful Icons

Icons should relate to their content:

- ✅ 🚀 for "Getting Started"
- ✅ 📖 for "Guides"
- ✅ ⚙️ for "Configuration"
- ❌ 🍕 for "API Reference" (unless it's a pizza API!)

### Don't Overuse

Not everything needs an icon:

- ✅ Icons for major sections and tabs
- ⚠️ Icons for every single page
- ❌ Different icons for every entry in a group

### Consider Accessibility

Icons are decorative—always include text labels:

- ✅ Icon + "Getting Started"
- ❌ Icon only (no label)

### Test Across Themes

Make sure your icons look good in both light and dark mode:

- SVG icons using `currentColor` automatically adapt
- Emoji may look different but are generally fine

## Popular Emoji for Documentation

Here are some commonly used emoji for documentation sections:

| Emoji | Meaning | Good For |
|-------|---------|----------|
| 🚀 | Launch, start | Getting started, quick start |
| 📖 | Book | Guides, tutorials, documentation |
| 💡 | Idea, concept | Core concepts, understanding |
| ⚙️ | Settings | Configuration, setup |
| ✨ | Special, new | Features, highlights |
| 🔬 | Advanced | Advanced topics, deep dives |
| 🎯 | Target, goal | Patterns, best practices |
| ❓ | Question | FAQ, help, support |
| 🛠️ | Tools | Development, building |
| 📚 | Library | Reference, API docs |
| 🎨 | Design | Styling, theming, customization |
| 🔐 | Security | Authentication, security |
| 🌐 | Global | Internationalization, deployment |
| 📊 | Data | Analytics, metrics |

## Examples from This Site

This documentation uses a mix of emoji and SVG icons:

**Default Tab (SVG):**

```typescript
defaultTab: {
  label: "Documentation",
  icon: "document",  // Professional SVG
}
```

**Main Groups (Emoji):**

```typescript
{ id: "getting-started", label: "Getting Started", icon: "🚀" },
{ id: "core-concepts", label: "Core Concepts", icon: "💡" },
{ id: "configuration", label: "Configuration", icon: "⚙️" },
{ id: "features", label: "Features", icon: "✨" },
{ id: "advanced", label: "Advanced", icon: "🔬" },
```

**Tab Groups (Emoji):**

```typescript
{ id: "patterns", label: "Common Patterns", icon: "🎯", tab: true },
{ id: "help", label: "Help & Support", icon: "❓", tab: true },
```

This creates a friendly, approachable feel while maintaining professionalism!

## Next Steps

- Learn about [Tabs and Groups](./tabs-and-groups) to organize your navigation
- Explore [Sidebar Navigation Configuration](../configuration/sidebar-navigation) for complete setup
- Check out [Auto-Generated Navigation](./auto-generation) to simplify icon management
