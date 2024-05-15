const Pricing = () => {
    return (
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-xl text-center">
                <h2 className="text-4xl font-bold sm:text-4xl">Flexible Pricing Plans</h2>

                <p className="mt-4 text-gray-400">
                    Choose the plan that best fits your bookmarking needs. Whether you're a casual user or a power user, we've got you covered.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8 mt-8">
                <div
                    className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
                >
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-white">
                            Pro
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-white sm:text-4xl"> 5$ </strong>

                            <span className="text-sm font-medium text-white">/month</span>
                        </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400 font-light"> 20 users included </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400 font-light"> 5GB of storage </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400 font-light"> Email support </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400 font-light"> Help center access </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400 font-light"> Phone support </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400 font-light"> Community access </span>
                        </li>
                    </ul>

                    <a
                        href="#"
                        className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                    >
                        Get Started
                    </a>
                </div>

                <div className="rounded-2xl border border-gray-600 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-white">
                            Free
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-white sm:text-4xl"> 0$ </strong>

                            <span className="text-sm font-medium text-white">/month</span>
                        </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400"> 10 users included </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400 font-light"> 2GB of storage </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400 font-light"> Email support </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <span className="text-gray-400 font-light"> Help center access </span>
                        </li>
                    </ul>

                    <a
                        href="#"
                        className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Pricing;