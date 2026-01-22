---
title: "Site Metadata Configuration"
description: "Configure your site's basic information including title, description, author, and social metadata"
navLabel: "Site Metadata"
---

The `SITE` configuration object contains all the essential metadata about your documentation site. This information is used throughout your site for SEO, social sharing, and branding.

## Configuration Object

The `SITE` object is defined in `data/config.ts` and includes the following fields:

```typescript
export const SITE: SiteConfig = {
    website: "https://celestialdocs.hyperoot.dev",
    author: "Rajesh",
    repo: "https://github.com/HYP3R00T/CelestialDocs",
    title: "CelestialDocs",
    description: "Documentation template using Astro and Shadcn",
    image: setupImage,
    imageAlt: "Check out celestialdocs.hyperoot.dev",
    twitterHandle: "@HYP3R00T",
};
```

## Field Reference

### website

- **Type:** `string`
- **Required:** Yes
- **Description:** The full URL of your documentation site

This is used for generating canonical URLs, sitemaps, and social sharing metadata.

```typescript
website: "https://docs.example.com"
```

### author

- **Type:** `string`
- **Required:** Yes
- **Description:** The name of the site author or organization

This appears in metadata and can be used throughout your site.

```typescript
author: "Your Name"
```

### repo

- **Type:** `string`
- **Required:** Yes
- **Description:** The full URL to your GitHub repository

This is used for the GitHub button in the header and "Edit this page" links.

```typescript
repo: "https://github.com/username/repository"
```

### title

- **Type:** `string`
- **Required:** Yes
- **Description:** The main title of your documentation site

This appears in the browser tab, search results, and social sharing cards.

```typescript
title: "My Documentation"
```

### description

- **Type:** `string`
- **Required:** Yes
- **Description:** A brief description of your documentation site

This is used for SEO meta tags and social sharing descriptions. Keep it concise but descriptive (150-160 characters is ideal).

```typescript
description: "Comprehensive documentation for building amazing applications"
```

### image

- **Type:** `ImageMetadata`
- **Required:** Yes
- **Description:** An imported image used for social sharing (Open Graph, Twitter Cards)

Import your image at the top of the config file and reference it here:

```typescript
import setupImage from "@/assets/setup.png";

export const SITE: SiteConfig = {
    // ... other fields
    image: setupImage,
};
```

**Image Guidelines:**

- Recommended size: 1200x630 pixels
- Format: PNG or JPG
- Keep file size under 1MB
- Use high contrast and readable text

### imageAlt

- **Type:** `string`
- **Required:** Yes
- **Description:** Alternative text describing the social sharing image

This is important for accessibility and appears when the image can't be loaded.

```typescript
imageAlt: "My Documentation - Build amazing applications"
```

### twitterHandle

- **Type:** `string`
- **Required:** Yes
- **Description:** Your Twitter/X handle (including the @ symbol)

This is used in Twitter Card metadata to attribute the content to your account.

```typescript
twitterHandle: "@yourusername"
```

## Complete Example

Here's a complete example configuration for a fictional project:

```typescript
import projectLogo from "@/assets/project-logo.png";

export const SITE: SiteConfig = {
    website: "https://docs.myproject.com",
    author: "MyProject Team",
    repo: "https://github.com/myorg/myproject",
    title: "MyProject Documentation",
    description: "Complete guide to building applications with MyProject - a modern framework for developers",
    image: projectLogo,
    imageAlt: "MyProject Documentation - Build faster, ship better",
    twitterHandle: "@myproject",
};
```

## How It's Used

### SEO Meta Tags

The site metadata is automatically used to generate SEO meta tags in the HTML `<head>`:

```html
<title>MyProject Documentation</title>
<meta name="description" content="Complete guide to building applications..." />
<meta name="author" content="MyProject Team" />
<link rel="canonical" href="https://docs.myproject.com/current-page" />
```

### Social Sharing

When your documentation is shared on social media, the metadata creates rich preview cards:

**Open Graph (Facebook, LinkedIn):**

```html
<meta property="og:title" content="MyProject Documentation" />
<meta property="og:description" content="Complete guide to building..." />
<meta property="og:image" content="https://docs.myproject.com/project-logo.png" />
<meta property="og:url" content="https://docs.myproject.com" />
```

**Twitter Cards:**

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@myproject" />
<meta name="twitter:title" content="MyProject Documentation" />
<meta name="twitter:description" content="Complete guide to building..." />
<meta name="twitter:image" content="https://docs.myproject.com/project-logo.png" />
```

### Header Components

The repository URL is used for:

- GitHub button in the header (if enabled)
- "Edit this page" links on documentation pages
- Star count display (if enabled)

## Best Practices

### Writing Descriptions

- **Be Specific:** Clearly state what your documentation covers
- **Include Keywords:** Use terms people might search for
- **Stay Concise:** Aim for 150-160 characters for optimal display
- **Avoid Jargon:** Make it accessible to newcomers

**Good Example:**

```typescript
description: "Learn to build scalable web applications with MyProject - includes tutorials, API reference, and deployment guides"
```

**Avoid:**

```typescript
description: "Documentation" // Too vague
description: "This is the official documentation for MyProject which is a framework..." // Too long
```

### Choosing Social Images

- Use your logo or a branded graphic
- Include your project name in the image
- Ensure text is readable at small sizes
- Test how it looks on different platforms
- Use consistent branding across all social images

### Repository URLs

- Always use HTTPS URLs
- Link to the main repository, not a specific branch
- Ensure the repository is public if you want the GitHub button to work
- The URL should not include trailing slashes

## Testing Your Configuration

After updating your site metadata:

1. **Run the development server:**

   ```bash
   npm run dev
   ```

2. **Check the browser tab** - Your title should appear correctly

3. **View page source** - Verify meta tags are generated correctly

4. **Test social sharing** - Use tools like:
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

5. **Validate types:**

   ```bash
   npm run check
   ```

## Next Steps

Now that you've configured your site metadata, continue with:

- **[Content Systems](./content-systems)** - Set up your documentation collections
- **[Header Navigation](./header-navigation)** - Customize the top navigation bar
- **[Sidebar Navigation](./sidebar-navigation)** - Organize your documentation structure
