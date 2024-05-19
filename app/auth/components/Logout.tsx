"use client";

import Link from "next/link";
import {signOut} from "next-auth/react";

const Logout = () =>{
    return(
        <div className="rounded-lg bg-white p-8 shadow-2xl">
            <div className="mt-4 flex gap-2">
                <Link  href={"/bookmarks"} className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
                    View links
                </Link>
                <button onClick={() => signOut()} type="button" className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
                    Logout
                </button>
            </div>
        </div>

    )
}

export default Logout;