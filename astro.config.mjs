import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    smartypants: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark",
      // themes: {
      //   dark: "catppuccin-macchiato",
      //   light: "catppuccin-macchiato",
      // },
    },
    prefetch: true,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      gfm: false,
    }),
  ],
});
