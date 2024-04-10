import { cn } from "@/lib/utils";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavbarMenu } from "./NavbarMenu";
import { MobileMenuSolutions } from "./Solution";
import { Button } from "./ui/button";
import { DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MobileMenuDevelop } from "./Develop";
import { MobileMenuResources } from "./Resources";

function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "!fixed z-10 w-full h-24 flex justify-center items-center",
        hasShadow ? "shadow-md bg-white" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl h-full w-max flex-1 flex items-center justify-between mr-10">
        <div className="">
          <img
            className="h-[55px] w-auto"
            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.settings/521c4d7548c284890e000001/594a155440e9fb9e592f2ba9-240x240.png"
            alt="Logo"
          />
        </div>
        <NavbarMenu />
        <CustomDropdownMenu />
        <MobileMenu />
      </div>
    </div>
  );
}

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex gap-x-2 hover:cursor-pointer">
            <div>MENU</div>
            <Menu size="24" className=" relative" />
          </div>
        </SheetTrigger>
        <SheetContent className="w-72 p-6 font-inter">
          <div className="flex flex-col w-full ">
            <MobileMenuSolutions />
            <MobileMenuDevelop />
            <p className="hover:cursor-pointer">
              <a href="/">Examples</a>
            </p>
            <p className="hover:cursor-pointer">
              <a href="/">Pricing</a>
            </p>
            <MobileMenuResources />
            <div className="flex flex-col gap-y-3">
              <p>Socialize With Us:</p>
              <div className="flex gap-x-3">
                <img
                  className="aspect-square w-8 h-8 rounded-full"
                  src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                  alt="Facebook"
                />
                <img
                  className="aspect-square w-8 h-8 rounded-full"
                  src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png"
                  alt="Twitter"
                />
                <img
                  className="aspect-square w-8 h-8 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJaam908camqh38t_I_F_JiZ0ZdCxZZBHhB_TxOJInIA&s"
                  alt="Youtube"
                />
                <img
                  className="aspect-square w-8 h-8 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9p8tUtze1Vz8iGjwtYNFh4e3kOCrY9QC5HgyXod80g&s"
                  alt=""
                />
                <img
                  className="aspect-square w-8 h-8 rounded-full"
                  src="https://image.similarpng.com/very-thumbnail/2020/05/Instagram-logo-in-square-shape-PNG.png"
                  alt=""
                />
                <img
                  className="aspect-square w-8 h-8 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFbrbQD-D-ZHkKvlr_bXVQcF7l_o2in_gBaRfIggeOA&s"
                  alt=""
                />
              </div>
              <div className="mt-4 w-full flex flex-col gap-y-3">
                <Button className="rounded-full bg-[#7db434] hover:bg-white text-white hover:text-[#7db434] border border-[#7db434] px-8 ">
                  VIEW ALL
                </Button>
                <Button className="rounded-full bg-[#7db434] hover:bg-white text-white hover:text-[#7db434] border border-[#7db434] px-8 ">
                  CALL +91 8374952934
                </Button>
                <Button className="rounded-full bg-[#7db434] hover:bg-white text-white hover:text-[#7db434] border border-[#7db434] px-8 ">
                  REQUEST A DEMO
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function CustomDropdownMenu() {
  return (
    <div className="gap-x-4 items-center hidden lg:flex">
      <Button className="rounded-full bg-[#7db434] hover:bg-white text-white hover:text-[#7db434] border border-[#7db434] px-8 ">
        CONTACT US
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu size="24" className="hover:cursor-pointer relative" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-30 rounded-sm mt-2 p-4 font-inter flex flex-col gap-y-2">
          <DropdownItem url="/">Contact Sales</DropdownItem>
          <DropdownItem url="/">Start Free Trial</DropdownItem>
          <DropdownItem url="/">Schedule Demo</DropdownItem>
          <DropdownItem url="/">Login to your store</DropdownItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function DropdownItem({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <div className="hover:text-[#7db434] hover:cursor-pointer">
      <a href={url}>{children}</a>
    </div>
  );
}

export default Navbar;
