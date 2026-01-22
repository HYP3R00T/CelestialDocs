---
title: "Header Navigation Configuration"
description: "Configure the top navigation bar including menu items, social links, and header features"
navLabel: "Header Navigation"
---

The header is the top navigation bar that appears on every page of your documentation site. CelestialDocs provides flexible configuration options for navigation items, social links, and optional features like the GitHub button and layout width toggle.

## Configuration Objects

Header configuration is split into three main objects in `data/config.ts`:

1. **HEADER_NAV_ITEMS** - Main navigation menu items
2. **HEADER_SOCIAL_LINKS** - Social media links with icons
3. **HEADER_FEATURES** - Optional header features

## Navigation Items

### Basic Configuration

The `HEADER_NAV_ITEMS` array defines the main navigation menu:

```typescript
export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "Docs" },
    { href: "/funnydocs", label: "Funny Docs" },
];
```

### Field Reference

#### href

- **Type:** `string`
- **Required:** Yes
- **Description:** The URL path for the navigation item

Can be an internal path or external URL:

```typescript
{ href: "/docs", label: "Documentation" }           // Internal
{ href: "/api-reference", label: "API" }            // Internal
{ href: "https://example.com", label: "Website" }   // External
```

#### label

- **Type:** `string`
- **Required:** Yes
- **Description:** The text displayed in the navigation menu

Keep labels short and descriptive:

```typescript
{ href: "/docs", label: "Docs" }                    // Good
{ href: "/docs", label: "Documentation" }           // Also good
{ href: "/docs", label: "Complete Documentation" }  // Too long
```

### Complete Example

```typescript
export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "Docs" },
    { href: "/api-reference", label: "API" },
    { href: "/guides", label: "Guides" },
    { href: "/blog", label: "Blog" },
    { href: "https://example.com", label: "Website" },
];
```

## Social Links

### Basic Configuration

The `HEADER_SOCIAL_LINKS` array defines social media icons in the header:

```typescript
export const HEADER_SOCIAL_LINKS: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `Checkout my GitHub profile`,
        active: true,
    }
];
```

### Field Reference

#### name

- **Type:** `string`
- **Required:** Yes
- **Description:** The social platform identifier

Supported platforms:

- `github`
- `twitter` (X)
- `linkedin`
- `facebook`
- `instagram`
- `youtube`
- `discord`
- `slack`

```typescript
name: "github"
name: "twitter"
name: "linkedin"
```

#### href

- **Type:** `string`
- **Required:** Yes
- **Description:** The URL to your social profile

```typescript
href: "https://github.com/username"
href: "https://twitter.com/username"
href: "https://linkedin.com/in/username"
```

#### linkTitle

- **Type:** `string`
- **Required:** Yes
- **Description:** Tooltip text shown on hover (for accessibility)

```typescript
linkTitle: "Follow me on GitHub"
linkTitle: "Connect on LinkedIn"
linkTitle: "Join our Discord community"
```

#### active

- **Type:** `boolean`
- **Required:** Yes
- **Description:** Whether to display this social link

Set to `false` to temporarily hide a link without removing it:

```typescript
active: true   // Link is visible
active: false  // Link is hidden
```

### Multiple Social Links Example

```typescript
export const HEADER_SOCIAL_LINKS: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/username",
        linkTitle: "View source code on GitHub",
        active: true,
    },
    {
        name: "twitter",
        href: "https://twitter.com/username",
        linkTitle: "Follow us on Twitter",
        active: true,
    },
    {
        name: "discord",
        href: "https://discord.gg/invite-code",
        linkTitle: "Join our Discord community",
        active: true,
    },
    {
        name: "linkedin",
        href: "https://linkedin.com/company/name",
        linkTitle: "Connect on LinkedIn",
        active: false,  // Temporarily disabled
    },
];
```

## Header Features

### Basic Configuration

The `HEADER_FEATURES` object controls optional header features:

```typescript
export const HEADER_FEATURES: HeaderFeatures = {
    enableGitHubButton: true,
    starCountThreshold: 0,
    enableLayoutWidthToggle: true,
};
```

### Field Reference

#### enableGitHubButton

- **Type:** `boolean`
- **Required:** Yes
- **Description:** Show/hide the GitHub repository button with star count

When enabled, displays a button linking to your repository (from `SITE.repo`) with the current star count.

```typescript
enableGitHubButton: true   // Show GitHub button
enableGitHubButton: false  // Hide GitHub button
```

**Requirements:**

- `SITE.repo` must be configured with a valid GitHub URL
- Repository must be public to fetch star count

#### starCountThreshold

- **Type:** `number`
- **Required:** Yes
- **Description:** Minimum stars required to display the GitHub button

Useful for hiding the button until your repository reaches a certain popularity:

```typescript
starCountThreshold: 0     // Always show (if enabled)
starCountThreshold: 10    // Show only if 10+ stars
starCountThreshold: 100   // Show only if 100+ stars
```

**Note:** If `enableGitHubButton` is `false`, this setting has no effect.

#### enableLayoutWidthToggle

