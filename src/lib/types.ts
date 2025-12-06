import type { ImageMetadata } from "astro";

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
