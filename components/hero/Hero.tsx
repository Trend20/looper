import Contribute from "@/components/Contribute";
import GetStarted from "@/components/GetStarted";

const Hero = () =>{
    return (
        <section className="text-white py-24">
            <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Say Goodbye to

                        <span className="sm:block"> Bookmark Chaos! </span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-400 font-medium lg:text-sm">
                        Quickly save, categorize, and retrieve your favorite sites with ease.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <GetStarted />
                        <Contribute />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;