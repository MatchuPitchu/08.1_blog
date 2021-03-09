import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import fontawesome for React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    
    return (
        <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="./">
                    <div className="d-flex justify-content-between">
                        <FontAwesomeIcon icon={['fa', 'child']} />
                        <FontAwesomeIcon icon={['fa', 'running']} />
                        <FontAwesomeIcon icon={['fa', 'biking']} />
                        <FontAwesomeIcon icon={['fa', 'tabletennis']} />
                        <FontAwesomeIcon icon={['fa', 'swimmer']} />
                        <FontAwesomeIcon icon={['fa', 'futbol']} />
                        <FontAwesomeIcon icon={['fa', 'skiing']} />
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