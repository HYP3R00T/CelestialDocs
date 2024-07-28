import { getCollection } from "astro:content";
import { useState, useMemo, useEffect } from "react";
import Fuse, { type IFuseOptions } from "fuse.js";

import { Input } from "@/components/ui/input";

import type { DocsEntry } from "@/lib/types";

const options: IFuseOptions<Doc> = {
  includeScore: true,
  threshold: 0.5,
  keys: [
    // { name: "slug", weight: 2 },
    { name: "body", weight: 1.5 },
    // { name: "data.title", weight: 1.75 },
  ],
};

interface Doc {
  id: string; // or number, depending on the type of `item.id`
  slug: string;
  title: string;
  description: string | undefined;
  body: string;
}

export function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDocs = async () => {
      const fetchedDocs: DocsEntry[] = await getCollection("docs");
      const docs: Doc[] = fetchedDocs.map((item) => ({
        id: item.id,
        slug: item.slug,
        title: item.data.title,
        description: item.data.description,
        body: item.body,
      }));
      setDocs(docs);
      setLoading(false);
    };
    fetchDocs();
  }, []);

  const fuse = useMemo(() => new Fuse(docs, options), [docs]);
  const results = useMemo(() => fuse.search(searchValue), [fuse, searchValue]);

  return (
    <div className="py-2">
      <Input
        placeholder="Search…"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {loading && <p>Loading documents...</p>}

      {!loading && results.length === 0 && (
        <>
          {searchValue === "" && <p>Enter a search term</p>}
          {searchValue !== "" && <p>No results found</p>}
        </>
      )}

      {results.map(({ item: post }, index) => (
        <p key={index}>
          <a href={`docs/${post.slug}`}>{post.title}</a>
        </p>
      ))}
    </div>
  );
}

// export function Search() {
//   const [searchValue, setSearchValue] = useState("");
//   const fuse = useMemo(() => new Fuse(docs, options), [docs]);
//   const results = useMemo(() => fuse.search(searchValue), [fuse, searchValue]);

//   return (
//     <div className="py-2">
//       <Input
//         placeholder="Search…"
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//       />

//       {results.length === 0 && (
//         <>
//           {searchValue === "" && <p>Enter a search term</p>}
//           {searchValue !== "" && <p>No results found</p>}
//         </>
//       )}
//       {results.map(({ item: post }, index) => (
//         <p key={index}>
//           <a href={`docs/${post.slug}`}>{post.data.title}</a>
//         </p>
//       ))}
//     </div>
//   );
// }
