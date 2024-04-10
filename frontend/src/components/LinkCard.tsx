function LinkCard({ imgSrc, url }: { imgSrc: string; url: string }) {
    return (
        <div className="relative max-w-36 max-h-36 rounded-xl group overflow-hidden shadow-2xl">
            <a href={url} target="_blank">
                <div className="bg-cover bg-center w-full h-full rounded-lg  hover:bg-opacity-75 transition duration-300 ease-in-out">
                    <img
                        src={imgSrc}
                        alt="Logo"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-[50%] bottom-1 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <img
                            className=" z-50"
                            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg"
                            alt=""
                        />
                    </div>
                </div>
            </a>
        </div>
    );
}

export default LinkCard;
