
export const SITE = {
    website: "https://hyperoot.dev", // replace this with your deployed domain
    author: "HYP3R00T",
    desc: "Documentation theme using Astro and Shadcn",
    title: "CelestialDocs",
    ogImage: "og-image.jpg",
    lightAndDarkMode: true,
    postPerPage: 5,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
    lang: "en", // html lang code. Set this empty and default will be "en"
    langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;
