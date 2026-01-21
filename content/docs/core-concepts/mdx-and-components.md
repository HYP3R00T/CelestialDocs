---
title: "MDX and Components"
description: "How to use React components in your Markdown documentation."
navLabel: "MDX & Components"
navIcon: "⚛️"
draft: false
---

**MDX** is Markdown + JSX. It lets you embed React components directly in your documentation.

## Should you use MDX or Markdown?

### Use Markdown (`.md`) for:
- ✅ Regular documentation pages
- ✅ Guides, tutorials, reference
- ✅ Anything that's mostly text and code
- ✅ Faster to load
- ✅ Simpler to maintain

### Use MDX (`.mdx`) for:
- ✅ Interactive demos
- ✅ Custom visualizations
- ✅ Forms or quizzes
- ✅ Embedded components

## Creating an MDX File

**Markdown file:**
```sh
content/docs/guides/my-page.md
```

**MDX file:**
```sh
content/docs/guides/my-page.mdx
```

## Basic MDX Example

In your `.mdx` file, you can write normal Markdown **and** embed React components:

```mdx
---
title: "My Interactive Page"
description: "A page with interactive components"
---

# Welcome

This is regular **Markdown** content.

<MyComponent prop="value" />

You can mix more Markdown here.
```

## Importing Components

To use a component, first import it:

```mdx
---
title: "My Page"
---

import { Button } from "@/components/ui/button";
import CustomAlert from "@/components/CustomAlert";

# My Page

Click the button:

<Button>Click me!</Button>

<CustomAlert type="warning">
  This is a custom alert component
</CustomAlert>
```

## Using Shadcn Components

CelestialDocs comes with Shadcn UI components. You can use them:

```mdx
---
title: "Using UI Components"
---

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

# Buttons and Separators

<Button variant="outline">Click me</Button>

<Separator className="my-4" />

<Button variant="destructive">Delete</Button>
```

## Props and State

React components can have state and interactivity:

```mdx
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

# Counter Demo

Try clicking the button:

<Counter />
```

## Client-Side Components

MDX files are by default **server-rendered**. If you need client-side interactivity:

```mdx
---
title: "Interactive Demo"
---

import { InteractiveTool } from "@/components/InteractiveTool";

export const metadata = {
  hydration: "client:load"  // Makes it interactive on the client
};

# Interactive Tool

<InteractiveTool />
```

Or rename the file to `.mdx` and use:

```mdx
<InteractiveTool client:load />
```

## Styling in MDX

You can use Tailwind classes in your components:

```mdx
import { Button } from "@/components/ui/button";

export function StyledBox() {
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <h3 className="text-lg font-bold">Important!</h3>
      <p>This is styled with Tailwind CSS classes.</p>
      <Button className="mt-4">Action</Button>
    </div>
  );
}

# Styled Content

<StyledBox />
```

## Tips & Best Practices

- ✅ **Keep components simple** - complex logic should live in component files
- ✅ **Use TypeScript** - type your props for safety
- ✅ **Test locally** - run `npm run dev` to see changes
- ✅ **Document props** - explain what each prop does
- ❌ **Don't overuse MDX** - Markdown is simpler and faster
- ❌ **Don't put logic in MDX** - move it to component files
- ❌ **Avoid heavy components** - they slow down the page

## When NOT to Use Components

If you just need to show code examples, use code blocks instead:

```markdown
# Bad: Using a component for display

<CodeExample />

# Good: Using a code block

\`\`\`javascript
const greeting = "Hello!";
console.log(greeting);
\`\`\`
```

## Examples in Your Project

Check these files for real examples:
- `content/docs/` - various `.md` and `.mdx` files
- `src/components/` - reusable components
- Shadcn components - pre-built UI elements

## Next Steps

- 📝 Review [Understanding Markdown](/docs/1-start-here/understanding-markdown) for MD basics
- 🎨 Explore [Styling Content](/docs/6-common-patterns/styling-content) for Tailwind tips
- ⚙️ See [Frontmatter Explained](/docs/2-core-concepts/frontmatter-explained) for MDX file metadata
