import Link from "next/link";

const GetStarted = () => {
    return(
        <Link
            className="block w-full rounded-full border border-indigo-600 bg-[#4F46E5FF] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href={"/auth"}
        >
            Get Started
        </Link>
    )
}

export default GetStarted;