import Link from "next/link";

const Bookmark = ({bookmark}: any) =>{
    return (
        <div className="flex flex-col p-2 justify-between rounded-lg shadow-2xl">
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
    )
}

export default Bookmark;