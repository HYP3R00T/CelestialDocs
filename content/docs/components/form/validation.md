---
title: "Form Validation"
description: "Add validation to your forms."
pubDatetime: 2024-01-09T00:00:00Z
---

# Form Validation

Learn how to add validation to your forms.

## Schema-based Validation

Use Zod schemas for type-safe validation:

```tsx
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});
```

## Custom Validators

Create custom validation functions for complex requirements.
