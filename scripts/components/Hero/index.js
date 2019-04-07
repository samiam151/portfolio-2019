import React, { useState, useEffect } from "react";
import { LineAnimation } from "./LineAnimation";

export const Hero = (props) => {
    return (
        <div className="portfolio__hero">
            <div className="container">
                <LineAnimation delay={0} name="Nicolas Sam" cssClasses={["portfolio__hero--title"]} />
                <LineAnimation delay={2000} name="Front End Developer" cssClasses={["portfolio__hero--content"]}/>
            </div>
        </div>
    );
}