import logo from '../assets/images/logo.svg';
import UnitDropdown from './UnitDropdown';

function Navbar() {
    return (
        <div className='flex items-center justify-between px-6 lg:px-12 py-4 bg-transparent text-white font-bricola'>
            <img src={logo} alt="Logo" />
            <UnitDropdown />
        </div>
    )
}

export default Navbar