import Image from "next/image";

const SingleFeature = ({feature}: any) => {
    return (
        <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[#4F46E5FF] p-4">
                <Image src={feature.imageUrl} alt={feature.title} width={30} height={30}/>
            </span>
            <div>
                <h2 className="text-lg font-bold">{feature.title}</h2>

                <p className="mt-1 text-sm text-gray-400">
                    {feature.description}
                </p>
            </div>
        </div>
    )
}

export default SingleFeature;