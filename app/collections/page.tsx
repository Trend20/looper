"use client"

import Link from "next/link";

const CollectionsPage = () =>{
    return(
        <div className="flex border-2 border-gray-600 w-full py-5 flex-col items-center justify-center">
            <div className="flex justify-end space-x-3 items-center w-full px-3">
                <input type="text" placeholder="search links" className="p-3 w-1/2 border border-gray-600 rounded-full outline-0 focus:outline-none" />
                <button className="block w-full rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none active:text-opacity-75 sm:w-auto">Add Link</button>
            </div>
            <div className="flex flex-col w-full space-y-2 mt-10">
                <hr className="border-gray-600 border"/>
                <div className="flex p-2 justify-between rounded-lg">
                    <div className="flex flex-col w-1/4">
                        <h6 className="text-2xl font-semibold">Tailwindcss</h6>
                        <p className="text-sm font-light text-gray-400">An article on how to work with tailwindcss</p>
                    </div>
                    <div className="flex justify-center text-gray-400 space-x-2 w-1/2">
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>styles</p>
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>ui</p>
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>frontend</p>
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>tailwind</p>
                    </div>
                    <div className="flex justify-end w-28">
                        <Link href={"/"} target={'_blank'}
                              className="flex items-center w-full justify-center rounded-full h-10 bg-indigo-600 text-white">Visit</Link>
                    </div>
                </div>
                <hr className="border-gray-600 border"/>
                <div className="flex p-2 justify-between rounded-lg">
                    <div className="flex flex-col w-1/4">
                        <h6 className="text-2xl font-semibold">Tailwindcss</h6>
                        <p className="text-sm font-light text-gray-400">An article on how to work with tailwindcss</p>
                    </div>
                    <div className="flex justify-center text-gray-400 space-x-2 w-1/2">
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>styles</p>
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>ui</p>
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>frontend</p>
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>tailwind</p>
                    </div>
                    <div className="flex justify-end w-28">
                        <Link href={"/"} target={'_blank'}
                              className="flex items-center w-full justify-center rounded-full h-10 bg-indigo-600 text-white">Visit</Link>
                    </div>
                </div>
                <hr className="border-gray-600 border"/>
                <div className="flex p-2 justify-between rounded-lg">
                    <div className="flex flex-col w-1/4">
                        <h6 className="text-2xl font-semibold">Tailwindcss</h6>
                        <p className="text-sm font-light text-gray-400">An article on how to work with tailwindcss</p>
                    </div>
                    <div className="flex justify-center text-gray-400 space-x-2 w-1/2">
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>styles</p>
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>ui</p>
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>frontend</p>
                        <p className='bg-indigo-600 rounded-full text-xs h-7 flex items-center justify-center w-20'>tailwind</p>
                    </div>
                    <div className="flex justify-end w-28">
                        <Link href={"/"} target={'_blank'}
                              className="flex items-center w-full justify-center rounded-full h-10 bg-indigo-600 text-white">Visit</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionsPage;