interface TopSectionProps {
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
    handleOpen: () => void;
}
const TopSection = ({searchQuery, setSearchQuery, handleOpen}: TopSectionProps) =>{
    return (
        <div className="flex flex-col items-center w-full sticky bg-black top-16 py-8 z-40 px-20">
            <h6 className="text-xl font-extrabold text-white">All Your Favorites, One Click Away</h6>
            <div
                className="flex justify-center space-x-3 w-full mt-8">
                <input type="text" placeholder="Search...."
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                       className="p-3 w-1/2 border border-gray-600 rounded-md outline-0 focus:outline-none"
                />
                <button onClick={handleOpen}
                        className="block w-full rounded-md border border-indigo-600 bg-[#4F46E5FF] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none active:text-opacity-75 sm:w-auto">Add
                    Link
                </button>
            </div>
        </div>
    )
}

export default TopSection;