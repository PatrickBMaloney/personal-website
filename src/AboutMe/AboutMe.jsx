import React from "react";
import classes from "./AboutMe.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import image from "../images/head-shot.jpg"

const AboutMe = () => {
    return (
        <div className="about-me-section" id="about-me">
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <h2>About Me</h2>
                    <p>Hi I'm Patrick! I'm a third year engineering student at The University of Waterloo persuing a career in software engineering.</p>
                    {/* <img 
                        className="head-shot"
                        src={image} 
                        alt=" " /> */}
                </Col>
            </Row>
        </div>
    );
}

export default AboutMe;