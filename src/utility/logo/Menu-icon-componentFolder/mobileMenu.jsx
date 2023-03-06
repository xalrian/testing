import './mobileMenus.scss';
import { useRef } from 'react';
import { useState } from 'react';
import DropedDown from './dropedDown';
const MenuIcon = () => {
    const [isDropedDown,setIsDropedDown] = useState(false);
    const toggleIsDropedDown = () =>{setIsDropedDown(!isDropedDown)}
    const dropdownRef = useRef(null);
    // console.log(isDropedDown);
    return(
        
    <div className='container' onClick={toggleIsDropedDown}>
    
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
    {isDropedDown && <DropedDown/>}
</div>

    ) 
}

export default MenuIcon;