import Link from "next/link";
import {FaTrashAlt} from "react-icons/fa";

const Bookmark = ({bookmark}: any) =>{
    return (
        <div className="flex p-2 w-full justify-between rounded-lg border border-gray-800">
            <div className="flex flex-col w-3/4">
                <div className="flex flex-col w-full">
                    <h6 className="text-2xl font-semibold">{bookmark.title}</h6>
                    <p className="text-sm font-light text-gray-400">{bookmark.description}</p>
                </div>
            </div>
            <div className="flex items-center justify-end mt-3 w-1/4 space-x-3">
                <Link href={bookmark.url} target={'_blank'}
                      className="flex items-center p-2 rounded-full w-20 justify-center bg-[#4F46E5FF] text-white">Visit</Link>
                <button className="flex items-center p-2 rounded-full">
                    <FaTrashAlt fill={"#f7252c"} size={20}/>
                </button>
            </div>
        </div>
    )
}

export default Bookmark;