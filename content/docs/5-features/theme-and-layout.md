---
title: "Theme and Layout"
description: "Customize the appearance and layout of your documentation."
navLabel: "Theme & Layout"
navIcon: "🎨"
draft: false
---

CelestialDocs comes with built-in theme and layout customization.

## Theme Toggle

A **theme toggle** lets users switch between light and dark modes.

### Enabling Theme Toggle

The theme toggle appears in the header by default. It's always enabled.

### How it Works

- **Light mode** - Default bright theme
- **Dark mode** - Dark background with light text
- **Auto-detect** - Respects system preferences
- **Remembers choice** - Saves user preference in browser

### Customizing Theme

Theme colors are defined in your Tailwind CSS config (`tailwind.config.ts`).

To customize:

1. Edit `tailwind.config.ts`
2. Change color values
3. Reload your dev server

Example:

```typescript
// tailwind.config.ts
theme: {
  colors: {
    primary: '#3b82f6',  // Blue
    background: '#ffffff' // White
  }
}
```

## Layout Width Toggle

A **width toggle** lets users switch between narrow and wide layouts.

### Enabling/Disabling

In `data/config.ts`:

```typescript
export const HEADER_FEATURES = {
  enableLayoutWidthToggle: true   // Show toggle
  // or
  enableLayoutWidthToggle: false  // Hide toggle
}
```

### What It Does

- **Narrow layout** - Sidebar narrower, content narrower (better focus)
- **Wide layout** - Sidebar wider, content wider (see more)

Users can toggle with a button in the header.

## Dark Mode Implementation

CelestialDocs uses Tailwind's `dark:` mode.

### Using Dark Mode in Content

In Markdown/MDX, use Tailwind classes:

```mdx
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">
  This respects dark mode!
</div>
```

### CSS Variables

Dark mode is implemented with CSS variables. Custom CSS can use:

```css
@media (prefers-color-scheme: dark) {
  .my-element {
    background-color: #1e293b;
    color: #f8fafc;
  }
}
```

## Custom Styling

### Styling Individual Pages

Use Tailwind classes in your MDX:

```mdx
---
title: "Styled Page"
---

<div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
  <h2 className="text-2xl font-bold mb-4">Custom Styled Section</h2>
  <p>This is styled with Tailwind classes.</p>
</div>
```

### Global Styles

Edit `src/styles/global.css` for site-wide styling:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #1e40af;
}

.my-custom-class {
  @apply p-4 rounded-lg bg-blue-100 dark:bg-blue-900;
}
```

## Layout Classes

Use these Tailwind utilities for layout:

### Spacing
```sh
p-4   - Padding: 1rem all sides
m-4   - Margin: 1rem all sides
px-6  - Padding horizontal: 1.5rem
py-4  - Padding vertical: 1rem
```

### Colors
```sh
bg-white     - Background white
text-gray-900 - Text dark gray
border-gray-200 - Border light gray
dark:bg-slate-900  - Dark mode background
dark:text-white    - Dark mode text
```

### Display
```sh
flex      - Flexbox layout
grid      - CSS Grid layout
block     - Block display
hidden    - Display none
dark:hidden - Hidden in dark mode
```

## Responsive Design

CelestialDocs is mobile-responsive by default.

### Mobile Breakpoints

```typescript
sm: 640px    // Small phones
md: 768px    // Tablets
lg: 1024px   // Desktops
xl: 1280px   // Large screens
```

### Using Responsive Classes

```mdx
<div className="text-sm md:text-base lg:text-lg">
  Text changes size on different screens
</div>
```

## Tips & Best Practices

- ✅ **Keep dark mode in mind** - Always test both modes
- ✅ **Use semantic colors** - `primary`, `secondary`, `danger`
- ✅ **Test on mobile** - Documentation is often read on phones
- ✅ **Use Tailwind utilities** - Don't write custom CSS unless needed
- ✅ **Maintain contrast** - Ensure text is readable in both modes
- ❌ **Don't disable theme toggle** - Users love dark mode
- ❌ **Don't hardcode colors** - Use CSS variables or Tailwind
- ❌ **Don't break responsive design** - Test on all screen sizes

## Next Steps

- 📊 Learn about [Table of Contents](/docs/5-features/table-of-contents)
- 🔗 Explore [Breadcrumbs](/docs/5-features/breadcrumbs)
- 👁️ See [Source Button](/docs/5-features/source-button)
