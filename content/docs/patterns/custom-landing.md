---
title: "Custom Landing Pages"
description: "Create beautiful, custom landing pages for your documentation collections with Astro components and layouts."
navLabel: "Custom Landing"
navIcon: "🏠"
---

While CelestialDocs provides great default pages, sometimes you want a custom landing page that showcases your documentation in a unique way. This guide shows you how to create custom landing pages with Astro.

## Why Custom Landing Pages?

Custom landing pages let you:

- **Make a strong first impression** - Showcase your project's personality
- **Guide users** - Direct different audiences to relevant sections
- **Highlight features** - Show what makes your docs special
- **Add interactivity** - Include demos, search, or dynamic content
- **Match your brand** - Create a cohesive experience with your main site

## Basic Custom Landing Page

Let's start with a simple custom landing page.

### Create the Page

Create `src/pages/index.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Welcome" description="Welcome to our documentation">
  <div class="landing-page">
    <section class="hero">
      <h1>Welcome to Our Documentation</h1>
      <p>Everything you need to get started and succeed</p>
      <div class="cta-buttons">
        <a href="/docs/getting-started" class="btn btn-primary">
          Get Started
        </a>
        <a href="/docs/features" class="btn btn-secondary">
          Explore Features
        </a>
      </div>
    </section>

    <section class="features">
      <div class="feature-grid">
        <div class="feature-card">
          <div class="icon">📚</div>
          <h3>Comprehensive Guides</h3>
          <p>Step-by-step tutorials and guides</p>
        </div>
        <div class="feature-card">
          <div class="icon">🚀</div>
          <h3>Quick Start</h3>
          <p>Get up and running in minutes</p>
        </div>
        <div class="feature-card">
          <div class="icon">💡</div>
          <h3>Examples</h3>
          <p>Real-world code examples</p>
        </div>
      </div>
    </section>
  </div>
</BaseLayout>

<style>
  .landing-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .hero {
    text-align: center;
    padding: 4rem 0;
  }

  .hero h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 2rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .btn {
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .btn-primary {
    background: #3b82f6;
    color: white;
  }

  .btn-secondary {
    background: #e5e7eb;
    color: #1f2937;
  }

  .features {
    padding: 4rem 0;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    padding: 2rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    text-align: center;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
</style>
```

## Advanced Landing Page

Let's create a more sophisticated landing page with multiple sections.

### Hero Section with Gradient

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Welcome" description="Welcome to our documentation">
  <div class="landing">
    <!-- Hero Section -->
    <section class="hero-gradient">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Build Amazing Things
          </h1>
          <p class="hero-subtitle">
            Comprehensive documentation to help you succeed
          </p>
          <div class="hero-actions">
            <a href="/docs/getting-started" class="btn-primary">
              Get Started →
            </a>
            <a href="/docs/examples" class="btn-outline">
              View Examples
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links Section -->
    <section class="quick-links">
      <div class="container">
        <h2>Popular Topics</h2>
        <div class="links-grid">
          <a href="/docs/getting-started/installation" class="link-card">
            <span class="link-icon">⚡</span>
            <span class="link-title">Installation</span>
            <span class="link-desc">Get set up in 5 minutes</span>
          </a>
          <a href="/docs/configuration" class="link-card">
            <span class="link-icon">⚙️</span>
            <span class="link-title">Configuration</span>
            <span class="link-desc">Customize everything</span>
          </a>
          <a href="/docs/features" class="link-card">
            <span class="link-icon">✨</span>
            <span class="link-title">Features</span>
            <span class="link-desc">Discover what's possible</span>
          </a>
          <a href="/api/overview" class="link-card">
            <span class="link-icon">📚</span>
            <span class="link-title">API Reference</span>
            <span class="link-desc">Complete API docs</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Why Choose Us?</h2>
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">🚀</div>
            <h3>Fast & Modern</h3>
            <p>Built with the latest technologies for optimal performance</p>
          </div>
          <div class="feature">
            <div class="feature-icon">📖</div>
            <h3>Well Documented</h3>
            <p>Clear, comprehensive documentation with examples</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🎨</div>
            <h3>Customizable</h3>
            <p>Make it yours with flexible theming and styling</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🌙</div>
            <h3>Dark Mode</h3>
            <p>Beautiful dark mode included out of the box</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of developers building with our platform</p>
        <a href="/docs/getting-started" class="btn-large">
          Start Building Now →
        </a>
      </div>
    </section>
  </div>
</BaseLayout>

