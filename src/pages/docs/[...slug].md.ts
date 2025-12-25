import type { APIRoute } from "astro";
import { readFile } from "fs/promises";
import { join } from "path";
import { CONTENT_DIR } from "@data/config";

export const getStaticPaths = async () => {
    const { getCollection } = await import("astro:content");
    const docs = await getCollection("docs");

    return docs.map((doc) => ({
        params: { slug: doc.id },
    }));
};

export const GET: APIRoute = async ({ params }) => {
    const { slug } = params;

    if (!slug) {
        return new Response("Not found", { status: 404 });
    }

    try {
        const contentDir = join(process.cwd(), CONTENT_DIR);
        let filePath = join(contentDir, `${slug}.mdx`);
        let content = "";

        try {
            content = await readFile(filePath, "utf-8");
        } catch {
            filePath = join(contentDir, `${slug}.md`);
            content = await readFile(filePath, "utf-8");
        }

        return new Response(content, {
            headers: {
                "Content-Type": "text/markdown; charset=utf-8",
                "Content-Disposition": `inline; filename="${slug}.md"`,
            },
        });
    } catch (error) {
        console.error("Error reading file:", error);
        return new Response("File not found", { status: 404 });
    }
};
