import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "./ui/input";
import { Search, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const menu_items: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Documentation",
    href: "/docs/",
  },
];

export function NavMenu() {
  return (
    <div className="flex gap-4">
      {menu_items.map((item) => (
        <a href={item.href}>
          <Button variant="ghost">{item.title}</Button>
        </a>
      ))}
    </div>
  );
}

export function HamNavMenu() {
  return (
    <div className="hamburger-menu">
      <Sheet>
        <SheetTrigger>
          <Button variant={"outline"} size="icon">
            <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-full" key={"sheetcontent"}>
          <SheetHeader>
            {/* <div className="mt-6 mb-3">{<SearchBox />}</div> */}
            {menu_items.map((item) => (
              <a href={item.href} key={item.href}>
                {item.title}
              </a>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function SearchBox() {
  return (
    <div className="relative min-w-[3rem]">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4" />
      <Input type="search" placeholder="Search..." className="pl-8 w-full" />
    </div>
  );
}
