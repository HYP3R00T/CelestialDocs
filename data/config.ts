import setupImage from "@/assets/setup.png";
import type { SidebarNavigation } from "@/lib/docs/types";
import type {
    ContentConfig,
    HeaderFeatures,
    LocaleConfig,
    NavItem,
    SiteConfig,
    SocialObjects,
    TableOfContentsConfig,
} from "@/lib/types";

// ---------------------------------------------------------------------------
// System-wide configuration
// ---------------------------------------------------------------------------
export const LOCALE: LocaleConfig = {
    lang: "en",
};

export const CONTENT: ContentConfig = {
    systems: [
        {
            id: "docs",
            dir: "content/docs",
            defaultDocRedirect: "/docs/introduction",
            route: "/docs",
        },
        {
            id: "funnydocs",
            dir: "content/funnydocs",
            defaultDocRedirect: "/funnydocs/getting-started",
            route: "/funnydocs",
        },
    ],
};

export const SITE: SiteConfig = {
    website: "https://celestialdocs.hyperoot.dev",
    author: "Rajesh",
    repo: "https://github.com/HYP3R00T/CelestialDocs",
    title: "CelestialDocs",
    description: "A modern, flexible documentation system built with Astro featuring hierarchical navigation, hybrid content generation, and multi-collection support",
    image: setupImage,
    imageAlt: "CelestialDocs - Modern documentation system with Astro",
    twitterHandle: "@HYP3R00T",
};

// ---------------------------------------------------------------------------
// Header-specific configuration
// ---------------------------------------------------------------------------
export const HEADER_FEATURES: HeaderFeatures = {
    enableGitHubButton: true,
    starCountThreshold: 0,
    enableLayoutWidthToggle: true,
};

export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "Docs" },
    { href: "/funnydocs", label: "Funny Docs" },
];

export const HEADER_SOCIAL_LINKS: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `Checkout my GitHub profile`,
        active: true,
    },
];

