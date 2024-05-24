import {FaGithub} from "react-icons/fa6";
import Link from "next/link";

const Contribute = () => {
    return(
        <Link
            target={'_blank'}
            className="flex items-center justify-center space-x-3 w-full rounded-full border border-indigo-600 bg-white text-[#4F46E5FF] px-12 py-3 text-sm font-medium focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href={"https://github.com/Trend20/looper"}
        >
            <i className="mr-3"><FaGithub size={25}/></i> Star
        </Link>
    )
}

export default Contribute;