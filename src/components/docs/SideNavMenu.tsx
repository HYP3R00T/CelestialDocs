import { getCollection } from "astro:content";
import type { DocEntry } from "@/types"; // Adjust the path according to your project structure

// Fetch the collection with type
const docs: DocEntry[] = await getCollection("docs");

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
          title: index === parts.length - 1 ? item.data.title : part, // Use title from item.data if it's the last part
          slug: parts.slice(0, index + 1).join("/"),
          children: [],
        };
        currentLevel.push(existingItem);
      } else {
        // Update title if necessary
        if (index === parts.length - 1) {
          existingItem.title = item.data.title;
        }
      }

      currentLevel = existingItem.children;
    });
  });

  return menu;
};

// Define the type for menu items
interface MenuItem {
  title?: string;
  slug: string;
  children: MenuItem[];
}

// Define the props for the SideNavMenu component
interface SideNavMenuProps {
  items: MenuItem[];
  level?: number;
}

export function SideNavMenu({ items, level = 0 }: SideNavMenuProps) {
  return (
    <ul className={`list-none m-0`}>
      {items.map((item) => {
        const label = item.title ? item.title : item.slug.split("/").pop();
        return (
          <li key={item.slug}>
            <a
              href={`/docs/${item.slug}`}
              className={`text-foreground hover:text-accent-foreground ${
                level === 0 ? "font-bold" : ""
              }`}
            >
              {label}
            </a>
            {item.children.length > 0 && (
              <SideNavMenu items={item.children} level={level + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function SideNavMenuMob({ items, level = 0 }: SideNavMenuProps) {
  return (
    <ul className={`list-none m-0`}>
      {items.map((item) => {
        const label = item.title ? item.title : item.slug.split("/").pop();
        return (
          <li key={item.slug}>
            <a
              href={`/docs/${item.slug}`}
              className={`text-foreground hover:text-accent-foreground ${
                level === 0 ? "font-bold" : ""
              }`}
            >
              {label}
            </a>
            {item.children.length > 0 && (
              <SideNavMenu items={item.children} level={level + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export const menu = buildMenu(docs);
