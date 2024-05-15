import Image from "next/image";

const Extensions = () =>{
    return (
        <section className="text-white w-full flex py-32 justify-center items-center">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex flex-col text-center justify-center items-center">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Browser Extension</h2>

                    <p className="mt-4 text-gray-400">
                        Enhance your browsing experience with our convenient browser extension.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    <div className="flex items-center justify-center border border-gray-600 rounded-lg p-3">
                        <Image src={'/icons/chrome.svg'} alt={'chrome'} width={100} height={100} />
                    </div>
                    <div className="flex items-center justify-center border border-gray-600 rounded-lg p-3">
                        <Image src={'/icons/firefox.svg'} alt={'firefox'} width={100} height={100} />
                    </div>
                    <div className="flex items-center justify-center border border-gray-600 rounded-lg p-3">
                        <Image src={'/icons/brave.svg'} alt={'brave'} width={100} height={100} />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Extensions;