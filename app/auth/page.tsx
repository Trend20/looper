"use client"
import { FcGoogle } from "react-icons/fc";
import {signIn} from "next-auth/react";

const AuthPage = () =>{
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