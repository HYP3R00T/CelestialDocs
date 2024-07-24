import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { menu, SideNavMenu } from "./docs/SideNavMenu";
import { Separator } from "@/components/ui/separator";
import { menu_items } from "@/config";
import SearchBox from "@/components/SearchBox.astro";

export function HamNavMenu() {
  return (
    <div className="hamburger-menu">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size="icon">
            <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-full" key={"sheetcontent"}>
          <SheetHeader>
            <SheetTitle hidden={true}></SheetTitle>
            <div className="mt-6 mb-3">{<SearchBox />}</div>
            {menu_items.map((item) => (
              <a href={item.href} key={item.href}>
                {item.title}
              </a>
            ))}
            <Separator />
            <SideNavMenu items={menu} />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