<style>
  .landing {
    width: 100%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Hero Section */
  .hero-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 6rem 0;
    text-align: center;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    opacity: 0.9;
    margin-bottom: 2rem;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary {
    background: white;
    color: #667eea;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .btn-outline {
    background: transparent;
    color: white;
    padding: 1rem 2rem;
    border: 2px solid white;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.2s;
  }

  .btn-outline:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  /* Quick Links */
  .quick-links {
    padding: 4rem 0;
    background: #f9fafb;
  }

  .quick-links h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .link-card {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .link-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .link-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .link-title {
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
  }

  .link-desc {
    color: #6b7280;
    font-size: 0.875rem;
  }

  /* Features Section */
  .features-section {
    padding: 4rem 0;
  }

  .features-section h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .feature {
    text-align: center;
  }

  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .feature h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .feature p {
    color: #6b7280;
  }

  /* CTA Section */
  .cta-section {
    padding: 4rem 0;
    background: #1f2937;
    color: white;
    text-align: center;
  }

  .cta-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .cta-section p {
    font-size: 1.125rem;
    opacity: 0.9;
    margin-bottom: 2rem;
  }

  .btn-large {
    display: inline-block;
    background: #3b82f6;
    color: white;
    padding: 1.25rem 3rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.125rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .btn-large:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1.125rem;
    }

    .hero-actions {
      flex-direction: column;
      align-items: stretch;
    }
  }
</style>
```

## Collection-Specific Landing Pages

Create different landing pages for each collection.

### Main Docs Landing

```astro
---
// src/pages/docs/index.astro
import DocsLayout from '../../layouts/DocsLayout.astro';
---

<DocsLayout title="Documentation" description="Main documentation">
  <div class="docs-landing">
    <h1>Documentation</h1>
    <p>Everything you need to know</p>

    <div class="section-grid">
      <a href="/docs/getting-started" class="section-card">
        <h2>🚀 Getting Started</h2>
        <p>New here? Start with the basics</p>
      </a>

      <a href="/docs/guides" class="section-card">
        <h2>📖 Guides</h2>
        <p>Step-by-step tutorials</p>
      </a>

      <a href="/docs/api" class="section-card">
        <h2>🔌 API Reference</h2>
        <p>Complete API documentation</p>
      </a>
    </div>
  </div>
</DocsLayout>
```

### API Landing

```astro
---
// src/pages/api/index.astro
import ApiLayout from '../../layouts/ApiLayout.astro';
---

<ApiLayout title="API Reference" description="API documentation">
  <div class="api-landing">
    <h1>API Reference</h1>
    <p>Complete technical documentation</p>

    <div class="api-sections">
      <a href="/api/authentication" class="api-card">
        <h3>🔐 Authentication</h3>
        <p>API keys, OAuth, and security</p>
      </a>

      <a href="/api/endpoints" class="api-card">
        <h3>🔌 Endpoints</h3>
        <p>All available API endpoints</p>
      </a>

      <a href="/api/webhooks" class="api-card">
        <h3>🪝 Webhooks</h3>
        <p>Real-time event notifications</p>
      </a>
    </div>
  </div>
</ApiLayout>
```

## Interactive Elements

### Search Bar

Add a search bar to your landing page:

```astro
<div class="search-container">
  <input
    type="search"
    placeholder="Search documentation..."
    class="search-input"
  />
</div>

<style>
  .search-container {
    max-width: 600px;
    margin: 2rem auto;
  }

  .search-input {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1.125rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    transition: border-color 0.2s;
  }

  .search-input:focus {
    outline: none;
    border-color: #3b82f6;
  }
</style>
```

### Version Selector

Show different versions:

```astro
<div class="version-selector">
  <label>Version:</label>
  <select>
    <option>v2.0 (Latest)</option>
    <option>v1.5</option>
    <option>v1.0</option>
  </select>
</div>
```

### Code Example

Include a quick code example:

```astro
<section class="code-preview">
  <h2>Quick Example</h2>
  <pre><code>npm install your-package
npm run dev</code></pre>
</section>
```

## Dynamic Content

### Recent Updates

Show recent documentation updates:

```astro
---
import { getCollection } from 'astro:content';

const recentDocs = await getCollection('docs');
const sorted = recentDocs
  .sort((a, b) => b.data.date - a.data.date)
  .slice(0, 5);
---

<section class="recent-updates">
  <h2>Recent Updates</h2>
  <ul>
    {sorted.map(doc => (
      <li>
        <a href={`/docs/${doc.slug}`}>
          {doc.data.title}
        </a>
      </li>
    ))}
  </ul>
</section>
```

### Popular Pages

Show most visited pages:

```astro
<section class="popular-pages">
  <h2>Popular Pages</h2>
  <div class="page-list">
    <a href="/docs/getting-started">Getting Started</a>
    <a href="/docs/configuration">Configuration</a>
    <a href="/docs/deployment">Deployment</a>
  </div>
</section>
```

## Best Practices

### Keep It Simple

Don't overwhelm users with too much information. Focus on:

- Clear call-to-action
- Easy navigation to key sections
- Visual hierarchy

### Mobile-First

Ensure your landing page works great on mobile:

```css
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}
```

### Fast Loading

Optimize for performance:

- Minimize JavaScript
- Optimize images
- Use CSS for animations
- Lazy load below-the-fold content

### Accessibility

Make it accessible:

- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation works
- Maintain good color contrast

## Redirects

Set up redirects to your custom landing page:

```typescript
// data/config.ts
export const CONTENT: ContentConfig = {
  systems: [
    {
      id: 'docs',
      dir: 'docs',
      defaultDocRedirect: '/',  // Redirect to custom landing
      route: 'docs',
    },
  ],
};
```

## Next Steps

Now that you can create custom landing pages, explore:

- [Two-Collection Layout](/docs/patterns/two-collection-layout) - Multiple documentation sets
- [Custom Components](/docs/advanced/custom-components) - Add interactive elements
- [Custom Styling](/docs/advanced/custom-styling) - Make it beautiful

Create a landing page that makes users excited to explore your documentation! 🏠
