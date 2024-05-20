"use client"
import { FcGoogle } from "react-icons/fc";
import {signIn, useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import Logo from "@/components/Logo";

const AuthPage = () =>{
    const {data:session} = useSession();
    if(session){
        redirect('/bookmarks')
    }
    return(
        <div className="flex min-h-screen flex-col justify-center w-1/4 mx-auto">
            <div className="flex flex-col justify-center items-center bg-[#03071e] rounded-lg px-5 py-8 shadow-2xl">
                <Logo />
                <h3 className="text-3xl font-extrabold text-white sm:text-2xl">Log in to Looper</h3>
                <button onClick={() => signIn("google")} className="p-4 mt-5 flex justify-center items-center text-lg border rounded-lg border-gray-600">
                    <i className="flex mr-3"><FcGoogle size={25}/></i>
                    Continue with Google
                </button>
            </div>
        </div>
    )
}

export default AuthPage;