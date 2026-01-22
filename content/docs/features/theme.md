---
title: "Theme System"
description: "Learn about CelestialDocs' theme system, including dark mode, light mode, and layout width customization"
---

CelestialDocs includes a powerful theme system that lets users customize their reading experience. The theme system includes dark mode, light mode, and layout width controls—all with smooth transitions and persistent preferences.

## Dark Mode & Light Mode

CelestialDocs supports both light and dark color schemes, allowing users to choose their preferred reading experience.

### Theme Switcher

Users can toggle between themes using the theme switcher button in the header. The button shows:

- 🌙 Moon icon for dark mode
- ☀️ Sun icon for light mode

Clicking the button instantly switches themes with a smooth transition.

### System Preference Detection

By default, CelestialDocs respects the user's system preference:

- If their OS is set to dark mode, the site loads in dark mode
- If their OS is set to light mode, the site loads in light mode

This provides a seamless experience that matches the user's environment.

### Persistent Preferences

Once a user manually selects a theme, their choice is saved in browser storage. The next time they visit, the site loads with their preferred theme—even if their system preference has changed.

This means:

1. **First visit**: Uses system preference
2. **User clicks theme toggle**: Switches theme and saves preference
3. **Return visits**: Uses saved preference

### Theme Colors

Both themes use carefully chosen colors for optimal readability:

#### Light Mode

- Clean white backgrounds
- Dark text for high contrast
- Subtle gray accents
- Colorful syntax highlighting

#### Dark Mode

- Deep dark backgrounds (not pure black)
- Light text for comfortable reading
- Muted accents to reduce eye strain
- Adjusted syntax highlighting for dark backgrounds

All colors are designed to meet WCAG accessibility standards for contrast ratios.

## Layout Width Toggle

CelestialDocs offers two layout widths to accommodate different reading preferences:

### Standard Width (Default)

The default layout uses a comfortable reading width:

- Optimal line length for readability (60-80 characters)
- Centered content with margins
- Perfect for documentation and long-form content

### Full Width

Full-width mode expands the content to use the entire screen:

- Maximum space for code examples
- Better for wide tables and diagrams
- Useful when you need to see more content at once

### Width Toggle Button

Users can switch between layouts using the width toggle button in the header (if enabled). The button shows:

- 📏 Icon indicating layout control
- Instant toggle between standard and full width

### Enabling the Width Toggle

The layout width toggle is configured in `data/config.ts`:

```typescript
export const HEADER_FEATURES: HeaderFeatures = {
  enableLayoutWidthToggle: true,  // Show the width toggle button
  enableGitHubButton: true,
  starCountThreshold: 0,
};
```

Set `enableLayoutWidthToggle` to:

- `true`: Show the width toggle button (users can switch)
- `false`: Hide the button (fixed width)

### When to Enable Width Toggle

Enable the width toggle when:

- ✅ You have wide code examples or tables
- ✅ Users might want different reading experiences
- ✅ You want to give users control over layout

Disable it when:

- ✅ You want a consistent, curated experience
- ✅ Your content doesn't benefit from full width
- ✅ You want a simpler header with fewer controls

## Theme Transitions

All theme changes use smooth CSS transitions:

- Background colors fade smoothly
- Text colors transition gradually
- No jarring flashes or jumps
- Feels polished and professional

The transitions are fast enough to feel instant but smooth enough to be pleasant.

## Customizing Themes

### Color Customization

CelestialDocs uses CSS custom properties (variables) for theming. You can customize colors by modifying the theme variables.

See [Custom Styling](../advanced/custom-styling) for detailed instructions on customizing theme colors.

### Adding Custom Themes

While CelestialDocs ships with light and dark modes, you can extend the theme system to add custom themes (like "high contrast" or "sepia"). This requires modifying the theme switcher component and adding new CSS variables.

## Theme Best Practices

### Design for Both Themes

When creating custom content or components:

- ✅ Test in both light and dark mode
- ✅ Use theme-aware colors (CSS variables)
- ✅ Ensure sufficient contrast in both themes
- ❌ Don't hardcode colors that only work in one theme

### Use Semantic Colors

Use semantic color names instead of specific colors:

✅ **Good:**

```css
color: var(--text-primary);
background: var(--bg-secondary);
```

❌ **Bad:**

```css
color: #333333;
background: #ffffff;
```

Semantic colors automatically adapt to the current theme.

### Consider Images

Images may need different versions for light and dark themes:

```markdown
![Light mode image](./image-light.png)
![Dark mode image](./image-dark.png)
```

