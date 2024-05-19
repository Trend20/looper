import featuresInfo from '../../data/info.json'
import SingleFeature from "@/components/features/SingleFeature";

const Features = () =>{
    return (
        <section className="text-white w-full flex justify-center items-center">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex flex-col justify-center items-center">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold text-white sm:text-5xl">What makes us special</h2>

                    <p className="mt-4 text-gray-400">
                        Keep your online world organized and easily accessible.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    {
                        featuresInfo.features.map((feature) => (
                            <SingleFeature key={feature.id} feature={feature} />
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Features;