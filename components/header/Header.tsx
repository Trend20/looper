"use client"
import Link from "next/link";
import Image from "next/image";
import { useSession} from "next-auth/react";
import {useState} from "react";
import Logout from "@/app/auth/components/Logout";

const Header = () =>{
    const { data: session } = useSession();
    const[showCard, setShowCard] = useState(false);

    const toggleCard = () =>{
        setShowCard(!showCard);
    }
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
                            {!session ? <Link
                                className="border-indigo-600 bg-[#4F46E5FF] rounded-full px-5 py-2.5 text-sm font-medium text-white shadow"
                                href={"/auth"}
                            >
                                Login
                            </Link> :
                               <button onClick={toggleCard}>
                                   <Image src={session.user?.image!} alt={session.user?.name!} width={50} height={50} className="rounded-full" />
                               </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {showCard && <div className="flex absolute right-72">
                <Logout/>
            </div>}
        </header>

    )
}

export default Header;