import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavbarMenuItem from "./NavbarMenuItem";
import { Button } from "@/components/ui/button";
import { industries, solutions } from "@/utils/constants";

function Solution() {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>
                <p className="text-lg font-inter">Solutions</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="rounded-md">
                <div className="p-6 gap-x-6 grid grid-cols-4 md:w-full lg:w-[70rem] font-inter">
                    <div className="col-span-3 flex flex-col gap-y-3">
                        <div>
                            <h1 className="text-lg font-bold text-primary">SOLUTIONS</h1>
                            <div className="w-8 border border-primary" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col ">
                                <div className="">
                                    <p className="text-sm">
                                        Complete set of features and tools to start, market and grow
                                        your e-commerce business.
                                    </p>
                                </div>
                                <div className="w-full mt-4">
                                    <Button className="rounded-full bg-primary hover:bg-white text-white hover:text-primary border border-primary px-8 ">
                                        VIEW ALL
                                    </Button>
                                </div>
                                <div className="mt-10 pr-4">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.categories/5b976fbe3c11d25dd02edc19/5d7b3c6dafa2f237111d8ddd-250x250.png"
                                        alt="Solutions"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 flex flex-wrap gap-y-3">
                                {solutions.map((solution) => (
                                    <NavbarMenuItem
                                        key={solution.title}
                                        title={solution.title}
                                        description={solution.description}
                                        image={solution.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="border-l px-3 flex flex-col gap-y-3">
                        <div className="flex justify-between">
                            <p>Industries</p>
                            <a className="hover:text-primary" href="/">
                                View All
                            </a>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            {industries.map((industry) => (
                                <NavbarMenuItem
                                    className="w-full"
                                    key={industry.title}
                                    title={industry.title}
                                    description={industry.description}
                                    image={industry.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
}

export default Solution;
