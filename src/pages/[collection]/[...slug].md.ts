import type { APIRoute } from "astro";
import { readFile } from "fs/promises";
import { join } from "path";
import { CONTENT } from "@data/config";
import type { ContentSystem } from "@/lib/types";

export const getStaticPaths = async () => {
  const { getCollection } = await import("astro:content");
  const paths: any[] = [];

  // Generate static paths for all registered systems
  for (const sys of CONTENT.systems) {
    const entries = (await getCollection(sys.id as any)) as any[];
    for (const doc of entries) {
      paths.push({ params: { collection: sys.id, slug: doc.id } });
    }
  }

  return paths;
};

export const GET: APIRoute = async ({ params }) => {
  const { collection, slug } = params as any;

  if (!collection || !slug) {
    return new Response("Not found", { status: 404 });
  }

  const sys = CONTENT.systems.find((s: ContentSystem) => s.id === collection);
  if (!sys) {
    return new Response("Collection not found", { status: 404 });
  }

  try {
    const contentDir = join(process.cwd(), sys.dir);
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
