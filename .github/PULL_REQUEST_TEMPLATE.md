# Pull Request Template

## Description

Provide a clear and concise summary of the changes introduced in this pull request. Explain the purpose and context of these changes, including any relevant background.

## Related Issue(s)

Link to the issue(s) this PR addresses (e.g., `#123`).

## What Changed

List the key changes introduced in this PR:

- Change 1
- Change 2
- Change 3

## Testing

Describe how the changes were tested:

- Environment (e.g., Node.js 24, pnpm 11, macOS, Chrome, Firefox)
- Manual tests performed (e.g., checked responsive layout, dark mode toggle)
- Accessibility checks performed (e.g., keyboard navigation, `aria-*` attributes)

## Checklist

### Code Quality

- [ ] Ran `pnpm check:fix` and reviewed Biome's changes
- [ ] Ran `pnpm validate` and resolved all diagnostics
- [ ] Ran `pnpm build` successfully
- [ ] All CI checks pass

### Standards & Testing

- [ ] Followed project coding standards (Astro + Tailwind guidelines)
- [ ] Added/updated component or API documentation if needed
- [ ] Verified UI renders correctly across major browsers/devices
- [ ] Verified accessibility (alt text, labels, focus states, contrast)
- [ ] No console warnings or build errors
- [ ] PR title follows Conventional Commits

## Additional Notes

Include any relevant context for reviewers, such as risks, dependencies, or feedback areas (e.g., design trade-offs, new package additions, config changes).
