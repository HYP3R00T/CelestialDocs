import type { ImageMetadata } from "astro";

// ============================================================================
// CONFIGURATION TYPES
// ============================================================================

/**
 * Content system configuration
 */
export interface ContentSystem {
    id: string;
    dir: string;
    defaultDocRedirect: string;
    route: string;
}

/**
 * Navigation item in the header navigation
 */
export interface NavItem {
    href: string;
    label: string;
    special?: boolean;
    blank?: boolean;
}

/**
 * Social media link configuration
 */
export interface SocialObjects {
    name: string;
    href: string;
    active: boolean;
    linkTitle?: string;
}

/**
 * Site-level configuration
 */
export interface SiteConfig {
    website: string;
    author: string;
    authorUrl?: string;
    repo: string;
    branch?: string;
    title: string;
    description: string;
    image: string | ImageMetadata;
    imageAlt?: string;
    twitterHandle?: string;
    starCountThreshold?: number;
    enableLayoutWidthToggle?: boolean;
    enableGitHubButton?: boolean;
}

export interface LocaleConfig {
    lang: string;
}

export interface HeaderFeatures {
    starCountThreshold: number;
    enableLayoutWidthToggle: boolean;
    enableGitHubButton: boolean;
}

export interface TableOfContentsConfig {
    enableExtra: boolean;
}

/**
 * Content configuration mapping systems to their settings
 */
export interface ContentConfig {
    systems: ContentSystem[];
}

export interface HeadSEOProps {
    title?: string;
    description?: string;
    image?: string | ImageMetadata;
    imageAlt?: string;
    contentType?: string;
    noIndex?: boolean;
}

// ============================================================================
// CORE COMPONENT TYPES
// ============================================================================

/**
 * Props for ThemeToggle component - no props required
 */
export type ThemeToggleProps = Record<string, never>;

/**
 * Props for LayoutWidthToggle component - no props required
 */
export type LayoutWidthToggleProps = Record<string, never>;

/**
 * Props for HeaderGithubButton component - no props required
 */
export type HeaderGithubButtonProps = Record<string, never>;

/**
 * Props for HeaderLogo component - no props required
 */
export type HeaderLogoProps = Record<string, never>;

/**
 * Props for HeaderNav component
 */
export interface HeaderNavProps {
    navItems: NavItem[];
}

/**
 * Props for Header component - no props required
 */
export type HeaderProps = Record<string, never>;

/**
 * Props for HeaderMobileMenu component
 */
export interface HeaderMobileMenuProps {
    navItems: NavItem[];
    socials: SocialObjects[];
}
