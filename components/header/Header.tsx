import Link from "next/link";
import Image from "next/image";

const Header = () =>{
    return (
        <header className="w-full py-4">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" href="/">
                            <Image src={'/logo.svg'} alt={'logo'} width={100} height={100}/>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="border-indigo-600 bg-indigo-600 rounded-full px-5 py-2.5 text-sm font-medium text-white shadow"
                                href={"/auth"}
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;