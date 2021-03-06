import React from "react";
import './App.css';
import NavBar from "./NavBar/NavBar.jsx";
import Header from "./Header/Header.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Experience from "./Experience/Experience.jsx";
import Projects from "./Projects/Projects.jsx";
import ContactMe from "./ContactMe/ContactMe.jsx";
import Footer from "./Footer/Footer.jsx";

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