Or use images with transparent backgrounds that work in both themes.

### Test Syntax Highlighting

Code blocks use different syntax highlighting in each theme. Make sure your code examples are readable in both:

```typescript
// This should be readable in both light and dark mode
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

## Accessibility

The theme system is built with accessibility in mind:

### Keyboard Access

All theme controls are keyboard accessible:

- Tab to focus the theme toggle button
- Enter or Space to activate
- Clear focus indicators

### Screen Readers

Screen readers announce:

- "Theme toggle button"
- "Switch to dark mode" or "Switch to light mode"
- Current theme state

### Color Contrast

Both themes meet WCAG AA standards for color contrast:

- Text is readable against backgrounds
- Links are distinguishable
- Interactive elements have sufficient contrast

### Reduced Motion

Users with motion sensitivity preferences see instant theme changes without transitions, respecting the `prefers-reduced-motion` media query.

## Technical Details

### Storage

Theme preferences are stored in `localStorage`:

```javascript
localStorage.setItem('theme', 'dark');
localStorage.setItem('layoutWidth', 'full');
```

This persists across browser sessions but is specific to each browser/device.

### CSS Implementation

Themes use CSS custom properties:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #000000;
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}
```

The theme switcher toggles the `data-theme` attribute on the root element.

### No Flash of Wrong Theme

CelestialDocs prevents the "flash of wrong theme" on page load by:

1. Loading theme preference from storage immediately
2. Applying theme before rendering content
3. Using inline scripts to avoid render-blocking

This ensures users always see their preferred theme, even on the first paint.

## Header Features Configuration

The header features are configured together in `data/config.ts`:

```typescript
export const HEADER_FEATURES: HeaderFeatures = {
  enableGitHubButton: true,        // Show GitHub star button
  starCountThreshold: 0,           // Minimum stars to show count
  enableLayoutWidthToggle: true,   // Show width toggle button
};
```

### GitHub Button

Shows a GitHub star button in the header:

- Links to your repository (from `SITE.repo`)
- Displays star count (if above threshold)
- Encourages users to star your project

### Star Count Threshold

Controls when to show the star count:

- `0`: Always show star count
- `100`: Only show if repo has 100+ stars
- Useful to avoid showing "0 stars" on new projects

## Examples

### Minimal Header

```typescript
export const HEADER_FEATURES: HeaderFeatures = {
  enableGitHubButton: false,
  starCountThreshold: 0,
  enableLayoutWidthToggle: false,
};
```

Clean header with just navigation and theme toggle.

### Full-Featured Header

```typescript
export const HEADER_FEATURES: HeaderFeatures = {
  enableGitHubButton: true,
  starCountThreshold: 100,
  enableLayoutWidthToggle: true,
};
```

All features enabled for maximum functionality.

### Documentation-Focused

```typescript
export const HEADER_FEATURES: HeaderFeatures = {
  enableGitHubButton: true,
  starCountThreshold: 0,
  enableLayoutWidthToggle: true,
};
```

GitHub button for community, width toggle for code examples.

## User Experience Tips

### Let Users Choose

Don't force a theme—let users pick what works for them:

- Some prefer dark mode for late-night reading
- Others prefer light mode for daytime use
- Some switch based on ambient lighting

### Provide Visual Feedback

Make theme changes obvious:

- Smooth transitions show something happened
- The toggle button updates to reflect current state
- Colors change immediately

### Remember Preferences

Always persist user choices:

- Theme preference
- Layout width preference
- Any other customization options

This shows respect for user preferences and improves the experience on return visits.

## Common Issues

### Theme Flashing on Load

**Problem:** Page loads in wrong theme briefly before switching.

**Solution:** This is usually already handled, but if you see it:

- Check that theme script loads before content
- Verify localStorage is accessible
- Ensure no CSS is overriding theme variables

### Images Look Bad in Dark Mode

**Problem:** Images designed for light backgrounds look wrong in dark mode.

**Solution:**

- Use images with transparent backgrounds
- Provide separate images for each theme
- Add a subtle background to images
- Use SVG with theme-aware colors

### Custom Colors Don't Change

**Problem:** Custom styles don't adapt to theme changes.

**Solution:**

- Use CSS custom properties instead of hardcoded colors
- Reference theme variables: `var(--text-primary)`
- Test in both themes during development

## Next Steps

- Learn about [Custom Styling](../advanced/custom-styling) to customize theme colors
- Explore [Header Navigation](../configuration/header-navigation) to configure header features
- Check out [Site Metadata](../configuration/site-metadata) to set up your GitHub repository link
