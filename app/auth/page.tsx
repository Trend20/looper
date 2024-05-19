"use client"
import { FcGoogle } from "react-icons/fc";
import {signIn, useSession} from "next-auth/react";
import {redirect} from "next/navigation";

const AuthPage = () =>{
    const {data:session} = useSession();
    if(session){
        redirect('/bookmarks')
    }
    return(
        <div className="flex min-h-screen flex-col items-center justify-center">
            <button onClick={() => signIn("google")} className="p-4 flex justify-center items-center text-lg border rounded-lg border-gray-600">
                <i className="flex mr-3"><FcGoogle size={25}/></i>
                Continue with Google
            </button>
        </div>
    )
}

export default AuthPage;