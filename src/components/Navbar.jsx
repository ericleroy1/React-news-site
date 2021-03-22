import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);


    return (
        <div className='navbar'>
            <div className="navbar-container">
                <Link to="/home" className="navbar-logo" onClick={closeMenu}>
                        NEWS LOGO <i className='fab fa-typo3'/>
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/search' className='nav-links' onClick={closeMenu}>
                                Search
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/mynews' className='nav-links' onClick={closeMenu}>
                                MyNews
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/logout' className='nav-links' onClick={closeMenu}>
                                Logout
                            </Link>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
