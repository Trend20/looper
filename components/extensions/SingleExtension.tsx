import { Extension } from "@/types/Extension";
import Image from "next/image";

interface SingleExtensionProps {
    extension: Extension;
}

const SingleExtension = ({extension}:SingleExtensionProps) => {
    return (
        <div className="flex items-center justify-center cursor-pointer border border-[#4F46E5FF] rounded-lg p-3">
            <Image src={extension.icon} alt={extension.name} width={100} height={100}/>
        </div>
    )
}

export default SingleExtension;