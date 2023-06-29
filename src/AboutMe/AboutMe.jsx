import React from "react";
import "./AboutMe.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const AboutMe = () => {
  return (
    <div className="about-me-section" id="about-me">
      <Row className="about-me-row">
        <Col md={6}>
          <Carousel className="carousel-component" interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/panorama_ridge.jpg"
                alt="View from the top of Panarama Ridge in BC after hiking 30 km."
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/brick-hack.jpg"
                alt="Patrick with teamates, medal, and prizes after winning Brick Hack."
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/volleyball.jpg"
                alt="Intramural volleyball team."
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/dr-with-tom.jpg"
                alt="Patrick and friend wearing engineering coveralls while standing on top of Mount Martain in Deep River Ontario."
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/stanley_park.jpg"
                alt="Patrick and friends biking through Stanley Park."
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/res-council.jpg"
                alt="University of Waterloo's residence council. Patrick was the Vice President."
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/frisbee.jpg"
                alt="Patrick's intramural ultimate frisbee team."
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/whistler.jpg"
                alt="Patrick and friends skiing on Whistler mountain."
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <div className="about-me-description">
            <h2>About Me</h2>
            <p>
              I'm a fourth-year student at The University of Waterloo, completing a BASc in Biomedical Engineering with an option in Computing. Through my studies and co-op experience, I have developed a strong passion for software engineering. In the last five years, I had the privilege to complete six software engineering internships at some amazing companies. As I finish up my degree, I am in search of a permanent full-time position as a software engineer.
            </p>
            <p>
              Some of my interests include expanding my software engineering knowledge, competing in hackathons, playing intramural sports, hiking, skiing and travelling.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
