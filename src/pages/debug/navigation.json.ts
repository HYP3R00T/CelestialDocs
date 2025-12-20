import type { APIRoute } from "astro";
import { buildNavigation } from "@/lib/navigation";
import { navigation } from "@data/config";

export const GET: APIRoute = async () => {
  try {
    const nav = await buildNavigation(navigation as any);
    return new Response(JSON.stringify(nav, null, 2), {
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
