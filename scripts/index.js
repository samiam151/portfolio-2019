import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/styles.scss";

import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

const Portfolio = (props) => {
    return (
        <Router>
            <Hero />
            <Projects />
        </Router>
    );
}

ReactDOM.render(
    <Portfolio />,
    document.querySelector("#portfolio")
);