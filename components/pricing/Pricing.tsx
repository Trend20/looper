import FreePlan from "@/components/pricing/FreePlan";
import ProPlan from "@/components/pricing/ProPlan";

const Pricing = () => {
    return (
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-xl text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Flexible Pricing Plans</h2>

                <p className="mt-4 text-gray-400">
                    Choose the plan that best fits your bookmarking needs. Whether you&rsquo;re a casual user or a power user, we&rsquo;ve got you covered.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8 mt-8">
                <FreePlan />
                <ProPlan />
            </div>
        </div>
    )
}

export default Pricing;