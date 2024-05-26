import freePlanInfo from '../../data/info.json'
import Image from "next/image";

const FreePlan = () => {
    return (
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
                {
                    freePlanInfo.pricing.free.map((free: any) => (
                        <li className="flex items-center gap-1 text-gray-400 font-light" key={free.id}>
                            <Image src={free.icon} alt={free.name} width={16} height={16} />
                            {free.name}
                        </li>
                    ))
                }
            </ul>
            <a
                href="#"
                className="mt-8 block rounded-full border border-[#4F46E5FF] bg-white px-12 py-3 text-center text-sm font-medium text-[#4F46E5FF] hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
                Get Started
            </a>
        </div>
    )
}

export default FreePlan;