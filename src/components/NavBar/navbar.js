import React from 'react';
import './navbar.css';
import har from'../../asset/har.png';
import {Link} from 'react-scroll';
import contactImg from'../../asset/contact.png';
const Navbar=() => {
    return (
        <nav className='navbar'>
            <img src={har} alt="Logo" className='logo'/>
            <div classname="desktopMenu">
            <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeclass='active' to='Skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeclass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeclass='active' to='ntro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Qualifications</Link>
            </div>
            <button className="desktoopMenuBtn" on onClick={() => {
                document.getElementById('contact')
            }}>
                <img src={contactImg}  alt="" className="desktopMenuImg"/>Lets talk</button>
        </nav>
    )
}
export default Navbar 