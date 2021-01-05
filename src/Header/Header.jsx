import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Header.css";

const Header = () => {
    return (
        <div className="header-section">
            <Row>
                <Col>
                    <h1>Hi, I'm <span className="name">Patrick Maloney</span></h1>
                    <p>I am an engineering student at The University of Waterloo, pursuing a career in software engineering. I'm currently searching for a summer 2021 coop position!</p>
                </Col>
                <Col>
                    <img 
                        className="head-shot"
                        src="images/head-shot.jpg"
                        alt=" " />
                </Col>
            </Row>
            
        </div>
    );
}

export default Header;