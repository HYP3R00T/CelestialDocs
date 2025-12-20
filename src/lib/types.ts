import type { ImageMetadata } from "astro";

// ============================================================================
// CONFIGURATION TYPES
// ============================================================================

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
    repo: string;
    branch?: string;
    title: string;
    description: string;
    image?: unknown;
    imageAlt?: string;
    twitterHandle?: string;
    starCountThreshold?: number;
    enableLayoutWidthToggle?: boolean;
    enableGitHubButton?: boolean;
    defaultDocRedirect?: string;
}

// ============================================================================
// CORE COMPONENT TYPES
// ============================================================================

/**
 * Props for ThemeToggle component - no props required
 */
export interface ThemeToggleProps {
    // No props required
}

/**
 * Props for LayoutWidthToggle component - no props required
 */
export interface LayoutWidthToggleProps {
    // No props required
}

/**
 * Props for HeaderGithubButton component - no props required
 */
export interface HeaderGithubButtonProps {
    // No props required
}

/**
 * Props for HeaderLogo component - no props required
 */
export interface HeaderLogoProps {
    // No props required
}

/**
 * Props for HeaderNav component
 */
export interface HeaderNavProps {
    navItems: NavItem[];
}

/**
 * Props for Header component - no props required
 */
export interface HeaderProps {
    // No props required
}

/**
 * Props for HeaderMobileMenu component
 */
export interface HeaderMobileMenuProps {
    navItems: NavItem[];
    socials: SocialObjects[];
}
