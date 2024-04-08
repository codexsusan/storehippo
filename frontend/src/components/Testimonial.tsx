import LinkCard from "./LinkCard";

function Testimonial() {
    return (
        <section className="w-full grid grid-cols-5 h-max">
            <div className="ml-8 h-full bg-[#F9F9F9] rounded-tl-[6rem]" />
            <div className="col-start-2 col-span-3 bg-[#F9F9F9] py-16">
                <div className="w-full flex h-full">
                    <div className="grid grid-cols-3 w-[45%]">
                        <div className="flex flex-col gap-y-5 justify-center items-center">
                            <LinkCard
                                url="https://shop.amul.com/"
                                imgSrc="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e540b3825200ec3e98d4c/logo_1-280x280.png"
                            />
                            <LinkCard
                                url="https://syngentaretailers.syngenta.com"
                                imgSrc="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e550535f17f0f1634a49c/logo_4-280x280.png"
                            />
                        </div>
                        <div className="flex flex-col gap-y-5 justify-center items-center">
                            <LinkCard
                                url="https://shop.bergerpaints.com/"
                                imgSrc="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e541f32ee360f4ca90519/logo_2-280x280.png"
                            />
                            <LinkCard
                                url="https://www.masterconnect.in/"
                                imgSrc="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/652fdc4002b0a2ff20ae7608/logo_7-1-280x280.png"
                            />
                            <LinkCard
                                url="https://www.mystore.in/"
                                imgSrc="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657984e0056572ee3696b063/mystore-280x280.png"
                            />
                        </div>
                        <div className="flex flex-col gap-y-5 justify-center items-center">
                            <LinkCard
                                url="https://www.momeaze.com/"
                                imgSrc="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e5431b0863239a92b8315/logo_3-280x280.png"
                            />
                            <LinkCard
                                url="https://www.whites.net/en/"
                                imgSrc="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e553491816d9dd9286f0f/logo_6-280x280.png"
                            />
                        </div>
                    </div>
                    <div className="h-full flex flex-1 items-center">
                        <img
                            className=" w-[90%] -ml-3"
                            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/brand-after.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col flex-1 items-end justify-center gap-y-3 text-end">

                        <h1 className="text-[30px] relative !font-bold">
                            <span className="inline-block w-11 h-11 relative -top-2 -right-4">
                                <img
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/heading-before.png"
                                    alt=""
                                />
                            </span>
                            Empowering <br /> Brands Across <br /> the Globe
                        </h1>
                        <p className="font-semibold">StoreHippo ecommerce platform builds extraordinary solutions to power brands across 15 countries and 30+ industries. Add your brand to the long list of brands that trust StoreHippo.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F9F9F9] rounded-br-[6rem]" />
        </section>
    );
}

export default Testimonial;
