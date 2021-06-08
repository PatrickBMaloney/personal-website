import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import classes from "./Header.css";

const Header = () => {
    return (
        <div className="header-section">
            <Row>
                <Col className="header-col" sm={6}>
                    <h1>Hi, I'm <span className="name">Patrick Maloney</span></h1>
                    <p>I am an engineering student at The University of Waterloo, pursuing a career in software engineering. I'm currently searching for a winter 2022 co-op position!</p>
                    <div className="header-links">
                    <Row>
                        <Col lg={6}>
                            <Row>
                        <Col>
                            <a href="https://github.com/PatrickBMaloney"><GitHubIcon className="icon" fontSize="large" /></a>
                        </Col>
                        <Col>
                            <a href="mailto:pbmaloney@uwaterloo.ca"><MailOutlineIcon className="icon" fontSize="large" /></a>
                        </Col>
                        </Row>
                        </Col>
                        <Col lg={6}>
                        <Row>
                        <Col>
                            <a href="https://www.linkedin.com/in/patrickbmaloney/" ><LinkedInIcon className="icon" fontSize="large" /></a>
                        </Col>
                        <Col>
                            <a href="Resume_.pdf"><DescriptionIcon className="icon last-icon" fontSize="large" /></a>
                        </Col>
                        </Row>
                        </Col>
                    </Row>
                    </div>
                </Col>
                <Col className="header-col" sm={6}>
                    <img 
                        className="head-shot"
                        src="images/head-shot.jpg"
                        alt="Patrick Maloney" />
                </Col>
            </Row>
            
        </div>
    );
}

export default Header;