import Image from "next/image";

const SingleExtension = ({feature}:any) => {
    return (
        <div className="flex items-center justify-center cursor-pointer border border-gray-600 rounded-lg p-3">
            <Image src={feature.icon} alt={feature.name} width={100} height={100}/>
        </div>
    )
}

export default SingleExtension;