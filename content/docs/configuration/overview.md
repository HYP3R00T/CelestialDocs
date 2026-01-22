---
title: "Configuration Overview"
description: "Understanding the CelestialDocs configuration system and how to customize your documentation site"
navLabel: "Overview"
navIcon: "⚙️"
---

Welcome to the configuration guide! CelestialDocs uses a centralized configuration system that makes it easy to customize your documentation site. All configuration lives in a single file: `data/config.ts`.

## What Can You Configure?

CelestialDocs provides comprehensive configuration options for every aspect of your documentation site:

- **Site Metadata** - Basic information about your site (title, description, author, repository)
- **Content Systems** - Define multiple documentation collections with their own routes
- **Header Navigation** - Top navigation bar items, social links, and features
- **Sidebar Navigation** - Left sidebar structure with groups, tabs, and entries
- **Table of Contents** - Right sidebar table of contents settings
- **Locale Settings** - Language and internationalization options

## The Configuration File

All configuration is centralized in `data/config.ts`. This TypeScript file exports several configuration objects:

```typescript
// System-wide settings
export const LOCALE: LocaleConfig = { ... };
export const CONTENT: ContentConfig = { ... };
export const SITE: SiteConfig = { ... };

// Header configuration
export const HEADER_FEATURES: HeaderFeatures = { ... };
export const HEADER_NAV_ITEMS: NavItem[] = [ ... ];
export const HEADER_SOCIAL_LINKS: SocialObjects[] = [ ... ];

// Sidebar navigation
export const SIDEBAR_NAVIGATION: SidebarNavigation = { ... };

// Table of contents
export const TABLE_OF_CONTENTS: TableOfContentsConfig = { ... };
```

## Why TypeScript?

Using TypeScript for configuration provides several benefits:

- **Type Safety** - Catch configuration errors at build time
- **IntelliSense** - Get autocomplete and documentation in your editor
- **Validation** - Ensure your configuration matches the expected structure
- **Imports** - Import images, icons, and other assets directly

## Configuration Workflow

Here's the typical workflow for configuring your site:

1. **Start with Site Metadata** - Set your site title, description, and repository URL
2. **Define Content Systems** - Configure your documentation collections and routes
3. **Set Up Header Navigation** - Add navigation items and social links
4. **Configure Sidebar Navigation** - Organize your documentation structure
5. **Customize Features** - Enable or disable optional features

## Next Steps

Explore the detailed configuration guides:

- **[Site Metadata](./site-metadata)** - Configure basic site information
- **[Content Systems](./content-systems)** - Set up documentation collections
- **[Header Navigation](./header-navigation)** - Customize the top navigation bar
- **[Sidebar Navigation](./sidebar-navigation)** - Organize your documentation structure

## Quick Example

Here's a minimal configuration to get you started:

```typescript
export const SITE: SiteConfig = {
    website: "https://docs.example.com",
    author: "Your Name",
    repo: "https://github.com/username/repo",
    title: "My Documentation",
    description: "Comprehensive documentation for my project",
    image: setupImage,
    imageAlt: "My Documentation Site",
    twitterHandle: "@username",
};

export const CONTENT: ContentConfig = {
    systems: [
        {
            id: "docs",
            dir: "content/docs",
            defaultDocRedirect: "/docs/getting-started",
            route: "/docs",
        },
    ],
};
```

## Tips for Configuration

- **Start Simple** - Begin with basic configuration and add complexity as needed
- **Use TypeScript** - Let the type system guide you and catch errors early
- **Test Changes** - Run `npm run dev` to see your changes in real-time
- **Check Types** - Run `npm run check` to validate your configuration
- **Follow Conventions** - Use kebab-case for IDs and routes

Ready to dive in? Start with [Site Metadata](./site-metadata) to configure your basic site information!
