import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { getCollection } from "astro:content";
import type { DocEntry } from "@/lib/types"; // Adjust the path according to your project structure

// Fetch the collection with type
const docs: DocEntry[] = await getCollection("docs");

// Helper function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to build nested menu structure
const buildMenu = (
  items: DocEntry[]
): { title?: string; slug: string; children: any[] }[] => {
  const menu: { title?: string; slug: string; children: any[] }[] = [];

  items.forEach((item) => {
    const parts = item.slug.split("/"); // Split slug into parts
    let currentLevel = menu;

    // Traverse the menu structure based on folder depth
    parts.forEach((part, index) => {
      let existingItem = currentLevel.find(
        (i) => i.slug === parts.slice(0, index + 1).join("/")
      );

      if (!existingItem) {
        existingItem = {
          // Use title from item.data if it's the last part
          title: index === parts.length - 1 ? capitalizeFirstLetter(item.data.title || "") : capitalizeFirstLetter(part),
          slug: parts.slice(0, index + 1).join("/"),
          children: [],
        };
        currentLevel.push(existingItem);
      } else {
        // Update title if necessary
        if (index === parts.length - 1) {
          existingItem.title = capitalizeFirstLetter(item.data.title || "");
        }
      }

      currentLevel = existingItem.children;
    });
  });

  return menu;
};

export const menu = buildMenu(docs);
