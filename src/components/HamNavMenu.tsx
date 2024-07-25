import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { menu, flatMenu } from "@/lib/utils";
import SideNavMenu from "@/components/docs/SideNavMenu.astro";
import { Separator } from "@/components/ui/separator";
import { menu_items } from "@/config";
import Sample from "./Sample.astro";

export function HamNavMenu() {
  return (
    <div className="hamburger-menu ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size="icon">
            <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-full" key={"sheetcontent"}>
          <SheetHeader>
            <SheetTitle hidden={true}></SheetTitle>
            <div className="mt-6 flex flex-col items-start">
              {menu_items.map((item) => (
                <Button variant="ghost" key={item.href}>
                  {item.title}
                </Button>
              ))}
            </div>
            <Separator />
            {/* <SideNavMenu items={menu} level={0} /> */}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
