import setupImage from "@/assets/setup.png";
import type { NavItem } from "@/lib/types";

export const SITE = {
    website: "https://celestialdocs.hyperoot.dev",
    author: "Rajesh",
    repo: "https://github.com/HYP3R00T/CelestialDocs",
    starCountThreshold: 50,
    title: "CelestialDocs",
    description:
        "Documentation template using Astro and Shadcn",
    image: setupImage,
    imageAlt: "Check out celestialdocs.hyperoot.dev",
    twitterHandle: "@HYP3R00T",
};

export const LOCALE = {
    lang: "en",
};

export const navItems: NavItem[] = [
    { href: "/challenge", label: "Challenges", special: true },
];
