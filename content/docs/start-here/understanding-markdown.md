---
title: "Understanding Markdown"
description: "A beginner-friendly guide to writing Markdown, with visual examples."
navLabel: "Understanding Markdown"
navIcon: "📝"
draft: false
---

Markdown is a simple way to format text. It looks like plain text, but when rendered, it becomes formatted HTML.

**If you've never written Markdown before, you're in the right place.** This guide shows every common formatting option.

## Headings

Use `#` symbols at the start of a line. More `#` symbols = smaller heading:

```markdown
# This is H1 (biggest)
## This is H2
### This is H3
#### This is H4
##### This is H5
###### This is H6 (smallest)
```

**Rendered:**

# This is H1 (biggest)
## This is H2
### This is H3
#### This is H4
##### This is H5
###### This is H6 (smallest)

## Text Formatting

Make text **bold**, *italic*, or ***both***.

```markdown
This is **bold text**
This is *italic text*
This is ***bold and italic***
```

**Rendered:**

This is **bold text**
This is *italic text*
This is ***bold and italic***

You can also use `__bold__` and `_italic_` (same effect).

## Links

Create links with the syntax: `[link text](url)`

```markdown
[Click here to visit Google](https://google.com)
[Visit the GitHub repository](https://github.com/HYP3R00T/CelestialDocs)
```

**Rendered:**

[Click here to visit Google](https://google.com)
[Visit the GitHub repository](https://github.com/HYP3R00T/CelestialDocs)

## Lists

### Bullet Lists

```markdown
- Item 1
- Item 2
- Item 3
  - Nested item 3a
  - Nested item 3b
- Item 4
```

**Rendered:**

- Item 1
- Item 2
- Item 3
  - Nested item 3a
  - Nested item 3b
- Item 4

You can also use `*` or `+` instead of `-`:

```markdown
* Item 1
+ Item 2
```

### Numbered Lists

```markdown
1. First item
2. Second item
3. Third item
   1. Nested item 3a
   2. Nested item 3b
4. Fourth item
```

**Rendered:**

1. First item
2. Second item
3. Third item
   1. Nested item 3a
   2. Nested item 3b
4. Fourth item

## Code

### Inline Code

Surround code with backticks: `` `code` ``

```markdown
This is `inline code` in a sentence.
You can write `const x = 5;` and it stays inline.
```

**Rendered:**

This is `inline code` in a sentence.
You can write `const x = 5;` and it stays inline.

### Code Blocks

Use three backticks and optionally specify the language:

```markdown
\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`
```

**Rendered:**

```javascript
function hello() {
  console.log("Hello, World!");
}
```

Other language examples:

**Python:**
```python
def hello():
    print("Hello, World!")
```

**HTML:**
```html
<div class="container">
  <p>Hello</p>
</div>
```

**Bash/Shell:**
```bash
npm install
npm run dev
```

## Block Quotes

Use `>` to create a quote:

```markdown
> This is a quote.
> It can span multiple lines.
>
> And have multiple paragraphs.
```

**Rendered:**

> This is a quote.
> It can span multiple lines.
>
> And have multiple paragraphs.

## Horizontal Line

Use three hyphens, asterisks, or underscores:

```markdown
---
***
___
```

**Rendered:**

---

## Images

The syntax is similar to links, but with an `!` at the start:

```markdown
![Alt text describing the image](/images/my-image.png)
```

**Important:** Always include descriptive alt text! This helps:
- Screen readers for accessibility
- SEO
- Understanding images when they fail to load

**Example:**
```markdown
![Screenshot of the CelestialDocs sidebar](/images/sidebar-example.png)
```

## Tables

Create tables with pipes `|` and hyphens:

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

**Rendered:**

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

You can also align columns:

```markdown
| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|---------------:|
| A            | B              | C              |
| D            | E              | F              |
```

**Rendered:**

| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|---------------:|
| A            | B              | C              |
| D            | E              | F              |

## Line Breaks

A single line break in markdown doesn't create a new paragraph. You need either:

1. **Two line breaks** (blank line):
```markdown
This is paragraph 1.

This is paragraph 2.
```

2. **Two spaces at the end of a line:**
```markdown
This is line 1.
This is line 2.
```

## Escaping Special Characters

If you need to write a special character literally (like `*` or `#`), use a backslash:

```markdown
\*This is not italic\*
\[This is not a link\]
```

**Rendered:**

\*This is not italic\*
\[This is not a link\]

## Checklists

Create task lists with `- [ ]` and `- [x]`:

```markdown
- [x] Task completed
- [x] Another completed task
- [ ] Task not yet done
- [ ] Another pending task
```

**Rendered:**

- [x] Task completed
- [x] Another completed task
- [ ] Task not yet done
- [ ] Another pending task

## Common Patterns

### Important Note/Warning

Use a quote with an emoji:

```markdown
> ⚠️ **Warning:** Be careful when doing this!
```

**Rendered:**

> ⚠️ **Warning:** Be careful when doing this!

### Key Points

```markdown
✅ This worked great
❌ This didn't work
⚡ This is important
```

**Rendered:**

✅ This worked great
❌ This didn't work
⚡ This is important

## Tips for Writing Documentation

1. **Use headings** to organize your content - readers scan headings first
2. **Write short paragraphs** - easier to read on screens
3. **Use lists** - break down steps and concepts
4. **Add code examples** - show, don't just tell
5. **Be consistent** - use the same formatting style throughout
6. **Include descriptive links** - tell readers what they'll find

## Next Steps

- ✨ Learn about [Frontmatter Explained](/docs/2-core-concepts/frontmatter-explained) to customize your pages
- 🚀 Create your [Your First Page](/docs/1-start-here/your-first-page)
- 📚 Explore [MDX and Components](/docs/2-core-concepts/mdx-and-components) for advanced features
