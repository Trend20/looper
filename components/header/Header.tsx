"use client"
import Link from "next/link";
import Image from "next/image";
import { useSession} from "next-auth/react";
import {useState} from "react";
import Logout from "@/app/auth/components/Logout";
import Logo from "@/components/Logo";
import Contribute from "@/components/Contribute";

const Header = () =>{
    const { data: session } = useSession();
    const[showCard, setShowCard] = useState(false);

    const toggleCard = () =>{
        setShowCard(!showCard);
    }
    return (
        <header className="w-full py-4 sticky top-0 bg-black text-white p-4 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Logo />
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            {!session ? <Link
                                className="border-indigo-600 bg-[#4F46E5FF] rounded-full px-5 py-2.5 text-sm font-medium text-white shadow"
                                href={"/auth"}
                            >
                                Login
                            </Link> :
                                <div className="sm:flex sm:gap-4">
                                    <button onClick={toggleCard}>
                                        <Image src={session.user?.image!} alt={session.user?.name!} width={50}
                                               height={50} className="rounded-full"/>
                                    </button>
                                    <Contribute />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {showCard && <div className="flex absolute right-72 z-[100]">
            <Logout/>
            </div>}
        </header>

    )
}

export default Header;