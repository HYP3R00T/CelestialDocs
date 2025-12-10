import setupImage from "@/assets/setup.png";
import type { NavItem, SiteConfig, SocialObjects } from "@/lib/types";

export const SITE: SiteConfig = {
    website: "https://celestialdocs.hyperoot.dev",
    author: "Rajesh",
    repo: "https://github.com/HYP3R00T/CelestialDocs",
    title: "CelestialDocs",
    description:
    "Documentation template using Astro and Shadcn",
    image: setupImage,
    imageAlt: "Check out celestialdocs.hyperoot.dev",
    twitterHandle: "@HYP3R00T",
    starCountThreshold: 0,
    enableLayoutWidthToggle: true,
    enableGitHubButton: true
};

export const LOCALE = {
    lang: "en",
};

export const navItems: NavItem[] = [
    { href: "/challenge", label: "Challenges", special: true },
];

export const Socials: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `Checkout my GitHub profile`,
        active: true,
    }
];
