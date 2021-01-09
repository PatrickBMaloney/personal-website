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
    );
};

export default NavBar;