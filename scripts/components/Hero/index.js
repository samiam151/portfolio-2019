import React, { useState, useEffect } from "react";
import { LineAnimation } from "./LineAnimation";
import { ScrollIn } from "../Utilities/ScrollIn";

import { Delay } from "../Utilities/Delay";

export const Hero = (props) => {
    return (
        <section className="portfolio__hero">
            <div className="container">
                <div className="portfolio__hero--container">
                    <ScrollIn>
                        <h1>Nick Sam</h1>
                    </ScrollIn>
                    <ol>
                        <Delay ms="750">
                            <ScrollIn>
                                <li>
                                    <span>(noun)</span>
                                    <h2>Frond End Developer</h2>
                                </li>
                            </ScrollIn>
                        </Delay>
                        <Delay ms="1500">
                            <ScrollIn>
                                <li>
                                    <p>I make front end interfaces, data visualizations, and other niceties. Check out my work below.</p>

                                </li>

                            </ScrollIn>
                        </Delay>
                    </ol>
                </div>
            </div>
        </section>
    );
}