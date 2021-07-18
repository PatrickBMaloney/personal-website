import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import "./ContactMe.scss";

const ContactMe = () => {
  return (
    <div id="contact-me">
      <h2>Get in Touch!</h2>
      <p>
        <MailOutlineIcon />{" "}
        <a href="mailto:pbmaloney@uwaterloo.ca">pbmaloney@uwaterloo.ca</a>
      </p>
      <p>
        <PhoneIphoneIcon /> (705) 768-3535
      </p>
      <div>
        <a href="https://www.linkedin.com/in/patrickbmaloney/">
          <LinkedInIcon className="icon" fontSize="large" />
        </a>
        <a href="https://github.com/PatrickBMaloney">
          <GitHubIcon className="icon" fontSize="large" />
        </a>
        <a href="https://devpost.com/PatrickBMaloney">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="38"
            height="38"
            viewBox="0 0 226 226"
            styles=" fill:#000000;"
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
              styles="mix-blend-mode: normal"
            >
              <path d="M0,226v-226h226v226z" fill="none"></path>
              <g>
                <path
                  d="M165.08829,28.25h-104.17187l-47.49767,84.77825l48.71713,84.72175h102.94771l47.47883,-84.75z"
                  fill="#00587a"
                ></path>
                <path
                  d="M113.74392,65.91667h-33.70225v94.16667h33.70225c25.61333,0 46.33942,-21.06037 46.33942,-47.08333c0,-26.02296 -20.72608,-47.08333 -46.33942,-47.08333zM113,141.25h-14.125v-56.5h14.125c15.58458,0 28.25,12.66542 28.25,28.25c0,15.58458 -12.66542,28.25 -28.25,28.25z"
                  fill="#ffffff"
                ></path>
              </g>
            </g>
          </svg>
        </a>
        <a href="Resume_.pdf">
          <DescriptionIcon className="icon" fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
