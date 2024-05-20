"use client"

import { useEffect, useState} from "react";
import AddBookmarkDialog from "@/app/bookmarks/components/AddBookmarkDialog";
import Bookmark from "@/app/bookmarks/components/Bookmark";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import Loading from "@/app/bookmarks/loading";
import TopSection from "@/app/bookmarks/components/TopSection";

const CollectionsPage = () =>{
    const [open, setOpen] = useState(false);
    const [bookmarks, setBookmarks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const {data: session} = useSession();
    const [filteredBookmarks, setFilteredBookmarks] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

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

    useEffect(() => {
        const filtered = bookmarks.filter(bookmark =>
            bookmark.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBookmarks(filtered);
    }, [searchQuery, bookmarks]);

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
                            <TopSection handleOpen={handleOpen} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                        }
                        <div
                            className="flex w-3/4 mx-auto shadow-2xl rounded-lg bg-[#001b2e] py-5 flex-col items-center justify-center">
                            <div className="flex flex-col p-4 w-full space-y-4">
                                {
                                    filteredBookmarks.map((bookmark) => (
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