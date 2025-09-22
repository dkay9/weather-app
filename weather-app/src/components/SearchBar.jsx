import SearchIcon from '../assets/images/icon-search.svg';

export default function SeachBar() {
    return (
        <div >
            <div className='flex items-center gap-3 border border-neutral-700 rounded-md px-4 py-2 max-w-md mx-auto mt-6 mb-4'>
                <img src={SearchIcon} alt="Search Icon " />
                <input className='bg-transparent' type="text" placeholder='Search for a place' />
            </div>
            <button className='px-5 py-2 bg-blue-500 rounded-md'>Search</button>
        </div>
    )
}