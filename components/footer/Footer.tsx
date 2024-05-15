import Link from "next/link";
import {FaGithub} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Contribute on GitHub</h2>

                    <p className="mx-auto mt-4 max-w-xl text-gray-400">
                        Visit our GitHub repository and start contributing to the development of the ultimate bookmark manager.
                    </p>

                    <Link
                        href="#"
                        className="mt-8 inline-block rounded-full border border-indigo-600 bg-indigo-600 text-white px-12 py-3 text-sm font-medium hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                    >
                        Get Started
                    </Link>
                </div>

                <div
                    className="mt-16 border-t border-gray-700 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24"
                >
                    <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                        <li>
                            <Link href="#" className="text-white transition hover:opacity-75"> Terms & Conditions </Link>
                        </li>

                        <li>
                            <Link href="#" className="text-white transition hover:opacity-75"> Privacy Policy </Link>
                        </li>
                    </ul>
                    <div className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
                            <Link
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-200 transition hover:opacity-75"
                            >
                                <FaGithub size={25} />
                            </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;