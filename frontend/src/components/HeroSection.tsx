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
        <div className="absolute w-full lg:h-[40rem] grid grid-cols-12 overflow-hidden">
          <div className="col-span-9 border-blue-900 col-start-3">
            <div className="grid lg:grid-cols-5">
              <div className="col-span-2 w-full lg:h-[40rem]">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    className="h-[20rem]"
                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/slide-text-bg.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-2 col-start-4 w-full h-[40rem] hidden lg:inline">
                <div className=" w-full h-[40rem] flex justify-center">
                  <img
                    className="aspect-square absolute h-[40rem]"
                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/sliders-bg.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#53713A] hidden lg:block" />
        </div>
        <div className="w-full lg:h-[40rem] grid grid-cols-11 lg:pt-20 pt-32 pb-8 lg:pb-0">
          <div className="2xl:col-span-2 lg:col-span-1" />
          <div className="2xl:col-span-7 lg:col-span-9 col-start-3 w-full ">
            <div className="w-full h-full grid lg:grid-cols-10 grid-cols-11 ">
              <div className="lg:col-span-6 col-start-1 col-span-9">
                <div className="flex flex-col w-full h-full gap-y-4 justify-center">
                  <h1 className="lg:text-5xl text-3xl font-black leading-snug lg:text-start text-center">
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
              <div className="col-span-4 hidden lg:block -mr-2">
                <div className="w-full h-full flex items-end 2xl:justify-end">
                  <img
                    className="absolute h-[32rem]"
                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:col-span-2 lg:col-span-1" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
