import logo from '../assets/images/logo.svg';
import UnitDropdown from './UnitDropdown';

export default function Navbar() {
    return (
        <div className='flex items-center justify-between px-12 py-4 bg-transparent text-white'>
            <img src={logo} alt="Logo" />
            <UnitDropdown />
        </div>
    )
}