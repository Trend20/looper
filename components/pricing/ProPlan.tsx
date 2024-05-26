import freePlanInfo from "@/data/info.json";
import Image from "next/image";

const ProPlan = () => {
    return (
        <div
            className="rounded-2xl border border-[#4F46E5FF] p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
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
                {
                    freePlanInfo.pricing.pro.map((pro: any) => (
                        <li className="flex items-center gap-1 text-gray-400 font-light" key={pro.id}>
                            <Image src={pro.icon} alt={pro.name} width={16} height={16}/>
                            {pro.name}
                        </li>
                    ))
                }
            </ul>
            <a
                href="#"
                className="mt-8 block rounded-full border border-[#4F46E5FF] bg-[#4F46E5FF] px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
            >
                Get Started
            </a>
        </div>
    )
}

export default ProPlan;