import type { APIRoute } from "astro";
import { buildNavigation } from "@/lib/navigation";
import { SIDEBAR_NAVIGATION, CONTENT } from "@data/config";

export const GET: APIRoute = async () => {
    try {
        const allNav: Record<string, unknown> = {};

        // Build navigation for all collections
        for (const system of CONTENT.systems) {
            const nav = await buildNavigation(SIDEBAR_NAVIGATION, system.id);
            allNav[system.id] = nav;
        }

        return new Response(JSON.stringify(allNav, null, 2), {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        });
    } catch (err) {
        console.error("Error building navigation:", err);
        return new Response(JSON.stringify({ error: String(err) }), {
            status: 500,
            headers: { "Content-Type": "application/json; charset=utf-8" },
        });
    }
};
