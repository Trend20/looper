import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
                <Image src={'/logo.svg'} alt={'logo'} width={100} height={100}/>
            </Link>
        </div>
    )
}

export default Logo;