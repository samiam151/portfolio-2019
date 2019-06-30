import React, { useState, useEffect, Fragment } from "react";
import { Container } from "../../Utilities/Container";
import { Tag } from "../../Utilities/Tag";
import { PropertyLink } from "../../Utilities/PropertyLink";
import $ from "jquery";
import { Spring } from "react-spring/renderprops";

import { ScrollIn } from "../../Utilities/ScrollIn";

const ContentZoom = ({ show }) => {
    return (
        <span>
            <svg height="100" width="100">
                <circle cx="50" cy="50" r="30" fill="#fff" />
            </svg>
        </span>
    );
};

const ContentZoomContent = ({ show, ...props }) => {
    console.log(props);
    let children = props.children;
    console.log("test");
    return children;
};

export const ProjectItem = ({ data, ...props }) => {
    const [show, shouldShow] = useState(false);
    let contentRef = React.createRef();
    const tags = [data.for, ...data.tags];

    const openContent = () => {
        $(contentRef.current).slideToggle({
            duration: 350
        });
        shouldShow(!show);
    }

    return (
        <div className={`portfolio__projects--project ${show ? "portfolio__projects--project--active" : ""}`}>
            <ScrollIn>
                
                    <header>
                        <h3 className="text--black" onClick={openContent}>{data.name}</h3>
                    </header>

                    <div className="portfolio__project--tags">
                        {
                            tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)
                        }
                    </div>

                    <article ref={contentRef} className="portfolio__project--content">
                        <div className="portfolio__project--description">
                            {
                                data.website ? <PropertyLink name="Website" value={data.website} /> : ""
                            }
                            {
                                data.code ? <PropertyLink name="GitHub" value={data.code} /> : ""
                            }
                            <div>
                                <p>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            {props.children}
                        </div>
                    </article>
                
            </ScrollIn>
        </div>
    );
}