"use client"
import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import { ClipLoader } from "react-spinners";

const AddBookmarkDialog = ({ open, handleOpen, getBookmarks }: any) =>{
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    // handle add collection
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/bookmarks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, url, description }),
            });
            setLoading(false);
            if (res.ok) {
                setTitle("");
                setUrl("");
                setDescription("");
                getBookmarks();
                handleOpen();
            } else {
                console.log("collection could not be created");
            }
        } catch (error) {
            console.error("Error saving collection:", error);
        }
        setLoading(false);
    };
    return(
        <>
            <Dialog
                placeholder={""}
                onPointerEnterCapture
                onPointerLeaveCapture
                open={open}
                size="xs"
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="p-5"
            >
                <div className="flex items-center justify-between">
                    <h3 className="flex flex-col items-start font-bold">
                        Add Link
                    </h3>
                    <i
                        onClick={handleOpen}
                        className="flex cursor-pointer rounded-full p-1 border"
                    >
                        <AiOutlineClose />
                    </i>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex mt-5">
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder="Title"
                            className="p-3 flex border border-grey rounded-md w-full"
                        />
                    </div>
                    <div className="flex mt-5">
                        <input
                            type="text"
                            onChange={(e) => setUrl(e.target.value)}
                            value={url}
                            placeholder="Url"
                            className="p-3 flex border border-grey rounded-md w-full"
                        />
                    </div>
                    <div className="flex mt-5">
                        <input
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            placeholder="Description"
                            className="p-3 flex border border-grey rounded-md w-full"
                        />
                    </div>
                    <div className="space-x-2 flex justify-end w-full mt-5">
                        <button
                            className="p-3 flex justify-center items-center text-white rounded-md bg-indigo-600 font-light w-32"
                            type="submit"
                        >
                            {loading ? <ClipLoader color="#fff"/> : "Submit"}
                        </button>
                    </div>
                </form>
            </Dialog>
        </>
    )
}

export default AddBookmarkDialog;