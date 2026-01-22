---
title: "Installation"
description: "Learn how to install CelestialDocs and set up your documentation site with step-by-step instructions and system requirements."
navLabel: "Installation"
navIcon: "📦"
---

Getting CelestialDocs up and running is straightforward. This guide will walk you through the system requirements and installation process step by step.

## System Requirements

Before you begin, make sure your system meets these requirements:

### Required

- **Node.js** - Version 18.17.0 or higher (20.x or later recommended)
- **Package Manager** - npm, pnpm, or yarn
- **Git** - For cloning the repository

### Recommended

- **Code Editor** - VS Code with the Astro extension for the best development experience
- **Terminal** - A modern terminal with good Unicode support for emoji icons

### Checking Your Node.js Version

To check if you have Node.js installed and verify the version:

```bash
node --version
```

If you need to install or update Node.js, visit [nodejs.org](https://nodejs.org/) and download the LTS version.

## Installation Methods

You can install CelestialDocs in two ways: by cloning the repository or using it as a template.

### Method 1: Clone the Repository

This method is best if you want to contribute back to CelestialDocs or stay up to date with the latest changes.

```bash
# Clone the repository
git clone https://github.com/yourusername/celestialdocs.git

# Navigate into the project directory
cd celestialdocs

# Install dependencies
npm install
```

### Method 2: Use as a Template

This method is best for creating your own documentation site. It gives you a clean git history to start with.

1. **On GitHub**, click the "Use this template" button on the CelestialDocs repository
2. **Create your new repository** with your preferred name
3. **Clone your new repository**:

```bash
git clone https://github.com/yourusername/your-docs-site.git
cd your-docs-site
npm install
```

## Package Manager Options

CelestialDocs works with any Node.js package manager. Choose the one you prefer:

### Using npm (default)

```bash
npm install
```

### Using pnpm (faster, more efficient)

```bash
pnpm install
```

### Using yarn

```bash
yarn install
```

All examples in this documentation use `npm`, but you can substitute your preferred package manager.

## Verify Installation

After installation completes, verify everything is working:

```bash
# Start the development server
npm run dev
```

You should see output similar to:

```
  🚀  astro  v5.16.6 started in 123ms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose

  watching for file changes...
```

Open your browser and navigate to `http://localhost:4321/`. You should see the CelestialDocs homepage!

## Project Structure

After installation, your project will have this structure:

```
celestialdocs/
├── content/              # Your documentation content
│   ├── docs/            # Main documentation collection
│   └── funnydocs/       # Example secondary collection
├── data/
│   └── config.ts        # Site and navigation configuration
├── src/
│   ├── assets/          # Images, icons, and static assets
│   ├── components/      # Astro and React components
│   ├── content.config.ts # Content schema configuration
│   ├── layouts/         # Page layouts
│   └── pages/           # Route pages
├── public/              # Static files (copied as-is)
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies and scripts
└── tailwind.config.mjs  # Tailwind CSS configuration
```

## Available Scripts

CelestialDocs comes with several npm scripts for development and building:

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:4321/` with hot module reloading. Changes to your content and code will automatically refresh in the browser.

### Build

```bash
npm run build
```

Creates a production-ready build in the `dist/` directory. This command:

- Compiles all TypeScript and Astro files
- Processes and optimizes all assets
- Generates static HTML pages
- Validates your content schema

### Preview

```bash
npm run preview
```

Serves the production build locally so you can test it before deployment. Run this after `npm run build` to preview the final site.

## Common Installation Issues

### Port Already in Use

If port 4321 is already in use, you can specify a different port:

```bash
npm run dev -- --port 3000
```

### Node Version Mismatch

If you see errors about Node.js version, make sure you're using Node 18.17.0 or higher:

```bash
node --version
```

Consider using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage multiple Node.js versions.

### Installation Hangs or Fails

If installation hangs or fails:

1. **Clear npm cache**:

   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules and package-lock.json**:

   ```bash
   rm -rf node_modules package-lock.json
   ```

3. **Try installing again**:

   ```bash
   npm install
   ```

### Permission Errors

On macOS or Linux, if you encounter permission errors, avoid using `sudo`. Instead, configure npm to use a different directory:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```

Then add this line to your `~/.bashrc` or `~/.zshrc`:

```bash
export PATH=~/.npm-global/bin:$PATH
```

## Next Steps

Now that you have CelestialDocs installed, you're ready to start building your documentation!

- **[Quick Start](quick-start)** - Learn the basics and create your first page
- **[First Page](first-page)** - Detailed guide to creating documentation pages
- **[Core Concepts](/docs/core-concepts/content-collections)** - Understand how CelestialDocs works

## Need Help?

If you run into issues during installation:

- Check the [Troubleshooting](/docs/help/troubleshooting) guide
- Review the [FAQ](/docs/help/faq) for common questions
- Open an issue on GitHub if you've found a bug

Happy documenting! 🎉
