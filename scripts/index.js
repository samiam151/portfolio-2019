import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/styles.scss";

import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { AboutSection } from "./components/About";
import { ContactSection } from "./components/Contact";

const Portfolio = (props) => {
    return (
        <Router>
            <Hero />
            <Projects />
            <AboutSection />
            <ContactSection />
        </Router>
    );
}

ReactDOM.render(
    <Portfolio />,
    document.querySelector("#portfolio")
);