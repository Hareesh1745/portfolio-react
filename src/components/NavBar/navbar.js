import React from 'react';
import './navbar.css';
import logo from'../../asset/logo.png';
import {Link} from 'react-scroll'
import contactImg from'../../asset/contact.png';
const Navbar=() =>{
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo'/>
            <div classname="desktopMenu">
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>portfolio</Link>
            <Link className='desktopMenuListItem'>projects</Link>
            </div>
            <button className="desktopMenu">
                <img src={contactImg}  alt="" className="desktopMenuImg"/>Lets talk</button>
        </nav>
    )
}
export default Navbar 