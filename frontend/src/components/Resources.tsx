
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { resourcesOptions } from "@/utils/constants";
import NavbarMenuItem from "./NavbarMenuItem";


function Resources() {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>
                <p className="text-lg font-inter">Resources</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="rounded-md">
                <div className="p-6 gap-x-6 md:w-full lg:w-[40rem] font-inter flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-lg font-bold text-primary">RESOURCES</h1>
                        <div className="w-8 border border-primary" />
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col ">
                            <div className="">
                                <p className="text-sm">
                                    Developer friendly yet easy to use tools
                                </p>
                            </div>
                            <div className="w-full h-full flex items-end p-2">
                                <img
                                    className="w-[20rem] h-[20rem] object-contain"
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.categories/5d6618fffc4f6210fe467fda/5d7f476a16ac837dcf6c0af0-250x250.png"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            {resourcesOptions.map((resource) => (
                                <NavbarMenuItem
                                    className="w-full"
                                    key={resource.title}
                                    title={resource.title}
                                    description={resource.description}
                                    image={resource.image}
                                />
                            )

                            )}
                        </div>
                    </div>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}

export default Resources
