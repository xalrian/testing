import './nav-component.scss';
import MenuIcon from '../../utility/logo/Menu-icon-componentFolder/mobileMenu';
import dropMenu from './dropdown-menu';
const Nav = () => {
    return (
        <div className='nav-container'>
            <nav>
                <img  className='treeLogo' src={require('../../utility/logo/forest2.png')} alt=''/>
                <div className='licNum'>
                    <p>license#989</p>
                </div>
                <div className='phone-container'>
                    <a className='phone' href=''>(240) 507-8785</a>
                </div>
                <div className='menu-icon'>
                    <MenuIcon className='icon'/>
                </div>
                <div className='nav-links'>
                    <a href="#gal">Gallery</a>
                    <a href="#service">Services</a>
                    <a  href="#about" >About</a>
                </div>
            </nav>
        
        </div>
    )
}

export default Nav;