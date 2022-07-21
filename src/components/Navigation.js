import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/navigation.css';  

function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-title">
                <NavLink className="title" to="/">
                    <img alt="Rate BCPS" src="../assets/images/logo.png"/>
                    BaltCo Review
                </NavLink>
            </div>
            <div className="navbar">
                <ul className="nav-links">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;