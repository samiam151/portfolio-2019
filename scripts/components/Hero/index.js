import React, { useState, useEffect } from "react";
import { LineAnimation } from "./LineAnimation";

export const Hero = (props) => {
    return (
        <section className="portfolio__hero">
            <div className="container">
                <div className="portfolio__hero--container">
                    <LineAnimation delay={0} name="Nicolas Sam" cssClasses={["portfolio__hero--title"]} />
                    <LineAnimation delay={1500} name="Front End Developer" cssClasses={["portfolio__hero--content"]}/>
                    {/* <p>I make front end interfaces, data visualizations, and other niceties. Check out my work below.</p> */}
                </div>
            </div>
        </section>
    );
}