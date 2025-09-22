import logo from '../assets/images/logo.svg';
import UnitDropdown from './UnitDropdown';

export default function Navbar() {
    return (
        <div className='flex items-center justify-between w-full px-4 md:px-12 py-4 bg-transparent text-white'>
            <img className='w-44' src={logo} alt="Logo" />
            <UnitDropdown />
        </div>
    )
}