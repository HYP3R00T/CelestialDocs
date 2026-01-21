---
title: "Site Metadata"
description: "Configure site-level information like title, description, author, and social links."
navLabel: "Site Metadata"
navIcon: "📌"
draft: false
---

Site metadata is configured through the `SITE` object in `data/config.ts`. This information appears in:

- Browser tabs
- Search engine results
- Social media previews
- Header links

## SITE Configuration

```typescript
export const SITE = {
  website: "https://example.com",
  author: "Your Name",
  repo: "https://github.com/yourname/project",
  title: "My Documentation",
  description: "Clear documentation for my amazing project",
  image: setupImage,
  imageAlt: "Documentation preview",
  twitterHandle: "@yourhandle"
}
```

## Fields

### `website` (Required)

The full URL of your documentation site.

```typescript
website: "https://celestialdocs.hyperoot.dev"
```

Used for:
- SEO canonical URLs
- Social media previews
- Meta tags

### `author` (Required)

Your name or organization name.

```typescript
author: "Rajesh"
```

Used for:
- Page author attribution
- Footer/header information
- Content metadata

### `repo` (Required)

Link to your GitHub repository.

```typescript
repo: "https://github.com/HYP3R00T/CelestialDocs"
```

Used for:
- GitHub button in header (if enabled)
- Source links
- Contribution links

### `title` (Required)

Your site's main title.

```typescript
title: "CelestialDocs"
```

Used for:
- Browser tab title
- Header branding
- SEO title tag

### `description` (Required)

One-sentence description of your project.

```typescript
description: "A documentation template built with Astro and Shadcn"
```

Used for:
- Meta description tag
- Search results preview
- Social media preview

### `image` (Required)

Open Graph image for social media previews.

```typescript
import setupImage from "@/assets/setup.png";

image: setupImage
```

Used for:
- Twitter card preview
- Facebook preview
- Discord embed preview

### `imageAlt` (Optional)

Alt text for the image.

```typescript
imageAlt: "CelestialDocs documentation site preview"
```

Used for:
- Accessibility
- Image fallback

### `twitterHandle` (Optional)

Your Twitter username.

```typescript
twitterHandle: "@HYP3R00T"
```

Used for:
- Twitter card attribution
- Social sharing

### `branch` (Optional)

Git branch for edit links.

```typescript
branch: "main"
```

### `starCountThreshold` (Optional)

Show GitHub stars if count exceeds this.

```typescript
starCountThreshold: 100  // Only show if repo has 100+ stars
```

## Example: Complete SITE Configuration

```typescript
import siteImage from "@/assets/docs-preview.png";

export const SITE = {
  website: "https://mydocs.example.com",
  author: "Jane Developer",
  repo: "https://github.com/janedev/my-docs",
  branch: "main",
  title: "MyProject Documentation",
  description: "Complete guide to using MyProject framework",
  image: siteImage,
  imageAlt: "MyProject Documentation Site",
  twitterHandle: "@janedev",
  starCountThreshold: 50
}
```

## Where This Appears

### Browser Tab
```yaml
Title: "CelestialDocs"
```

### Search Results
```yaml
CelestialDocs
Description: "A documentation template built with Astro and Shadcn"
Website: https://celestialdocs.hyperoot.dev
```

### Social Media Preview
When someone shares your link on Twitter, Discord, etc.:

```yaml
[Image from SITE.image]
CelestialDocs
A documentation template built with Astro and Shadcn
celestialdocs.hyperoot.dev
```

### Header
The site title appears as a link/branding in the header.

## Tips & Best Practices

- ✅ **Keep description under 160 characters** - search engines truncate longer text
- ✅ **Make description unique** - describe what makes YOUR docs special
- ✅ **Use a high-quality image** - appears in social previews
- ✅ **Keep author name current** - for attribution
- ✅ **Include Twitter handle if active** - helps social sharing
- ❌ **Don't use special characters** - some platforms don't render them
- ❌ **Don't make title too long** - it truncates in browser tabs
- ❌ **Don't use placeholder repo** - update to your real repository

## Next Steps

- 🔗 Configure [Header Navigation](/docs/3-configuration/header-navigation)
- 📦 Set up [Content Systems](/docs/3-configuration/content-systems)
- 📑 Master [Sidebar Navigation](/docs/4-sidebar-navigation/sidebar-overview)
