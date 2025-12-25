---
title: "Usage Examples"
description: "Practical examples of notes structure and content"
navLabel: "Usage Examples"
---

# Usage Examples

Here are some practical examples of how to structure and write notes effectively.

## Simple Note Example

```yaml
---
title: "Debugging TypeScript Errors"
description: "Common TypeScript errors and quick fixes"
navLabel: "TS Debugging"
---

# Debugging TypeScript Errors

### Error: Cannot find module 'X'

**Solution**: Install the module or add it to your imports.

### Error: Type 'X' is not assignable to type 'Y'

**Solution**: Check type compatibility or use type casting.
```

## Nested Note Structure

You can organize notes in subdirectories:

```
notes/
├── index.md
├── getting-started.md
├── deployment/
│   ├── index.md
│   ├── vercel.md
│   ├── netlify.md
│   └── docker.md
└── debugging/
    ├── index.md
    ├── typescript.md
    └── performance.md
```

## Linking Between Notes

Link to other notes using relative paths:

```markdown
See [Vercel deployment guide](../deployment/vercel) for detailed steps.
```

## Using Custom Labels

Control how notes appear in navigation:

```yaml
---
title: "TypeScript Strict Mode Configuration"
navLabel: "TS Strict Mode"  # Shows this in the sidebar
---
```

## Hiding Notes from Navigation

Mark notes as hidden if they're internal or still in progress:

```yaml
---
title: "Draft Ideas"
navHidden: true  # Won't appear in the sidebar
---
```

## Best Practices

✅ **Do:**
- Keep each note focused on one topic
- Use clear, descriptive headings
- Include code examples
- Link to related notes
- Use code syntax highlighting

❌ **Don't:**
- Create notes that duplicate the main docs
- Write overly long notes (break into multiple files)
- Leave orphaned notes without links or navigation
- Use vague titles

---

For more information, see [Tips & Tricks](tips-and-tricks).
