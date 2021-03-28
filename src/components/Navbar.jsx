import React, {useState} from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const history = useHistory();

    async function handleSignOut(){
        await firebase.auth().signOut();
        history.push('/')
    }

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
                            <Button onClick={handleSignOut}>Sign Out</Button>
                </ul>
                <p style={{color: "white"}}>{props.userNameDisplay}</p>
            </div>
        </div>
    )
}

export default Navbar;
