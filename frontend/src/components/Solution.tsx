import { Button } from "@/components/ui/button";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { industries, solutions } from "@/utils/constants";
import CustomCollapsible from "./CustomCollapsible";
import NavbarMenuItem, { MobileMenuItem } from "./NavbarMenuItem";

function Solution() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="!bg-transparent">
        <p className="text-lg font-inter ">Solutions</p>
      </NavigationMenuTrigger>
      <NavigationMenuContent className="rounded-md">
        <div className="p-6 gap-x-6 grid grid-cols-4 md:w-full lg:w-[70rem] font-inter">
          <div className="col-span-3 flex flex-col gap-y-3">
            <div>
              <h1 className="text-lg font-bold text-[#7db434]">SOLUTIONS</h1>
              <div className="w-8 border border-[#7db434]" />
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
                  <Button className="rounded-full bg-[#7db434] hover:bg-white text-white hover:text-[#7db434] border border-[#7db434] px-8 ">
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
              <a className="hover:text-[#7db434]" href="/">
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

export function MobileMenuSolutions() {
  return (
    <CustomCollapsible title="Solutions">
      <div className="flex flex-col gap-2 mt-2">
        {solutions.map((solution) => {
          return (
            <MobileMenuItem
              key={solution.title}
              image={solution.image}
              title={solution.title}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-y-2">
        <p>Industries</p>
        <div>
          {industries.map((industry) => {
            return (
              <MobileMenuItem
                key={industry.title}
                image={industry.image}
                title={industry.title}
              />
            );
          })}
        </div>
      </div>
    </CustomCollapsible>
  );
}

export default Solution;
