import React from "react";
import { Container } from "../../Utilities/Container";

export const ProjectItemContent = ({show, content, ...props}) => {
    return (
        <article aria-expanded={show} className="portfolio__project--content"> 
            <Container>
                <div className="content">
                    { content }
                </div>
            </Container>
        </article>
    );
};