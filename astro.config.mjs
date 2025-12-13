// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    prefetch: true,

    vite: {
        plugins: [tailwindcss()],
    },

    markdown: {
        shikiConfig: {
            // theme: "css-variables",
            // defaultColor: false,
            themes: {
                light: 'github-light',
                dark: 'github-dark',
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
    ],
});
