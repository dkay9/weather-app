import SearchIcon from '../assets/images/icon-search.svg';

export default function SeachBar() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 px-8 gap-4 ">
            {/* Search Bar */}
            <div className="flex items-center gap-6 bg-neutral-600 border border-neutral-700 rounded-md px-4 py-2 mt-6 md:mt-0 w-full md:w-96">
                <img src={SearchIcon} alt="Search Icon" />
                <input
                className="bg-transparent focus:outline-none flex-1"
                type="text"
                placeholder="Search for a place..."
                />
            </div>
            {/* Search Button */}
            <button className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-md w-full md:w-28 text-base focus:outline-none focus:ring">
                Search
            </button>
        </div>
    )
}