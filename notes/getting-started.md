---
title: "Getting Started with Notes"
description: "Quickstart for using the Notes collection"
navLabel: "Getting Started"
---

# Getting Started with Notes

This is a quick introduction to the Notes collection. It's designed for short, focused reference material.

## Creating Notes

1. **Add a markdown file** under the `notes/` directory
2. **Include frontmatter** with at least `title` and `description`
3. **Use `navLabel`** to customize how the note appears in navigation (optional)

Example frontmatter:

```yaml
---
title: "My Quick Note"
description: "A short description"
navLabel: "Quick Note"  # Optional: customize nav label
navHidden: false        # Optional: hide from navigation
---
```

## Tips for Organizing Notes

- Keep each note focused on a single topic
- Use short, descriptive titles
- Link between related notes using markdown links
- Organize related notes in subdirectories if your collection grows

## Example Notes

See [Usage Examples](usage) for practical examples of how to structure and write notes.

## Advanced Features

- **Hide notes from navigation**: Set `navHidden: true` in frontmatter for personal notes
- **Custom navigation labels**: Use `navLabel` to display different text in the sidebar
- **Organize by topic**: Create subdirectories like `notes/deployment/`, `notes/debugging/`, etc.

---

Ready to add your first note? Start with something simple and build from there!
