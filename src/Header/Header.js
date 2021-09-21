import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="menu">
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <a href="./home">Logo</a>
                    </div>
                    <div className="navbar-items">
                        <ul className="nav-list">
                            <li><a href="./home">Home</a></li>
                            <li><a href="./about">About Us</a></li>
                            <li><a href="./contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;