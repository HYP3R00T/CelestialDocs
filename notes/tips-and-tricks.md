---
title: "Tips & Tricks"
description: "Best practices and clever techniques for managing notes"
navLabel: "Tips & Tricks"
---

# Tips & Tricks

Here are some helpful tips for getting the most out of your notes collection.

## Organization

**Group related notes**: Create subdirectories to organize notes by topic.

```
notes/
├── typescript/
├── deployment/
├── debugging/
└── database/
```

**Keep titles short**: Clear, concise titles are easier to scan in the sidebar.

**Use meaningful slugs**: The filename becomes the URL slug, so use descriptive names:
- ✅ `vercel-deployment.md` → `/notes/vercel-deployment`
- ❌ `note1.md` → `/notes/note1`

## Navigation & Discovery

**Leverage navLabel**: Show different text in the sidebar than the document title:

```yaml
title: "TypeScript Strict Mode Configuration"
navLabel: "TS Strict Mode"  # Shorter, sidebar-friendly
```

**Cross-reference notes**: Link frequently accessed notes on the index page or from related notes.

**Hide work-in-progress**: Use `navHidden: true` for draft notes while developing:

```yaml
navHidden: true  # Keeps the note on your system but invisible in navigation
```

## Content Tips

**Front-load key info**: Put the most important information at the top.

**Use code blocks**: Include copy-paste-ready examples:

```typescript
// Clear, runnable examples are most helpful
const myVar = "example";
```

**Add timestamps for time-sensitive content**:

```yaml
title: "Deploy to Production - Dec 2025"
```

**Link to external resources**: Reference docs, tutorials, and tools when relevant.

## Maintenance

**Regular cleanup**: Remove notes that are outdated or no longer relevant.

**Keep related notes together**: File notes in topical directories to make updates easier.

**Update when learning**: Add new notes as you discover solutions to problems.

**Review and refactor**: Periodically review your notes and improve organization.

## Examples

### Before (Messy)
```
notes/
├── thing1.md
├── mynote.md
├── api-stuff.md
├── random.md
└── database.md
```

### After (Organized)
```
notes/
├── index.md
├── api/
│   ├── rest-best-practices.md
│   └── graphql-patterns.md
├── database/
│   ├── migration-guide.md
│   └── indexing-tips.md
└── deployment/
    ├── staging-checklist.md
    └── production-runbook.md
```

## Advanced Features

**Nested navigation**: Organize notes in subdirectories for automatic nested sidebar structure.

**Multiple systems**: This template supports both `/docs` and `/notes` collections, so you can keep comprehensive docs separate from quick references.

---

Remember: The best notes are the ones you'll actually use. Keep them simple, organized, and easy to find!
