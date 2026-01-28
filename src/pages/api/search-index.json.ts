import type { APIRoute } from "astro";
import { buildSearchIndex } from "@/lib/search/buildSearchIndex";

// Cache configuration
const CACHE_DURATION = 30 * 1000; // 30 seconds
let cachedIndex: any = null;
let cacheTimestamp = 0;

export const GET: APIRoute = async () => {
    try {
        const isDev = import.meta.env.DEV;
        const now = Date.now();

        // Use cache in development mode only
        if (isDev && cachedIndex && now - cacheTimestamp < CACHE_DURATION) {
            return new Response(JSON.stringify(cachedIndex), {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Cache-Control": "public, max-age=30",
                },
            });
        }

        // Build fresh index
        const searchIndex = await buildSearchIndex();

        // Update cache
        if (isDev) {
            cachedIndex = searchIndex;
            cacheTimestamp = now;
        }

        return new Response(JSON.stringify(searchIndex), {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "public, max-age=30, stale-while-revalidate=60",
            },
        });
    } catch (err) {
        console.error("Failed to build search index:", err);
        return new Response(
            JSON.stringify({ error: "Failed to build search index" }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            },
        );
    }
};
