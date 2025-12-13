// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

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
        react()
    ],
});
