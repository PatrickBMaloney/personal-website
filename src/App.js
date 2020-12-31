import React from "react";
import './App.css';
import Header from "./Header/Header.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Experience from "./Experience/Experience.jsx";
import Projects from "./Projects/Projects.jsx";
import Volunteering from "./Volunteering/Volunteering.jsx";
import ContactMe from "./ContactMe/ContactMe.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Volunteering />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
