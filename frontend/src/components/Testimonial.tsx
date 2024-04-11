import LinkCard from "./LinkCard";

const testimonialData = [
  {
    url: "https://shop.amul.com/",
    imgSrc:
      "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e540b3825200ec3e98d4c/logo_1-280x280.png",
  },
  {
    url: "https://syngentaretailers.syngenta.com",
    imgSrc:
      "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e550535f17f0f1634a49c/logo_4-280x280.png",
  },
  {
    url: "https://shop.bergerpaints.com/",
    imgSrc:
      "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e541f32ee360f4ca90519/logo_2-280x280.png",
  },
  {
    url: "https://www.masterconnect.in/",
    imgSrc:
      "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/652fdc4002b0a2ff20ae7608/logo_7-1-280x280.png",
  },
  {
    url: "https://www.mystore.in/",
    imgSrc:
      "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657984e0056572ee3696b063/mystore-280x280.png",
  },
  {
    url: "https://www.momeaze.com/",
    imgSrc:
      "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e5431b0863239a92b8315/logo_3-280x280.png",
  },
  {
    url: "https://www.whites.net/en/",
    imgSrc:
      "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e553491816d9dd9286f0f/logo_6-280x280.png",
  },
];

function Testimonial() {
  return (
    <div className="grid grid-cols-11 w-full h-max ">
      <div className="2xl:col-span-2 col-span-1  bg-[#F9F9F9]  lg:rounded-tl-[6rem] lg:ml-8 h-full" />
      <div className="2xl:col-span-7 col-span-9 col-start-2 bg-[#F9F9F9] w-full relative">
        <div className="absolute left-0 w-full h-full hidden lg:flex justify-center items-center">
          <img
            className="w-[20%] -ml-10"
            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/brand-after.png"
            alt=""
          />
        </div>
        <div className="w-full h-full grid-cols-10 flex flex-col-reverse lg:flex-row justify-between py-10">
          <div className="lg:w-[40%] w-full h-full">
            <div className="flex flex-wrap justify-center gap-4 w-full lg:hidden">
              {testimonialData.map((data) => (
                <LinkCard
                  key={data.imgSrc}
                  url={data.url}
                  imgSrc={data.imgSrc}
                />
              ))}
            </div>
            <div className="hidden lg:grid grid-cols-3 gap-2 z-10 h-full w-full">
              <div className="flex flex-col h-full w-full gap-y-3 justify-center items-center">
                {testimonialData.slice(0, 2).map((data) => (
                  <LinkCard
                    key={data.imgSrc}
                    url={data.url}
                    imgSrc={data.imgSrc}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-y-5 justify-center items-center">
                {testimonialData.slice(2, 5).map((data) => (
                  <LinkCard
                    key={data.imgSrc}
                    url={data.url}
                    imgSrc={data.imgSrc}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-y-5 justify-center items-center">
                {testimonialData.slice(5, 7).map((data) => (
                  <LinkCard
                    key={data.imgSrc}
                    url={data.url}
                    imgSrc={data.imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] w-full h-full">
            <div className="flex flex-col items-end justify-center gap-y-3 lg:text-end text-center w-full h-full">
              <h1 className="text-[36px] w-full relative !font-[900]">
                <span className="inline-block w-11 h-11 relative -top-4 -right-3">
                  <img
                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/heading-before.png"
                    alt=""
                  />
                </span>
                Empowering Brands Across the Globe
              </h1>
              <p className="font-semibold">
                StoreHippo ecommerce platform builds extraordinary solutions to
                power brands across 15 countries and 30+ industries. Add your
                brand to the long list of brands that trust StoreHippo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:col-span-2 col-span-1 bg-[#F9F9F9] lg:rounded-br-[6rem]"></div>
      {/* <section className="w-full grid grid-cols-5 h-max">
        <div className="lg:ml-8 h-full bg-[#F9F9F9] lg:rounded-tl-[6rem]" />
        <div className="col-start-2 col-span-3 bg-[#F9F9F9] py-16">
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between h-full relative my-4">
            <div className="hidden lg:grid grid-cols-3 gap-2 w-[45%] z-10">
              <div className="flex flex-col gap-y-5 justify-center items-center">
                {testimonialData.slice(0, 2).map((data) => (
                  <LinkCard
                    key={data.imgSrc}
                    url={data.url}
                    imgSrc={data.imgSrc}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-y-5 justify-center items-center">
                {testimonialData.slice(2, 5).map((data) => (
                  <LinkCard
                    key={data.imgSrc}
                    url={data.url}
                    imgSrc={data.imgSrc}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-y-5 justify-center items-center">
                {testimonialData.slice(5, 7).map((data) => (
                  <LinkCard
                    key={data.imgSrc}
                    url={data.url}
                    imgSrc={data.imgSrc}
                  />
                ))}
              </div>
            </div>
            <div className="lg:hidden flex gap-2 justify-center flex-wrap">
              {testimonialData.map((data) => (
                <LinkCard key={data.imgSrc} url={data.url} imgSrc={data.imgSrc} />
              ))}
            </div>
            <div className="absolute w-full h-full hidden lg:flex justify-center items-center">
              <img
                className="w-[20%] -mr-20"
                src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/brand-after.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-end justify-center gap-y-3 lg:text-end text-center lg:w-[40%] w-full">
              <h1 className="text-[36px] w-full relative !font-[900]">
                <span className="inline-block w-11 h-11 relative -top-4 -right-3">
                  <img
                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/heading-before.png"
                    alt=""
                  />
                </span>
                Empowering Brands Across the Globe
              </h1>
              <p className="font-semibold">
                StoreHippo ecommerce platform builds extraordinary solutions to
                power brands across 15 countries and 30+ industries. Add your
                brand to the long list of brands that trust StoreHippo.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F9F9] lg:rounded-br-[6rem]" />
      </section> */}
    </div>
  );
}

export default Testimonial;
