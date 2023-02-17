import './header.scss';
import { Menu, X } from 'feather-icons-react';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import icon from '../../images/icon_page.png'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false); 
    return (
        <nav>
            {/* <h1>M SANTOS</h1> */}
            <img src={icon} className='iconPage' alt="icon page" />
            <ul className={showMenu ? 'show': ''}>
                <li onClick={()=> setShowMenu(false)}><a href="#about" >About me</a></li>
                <li onClick={()=> setShowMenu(false)}><a href="#skills" >Skills</a></li>
                <li onClick={()=> setShowMenu(false)}><a href="#projects" >Projects</a></li>
                <li onClick={()=> setShowMenu(false)}><Link className='contactButton' to="/contact">Contact</Link></li>
            </ul>
            <button className="menu-hamburguesa" id="menu-hamburguesa">
                {!showMenu ?
                <Menu onClick={()=> setShowMenu(!showMenu)}/>
                :
                <X onClick={()=> setShowMenu(!showMenu)}/>
                }
            </button>
        </nav>
    )
}

export default Header