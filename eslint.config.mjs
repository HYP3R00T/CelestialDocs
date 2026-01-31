import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";

export default [
    {
        ignores: ["dist/**", "node_modules/**", ".astro/**", ".pnpm-store/**", "public/**"],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...astro.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}", "**/*.astro"],
        plugins: {
            import: importPlugin,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],
            "import/order": [
                "warn",
                {
                    alphabetize: { order: "asc", caseInsensitive: true },
                    "newlines-between": "always",
                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                },
            ],
        },
    },
    {
        files: ["**/*.{jsx,tsx}"],
        plugins: {
            react,
            "react-hooks": reactHooks,
        },
        settings: {
            react: { version: "detect" },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            ...reactHooks.configs.recommended.rules,
        },
    },
    {
        files: ["**/*.astro"],
        rules: {
            "@typescript-eslint/no-unused-expressions": "off",
        },
    },
];
