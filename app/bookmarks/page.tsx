"use client"

import Link from "next/link";
import {useEffect, useState} from "react";
import AddBookmarkDialog from "@/app/bookmarks/components/AddBookmarkDialog";

const CollectionsPage = () =>{
    const [open, setOpen] = useState(false);
    const [bookmarks, setBookmarks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const getBookmarks = async () => {
        setLoading(true);
        const response = await fetch("/api/bookmarks");
        const data = await response.json();
        setLoading(false);
        console.log(data);
        setBookmarks(data);
    };
    useEffect(() => {
        getBookmarks();
    }, []);

    const handleOpen = () => setOpen(!open);
    return(
        <div className="flex border-2 border-gray-600 w-full py-5 flex-col items-center justify-center">
            <div className="flex justify-end space-x-3 items-center w-full px-3">
                <input type="text" placeholder="search links" className="p-3 w-1/2 border border-gray-600 rounded-full outline-0 focus:outline-none" />
                <button onClick={handleOpen} className="block w-full rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none active:text-opacity-75 sm:w-auto">Add Link</button>
            </div>
            {
                bookmarks.length > 0 ? <div className="grid grid-cols-3 w-full mt-10">
                    {
                        bookmarks.map((bookmark) => (
                            <div key={bookmark.id} className="flex flex-col p-2 justify-between rounded-lg shadow-2xl">
                                <div className="flex flex-col w-1/4">
                                    <h6 className="text-2xl font-semibold">{bookmark.title}</h6>
                                    <p className="text-sm font-light text-gray-400">{bookmark.description}</p>
                                </div>
                                <div className="flex justify-center text-gray-400 space-x-2 w-1/2">
                                    <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>styles</p>
                                    <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>ui</p>
                                    <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>frontend</p>
                                    <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>tailwind</p>
                                </div>
                                <div className="flex justify-end w-28">
                                    <Link href={bookmark.url} target={'_blank'}
                                          className="flex items-center w-full justify-center rounded-full h-10 bg-indigo-600 text-white">Visit</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                    :
                    <p>Please add bookmarks.</p>
            }
            <AddBookmarkDialog open={open} handleOpen={handleOpen} getBookmarks={getBookmarks}/>
        </div>
    )
}

export default CollectionsPage;