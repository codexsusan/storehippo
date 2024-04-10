import * as React from "react";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Develop from "./Develop";
import Resources from "./Resources";
import Solution from "./Solution";
import { Button } from "./ui/button";

export function NavbarMenu() {
    return (
        <NavigationMenu className="mt-3 relative hidden lg:block">
            <NavigationMenuList className="items-baseline -space-x-4">
                <Solution />
                <Develop />
                <NavigationMenuItem className="">
                    <a href="/examples">
                        <Button
                            variant={"ghost"}
                            className="text-lg hover:bg-transparent font-inter hover:no-underline"
                        >
                            Examples
                        </Button>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem className="">
                    <a href="/pricing">
                        <Button
                            variant={"ghost"}
                            className="text-lg hover:bg-transparent font-inter hover:no-underline"
                        >
                            Pricing
                        </Button>
                    </a>
                </NavigationMenuItem>
                <Resources />
            </NavigationMenuList>
        </NavigationMenu >
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
