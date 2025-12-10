// For HeadSEO.astro
export interface HeadSEOProps {
    title: string;
    description: string;
    image: string | ImageMetadata;
    imageAlt: string;
    contentType: string;
    noIndex?: boolean;
}

// For src/layouts/BaseLayout.astro
export interface BaseLayoutProps extends Partial<HeadSEOProps> {
}

// For navigation items (config.ts)
export interface NavItem {
    href: string;
    label: string;
    special?: boolean;
    blank?: boolean;
}

// For social links (config.ts)
export interface SocialObjects {
    name: string;
    href: string;
    active: boolean;
    linkTitle?: string; // Optional title for the link
}

// For site-level configuration
export interface SiteConfig {
    website: string;
    author: string;
    repo: string;
    branch?: string;
    title: string;
    description: string;
    image?: any;
    imageAlt?: string;
    twitterHandle?: string;
    starCountThreshold?: number;
    enableLayoutWidthToggle?: boolean;
}
