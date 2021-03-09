import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faRunning, faBiking, faTableTennis, faSwimmer, faFutbol, faSkiing } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    
    return (
        <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="./">
                    <div className="d-flex justify-content-between">
                        <FontAwesomeIcon icon={faChild} />
                        <FontAwesomeIcon icon={faRunning} />
                        <FontAwesomeIcon icon={faBiking} />
                        <FontAwesomeIcon icon={faTableTennis} />
                        <FontAwesomeIcon icon={faSwimmer} />
                        <FontAwesomeIcon icon={faFutbol} />
                        <FontAwesomeIcon icon={faSkiing} />
                    </div>
                    <div>The Blog about Sport in Life</div>
                </NavLink>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search your topic" aria-label="Search" />
                    <button className="btn btn-secondary my-btn" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </>
    )
}

export default Navbar;