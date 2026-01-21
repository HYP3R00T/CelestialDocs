---
title: "Icons and Emojis"
description: "How to add icons and emojis to entries, groups, and tabs."
navLabel: "Icons & Emojis"
navIcon: "✨"
draft: false
---

Icons and emojis make your sidebar visually organized and easier to scan.

## Where Icons Appear

Icons show next to:
- **Entries** (page links)
- **Groups** (section headers)
- **Tabs** (top-level sections)

```sh
Tab Icon → 📚
  Group Icon → 🚀 Getting Started
    Entry Icon → 📄 Introduction
```

## Two Ways to Add Icons

### 1. Emoji (Easiest)

Use any emoji directly:

```typescript
{
  id: 'getting-started',
  label: 'Getting Started',
  icon: '🚀'  // Emoji
}
```

### 2. Icon File (Professional)

Use SVG icons from `src/assets/icons/`:

```sh
src/assets/icons/
├─ rocket.svg
├─ book.svg
├─ code.svg
└─ gear.svg
```

Then reference by name:

```typescript
{
  id: 'getting-started',
  label: 'Getting Started',
  icon: 'rocket'  // Looks for src/assets/icons/rocket.svg
}
```

## Emoji Examples

Common emojis for documentation:

```typescript
// Navigation & Structure
icon: '📚'  // Documentation
icon: '🚀'  // Getting started
icon: '⚙️'  // Configuration
icon: '📖'  // Guides
icon: '📝'  // Notes

// Content Types
icon: '💡'  // Tips
icon: '⚠️'  // Warnings
icon: '❓'  // FAQ
icon: '🔍'  // Search/Reference
icon: '🎯'  // Goals
icon: '📊'  // Data/Analytics

// Technical
icon: '⚡'  // Advanced/Performance
icon: '🔧'  // Tools
icon: '📦'  // Packages
icon: '🌐'  // Web/Internet
icon: '💻'  // Code/Development

// Visual
icon: '🎨'  // Design/Styling
icon: '🌈'  // Colors
icon: '✨'  // Features/Sparkle
```

## Icon Files (SVG)

For a professional look, use SVG icons.

### Finding Icon Names

Check what SVGs exist in your project:

```bash
ls src/assets/icons/
```

Common icon names:
```sh
book.svg
rocket.svg
code.svg
gear.svg
terminal.svg
palette.svg
layers.svg
link.svg
arrow-right.svg
check.svg
```

### Using Icon Files

```typescript
{
  id: 'guides',
  label: 'Guides',
  icon: 'book'  // Uses src/assets/icons/book.svg
}
```

### Icon Priority

If both emoji and SVG file exist:
```typescript
icon: 'rocket'  // File: src/assets/icons/rocket.svg

// Priority:
// 1. Check for rocket.svg → Use it
// 2. If not found → Check if 'rocket' is an emoji → Use it
// 3. If neither → Use default document icon
```

## Configuration Examples

### Entries with Icons

```typescript
entries: [
  {
    slug: 'getting-started/introduction',
    icon: '📖'  // Emoji
  },
  {
    slug: 'getting-started/installation',
    icon: 'download'  // SVG file
  },
  {
    slug: 'getting-started/quick-start',
    label: 'Quick Start',
    icon: '⚡'  // Emoji
  }
]
```

### Groups with Icons

```typescript
{
  id: 'getting-started',
  label: 'Getting Started',
  icon: '🚀',  // Emoji
  entries: [ ... ]
},
{
  id: 'reference',
  label: 'Reference',
  icon: 'book',  // SVG file
  entries: [ ... ]
}
```

### Tabs with Icons

```typescript
{
  id: 'docs',
  label: 'Docs',
  icon: '📚',  // Emoji
  tab: true,
  entries: [ ... ]
},
{
  id: 'api',
  label: 'API',
  icon: 'terminal',  // SVG file
  tab: true,
  entries: [ ... ]
}
```

## Frontmatter Icons

You can also set icons in file frontmatter:

```yaml
---
title: "Quick Start"
navIcon: "⚡"
---
```

Then the sidebar entry automatically uses this icon if no override exists in config.

## Complete Example

```typescript
export const SIDEBAR_NAVIGATION = {
  docs: {
    defaultTab: {
      label: "Documentation",
      icon: "book"  // SVG icon
    },
    groups: [
      {
        id: 'start',
        label: 'Start Here',
        icon: '🚀',  // Emoji
        entries: [
          { slug: 'getting-started/intro', icon: '🌟' },
          { slug: 'getting-started/setup', icon: '🔧' }
        ]
      },
      {
        id: 'guides',
        label: 'Guides',
        icon: '📖',  // Emoji
        entries: [
          { slug: 'guides/configuration' },
          { slug: 'guides/advanced' }
        ]
      },
      {
        id: 'reference',
        label: 'Reference',
        icon: 'book',  // SVG file
        tab: true,
        entries: [
          { slug: 'reference/api', icon: '⚙️' },
          { slug: 'reference/types', icon: '📋' }
        ]
      }
    ]
  }
}
```

**Sidebar shows:**
```sh
[Documentation]
🚀 Start Here
   🌟 Intro
   🔧 Setup
📖 Guides
   Configuration
   Advanced
[Reference]
   ⚙️ API
   📋 Types
```

## Tips & Best Practices

- ✅ **Use emojis for quick, approachable docs** - Friendly and fun
- ✅ **Use SVG icons for professional/corporate docs** - Polished look
- ✅ **Be consistent** - Use same icon style throughout
- ✅ **Use meaningful icons** - 🚀 for "start", 📚 for "docs"
- ✅ **Limit unique icons** - Avoid icon overload
- ❌ **Don't mix too many styles** - Either mostly emoji or mostly SVG
- ❌ **Don't use irrelevant icons** - 🦆 doesn't make sense for "Configuration"
- ❌ **Don't add icons to every single entry** - Use sparingly

## Next Steps

- 📦 Learn about [What is a Group?](/docs/2-core-concepts/what-is-a-group)
- 📄 Review [What is an Entry?](/docs/2-core-concepts/what-is-an-entry)
- ⚙️ See [Sidebar Configuration Examples](/docs/4-sidebar-navigation/sidebar-config-examples)
