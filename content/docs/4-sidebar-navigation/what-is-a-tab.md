---
title: "What is a Tab?"
description: "Understanding top-level tabs in sidebar navigation."
navLabel: "Tabs"
navIcon: "📌"
draft: false
---

A **tab** is a top-level section in the sidebar. Tabs are switchable-users click them to change the view.

## Visual Example

```sh
┌─────────────────────────┐
│ [Docs] [Guides] [API]   │  ← Tabs (clickable)
├─────────────────────────┤
│ Getting Started          │  ← Groups
│   Introduction           │
│   Installation           │  ← Entries
│ Reference                │
│   Config                 │
│   Types                  │
└─────────────────────────┘
```

When you click a tab, the sidebar content changes to show that tab's groups and entries.

## Tabs vs Groups

| Tabs | Groups |
|------|--------|
| Top-level, user-switchable | Nested under tabs, collapsible |
| Each tab has its own icon | Groups inherit/have their own icons |
| One tab active at a time | Multiple groups can be expanded |
| Creates clear content sections | Organizes pages within a tab |

## Creating a Tab

In `SIDEBAR_NAVIGATION`, set `tab: true`:

```typescript
{
  id: 'getting-started',
  label: 'Getting Started',
  icon: '🚀',
  tab: true,  // ← This makes it a tab
  entries: [
    { slug: 'getting-started/introduction' },
    { slug: 'getting-started/installation' }
  ]
}
```

Multiple groups with `tab: true` become multiple tabs:

```typescript
groups: [
  {
    id: 'guides',
    label: 'Guides',
    tab: true,  // First tab
    entries: [ ... ]
  },
  {
    id: 'reference',
    label: 'Reference',
    tab: true,  // Second tab
    entries: [ ... ]
  },
  {
    id: 'advanced',
    label: 'Advanced',
    tab: true,  // Third tab
    groups: [ ... ]
  }
]
```

**Sidebar shows:**
```sh
[Guides] [Reference] [Advanced]
```

## Tab with Nested Groups

A tab can contain multiple groups:

```typescript
{
  id: 'documentation',
  label: 'Documentation',
  icon: '📚',
  tab: true,
  groups: [
    {
      id: 'basics',
      label: 'Basics',
      entries: [
        { slug: 'docs/markdown' },
        { slug: 'docs/frontmatter' }
      ]
    },
    {
      id: 'advanced',
      label: 'Advanced',
      entries: [
        { slug: 'docs/mdx' },
        { slug: 'docs/components' }
      ]
    }
  ]
}
```

**Sidebar shows:**
```sh
[Documentation]
  Basics
    Markdown
    Frontmatter
  Advanced
    MDX
    Components
```

## defaultTab

The `defaultTab` is special. It appears first and is active by default:

```typescript
export const SIDEBAR_NAVIGATION = {
  docs: {
    defaultTab: {
      label: "Docs",
      icon: "book"  // Icon shown in header
    },
    groups: [
      // Groups here appear under the defaultTab
      {
        id: 'getting-started',
        label: 'Getting Started'
        // Note: NO tab: true
      }
    ]
  }
}
```

The difference:
- **defaultTab**: Special first tab, doesn't need `tab: true`
- **Other tabs**: Regular groups with `tab: true`

## Real-World Example

A documentation site with clear sections:

```typescript
export const SIDEBAR_NAVIGATION = {
  docs: {
    defaultTab: {
      label: "Learn",
      icon: "book"
    },
    groups: [
      {
        id: 'getting-started',
        label: 'Getting Started',
        icon: '🚀',
        entries: [ ... ]
        // Appears under "Learn" tab
      },
      {
        id: 'guides',
        label: 'Guides',
        icon: '📖',
        entries: [ ... ]
        // Appears under "Learn" tab
      },
      {
        id: 'api',
        label: 'API Reference',
        icon: '⚙️',
        tab: true,  // ← This becomes a separate tab
        entries: [ ... ]
      },
      {
        id: 'advanced',
        label: 'Advanced',
        icon: '⚡',
        tab: true,  // ← This becomes a separate tab
        entries: [ ... ]
      }
    ]
  }
}
```

**Sidebar shows:**
```sh
[Learn] [API Reference] [Advanced]

Under "Learn":
  Getting Started
    Introduction
    Installation
  Guides
    Configuration
    Advanced Usage
```

## Tips & Best Practices

- ✅ **Use 2-4 tabs max** - Too many tabs is overwhelming
- ✅ **Use clear tab labels** - "Docs", "API", "Guides" are clear
- ✅ **Use icons for each tab** - Makes them visually distinct
- ✅ **Limit groups per tab** - 5-8 groups per tab is reasonable
- ✅ **Use tabs for major content divisions** - Not small variations
- ❌ **Don't create too many tabs** - Becomes hard to navigate
- ❌ **Don't nest tabs** - Only top-level groups are tabs
- ❌ **Don't use tabs for small sections** - Use groups instead

## When to Use Tabs

✅ **Separate docs from API reference**
```sh
[Docs] [API]
```

✅ **Separate different product versions**
```sh
[v1] [v2] [v3]
```

✅ **Separate different doc types**
```sh
[Guides] [Reference] [Examples]
```

- ❌ **Don't use tabs for every group** - Use groups for that
- ❌ **Don't use tabs for minor sections** - Too much clicking

## Next Steps

- 📄 Review [What is an Entry?](/docs/2-core-concepts/what-is-an-entry)
- 📦 Understand [What is a Group?](/docs/2-core-concepts/what-is-a-group)
- 🎨 Explore [Icons & Emojis](/docs/4-sidebar-navigation/icons-and-emojis)
- ⚙️ See [Sidebar Configuration Examples](/docs/4-sidebar-navigation/sidebar-config-examples)
