import React from "react";
import ReactDOM, { render } from "react-dom";
import "../styles/styles.scss";

import { Hero } from "./components/Hero";

const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <Hero />
        </div>
    );
}

ReactDOM.render(
    <Portfolio />,
    document.querySelector("#portfolio")
);