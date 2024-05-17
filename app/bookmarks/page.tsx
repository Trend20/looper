"use client"

import {useEffect, useState} from "react";
import AddBookmarkDialog from "@/app/bookmarks/components/AddBookmarkDialog";
import Bookmark from "@/app/bookmarks/components/Bookmark";

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
                            <Bookmark bookmark={bookmark} key={bookmark.id} />
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