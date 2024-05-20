"use client"

import {useEffect, useState} from "react";
import AddBookmarkDialog from "@/app/bookmarks/components/AddBookmarkDialog";
import Bookmark from "@/app/bookmarks/components/Bookmark";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import Loading from "@/app/bookmarks/loading";

const CollectionsPage = () =>{
    const [open, setOpen] = useState(false);
    const [bookmarks, setBookmarks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const {data: session} = useSession();

    const getBookmarks = async () => {
        setLoading(true);
        const response = await fetch("/api/bookmarks");
        const data = await response.json();
        console.log(data);
        setBookmarks(data);
        setLoading(false);
    };
    useEffect(() => {
        getBookmarks();
    }, []);

    const handleOpen = () => setOpen(!open);

    if(!session){
        redirect('/')
    }

    if(loading){
        return <Loading />
    }
    return (
        <>
            {
                (!bookmarks || bookmarks.length === 0) ?
                    <div className="flex flex-col items-center w-full py-16">
                        <Image src={'/icons/error.svg'} alt={'error'} width={100} height={100}/>
                        <p className="text-lg text-gray-400">Your Link Repository is Empty.</p>
                        <button onClick={handleOpen}
                                className="block w-full mt-5 rounded-full border border-indigo-600 bg-[#4F46E5FF] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none active:text-opacity-75 sm:w-auto">Add
                            Link
                        </button>
                    </div>
                    :
                    <div className="flex flex-col w-full">
                        {bookmarks && bookmarks.length > 0 &&
                            <div className="flex flex-col items-center w-full sticky bg-black top-24 py-10 z-40 px-20">
                                <h3 className="text-3xl font-extrabold text-white sm:text-5xl">All Your Favorites, One Click Away</h3>
                                <div
                                    className="flex justify-center space-x-3 w-full mt-8">
                                    <input type="text" placeholder="Search...."
                                           className="p-3 w-1/2 border border-gray-600 rounded-full outline-0 focus:outline-none"/>
                                    <button onClick={handleOpen}
                                            className="block w-full rounded-full border border-indigo-600 bg-[#4F46E5FF] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none active:text-opacity-75 sm:w-auto">Add
                                        Link
                                    </button>
                                </div>
                            </div>
                        }
                        <div
                            className="flex w-3/4 mx-auto shadow-2xl min-h-screen rounded-lg bg-[#001b2e] py-5 flex-col items-center justify-center">
                            <div className="flex flex-col p-4 w-full space-y-4">
                                {
                                    bookmarks.map((bookmark) => (
                                        <Bookmark bookmark={bookmark} key={bookmark.id}/>
                                    ))
                                }
                            </div>
                            <AddBookmarkDialog open={open} handleOpen={handleOpen} getBookmarks={getBookmarks}/>
                        </div>
                    </div>
            }
        </>
    )
}

export default CollectionsPage;