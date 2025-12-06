# Custom Instructions for Commit Message Generation

- Use the format: `<type>(<scope>): <subject>`, where scope is optional and used only when it adds clarity.
- Valid types are: feat, fix, docs, style, refactor, test, chore.
- Keep the subject line under 50 characters.
- Start the subject with a verb in the imperative mood (e.g., "fix", "add", "update").
- Provide a detailed description in the body if the commit introduces significant changes.
- Reference related issues or pull requests in the footer using `Closes #123` or `Fixes #456`.

## Examples

- `feat: add support for new authentication method`
- `fix(api): correct token expiration logic`
- `docs: update installation instructions`
