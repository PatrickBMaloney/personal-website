import React from "react";
import "./App.scss";
import NavBar from "./NavBar/NavBar.jsx";
import Header from "./Header/Header.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Experience from "./Experience/Experience.jsx";
import Projects from "./Projects/Projects.jsx";
import ContactMe from "./ContactMe/ContactMe.jsx";
import Footer from "./Footer/Footer.jsx";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-KMC3PYM0HJ";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
