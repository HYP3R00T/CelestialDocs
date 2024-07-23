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

function SideNavMenu({ items, level = 0 }: SideNavMenuProps) {
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

export default SideNavMenu;
