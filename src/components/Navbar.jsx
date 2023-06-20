import React from "react";
import logo from "../Images/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/movies" className="nav-link">Movies</a>
                </li>
                <li className="nav-item nav-item-right">
                    <a href="/about" className="nav-link">About</a>
                </li>
                <li className="nav-item nav-item-right">
                    <a href="/contact" className="nav-link">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
