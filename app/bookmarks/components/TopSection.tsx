

const TopSection = ({searchQuery, setSearchQuery, handleOpen}: any) =>{
    return (
        <div className="flex flex-col items-center w-full sticky bg-black top-24 py-10 z-40 px-20">
            <h3 className="text-3xl font-extrabold text-white sm:text-5xl">All Your Favorites, One Click Away</h3>
            <div
                className="flex justify-center space-x-3 w-full mt-8">
                <input type="text" placeholder="Search...."
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                       className="p-3 w-1/2 border border-gray-600 rounded-full outline-0 focus:outline-none"
                />
                <button onClick={handleOpen}
                        className="block w-full rounded-full border border-indigo-600 bg-[#4F46E5FF] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none active:text-opacity-75 sm:w-auto">Add
                    Link
                </button>
            </div>
        </div>
    )
}

export default TopSection;