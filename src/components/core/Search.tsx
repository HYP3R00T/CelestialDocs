import { getCollection } from "astro:content";
import { useState, useMemo, useEffect } from "react";
import Fuse, { type IFuseOptions } from "fuse.js";

import { Input } from "@/components/ui/input";

import type { DocsEntry } from "@/lib/types";

const options: IFuseOptions<DocsEntry> = {
  includeScore: true,
  threshold: 0.5,
  keys: [
    { name: "slug", weight: 2 },
    { name: "body", weight: 1.5 },
    { name: "data.title", weight: 1.75 },
    { name: "data.author", weight: 1.5 },
    { name: "data.description", weight: 1.25 },
    { name: "data.tags", weight: 1.0 },
    { name: "data.pubDatetime", weight: 0.5 },
    { name: "data.modDatetime", weight: 0.5 },
  ],
};

export function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [docs, setDocs] = useState<DocsEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDocs = async () => {
      const fetchedDocs: DocsEntry[] = await getCollection("docs");
      console.log(fetchedDocs);
      setDocs(fetchedDocs);
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
          <a href={`docs/${post.slug}`}>{post.data.title}</a>
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
