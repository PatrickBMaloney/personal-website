import React from "react";
import Accordion from '@material-ui/core/Accordion';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classes from "./Projects.css";

export default function Projects() {
return (
    <div id="projects">
        <h2>My Projects</h2>
        <div>
        <Accordion id="accordion1" className="zaccordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>FaceUp</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian-details">
                <Typography>
                <Row>
                    <Col>
                        <div sm={6} className="description-column">
                            <h3 className="project-title">FaceUp</h3>
                            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col sm={6} className="media-column">
                        {/* <img src=" " alt=" " /> */}
                        <iframe className="faceup-video" src="https://drive.google.com/file/d/1DucVWRb1USnDj5gSVCRFHzYgdu_SOtHE/preview" width="640" height="480"></iframe>
                    </Col>
                </Row>

                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion id="accordion2">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian-details">
                <Typography>
                    <div>
                        <h3>FaceUp</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion id="accordion3">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordian-details">
                <Typography>
                    <div>
                        <h3>FaceUp</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    </div>
);
}

// export default Projects;