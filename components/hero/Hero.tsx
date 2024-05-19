import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

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
                        <Link
                            className="block w-full rounded-full border border-indigo-600 bg-[#4F46E5FF] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href={"/auth"}
                        >
                            Get Started
                        </Link>

                        <Link
                            target={'_blank'}
                            className="flex items-center justify-center space-x-3 w-full rounded-full border border-indigo-600 bg-white text-[#4F46E5FF] px-12 py-3 text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href={"https://github.com/Trend20/looper"}
                        >
                            <i className="mr-3"><FaGithub size={25}/></i> Star
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;