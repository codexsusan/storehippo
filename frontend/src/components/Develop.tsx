import React from "react";

import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import NavbarMenuItem from "./NavbarMenuItem";
import { developOptions } from "@/utils/constants";


function Develop() {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>
                <p className="text-lg font-inter">Develop</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="rounded-md">
                <div className="p-6 gap-x-6 md:w-full lg:w-[40rem] font-inter flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-lg font-bold text-primary">DEVELOP</h1>
                        <div className="w-8 border border-primary" />
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col ">
                            <div className="">
                                <p className="text-sm">
                                    Developer friendly yet easy to use tools
                                </p>
                            </div>
                            <div className="w-full mt-4">
                                <Button className="rounded-full bg-primary hover:bg-white text-white hover:text-primary border border-primary px-8 ">
                                    VIEW ALL
                                </Button>
                            </div>
                            <div className="">
                                <img
                                    className="w-[10rem] h-[10rem] object-cover"
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.categories/5d652bd989362f53f8e9eb6d/5d7f475316ac837dcf6c083f-250x250.png"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            {developOptions.map((developOption) => (
                                <NavbarMenuItem
                                    className="w-full"
                                    key={developOption.title}
                                    title={developOption.title}
                                    description={developOption.description}
                                    image={developOption.image}
                                />
                            )

                            )}
                        </div>
                    </div>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
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

export default Develop;
