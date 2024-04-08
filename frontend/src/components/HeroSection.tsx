
import Typewriter from "typewriter-effect";
import { Button } from './ui/button';

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
        <section className="w-full grid grid-cols-5 ">
            <div className="col-start-2 col-span-3 ">
                <div className="grid grid-cols-5 mt-10">
                    <div className=" col-span-3 w-full h-[35rem] flex items-center ">
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-5xl font-black">
                                Next Gen Enterprise <br /> Ecommerce Platform
                            </h1>
                            <div className="flex text-2xl font-extrabold gap-x-2">
                                <p>Build whitelabelled</p>
                                <p className="text-[#53713A]">
                                    <Typewriter
                                        options={{
                                            strings: typeWriterValues,
                                            autoStart: true,
                                            loop: true,
                                            delay: 20,
                                        }}
                                    />
                                </p>
                            </div>
                            <p className="text-xl">
                                Designed for diverse B2B and B2C business models
                            </p>
                            <Button
                                size={"lg"}
                                className="rounded-full text-lg font-extralight w-min bg-primary hover:bg-white text-white hover:text-primary border border-primary px-8 py-6 "
                            >
                                Schedule A Demo
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-2 w-full h-[35rem] flex">
                        <img
                            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png"
                            alt="Hero Section Image"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#53713A] w-full h-full"></div>
        </section>
    )
}

export default HeroSection
