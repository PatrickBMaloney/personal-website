import React from "react";
import Accordion from "@material-ui/core/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { green } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import "./Projects.scss";

export default function Projects() {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div>
        <Accordion id="accordion0" defaultExpanded>
          <AccordionSummary
            className="accordian-summary"
            expandIcon={<ExpandMoreIcon styles={{ color: green[500] }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Pneumo Sense</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordian-details">
            <Typography>
              <Row>
                <Col sm={6}>
                  <div className="description-column">
                    <h4 className="project-title">Pneumo Sense</h4>
                    <p className="project-description">
                      I lead the design and development of a React Native app, 
                      currently in use by doctors and researchers, that captures 
                      photos of lung ultrasounds from a mobile phone and uses image 
                      processing and AI to detect Pneumothorax. The application was 
                      developed in partnership with a research group that specializes 
                      in developing AI for the interpretation of lung ultrasounds. 
                      I worked on this project as a part of my fourth-year engineering 
                      capstone project along with three of my classmates. As the only 
                      software developer on the team, I lead the development of the 
                      React Native app. Technologies used in the development of the 
                      app included React Native, JavaScript, Native Modules (Java), 
                      OpenCV, TFLite, and UI Kitten. The app will be added to the 
                      Google Play Store soon. 
                    </p>
                    <div className="project__links">
                      {/* <a
                        href="https://github.com/PatrickBMaloney/Watopoly"
                        className="github"
                      >
                        <GitHubIcon fontSize="large" />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.cathy.watopoly"
                        className="play-store"
                      >
                        <FontAwesomeIcon
                          icon={faGooglePlay}
                          color="#008891"
                          size="2x"
                        />
                      </a> */}
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="media-column">
                  <img src="images/pnueno-sense.gif" className="pnuemo-sense-gif" alt="Pneumo Sense app demo" />
                </Col>
              </Row>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="accordion1">
          <AccordionSummary
            className="accordian-summary"
            expandIcon={<ExpandMoreIcon styles={{ color: green[500] }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Watopoly</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordian-details">
            <Typography>
              <Row>
                <Col sm={6}>
                  <div className="description-column">
                    <h4 className="project-title">Watopoly</h4>
                    <p className="project-description">
                      Watopoly is a two to five multiplayer, pass-and-play,
                      board game. Players take turns traveling around a Waterloo
                      campus-themed game board, attempting to buy, trade, and
                      develop as many campus buildings as possible. Money can be
                      used to buy and develop properties and is obtained/lost
                      through chance cards, tax squares, and rent. The objective
                      is to avoid forfeiting and to drive your opponents to
                      bankruptcy using your properties. Check it out on the
                      Google Play Store!
                    </p>
                    <div className="project__links">
                      <a
                        href="https://github.com/PatrickBMaloney/Watopoly"
                        className="github"
                      >
                        <GitHubIcon fontSize="large" />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.cathy.watopoly"
                        className="play-store"
                      >
                        <FontAwesomeIcon
                          icon={faGooglePlay}
                          color="#008891"
                          size="2x"
                        />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="media-column">
                  <img className="watopoly-gif horizontal-centered" src="images/watopoly.gif" alt="Gif showing multiple screens from the Watopoly app"/>
                </Col>
              </Row>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="accordion2">
          <AccordionSummary
            className="accordian-summary"
            expandIcon={<ExpandMoreIcon styles={{ color: green[500] }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">SpotiFind</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordian-details">
            <Typography>
              <Row>
                <Col sm={6}>
                  <div className="description-column">
                    <h4 className="project-title">SpotiFind</h4>
                    <p className="project-description">
                      SpotiFind is a web app that takes in your Spotify
                      analytics and your mood/occassion to make you a custom
                      playlist. It allows the user to enter keywords and set the
                      levels of various song metrixs. Our machine learning
                      algorithm finds songs in the user's library that match the
                      entered keyword. It then filters the songs based on the
                      user specified variables such as energy, pace, and
                      popularity. It returns a playlist made up of songs from
                      the user's library as well as other similar songs.
                    </p>
                    <div className="project__links">
                      <a
                        href="https://github.com/PatrickBMaloney/Spotifind"
                        className="github"
                      >
                        <GitHubIcon fontSize="large" />
                      </a>
                      <a
                        href="https://devpost.com/software/spotifind-q3oytk"
                        className="devpost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="3em"
                          height="3em"
                          viewBox="0 0 226 226"
                          styles={{ fill: "white" }}
                        >
                          <g
                            fill="none"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            styles={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0,226v-226h226v226z" fill="none"></path>
                            <g>
                              <path
                                d="M165.08829,28.25h-104.17187l-47.49767,84.77825l48.71713,84.72175h102.94771l47.47883,-84.75z"
                                fill="#008891"
                              ></path>
                              <path
                                d="M113.74392,65.91667h-33.70225v94.16667h43.70225c25.61333,0 46.33942,-21.06037 46.33942,-47.08333c0,-26.02296 -20.72608,-47.08333 -46.33942,-47.08333zM113,141.25h-14.125v-56.5h14.125c15.58458,0 28.25,12.66542 28.25,28.25c0,15.58458 -12.66542,28.25 -28.25,28.25z"
                                fill="#ffffff"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="media-column">
                  <Carousel
                    className="spotifind-carousel"
                    controls={false}
                    indicators={false}
                    interval={3000}
                    fade
                  >
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="images/spotifind_landing.PNG"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="images/spotifind_home.PNG"
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="images/spotifind_advanced.PNG"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="images/spotifind_results.PNG"
                        alt="Fourth slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="accordion3">
          <AccordionSummary
            className="accordian-summary"
            expandIcon={<ExpandMoreIcon styles={{ color: green[500] }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">FaceUp</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordian-details">
            <Typography>
              <Row>
                <Col sm={6}>
                  <div className="description-column">
                    <h4 className="project-title">FaceUp</h4>
                    <h6>
                      <FontAwesomeIcon icon={faTrophy} color="#DAB900" />{" "}
                      BrickHack 2019 Best AR/VR Hack!
                    </h6>
                    <p className="project-description">
                      Developed a facial recognition and information display app
                      for the Vuzix Blade smart glasses in under 24 hours with
                      the use of Unity, Vysor, and Vuforia.
                    </p>
                    <div className="project__links">
                      <a
                        href="https://github.com/PatrickBMaloney/FACEUP"
                        className="github"
                      >
                        <GitHubIcon fontSize="large" />
                      </a>
                      <a
                        href="https://devpost.com/software/whoisthis"
                        className="devpost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="3em"
                          height="3em"
                          viewBox="0 0 226 226"
                          styles={{ fill: "white" }}
                        >
                          <g
                            fill="none"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            styles={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0,226v-226h226v226z" fill="none"></path>
                            <g>
                              <path
                                d="M165.08829,28.25h-104.17187l-47.49767,84.77825l48.71713,84.72175h102.94771l47.47883,-84.75z"
                                fill="#008891"
                              ></path>
                              <path
                                d="M113.74392,65.91667h-33.70225v94.16667h43.70225c25.61333,0 46.33942,-21.06037 46.33942,-47.08333c0,-26.02296 -20.72608,-47.08333 -46.33942,-47.08333zM113,141.25h-14.125v-56.5h14.125c15.58458,0 28.25,12.66542 28.25,28.25c0,15.58458 -12.66542,28.25 -28.25,28.25z"
                                fill="#ffffff"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="media-column">
                  <img
                    src="images/vuzix-blade.png"
                    alt="vuzix blade smart glasses"
                    className="vuzix-img horizontal-centered"
                  />
                </Col>
              </Row>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="accordion4">
          <AccordionSummary
            className="accordian-summary"
            expandIcon={<ExpandMoreIcon styles={{ color: green[500] }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">MediBand</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordian-details">
            <Typography>
              <Row>
                <Col sm={6}>
                  <div className="description-column">
                    <h4 className="project-title">MediBand</h4>
                    <h6>
                      <FontAwesomeIcon icon={faTrophy} color="#DAB900" />{" "}
                      BrickHack 2020 Chaos Engineering Award!
                    </h6>
                    <p className="project-description">
                      NFC patient bracelet and scanner system for first
                      responders. Provides EMS with instant access to crucial
                      patient information. Built a web application for the
                      MediBand bracelet using angular.js. Used an Arduino and an
                      NFC/RFID breakout board to set up NFC card taps and
                      MongoDB Atlas database to store patient information.
                    </p>
                    <div className="project__links">
                      <a
                        href="https://github.com/PatrickBMaloney/MediBand"
                        className="github"
                      >
                        <GitHubIcon fontSize="large" />
                      </a>
                      <a
                        href="https://devpost.com/software/mediband"
                        className="devpost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="3em"
                          height="3em"
                          viewBox="0 0 226 226"
                          styles={{ fill: "white" }}
                        >
                          <g
                            fill="none"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            styles={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0,226v-226h226v226z" fill="none"></path>
                            <g>
                              <path
                                d="M165.08829,28.25h-104.17187l-47.49767,84.77825l48.71713,84.72175h102.94771l47.47883,-84.75z"
                                fill="#008891"
                              ></path>
                              <path
                                d="M113.74392,65.91667h-33.70225v94.16667h43.70225c25.61333,0 46.33942,-21.06037 46.33942,-47.08333c0,-26.02296 -20.72608,-47.08333 -46.33942,-47.08333zM113,141.25h-14.125v-56.5h14.125c15.58458,0 28.25,12.66542 28.25,28.25c0,15.58458 -12.66542,28.25 -28.25,28.25z"
                                fill="#ffffff"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="media-column">
                  <img
                    src="images/mediband.png"
                    alt="mediband"
                    className="mediband-img horizontal-centered"
                  />
                </Col>
              </Row>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="accordion5">
          <AccordionSummary
            className="accordian-summary"
            expandIcon={<ExpandMoreIcon styles={{ color: green[500] }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">EasyShopper</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordian-details">
            <Typography>
              <Row>
                <Col sm={6}>
                  <div className="description-column">
                    <h4 className="project-title">EasyShopper</h4>
                    <p className="project-description">
                      EasyShopper is a Pantry Management Tool to automate a
                      user's shopping process. It suggests to the user different
                      recipes, which they can add to their cart. The ingredients
                      currently in a user's pantry are saved. As a result, when
                      the user orders recipes, which is then broken down into
                      individual ingredients using Wegman's APIs, only
                      ingredients that the user does not have a sufficient
                      quantity of will be bought. This allows the user to save
                      money and time when they reach the grocery store.
                    </p>
                    <div className="project__links">
                      <a
                        href="https://github.com/PatrickBMaloney/EasyShoppr"
                        className="github"
                      >
                        <GitHubIcon fontSize="large" />
                      </a>
                      <a
                        href="https://devpost.com/software/easyshoppr"
                        className="devpost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="3em"
                          height="3em"
                          viewBox="0 0 226 226"
                          styles={{ fill: "white" }}
                        >
                          <g
                            fill="none"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            styles={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0,226v-226h226v226z" fill="none"></path>
                            <g>
                              <path
                                d="M165.08829,28.25h-104.17187l-47.49767,84.77825l48.71713,84.72175h102.94771l47.47883,-84.75z"
                                fill="#008891"
                              ></path>
                              <path
                                d="M113.74392,65.91667h-33.70225v94.16667h43.70225c25.61333,0 46.33942,-21.06037 46.33942,-47.08333c0,-26.02296 -20.72608,-47.08333 -46.33942,-47.08333zM113,141.25h-14.125v-56.5h14.125c15.58458,0 28.25,12.66542 28.25,28.25c0,15.58458 -12.66542,28.25 -28.25,28.25z"
                                fill="#ffffff"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="media-column">
                  <img
                    src="images/grocery.png"
                    alt="groceries"
                    className="grocery-img horizontal-centered"
                  />
                </Col>
              </Row>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
