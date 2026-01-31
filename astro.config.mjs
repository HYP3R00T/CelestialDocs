// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://celestialdocs.hyperoot.dev",
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
            // theme: "css-variables",
            // defaultColor: false,
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
