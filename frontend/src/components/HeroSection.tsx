import { Button } from "./ui/button";
import Typewriter from "typewriter-effect";

const typeWriterValues = [
    "B2C Marketplaces",
    "B2B2C Marketplaces",
    "Hyperlocal Marketplaces",
    "Multi Country Marketplaces",
    "Multi Brand Marketplaces",
    "Multilingual Marketplaces",
    "Vertical Marketplaces",
    "Horizontal Marketplaces",
];

function HeroSection() {
    return (
        <section className="w-full overflow-hidden">
            <div className="relative w-full h-full">
                <div className="absolute w-full lg:h-[40rem] grid grid-cols-10 overflow-hidden">
                    <div className="col-span-7 col-start-3">
                        <div className="grid lg:grid-cols-5">
                            <div className="col-span-2 w-full lg:h-[40rem] ">
                                <div className="w-full h-[40rem] flex items-center justify-center ">
                                    <img className="aspect-square h-[20rem]" src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/slide-text-bg.png" alt="" />
                                </div>
                            </div>
                            <div className="col-span-2 col-start-4 w-full h-[40rem] hidden lg:inline">
                                <div className=" w-full h-[40rem] flex justify-end">
                                    <img className="aspect-square absolute h-[40rem]" src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/sliders-bg.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#35713a] hidden lg:inline" />
                </div>
                <div className="w-full lg:h-[40rem] grid grid-cols-5 pt-20 pb-8 lg:pb-0">
                    <div className="col-span-3 col-start-2">
                        <div className="flex">
                            <div className="relative w-full flex-1 flex items-center justify-center lg:justify-start mt-10 lg:mt-0">
                                <div className="flex flex-col gap-y-4">
                                    <h1 className="text-5xl font-black leading-snug lg:text-start text-center">
                                        Next Gen Enterprise Ecommerce Platform
                                    </h1>
                                    <div className="flex text-2xl font-extrabold gap-x-2 lg:justify-start justify-center">
                                        <p>Build whitelabelled</p>
                                        <div className="text-primary">
                                            <Typewriter
                                                options={{

                                                    strings: typeWriterValues,
                                                    autoStart: true,
                                                    loop: true,
                                                    delay: 20,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <p className="text-xl lg:text-start text-center">
                                        Designed for diverse B2B and B2C business models
                                    </p>
                                    <Button
                                        size={"lg"}
                                        className="rounded-full lg:self-start self-center text-lg font-extralight w-min bg-[#7db434] hover:bg-white text-white hover:text-[#7db434] border border-[#7db434] px-8 py-6 "
                                    >
                                        Schedule A Demo
                                    </Button>
                                </div>
                            </div>
                            <div className="w-[45%]  hidden lg:inline">
                                <div className=" w-full h-[35rem] ">
                                    <div className=" w-full flex justify-center">
                                        <img className=" absolute h-[35rem]" src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HeroSection;
