import React from "react";
import classes from "./AboutMe.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';

const AboutMe = () => {
    return (
        <div className="about-me-section" id="about-me">
            <Row className="about-me-row">
                <Col>
                    <Carousel className="carousel-component" interval={3000}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/brick-hack.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/volleyball.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/dr-with-tom.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/hockey.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/res-council.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/frisbee.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/orientation-leaders.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/paintball.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <div className="about-me-description">
                        <h2>About Me</h2>
                        <p>Hi I'm Patrick! I'm a third year engineering student at The University of Waterloo persuing a career in software engineering.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default AboutMe;