import { Menu } from "lucide-react";
import { NavbarMenu } from "./NavbarMenu";
import { Button } from "./ui/button";

function Navbar() {
    return (
        <section className="w-full grid grid-cols-5">
            <div className="col-start-2 col-span-3 flex justify-between items-center my-3">
                <div className="">
                    <img
                        className="h-[55px] w-auto"
                        src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.settings/521c4d7548c284890e000001/594a155440e9fb9e592f2ba9-240x240.png"
                        alt="Logo"
                    />
                </div>
                <NavbarMenu />
                <div className="flex gap-x-4 items-center">
                    <Button className="rounded-full bg-primary hover:bg-white text-white hover:text-primary border border-primary px-8 ">
                        CONTACT US
                    </Button>
                    <Menu size="24" className="hover:cursor-pointer" />
                </div>
            </div>
            <div className="bg-[#53713A] w-full h-full" />
        </section>
    );
}

export default Navbar;
