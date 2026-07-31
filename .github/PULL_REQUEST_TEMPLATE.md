# Pull request

## Summary

<!-- Describe the focused outcome and why it is needed. Do not provide only a file list. -->

## Related issue and design

<!-- Use "Closes #123" only when this PR fully resolves the issue. Link an approved design when applicable. -->

## Behavior and implementation

<!-- Explain observable behavior, important implementation decisions, and affected failure or fallback behavior. -->

## Acceptance evidence

<!-- Map each issue criterion to concrete evidence. Add or remove rows as needed. -->

| Acceptance criterion | Evidence | Result |
|---|---|---|
| | | Pass / Fail / Unverified |

## Verification

<!-- List exact commands and real-surface checks with results. Mark unavailable browser or platform checks honestly. -->

```text
pnpm validate
pnpm build
prek run --all-files
```

## Risks, limitations, and review hotspots

<!-- Identify compatibility, accessibility, security, privacy, performance, or operational risks. Point reviewers to consequential code. -->

## Documentation impact

<!-- Link or describe documentation changes. If none are needed, explain why. -->

## Checklist

- [ ] This pull request contains one focused outcome and no unrelated changes.
- [ ] The source issue is approved and its acceptance criteria remain accurate.
- [ ] Focused verification covers changed behavior and important failure paths.
- [ ] Required local checks pass, and unavailable checks are disclosed.
- [ ] Browser-visible changes were checked for accessibility and responsive behavior.
- [ ] Documentation is updated or the lack of documentation impact is explained.
- [ ] The diff contains no credentials, private content, personal data, caches, or generated build output.
- [ ] The PR title follows Conventional Commits.
- [ ] I reviewed the final diff and can explain every change, including AI-assisted work.
