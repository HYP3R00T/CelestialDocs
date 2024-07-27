export const SITE = {
  website: "https://hyperoot.dev", // replace this with your deployed domain
  author: "HYP3R00T",
  desc: "Documentation theme using Astro and Shadcn",
  title: "CelestialDocs",
  ogImage: "og-image.jpg",
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const menu_items: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Documentation",
    href: "/docs/",
  },
];

// Don't delete anything. You can use 'true' or 'false'.
export const docconfig = {
  hide_table_of_contents: false,
  hide_breadcrumbs: false,
  hide_side_navinations: false,
  hide_datetime: false,
  hide_time: true,
};