- **Type:** `boolean`
- **Required:** Yes
- **Description:** Show/hide the layout width toggle button

When enabled, users can switch between full-width and contained layout:

```typescript
enableLayoutWidthToggle: true   // Show toggle button
enableLayoutWidthToggle: false  // Hide toggle button
```

## Complete Configuration Example

Here's a complete header configuration:

```typescript
// Navigation items
export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "Documentation" },
    { href: "/api", label: "API Reference" },
    { href: "/guides", label: "Guides" },
    { href: "/blog", label: "Blog" },
];

// Social links
export const HEADER_SOCIAL_LINKS: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/myorg/myproject",
        linkTitle: "Star us on GitHub",
        active: true,
    },
    {
        name: "twitter",
        href: "https://twitter.com/myproject",
        linkTitle: "Follow us on Twitter",
        active: true,
    },
    {
        name: "discord",
        href: "https://discord.gg/myproject",
        linkTitle: "Join our Discord",
        active: true,
    },
];

// Header features
export const HEADER_FEATURES: HeaderFeatures = {
    enableGitHubButton: true,
    starCountThreshold: 10,
    enableLayoutWidthToggle: true,
};
```

## How It Looks

### Desktop Header

The header on desktop displays:

- Site logo/title (left)
- Navigation items (center)
- Social links (right)
- GitHub button (right, if enabled)
- Layout toggle (right, if enabled)
- Theme toggle (right, always visible)

### Mobile Header

On mobile devices:

- Navigation items collapse into a hamburger menu
- Social links remain visible
- All features remain accessible

## Best Practices

### Navigation Items

**Keep It Simple:**

- Limit to 4-6 main navigation items
- Use clear, concise labels
- Order items by importance (left to right)

**Good Example:**

```typescript
[
    { href: "/docs", label: "Docs" },
    { href: "/api", label: "API" },
    { href: "/guides", label: "Guides" },
]
```

**Avoid:**

```typescript
[
    { href: "/docs", label: "Complete Documentation Portal" },  // Too long
    { href: "/api", label: "API" },
    { href: "/guides", label: "Guides" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/examples", label: "Examples" },
    { href: "/blog", label: "Blog" },
    { href: "/community", label: "Community" },  // Too many items
]
```

### Social Links

**Choose Relevant Platforms:**

- Only include platforms where you're active
- Prioritize platforms your audience uses
- Set inactive links to `active: false` instead of deleting them

**Provide Clear Tooltips:**

```typescript
linkTitle: "Star us on GitHub"           // Good - action-oriented
linkTitle: "Follow for updates"          // Good - benefit-focused
linkTitle: "GitHub"                      // Okay - but less descriptive
```

### GitHub Button

**When to Enable:**

- ✅ Your project is open source
- ✅ You want to encourage contributions
- ✅ Star count is a meaningful metric for your project

**When to Disable:**

- ❌ Your repository is private
- ❌ You're documenting a closed-source product
- ❌ You prefer a cleaner header

**Star Threshold Strategy:**

```typescript
starCountThreshold: 0     // Show from day one (builds social proof)
starCountThreshold: 10    // Hide until you have some traction
starCountThreshold: 100   // Only show when well-established
```

## Common Patterns

### Multi-Collection Navigation

Link to different documentation collections:

```typescript
export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "User Guide" },
    { href: "/api-reference", label: "API" },
    { href: "/developer-docs", label: "Developers" },
];
```

### External Links

Mix internal and external navigation:

```typescript
export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "Docs" },
    { href: "https://example.com", label: "Main Site" },
    { href: "https://blog.example.com", label: "Blog" },
];
```

### Minimal Header

Keep it simple with just essential links:

```typescript
export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "Docs" },
];

export const HEADER_SOCIAL_LINKS: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/username/repo",
        linkTitle: "View on GitHub",
        active: true,
    },
];

export const HEADER_FEATURES: HeaderFeatures = {
    enableGitHubButton: false,
    starCountThreshold: 0,
    enableLayoutWidthToggle: false,
};
```

## Troubleshooting

### GitHub Button Not Showing

**Problem:** GitHub button doesn't appear even when enabled

**Solutions:**

1. Verify `SITE.repo` is set to a valid GitHub URL
2. Check that `enableGitHubButton` is `true`
3. Ensure star count meets `starCountThreshold`
4. Verify the repository is public

### Social Icons Not Appearing

**Problem:** Social links don't show up

**Solutions:**

1. Check that `active` is set to `true`
2. Verify the `name` matches a supported platform
3. Ensure `href` is a valid URL
4. Clear browser cache and rebuild

### Navigation Items Overlapping

**Problem:** Too many navigation items cause layout issues

**Solutions:**

1. Reduce the number of navigation items
2. Use shorter labels
3. Consider moving some items to the sidebar
4. Use a dropdown menu for related items (requires custom implementation)

## Next Steps

Complete your configuration with:

- **[Sidebar Navigation](./sidebar-navigation)** - Configure the left sidebar structure
- **[Site Metadata](./site-metadata)** - Ensure your repository URL is set correctly
- **[Icons](../features/icons)** - Learn about icon usage throughout the site
