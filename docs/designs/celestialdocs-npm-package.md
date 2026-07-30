# CelestialDocs npm package

> **Status:** Proposed
>
> **Source issue:** [#59](https://github.com/HYP3R00T/CelestialDocs/issues/59)

## What and why

CelestialDocs is currently an Astro application that users clone and modify. Its routes, components, styles, navigation, search, and content configuration depend on files and aliases inside this repository. This prevents an existing Astro project from installing CelestialDocs as a normal dependency.

CelestialDocs should become an Astro integration that owns the documentation experience while the consumer owns its content and site configuration. A consumer should install the package, add the integration and a content collection, and then write Markdown or MDX files. The existing CelestialDocs website should consume the same workspace package as an external project.

The first release is an API-shaping prerelease. It extracts and hardens the current product before adding new themes or unrelated features.

## Requirements and invariants

1. The npm package is named `celestialdocs`. The existing npm package and repository remain the release identity.
2. The consumer owns documentation content, Astro configuration, deployment, and any routes outside the configured documentation base path.
3. The package owns documentation routes under its configured base path, layouts, navigation, search generation, built-in components, and default styles.
4. Package code must not depend on repository aliases, repository-relative paths, fixed branding, or the `funnydocs` collection.
5. The initial public model has one collection named `docs`. Multiple documentation collections are not part of the first package contract.
6. Static output is required. Server rendering may be considered later and is not promised by the first prerelease.
7. Existing Markdown and MDX documents remain valid during the migration.
8. Production builds exclude entries whose frontmatter sets `draft: true`. Development mode may render them.
9. Content and configuration errors fail the build with an actionable message. The package must not silently publish a partial navigation tree or search index.
10. Package extraction must remain separate from visual redesign and new feature work.
11. No automated workflow publishes to npm without a separate, explicit release decision.

## Acceptance criteria

- A clean Astro 7 fixture can install a tarball produced by `pnpm pack` from the workspace package.
- The fixture can enable CelestialDocs through `astro.config.mjs` without copying package source.
- The fixture defines its `docs` content collection using package-provided loader and schema exports.
- Markdown and MDX pages render below a configurable base path that defaults to `/docs`.
- Generated pages include document-specific title, description, canonical URL, navigation, table of contents, and search data.
- Draft entries are available in development and absent from production HTML, raw Markdown output, navigation, search, and sitemap data.
- Missing configured navigation entries and invalid package configuration fail with messages that identify the offending value.
- Consumer routes outside the configured base path continue to work.
- The packed artifact contains only declared runtime files, type declarations, package metadata, license, and documentation.
- The package declares supported Node and Astro versions and does not bundle Astro itself.
- The fixture passes type checking and production build using the packed artifact rather than a workspace source import.
- Focused automated tests cover configuration validation, navigation, draft exclusion, route generation, and search generation.
- Browser verification covers navigation, search, theme persistence, mobile navigation, and a rendered MDX component.
- The repository website renders its primary documentation through the workspace package before a prerelease is published.

## Proposed design

### Repository layout

The repository becomes a pnpm workspace with three distinct roles:

```text
packages/
  celestialdocs/          Published Astro integration
examples/
  basic/                  External-style package fixture
content/                  Existing site content during migration
src/                      Existing site shell during migration
docs/designs/             Reviewed design records
```

`packages/celestialdocs` contains all published integration code. `examples/basic` behaves like a consumer and must not import unpublished internal source paths. The existing root site remains deployable throughout migration and moves its primary documentation route to the workspace package once the package can provide it.

A starter CLI is not part of this extraction. It can be designed after the package installation contract is proven.

### Consumer setup

A consumer installs Astro and CelestialDocs:

```sh
pnpm add astro celestialdocs
```

The integration is configured in Astro:

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import celestialDocs from "celestialdocs";

export default defineConfig({
  integrations: [
    celestialDocs({
      title: "My Documentation",
      description: "Documentation for my project",
      base: "/docs",
      social: {
        github: "https://github.com/example/project",
      },
    }),
  ],
});
```

The consumer registers the conventional `docs` collection:

```ts
// src/content.config.ts
import { defineCollection } from "astro:content";
import { docsLoader, docsSchema } from "celestialdocs/content";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
};
```

Content lives in `src/content/docs` by default. `docsLoader({ base })` may override the directory for migration or unusual repository layouts. The collection key remains `docs` in the first prerelease so the integration, generated types, and route implementation have one unambiguous contract.

### Integration configuration

The default export is an Astro integration factory. Its initial options are:

```ts
interface CelestialDocsOptions {
  title: string;
  description?: string;
  base?: string;
  logo?: {
    src: string;
    alt: string;
  };
  social?: {
    github?: string;
  };
  sidebar?: SidebarItem[];
  customCss?: string[];
}
```

`title` is required. `base` defaults to `/docs` and must be an absolute path without a trailing slash, query, fragment, `.` segment, or `..` segment. The integration normalizes the root value `/` separately. Unknown keys and invalid values produce an Astro configuration error.

Astro's own `site`, `base`, output mode, and adapter settings remain Astro configuration. CelestialDocs does not duplicate those settings.

The option set is deliberately small. Header composition, component overrides, localization, analytics, multiple collections, and plugin APIs require separate designs before becoming public contracts.

### Routes and configuration transport

During `astro:config:setup`, the integration validates options and injects only routes below the configured documentation base path:

- the documentation index and catch-all page;
- raw Markdown output when enabled by the package implementation;
- a static search-index endpoint scoped to the documentation base path.

A Vite virtual module transports validated options to packaged routes and components. Consumer code never imports repository-local configuration files.

The package does not inject a global home page or global 404 page. Those belong to the consumer. This prevents CelestialDocs from taking ownership of unrelated application routes.

A configured base path that collides with a concrete consumer route must fail during route construction when Astro can detect the collision. The error identifies the base path and tells the consumer to move either route. CelestialDocs never overwrites a consumer route silently.

### Content loader and schema

`celestialdocs/content` exports:

- `docsLoader(options?)`;
- `docsSchema(options?)`;
- the inferred public frontmatter type.

The initial schema preserves the current content fields:

```ts
interface DocsFrontmatter {
  title: string;
  description: string;
  draft?: boolean;
  authors?: string[];
  navLabel?: string;
  navIcon?: string;
  navHidden?: boolean;
  hide_breadcrumbs?: boolean;
}
```

Defaults are applied by the schema. Schema extension may be supported through a documented callback that merges consumer fields without replacing required CelestialDocs fields. The exact extension type must be proven with Astro-generated content types before being exported.

The loader ignores private working files whose names begin with `_`. Draft filtering occurs in route, navigation, search, and sitemap inputs based on build mode. It is not left to visual components.

### Navigation

The package keeps the current hybrid navigation model for migration:

- explicitly configured entries preserve declared order;
- groups may contain entries and nested groups;
- groups can opt into filesystem discovery;
- unconfigured visible files are added deterministically;
- frontmatter can override label, icon, and visibility.

Navigation configuration uses document IDs relative to the `docs` collection. Every explicit ID is checked against loaded entries. A missing ID, duplicate ID, duplicate tab identity, or group cycle fails the build. Automatically discovered entries sort by label and then ID to make builds deterministic.

Only one documentation collection is supported initially, but the internal navigation functions must receive collection data as arguments rather than importing a fixed collection or global application configuration. This leaves a future multi-collection design possible without promising it now.

### Rendering, styles, and assets

Packaged Astro components own the default documentation layout. Components receive validated configuration and route data through package modules. They do not import consumer source aliases.

Default styles are shipped by the package and loaded by the integration. Theme values remain CSS custom properties so consumers can apply limited branding without replacing components. `customCss` entries are loaded after package styles and use consumer-resolved module paths.

The prerelease does not expose every internal component. Only documented package exports are public. Internal file paths may change between prereleases. A component override API is deferred until component props and accessibility requirements can be designed as stable contracts.

Package assets use package-relative imports or emitted asset URLs. No asset may resolve through the current repository's `src/assets` directory after packing.

### Search

Search remains a static, build-time index with client-side matching for the first prerelease. The generator receives visible production entries and rendered headings. It fails the build when an entry cannot be indexed instead of returning a partial index.

The client has no hardcoded collection filters because the first contract contains only `docs`. The endpoint URL is derived from the configured documentation base path and Astro base settings. The UI provides visible loading, empty, and failure states.

Search size and hydration cost are measured in the fixture. Replacing Fuse.js or adopting Pagefind is a later decision because it changes output, deployment, and user-visible search behavior.

### Package exports

The initial export map is intentionally narrow:

```json
{
  "exports": {
    ".": "./dist/index.js",
    "./content": "./dist/content.js",
    "./styles.css": "./dist/styles.css"
  }
}
```

Each JavaScript export includes a corresponding type declaration. Packaged Astro route and component entrypoints may be private export-map entries used by the integration, but they are not documented as consumer APIs.

Astro is a peer dependency. React and other libraries used by hydrated package components are package dependencies unless the final build proves that they must be peers. Node support begins at the repository's existing minimum, Node 22.12.0. Supported Astro versions begin with Astro 7 and use an explicit compatible range.

### Migration

Migration is incremental:

1. Introduce the workspace package and external-style fixture without changing the deployed root site.
2. Move pure configuration, content, navigation, search, and rendering capabilities behind package-owned interfaces while preserving behavior.
3. Render the root site's `/docs` route through the workspace package.
4. Keep `funnydocs` on the existing application path until multiple collections or a separate demo strategy is designed.
5. Remove legacy root implementations only after no deployed route imports them.

Temporary duplication is allowed only while both paths are covered by comparison tests. The package implementation becomes authoritative before legacy files are removed.

### Release

The first candidate version is `0.1.0-next.0` under the npm `next` dist-tag. The release artifact is built and inspected with `pnpm pack`, installed into the basic fixture, and tested there.

Publishing is a separate human-authorized operation. Package provenance, npm authentication, release notes, and dist-tag changes belong to the release workflow, not the extraction pull requests. No design or implementation pull request publishes automatically.

## Interfaces and data

The package's public compatibility surface consists of:

- the default Astro integration function and documented options;
- `celestialdocs/content` loader, schema, and frontmatter types;
- documented CSS custom properties;
- generated route shapes under the configured base path;
- frontmatter behavior;
- the package's declared peer and engine ranges.

Navigation data, virtual-module names, internal components, generated search representation, and route implementation modules remain private. Consumers must not persist or import these identities.

There is no durable runtime data. Content files and consumer configuration are the source of truth. Search and route data are disposable build artifacts.

## Failure, security, and operations

- Invalid integration options fail during Astro configuration.
- A missing `docs` collection fails with setup guidance.
- Invalid frontmatter fails Astro content synchronization.
- Invalid navigation references fail the build rather than disappearing with a warning.
- Search generation failure fails the production build.
- Package routes perform no runtime filesystem access in static output.
- MDX is trusted contributor code and executes with build-process permissions. Documentation must state this trust boundary.
- Package contents are controlled through an npm `files` allowlist and checked for credentials, local paths, fixtures, and repository-only assets.
- External browser requests are documented. The package should not add telemetry.
- GitHub API failures degrade only the optional star-count display and do not block documentation rendering.
- Consumers recover from a bad prerelease by pinning the previous version. Prerelease migration notes document configuration or frontmatter changes.

## Verification

| Requirement | Evidence |
| --- | --- |
| Installable artifact | Pack tarball, inspect file list, install it into `examples/basic` |
| Public API and types | Type-check consumer configuration and content collection |
| Route ownership | Build fixture with routes inside and outside the configured base |
| Collision behavior | Fixture with a conflicting route produces the documented error |
| Content rendering | Build Markdown and MDX fixture pages and inspect output |
| Draft behavior | Development route exists; production HTML, Markdown, search, and sitemap entries do not |
| Navigation correctness | Unit tests for explicit, generated, hidden, missing, and duplicate entries |
| Search behavior | Unit tests plus browser search for pages and headings |
| Styles and assets | Packed-artifact browser test with no workspace source resolution |
| Current-site migration | Build and browser-check the root documentation site using the workspace package |
| Accessibility-sensitive UI | Keyboard checks for navigation, search, dialogs, theme, and mobile menu |
| Compatibility | CI matrix for the declared Node and Astro ranges |

The final verification report maps every acceptance criterion to a command, automated test, browser observation, or explicit unresolved result.

## Risks and tradeoffs

### Public API hardening slows extraction

A package boundary requires explicit ownership and errors that the current application can avoid. The mitigation is a prerelease and a narrow export map.

### Single collection reduces an existing differentiator

The current application demonstrates multiple collections. Supporting arbitrary collections in the first public API would duplicate collection identity across Astro content configuration, integration configuration, routes, search, and navigation. The first package therefore supports one conventional collection while internal functions remain collection-agnostic. `funnydocs` remains a local demo during migration.

### Temporary duplication can drift

The root application and package may coexist during extraction. Comparison tests and moving `/docs` to the package before deleting legacy files limit this period.

### Existing npm consumers may rely on old contents

The registry already contains `celestialdocs@0.0.6`. The prerelease uses the `next` tag and release notes explicitly state that the package is being reintroduced as an Astro integration. The `latest` tag is not moved until installation and migration documentation are reviewed.

### A broad override API could freeze component internals

Component overrides are deferred. CSS custom properties and custom CSS provide the initial customization boundary without declaring every component prop stable.

## Open questions

None currently block approval. The design recommends one `docs` collection, an Astro integration before a starter CLI, static output, a narrow export map, and a `next` prerelease. Review may reopen any of these decisions before implementation planning.

## Out of scope

- A `create-celestialdocs` CLI
- Multiple documentation collections in the public API
- Server-rendered documentation
- Localization
- A plugin ecosystem
- A theme marketplace or major visual redesign
- Stable component override contracts
- Replacing the search engine
- Automated npm publication
- A stable `1.0` release
