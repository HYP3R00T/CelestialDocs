---
title: "Table of Contents"
description: "Learn how the automatic table of contents works and how to configure it for your documentation pages"
---

CelestialDocs automatically generates a table of contents (TOC) for every documentation page. The TOC appears on the right side of the page and provides quick navigation to all headings within the current document.

## How It Works

The table of contents is generated automatically from your Markdown headings:

```markdown
# Main Title (H1)

## Section One (H2)

### Subsection A (H3)

### Subsection B (H3)

## Section Two (H2)

### Subsection C (H3)
```

This creates a hierarchical TOC that mirrors your document structure:

- Section One
  - Subsection A
  - Subsection B
- Section Two
  - Subsection C

## What Gets Included

By default, the TOC includes:

- **H2 headings** (`##`) - Main sections
- **H3 headings** (`###`) - Subsections
- **H4 headings** (`####`) - Sub-subsections (if enabled)

The H1 heading (`#`) is excluded because it's typically the page title, which is already shown at the top.

## Automatic Features

### Active Section Highlighting

As you scroll through the page, the TOC automatically highlights the current section you're reading. This helps users keep track of where they are in long documents.

### Smooth Scrolling

Clicking any TOC link smoothly scrolls to that section, making navigation feel polished and professional.

### Responsive Behavior

The TOC adapts to different screen sizes:

- **Desktop**: Visible on the right side
- **Tablet**: May be hidden or collapsible depending on screen width
- **Mobile**: Hidden to save space (users can still use in-page navigation)

## Configuration

The table of contents is configured in `data/config.ts`:

```typescript
export const TABLE_OF_CONTENTS: TableOfContentsConfig = {
  enableExtra: false,
};
```

### Enable Extra Levels

By default, the TOC shows H2 and H3 headings. To include H4 headings as well, set `enableExtra` to `true`:

```typescript
export const TABLE_OF_CONTENTS: TableOfContentsConfig = {
  enableExtra: true,  // Include H4 headings
};
```

**When to enable extra levels:**

- ✅ Very detailed technical documentation
- ✅ API references with nested structures
- ✅ Long guides with deep hierarchies

**When to keep it disabled:**

- ✅ Most documentation (H2 and H3 are usually enough)
- ✅ Shorter pages
- ✅ When you want a cleaner, simpler TOC

## Writing TOC-Friendly Content

### Use Clear Heading Text

Your headings become the TOC labels, so make them descriptive:

✅ **Good:**

```markdown
## Installation Steps
## Configuration Options
## Troubleshooting Common Issues
```

❌ **Bad:**

```markdown
## Step 1
## Options
## Problems
```

### Maintain Hierarchy

Don't skip heading levels—it breaks the TOC structure:

✅ **Good:**

```markdown
## Main Section
### Subsection
#### Detail
```

❌ **Bad:**

```markdown
## Main Section
#### Detail (skipped H3!)
```

### Keep Headings Concise

Long headings get truncated in the TOC:

✅ **Good:**

```markdown
## Getting Started
## API Reference
```

❌ **Bad:**

```markdown
## Getting Started with CelestialDocs: A Comprehensive Guide for Beginners
```

### Use Parallel Structure

Keep heading styles consistent within a section:

✅ **Good:**

```markdown
## Installing Dependencies
## Configuring the Project
## Running the Server
```

❌ **Bad:**

```markdown
## Installing Dependencies
## How to Configure
## Server Running
```

## Hiding the TOC

Currently, the TOC is always visible on desktop (when there's enough screen width). If you want to hide it for specific pages, you would need to customize the layout component.

However, the TOC automatically hides when:

- The page has no headings (or only one H1)
- The screen is too narrow (mobile/tablet)
- The content is very short

## TOC vs. Sidebar Navigation

It's important to understand the difference:

### Sidebar Navigation (Left)

- Shows **all pages** in the current collection
- Organized by groups and tabs
- Configured in `SIDEBAR_NAVIGATION`
- Helps users navigate **between pages**

### Table of Contents (Right)

- Shows **headings** in the current page
- Automatically generated from Markdown
- Configured in `TABLE_OF_CONTENTS`
- Helps users navigate **within a page**

Both work together to provide comprehensive navigation!

## Best Practices

### Structure Your Content

Use headings to create a logical flow:

```markdown
## Overview
Brief introduction to the topic

## Prerequisites
What you need before starting

## Step-by-Step Guide
### Step 1: Setup
### Step 2: Configuration
### Step 3: Testing

## Troubleshooting
Common issues and solutions

## Next Steps
Where to go from here
```

This creates a clear, navigable structure in the TOC.

### Don't Overuse Headings

Too many headings make the TOC cluttered:

✅ **Good:** 5-10 main sections with a few subsections each

❌ **Bad:** 30+ headings on one page

If you have that much content, consider splitting it into multiple pages.

### Use Headings for Navigation

Headings should mark major sections, not just for styling:

✅ **Good:**

```markdown
## Installation
Here's how to install...

## Configuration
Now let's configure...
```

❌ **Bad:**

```markdown
**Installation** (bold text, not a heading)
Here's how to install...
```

Bold text doesn't appear in the TOC—only actual headings do.

### Test Your TOC

After writing a page, check the TOC:

- Does it accurately represent the page structure?
- Are the labels clear and descriptive?
- Is the hierarchy logical?
- Are there too many or too few sections?

## Examples

### Good TOC Structure

```markdown
# API Authentication Guide

## Overview
Brief introduction

## Authentication Methods
### API Keys
### OAuth 2.0
### JWT Tokens

## Getting Your Credentials
### Creating an API Key
### Registering an OAuth App

## Making Authenticated Requests
### Using API Keys
### Using OAuth Tokens

## Troubleshooting
### Common Errors
### Rate Limiting

## Next Steps
```

This creates a clear, hierarchical TOC with logical grouping.

### Poor TOC Structure

```markdown
# Guide

## Introduction
## What is Authentication?
## Why Authentication Matters
## History of Authentication
## Types of Authentication
## API Keys
## What are API Keys?
## How API Keys Work
## Creating API Keys
## Using API Keys
## OAuth
## What is OAuth?
## OAuth Flow
## ... (20 more headings)
```

This creates a cluttered, overwhelming TOC. Better to split into multiple pages or consolidate sections.

## Accessibility

The TOC is built with accessibility in mind:

- **Keyboard navigation**: All TOC links are keyboard accessible
- **Screen readers**: Proper ARIA labels and semantic HTML
- **Focus indicators**: Clear focus states for keyboard users
- **Skip links**: Users can skip the TOC if needed

## Technical Details

### Heading IDs

Each heading automatically gets an ID based on its text:

```markdown
## Getting Started
```

Becomes:

```html
<h2 id="getting-started">Getting Started</h2>
```

The TOC links to these IDs:

```html
<a href="#getting-started">Getting Started</a>
```

### Duplicate Headings

If you have duplicate headings, they get numbered IDs:

```markdown
## Overview
... content ...
## Overview
```

Becomes:

```html
<h2 id="overview">Overview</h2>
<h2 id="overview-1">Overview</h2>
```

However, it's better to use unique headings for clarity!

## Next Steps

- Learn about [Breadcrumbs](./breadcrumbs) for additional navigation context
- Explore [Markdown and MDX](../core-concepts/markdown-mdx) to understand heading syntax
- Check out [Custom Styling](../advanced/custom-styling) to customize the TOC appearance
