import React from "react";
import Accordion from '@material-ui/core/Accordion';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { green } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import classes from "./Projects.css";

export default function Projects() {
return (
    <div id="projects">
        <h2>My Projects</h2>
        <div>
        <Accordion id="accordion1">
            <AccordionSummary
                className="accordian-summary"
                expandIcon={<ExpandMoreIcon styles={{ color: green[500] }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h6">FaceUp</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian-details">
                <Typography>
                <Row>
                    <Col>
                        <div sm={6} className="description-column">
                            <h3 className="project-title">FaceUp</h3>
                            <h6><FontAwesomeIcon icon={faTrophy} color="#DAB900" /> BrickHack 2019 Best AR/VR Hack!</h6>
                            <p className="project-description">Developed a facial recognition and information display app for the Vuzix Blade smart glasses in under 24 hours with the use of Unity, Vysor, and Vuforia.</p>
                            <a href="https://github.com/PatrickBMaloney/FACEUP" className="github"><GitHubIcon fontSize="large"/></a>
                            <a href="https://devpost.com/software/whoisthis" className="devpost">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 226 226" styles={{fill: 'white'}}>
                                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" styles={{mixBlendMode: "normal"}}>
                                        <path d="M0,226v-226h226v226z" fill="none"></path>
                                        <g>
                                            <path d="M165.08829,28.25h-104.17187l-47.49767,84.77825l48.71713,84.72175h102.94771l47.47883,-84.75z" fill="#008891"></path>
                                            <path d="M113.74392,65.91667h-33.70225v94.16667h33.70225c25.61333,0 46.33942,-21.06037 46.33942,-47.08333c0,-26.02296 -20.72608,-47.08333 -46.33942,-47.08333zM113,141.25h-14.125v-56.5h14.125c15.58458,0 28.25,12.66542 28.25,28.25c0,15.58458 -12.66542,28.25 -28.25,28.25z" fill="#ffffff"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} className="media-column">
                        <iframe className="faceup-video" src="https://drive.google.com/file/d/1DucVWRb1USnDj5gSVCRFHzYgdu_SOtHE/preview" width="640" height="480"></iframe>
                    </Col>
                </Row>

                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion id="accordion1">
            <AccordionSummary
                className="accordian-summary"
                expandIcon={<ExpandMoreIcon styles={{ color: green[500] }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h6">MediBand</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian-details">
                <Typography>
                <Row>
                    <Col sm={6} >
                        <div className="description-column">
                            <h3 className="project-title">MediBand</h3>
                            <h6><FontAwesomeIcon icon={faTrophy} color="#DAB900" /> BrickHack 2020 Chaos Engineering Award!</h6>
                            <p className="project-description">NFC patient bracelet and scanner system for first responders. Provides EMS with instant access to crucial patient information. Built a web application for the MediBand bracelet using angular.js. Used an Arduino and an NFC/RFID breakout board to set up NFC card taps and  MongoDB Atlas database to store patient information.</p>
                            <a href="https://github.com/PatrickBMaloney/MediBand" className="github"><GitHubIcon fontSize="large"/></a>
                            <a href="https://devpost.com/software/mediband" className="devpost">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 226 226" styles={{fill: 'white'}}>
                                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" styles={{mixBlendMode: "normal"}}>
                                        <path d="M0,226v-226h226v226z" fill="none"></path>
                                        <g>
                                            <path d="M165.08829,28.25h-104.17187l-47.49767,84.77825l48.71713,84.72175h102.94771l47.47883,-84.75z" fill="#008891"></path>
                                            <path d="M113.74392,65.91667h-33.70225v94.16667h33.70225c25.61333,0 46.33942,-21.06037 46.33942,-47.08333c0,-26.02296 -20.72608,-47.08333 -46.33942,-47.08333zM113,141.25h-14.125v-56.5h14.125c15.58458,0 28.25,12.66542 28.25,28.25c0,15.58458 -12.66542,28.25 -28.25,28.25z" fill="#ffffff"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} className="media-column">
                        <img src="images/mediband.png" alt="mediband" className="mediband-img"/>
                    </Col>
                </Row>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion id="accordion1">
            <AccordionSummary
                className="accordian-summary"
                expandIcon={<ExpandMoreIcon styles={{ color: green[500] }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h6">EasyShopper</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian-details">
                <Typography>
                <Row>
                    <Col>
                        <div sm={6} className="description-column">
                            <h3 className="project-title">EasyShopper</h3>
                            <p className="project-description">
                                EasyShopper is a Pantry Management Tool to automate a user's shopping process. It suggests to the user different recipes,
                                which they can add to their cart. The ingredients currently in a user's pantry are saved. As a result, when the user orders recipes,
                                which is then broken down into individual ingredients using Wegman's APIs, only ingredients that the user does not have a sufficient 
                                quantity of will be bought. This allows the user to save money and time when they reach the grocery store.
                            </p>
                            <a href="https://github.com/PatrickBMaloney/EasyShoppr" className="github"><GitHubIcon fontSize="large"/></a>
                            <a href="https://devpost.com/software/easyshoppr" className="devpost">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 226 226" styles={{fill: 'white'}}>
                                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" styles={{mixBlendMode: "normal"}}>
                                        <path d="M0,226v-226h226v226z" fill="none"></path>
                                        <g>
                                            <path d="M165.08829,28.25h-104.17187l-47.49767,84.77825l48.71713,84.72175h102.94771l47.47883,-84.75z" fill="#008891"></path>
                                            <path d="M113.74392,65.91667h-33.70225v94.16667h33.70225c25.61333,0 46.33942,-21.06037 46.33942,-47.08333c0,-26.02296 -20.72608,-47.08333 -46.33942,-47.08333zM113,141.25h-14.125v-56.5h14.125c15.58458,0 28.25,12.66542 28.25,28.25c0,15.58458 -12.66542,28.25 -28.25,28.25z" fill="#ffffff"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} className="media-column">
                        <img src="images/grocery.png" alt="groceries" className="grocery-img"/>
                    </Col>
                </Row>
                </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    </div>
);
}

// export default Projects;