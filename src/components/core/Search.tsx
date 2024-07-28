import type { DocsEntry } from "@/lib/types";
import { getCollection } from "astro:content";
import Fuse, { type FuseResult, type IFuseOptions } from "fuse.js";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

const docs: DocsEntry[] = await getCollection("docs");

const options: IFuseOptions<DocsEntry> = {
  includeScore: true,
  threshold: 0.5,
  minMatchCharLength: 2,
  findAllMatches: true,
  keys: [
    { name: "id", weight: 2.5 },
    { name: "slug", weight: 2.5 },
    { name: "body", weight: 1.5 },
    {
      name: "title",
      weight: 2,
      getFn: (docs: DocsEntry) => docs.data.title,
    },
    {
      name: "description",
      weight: 1.75,
      getFn: (docs: DocsEntry) => docs.data.description || "",
    },
  ],
};

export function Search() {
  const [searchValue, setSearchValue] = useState("");
  const fuse: Fuse<DocsEntry> = useMemo(() => new Fuse(docs, options), [docs]);
  const results: FuseResult<DocsEntry>[] = useMemo(
    () => fuse.search(searchValue),
    [fuse, searchValue],
  );

  return (
    <div className="mt-2">
      <Input
        placeholder="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {results.length === 0 && (
        <>
          {searchValue === "" && <p>Enter a search term</p>}
          {searchValue !== "" && <p>No result found</p>}
        </>
      )}

      {results.map(({ item, refIndex }) => (
        <p key={refIndex}>
          <a href={item.slug}>{item.data.title}</a>
        </p>
      ))}
    </div>
  );
}