// ---------------------------------------------------------------------------
// Sidebar navigation structure for docs content
// ---------------------------------------------------------------------------
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
    docs: {
        defaultTab: {
            label: "Overview",
            icon: "📚",
        },
        groups: [
            { slug: "introduction" },
            { slug: "why-celestialdocs" },
            {
                id: "getting-started",
                label: "Getting Started",
                icon: "🚀",
                tab: true,
                entries: [
                    { slug: "getting-started/setup" },
                    { slug: "getting-started/first-collection" },
                    { slug: "getting-started/first-page" },
                ],
            },
            {
                id: "navigation-system",
                label: "Navigation System",
                icon: "🗺️",
                tab: true,
                groups: [
                    {
                        id: "core-concepts",
                        label: "Core Concepts",
                        entries: [
                            { slug: "navigation-system/core-concepts/entries" },
                            { slug: "navigation-system/core-concepts/groups" },
                            { slug: "navigation-system/core-concepts/nested-groups" },
                            { slug: "navigation-system/core-concepts/tabs" },
                        ],
                    },
                    {
                        id: "hierarchy",
                        label: "Understanding the Hierarchy",
                        entries: [
                            { slug: "navigation-system/hierarchy/three-tier-overview" },
                            { slug: "navigation-system/hierarchy/visual-guide" },
                            { slug: "navigation-system/hierarchy/real-world-examples" },
                        ],
                    },
                ],
            },
            {
                id: "configuration",
                label: "Configuration",
                icon: "⚙️",
                tab: true,
                groups: [
                    {
                        id: "basics",
                        label: "Configuration Basics",
                        entries: [
                            { slug: "configuration/basics/overview" },
                            { slug: "configuration/basics/content-systems" },
                            { slug: "configuration/basics/sidebar-structure" },
                        ],
                    },
                    {
                        id: "advanced",
                        label: "Advanced Configuration",
                        groups: [
                            {
                                id: "nested-setup",
                                label: "Nested Groups Setup",
                                entries: [
                                    { slug: "configuration/advanced/nested-setup/single-level" },
                                    { slug: "configuration/advanced/nested-setup/multi-level" },
                                    { slug: "configuration/advanced/nested-setup/best-practices" },
                                ],
                            },
                            {
                                id: "tab-management",
                                label: "Tab Management",
                                entries: [
                                    { slug: "configuration/advanced/tab-management/creating-tabs" },
                                    { slug: "configuration/advanced/tab-management/grouping-tabs" },
                                    { slug: "configuration/advanced/tab-management/organization-patterns" },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: "generation-strategies",
                label: "Generation Strategies",
                icon: "✨",
                tab: true,
                groups: [
                    {
                        id: "auto-generation",
                        label: "Auto-Generation",
                        entries: [
                            { slug: "generation-strategies/auto-generation/how-it-works" },
                            { slug: "generation-strategies/auto-generation/when-to-use" },
                            { slug: "generation-strategies/auto-generation/examples" },
                        ],
                    },
                    {
                        id: "manual-creation",
                        label: "Manual Creation",
                        entries: [
                            { slug: "generation-strategies/manual-creation/explicit-control" },
                            { slug: "generation-strategies/manual-creation/ordering-content" },
                            { slug: "generation-strategies/manual-creation/use-cases" },
                        ],
                    },
                    {
                        id: "hybrid-approach",
                        label: "Hybrid Approach",
                        entries: [
                            { slug: "generation-strategies/hybrid-approach/best-of-both" },
                            { slug: "generation-strategies/hybrid-approach/pin-and-expand" },
                            { slug: "generation-strategies/hybrid-approach/real-world-patterns" },
                        ],
                    },
                ],
            },
            {
                id: "content",
                label: "Content & Metadata",
                icon: "📝",
                tab: true,
                groups: [
                    {
                        id: "markdown",
                        label: "Markdown & MDX",
                        entries: [
                            { slug: "content/markdown/markdown-basics" },
                            { slug: "content/markdown/working-with-images" },
                            { slug: "content/markdown/mdx-introduction" },
                            { slug: "content/markdown/components-in-mdx" },
                        ],
                    },
                    {
                        id: "frontmatter",
                        label: "Frontmatter & Metadata",
                        entries: [
                            { slug: "content/frontmatter/overview" },
                            { slug: "content/frontmatter/required-fields" },
                            { slug: "content/frontmatter/optional-fields" },
                            { slug: "content/frontmatter/navigation-overrides" },
                        ],
                    },
                ],
            },
            {
                id: "advanced-topics",
                label: "Advanced Topics",
                icon: "🎓",
                tab: true,
                groups: [
                    {
                        id: "multiple-collections",
                        label: "Multiple Collections",
                        entries: [
                            { slug: "advanced-topics/multiple-collections/setup" },
                            { slug: "advanced-topics/multiple-collections/independent-navigation" },
                            { slug: "advanced-topics/multiple-collections/use-cases" },
                        ],
                    },
                    {
                        id: "selling-points",
                        label: "Why Use CelestialDocs",
                        entries: [
                            { slug: "advanced-topics/selling-points/hybrid-flexibility" },
                            { slug: "advanced-topics/selling-points/hierarchical-power" },
                            { slug: "advanced-topics/selling-points/type-safety" },
                            { slug: "advanced-topics/selling-points/developer-experience" },
                        ],
                    },
                ],
            },
        ],
    },
    funnydocs: {
        defaultTab: {
            label: "Learn",
            icon: "🤡",
        },
        groups: [
            { slug: "getting-started" },
            { slug: "concepts" },
            { slug: "configuration" },
            { slug: "deployment" },
        ],
    },
};

// ---------------------------------------------------------------------------
// Right-side table of contents configuration
// ---------------------------------------------------------------------------
export const TABLE_OF_CONTENTS: TableOfContentsConfig = {
    enableExtra: false,
};
