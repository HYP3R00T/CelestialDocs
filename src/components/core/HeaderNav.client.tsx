import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface NavItem {
    href: string;
    label: string;
    special?: boolean;
    blank?: boolean;
}

interface HeaderNavClientProps {
    navItems: NavItem[];
}

export function HeaderNavClient({ navItems }: HeaderNavClientProps) {
    return (
        <NavigationMenu viewport={false} className="hidden flex-none md:flex">
            <NavigationMenuList>
                {navItems.map(({ href, label, blank }) => (
                    <NavigationMenuItem key={href}>
                        <NavigationMenuLink href={href} asChild>
                            <a
                                href={href}
                                target={blank ? "_blank" : undefined}
                                rel={blank ? "noreferrer" : undefined}
                            >
                                {label}
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
