/**
 * Type definitions for CelestialDocs project
 *
 * This module is organized into two main sections:
 *
 * 1. Core Types (/src/lib/types.ts)
 *    - Configuration types (NavItem, SocialObjects, SiteConfig)
 *    - Core component types (Header, ThemeToggle, etc.)
 *
 * 2. Documentation Types (/src/lib/docs/types.ts)
 *    - Navigation types (Entry, Group, Sidebar)
 *    - Layout component types (HeadSEOProps, BaseLayoutProps, DocsLayoutProps)
 *    - Docs component types (Sidebar, TableOfContents, etc.)
 *    - Markdown component types (MdxImage, MdxLink)
 *
 * Import patterns:
 *   // For core types
 *   import type { NavItem, SiteConfig } from "@/lib/types";
 *
 *   // For documentation-specific types
 *   import type { DocsLayoutProps, SidebarProps } from "@/lib/docs/types";
 */

// Re-export commonly used types for convenience
export type { HeadSEOProps, NavItem, SocialObjects, SiteConfig } from "./types";
export type {
    Entry,
    Group,
    Sidebar,
    BaseLayoutProps,
    DocsLayoutProps,
    SidebarProps,
    Tab,
    Heading,
} from "./docs/types";
