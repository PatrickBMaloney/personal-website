import React from "react";
import classes from "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href=" ">
                Patrick Maloney
            </a>
            <div
                className="collapse navbar-collapse"
                id="navbarToggleExternalContent"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                        <a className="nav-link" href="#about-me">
                            About Me
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link" href="#experience">
                            Experience
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link" href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;