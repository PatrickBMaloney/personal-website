import React from "react";
import classes from "./AboutMe.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';

const AboutMe = () => {
    return (
        <div className="about-me-section" id="about-me">
            <Row className="about-me-row">
                <Col md={6}>
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
                <Col md={6}>
                    <div className="about-me-description">
                        <h2>About Me</h2>
                        <p>I'm a third-year student at The University of Waterloo completing a BASc in Biomedical Engineering
                           with an option in Computing. Through my studies and co-op experience, I have developed a strong passion 
                           for software engineering, and I plan to make a career out of it. I am currently searching for a summer 
                           2021 co-op position in full-stack software development.</p>
                        <p>Some of my interests include competing in hackathons, playing intramural sports, playing new board games
                           with friends, and participating in UWaterloo's engineering community through leadership roles.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default AboutMe;