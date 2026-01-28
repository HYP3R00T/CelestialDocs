export interface SearchPageItem {
    type: "page";
    slug: string;
    title: string;
    description?: string;
    collection: string;
    url: string;
}

export interface SearchHeadingItem {
    type: "heading";
    slug: string;
    headingId: string;
    headingText: string;
    pageTitle: string;
    collection: string;
    url: string;
    depth: number;
}

export type SearchItem = SearchPageItem | SearchHeadingItem;

export interface SearchIndex {
    items: SearchItem[];
    timestamp: number;
}
