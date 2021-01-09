import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classes from "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar className="nav-bar" expand="lg" sticky="top">
            <Navbar.Brand href=" ">Patrick Maloney</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-links">
                    <Nav.Link className="nav-link" href="#about-me">About Me</Nav.Link>
                    <Nav.Link className="nav-link" href="#experience">Experience</Nav.Link>
                    <Nav.Link className="nav-link" href="#projects">Projects</Nav.Link>
                    <Nav.Link className="nav-link" href="#contact-me">Contact Me</Nav.Link>
                    <Nav.Link className="nav-link" href="Resume.pdf">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        // <nav className="navbar navbar-expand-md navbar-light fixed-top">
        //     <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-bs-toggle="collapse"
        //         data-bs-target="#navbarToggleExternalContent"
        //         aria-controls="navbarToggleExternalContent"
        //         aria-expanded="false"
        //         aria-label="Toggle navigation"
        //     >
        //     <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <a className="navbar-brand" href=" ">
        //         Patrick Maloney
        //     </a>
        //     <div
        //         className="collapse navbar-collapse"
        //         id="navbarToggleExternalContent"
        //     >
        //         <ul className="navbar-nav ml-auto">
        //             <li className="navbar-item">
        //                 <a className="nav-link" href="#about-me">
        //                     About Me
        //                 </a>
        //             </li>
        //             <li className="navbar-item">
        //                 <a className="nav-link" href="#experience">
        //                     Experience
        //                 </a>
        //             </li>
        //             <li className="navbar-item">
        //                 <a className="nav-link" href="#projects">
        //                     Projects
        //                 </a>
        //             </li>
        //             <li className="navbar-item">
        //                 <a className="nav-link" href="#contact-me">
        //                     Contact
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );
};

export default NavBar;