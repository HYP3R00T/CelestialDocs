# CelestialDocs

**Documentation that scales with your ambition**

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.0.1-green.svg)](package.json)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build)

[Live Demo](https://celestialdocs.hyperoot.dev) • [Getting Started](#-quick-start) • [Documentation](https://celestialdocs.hyperoot.dev/docs/introduction)

<!-- Screenshot Placeholder: Hero/Demo Image -->
<!-- ![CelestialDocs Hero](readme-assets/hero-demo.png) -->

## What is CelestialDocs?

CelestialDocs is a modern documentation system that **grows with your project** - from your first README to enterprise-grade documentation hubs. Whether you're documenting a single open-source library or managing documentation for multiple products, CelestialDocs adapts without forcing you into complex configurations.

Built for **developers who want power without pain** and **teams who need documentation that actually scales**, CelestialDocs solves the age-old problem: simple tools lack features, powerful tools require PhD-level setup.

**The result?** Set up once, add content forever - no constant configuration tweaking required.

## 🎯 Why CelestialDocs?

### The Problem

**Traditional documentation tools force impossible choices:**

- ❌ **Simple systems** can't handle growth (think: 10 pages becomes 1000 pages)
- ❌ **Complex systems** require hours of configuration for basic features
- ❌ **Most tools** can't manage multiple doc sets without separate deployments
- ❌ **Auto-generation** loses control; **manual setup** becomes maintenance hell

### The Solution

CelestialDocs eliminates these trade-offs:

- ✅ **Hybrid Generation**: Pin important pages, auto-discover the rest—best of both worlds
- ✅ **Multi-Collection Architecture**: Run unlimited independent doc systems from one codebase
- ✅ **Hierarchical Navigation**: Three-tier system (Entries → Groups → Tabs) that scales naturally
- ✅ **One-Time Setup**: Configure once, never touch it again as you add new content

## ✨ Key Features

### 🎯 Set It Once, Forget It Forever
**Hybrid Content Generation** lets you pin 2-3 critical pages to appear first, then automatically discovers new files alphabetically. Add 100 new markdown files? They appear instantly—no config updates needed.

<!-- Screenshot Placeholder -->
<!-- ![Hybrid Generation Example](readme-assets/hybrid-generation.png) -->

### 🌐 One Codebase, Unlimited Documentation Systems
**Multi-Collection Architecture** means you can run completely independent doc sets (like `/docs`, `/api`, `/guides`) from a single deployment. Each has its own navigation, routing, and content—no crosstalk.

<!-- Screenshot Placeholder -->
<!-- ![Multi-Collection Demo](readme-assets/multi-collection.png) -->

### 🔍 Find Anything Instantly
**Command Palette Search** (⌘K / Ctrl+K) with fuzzy matching searches both pages and individual headings. Filter by collection or content type—your users never get lost.

<!-- Screenshot Placeholder -->
<!-- ![Command Palette Search](readme-assets/command-palette.png) -->

### 🗺️ Never Lose Your Readers
**Three-Tier Navigation** (Entries → Groups → Tabs) + auto-generated breadcrumbs mean users always know where they are, even in docs with 1000+ pages and deep nesting.

### 🛡️ TypeScript Type Safety
Full type checking for every configuration option with IDE autocomplete. Frontmatter validation via Zod schemas. Catch errors before deployment, not after.

### 🎨 Smart Label Derivation
`getting-started.md` → "Getting Started" automatically. Override with frontmatter when needed. Your filenames become readable labels without manual translation.

### 🌙 Modern UI/UX
Responsive design, system-aware dark mode, accessible keyboard navigation, syntax-highlighted code blocks with dual themes (light/dark), and zero flash of unstyled content.

### ⚡ Built for Speed
Powered by **Astro** (server-first architecture), with React islands for interactivity only where needed. Fast builds, faster page loads.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/HYP3R00T/CelestialDocs.git my-docs
cd my-docs

# Install dependencies (requires Node.js 18+)
pnpm install

# Start development server at http://localhost:4321
pnpm dev
```

**🌟 [See it live](https://celestialdocs.hyperoot.dev)** → Explore the full documentation with real examples

**📖 [Full Setup Guide](https://celestialdocs.hyperoot.dev/docs/getting-started/setup)** → Step-by-step configuration walkthrough

## 💡 What You Can Build

**Single Product Documentation**
Simple setup, auto-generated navigation, perfect for open-source projects or SaaS products.

**Multi-Product Documentation Hub**
Separate collections for different products (User Docs, API Reference, Admin Guides) from one codebase.

**Enterprise Knowledge Base**
Deep nested groups for departments, teams, or topics with tab-based navigation for major sections.

**Developer Portals**
Combine getting started guides, API documentation, and code examples with type-safe content schemas.

**Internal Wikis**
Organize company knowledge with hybrid generation: pin important policies, auto-discover team docs.

## 🛠️ Technology Stack

- **[Astro 5.x](https://astro.build)** - Server-first web framework for lightning-fast content sites
- **[React 19.x](https://react.dev)** - Interactive components (command palette, toggles)
- **[TypeScript](https://www.typescriptlang.org/)** - Full type safety with strict mode
- **[Tailwind CSS 4.x](https://tailwindcss.com)** - Utility-first styling
- **[Fuse.js](https://fusejs.io/)** - Fuzzy search for command palette
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives

## 🤝 Contributing

Contributions are welcome! Whether it's bug fixes, new features, or documentation improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit using [conventional commits](https://www.conventionalcommits.org/) (`git commit -m 'feat: add amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## ❤️ Support This Project

If CelestialDocs helps you build better documentation, consider supporting its development:

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-@HYP3R00T-pink?logo=github-sponsors&logoColor=white)](https://github.com/sponsors/HYP3R00T)

Your support helps maintain and improve this project for everyone. Thank you! 🙏

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Built with ❤️ by [@HYP3R00T](https://github.com/HYP3R00T)**
