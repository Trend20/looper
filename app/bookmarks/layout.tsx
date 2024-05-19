"use client"
import {usePathname} from "next/navigation";

const CollectionLayout = ({children}: Readonly<{
    children: React.ReactNode;
}>) =>{
    const pathname = usePathname();
    const isLogin = pathname === "/";
    return(
        <div className="flex justify-center min-h-screen w-full px-56">
            <main className='w-full'>
                {children}
            </main>
        </div>
    )
}

export default CollectionLayout;