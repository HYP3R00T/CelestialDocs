import React from "react";

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

const SideNavMenu: React.FC<SideNavMenuProps> = ({ items, level = 0 }) => (
  <ul
    className={`list-none ${
      level > 0 ? "pl-4" : ""
    } space-y-1 bg-green-300 m-0 p-4`}
  >
    {items.map((item) => {
      const label = item.title ? item.title : item.slug.split("/").pop();
      return (
        <li key={item.slug} className="py-1">
          <a
            href={`/docs/${item.slug}`}
            className={`text-foreground hover:text-accent-foreground ${
              level === 0 ? "font-bold" : ""
            }`}
          >
            {label}
          </a>
          {item.children.length > 0 && (
            <SideNavMenu items={item.children} level={level + 1} /> // Pass down the level
          )}
        </li>
      );
    })}
  </ul>
);

export default SideNavMenu;
