import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    
    return (
        <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="./">
                   <FontAwesomeIcon icon={faChild} />
                   <div>The Sports Blog</div>
                </NavLink>
            </div>
        </nav>
        </>
    )
}

export default Navbar;