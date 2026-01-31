import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

/* eslint-disable no-undef */
// console is available in Node.js environment

/**
 * Astro integration that prebuilds navigation for all collections at build time.
 * Note: The actual prebuild happens in getStaticPaths() for each page.
 * This integration creates a JSON export of the prebuilt navigation for reference.
 */
export function prebuildNavigationIntegration() {
    let outDir = null;

    return {
        name: "prebuild-navigation",
        hooks: {
            "astro:config:done": ({ config }) => {
                outDir = config.outDir;
            },
            "astro:build:done": async () => {
                try {
                    console.log(
                        "[prebuild-navigation] Build completed - navigation was prebuilt during page generation",
                    );
                    console.log(`[prebuild-navigation] ✓ Output directory: ${outDir}`);

                    // Verify nav JSON files exist
                    if (outDir) {
                        const navDir = path.join(fileURLToPath(outDir), "nav");
                        try {
                            const files = await fs.readdir(navDir);
                            const jsonFiles = files.filter((f) => f.endsWith(".json"));
                            console.log(
                                `[prebuild-navigation] ✓ Generated ${jsonFiles.length} navigation file(s): ${jsonFiles.join(", ")}`,
                            );
                        } catch {
                            console.warn(
                                "[prebuild-navigation] Note: Nav directory not created (may be normal for dev builds)",
                            );
                        }
                    }
                } catch (error) {
                    console.error(
                        "[prebuild-navigation] Error in build:done hook:",
                        error instanceof Error ? error.message : String(error),
                    );
                }
            },
        },
    };
}
