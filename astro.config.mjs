// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { SITE } from "@data/config";

// https://astro.build/config
export default defineConfig({
    site: SITE.website,
    prefetch: true,
    vite: {
        plugins: [tailwindcss()],
        server: {
            watch: {
                ignored: ["**/.pnpm/**", "**/.pnpm-store/**", "**/node_modules/**", "**/.git/**"],
            },
        },
    },
    markdown: {
        shikiConfig: {
            themes: {
                light: "one-light",
                dark: "one-dark-pro",
            },
        },
    },
    integrations: [
        mdx(),
        icon({
            iconDir: "src/assets/icons",
            svgoOptions: {
                plugins: [
                    {
                        name: "convertColors",
                        params: {
                            currentColor: true,
                        },
                    },
                ],
            },
        }),
        react(),
        sitemap(),
    ],
});
