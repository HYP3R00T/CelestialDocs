"use client";

import * as React from "react";
import Fuse from "fuse.js";
import { FileTextIcon, HashIcon, FilterIcon } from "lucide-react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Toggle } from "@/components/ui/toggle";
import { fuseOptions } from "@/lib/search/fuseConfig";
import type { SearchIndex, SearchItem } from "@/lib/search/types";

export function CommandPalette() {
    const [open, setOpen] = React.useState(false);
    const [searchIndex, setSearchIndex] = React.useState<SearchItem[]>([]);
    const [filteredResults, setFilteredResults] = React.useState<SearchItem[]>(
        [],
    );
    const [searchQuery, setSearchQuery] = React.useState("");
    const fuseRef = React.useRef<Fuse<SearchItem> | null>(null);

    // Filter states (inverted logic: OFF = show all, ON = filter)
    const [filterDocs, setFilterDocs] = React.useState(false);
    const [filterFunnydocs, setFilterFunnydocs] = React.useState(false);
    const [filterPages, setFilterPages] = React.useState(false);
    const [filterHeadings, setFilterHeadings] = React.useState(false);

    // Keyboard shortcut: Cmd/Ctrl + K
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        // Custom event listener for opening search
        const handleOpenSearch = () => {
            setOpen(true);
        };

        document.addEventListener("keydown", down);
        window.addEventListener("open-search", handleOpenSearch);

        return () => {
            document.removeEventListener("keydown", down);
            window.removeEventListener("open-search", handleOpenSearch);
        };
    }, []);

    // Load search index when dialog opens
    React.useEffect(() => {
        if (open && searchIndex.length === 0) {
            fetch("/api/search-index.json")
                .then((res) => res.json())
                .then((data: SearchIndex) => {
                    setSearchIndex(data.items);
                    fuseRef.current = new Fuse(data.items, fuseOptions);
                })
                .catch((err) => {
                    console.error("Failed to load search index:", err);
                });
        }
    }, [open, searchIndex.length]);

    // Perform search and filtering when query or filters change
    React.useEffect(() => {
        if (!fuseRef.current) {
            setFilteredResults([]);
            return;
        }

        let results: SearchItem[];

        if (!searchQuery.trim()) {
            // Show all items when no search query
            results = searchIndex;
        } else {
            const searchResults = fuseRef.current.search(searchQuery);
            results = searchResults.map((result) => result.item);
        }

        // Apply filters with inverted logic
        const filtered = results.filter((item) => {
            // If no collection filters are active, show all collections
            const hasCollectionFilter = filterDocs || filterFunnydocs;
            const collectionMatch = hasCollectionFilter
                ? (filterDocs && item.collection === "docs") ||
                (filterFunnydocs && item.collection === "funnydocs")
                : true;

            // If no type filters are active, show all types
            const hasTypeFilter = filterPages || filterHeadings;
            const typeMatch = hasTypeFilter
                ? (filterPages && item.type === "page") ||
                (filterHeadings && item.type === "heading")
                : true;

            return collectionMatch && typeMatch;
        });

        setFilteredResults(filtered.slice(0, 20));
    }, [
        searchQuery,
        searchIndex,
        filterDocs,
        filterFunnydocs,
        filterPages,
        filterHeadings,
    ]);

    // Handle item selection
    const handleSelect = (url: string) => {
        setOpen(false);
        window.location.href = url;
    };

    // Group results by type
    const pageResults = filteredResults.filter((item) => item.type === "page");
    const headingResults = filteredResults.filter(
        (item) => item.type === "heading",
    );

    return (
        <CommandDialog
            open={open}
            onOpenChange={setOpen}
            title="Search Documentation"
            description="Search for pages and headings in the documentation"
        >
            <CommandInput
                placeholder="Search documentation..."
                value={searchQuery}
                onValueChange={setSearchQuery}
            />

            {/* Filter toggles */}
            <div className="flex items-center gap-2 border-b px-3 py-2">
                <FilterIcon className="size-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-1 items-center">
                    <Toggle
                        size="sm"
                        pressed={filterDocs}
                        onPressedChange={setFilterDocs}
                        aria-label="Filter docs"
                    >
                        Docs
                    </Toggle>
                    <Toggle
                        size="sm"
                        pressed={filterFunnydocs}
                        onPressedChange={setFilterFunnydocs}
                        aria-label="Filter funnydocs"
                    >
                        Funnydocs
                    </Toggle>
                    <div className="mx-1 h-6 w-px bg-border" />
                    <Toggle
                        size="sm"
                        pressed={filterPages}
                        onPressedChange={setFilterPages}
                        aria-label="Filter pages"
                    >
                        Pages
                    </Toggle>
                    <Toggle
                        size="sm"
                        pressed={filterHeadings}
                        onPressedChange={setFilterHeadings}
                        aria-label="Filter headings"
                    >
                        Headings
                    </Toggle>
                </div>
            </div>

            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                {pageResults.length > 0 && (
                    <CommandGroup heading="Pages">
                        {pageResults.map((item) => {
                            if (item.type !== "page") return null;
                            return (
                                <CommandItem
                                    key={item.url}
                                    value={`${item.title} ${item.description || ""}`}
                                    onSelect={() => handleSelect(item.url)}
                                >
                                    <FileTextIcon />
                                    <div className="flex flex-col gap-1">
                                        <div className="font-medium">
                                            {item.title}
                                        </div>
                                        {item.description && (
                                            <div className="text-muted-foreground text-xs line-clamp-1">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-muted-foreground ml-auto text-xs">
                                        {item.collection}
                                    </span>
                                </CommandItem>
                            );
                        })}
                    </CommandGroup>
                )}

                {headingResults.length > 0 && (
                    <CommandGroup heading="Headings">
                        {headingResults.map((item) => {
                            if (item.type !== "heading") return null;
                            return (
                                <CommandItem
                                    key={item.url}
                                    value={`${item.headingText} ${item.pageTitle}`}
                                    onSelect={() => handleSelect(item.url)}
                                >
                                    <HashIcon />
                                    <div className="flex flex-col gap-1">
                                        <div className="font-medium">
                                            {item.headingText}
                                        </div>
                                        <div className="text-muted-foreground text-xs">
                                            {item.pageTitle}
                                        </div>
                                    </div>
                                    <span className="text-muted-foreground ml-auto text-xs">
                                        {item.collection}
                                    </span>
                                </CommandItem>
                            );
                        })}
                    </CommandGroup>
                )}
            </CommandList>
        </CommandDialog>
    );
}
