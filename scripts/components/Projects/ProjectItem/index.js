import React, { useState, Fragment} from "react";
import { Container } from "../../Utilities/Container";

const Tag = ({value}) => {
    return (
        <span className="tag">{value}</span>
    );
}

const ProjectItemContent = ({show, content, ...props}) => {
    return (
        <article aria-expanded={show} className="portfolio__project--content"> 
            <Container>
                
                    { content }
                
            </Container>
        </article>
    );
};

export const ProjectItem = ({data}) => {
    const [show, shouldShow] = useState(false);
    
    const openContent = () => {
        shouldShow(!show);
    }

    return (
        <div className="portfolio__projects--project">
            <Container>
                <h3 onClick={openContent}>{ data.name }</h3>
                <div className="portfolio__project--tags">
                    {
                        data.tags.map((tag, index) => <Tag key={index} value={tag} />)
                    }
                </div>
            </Container>

            <ProjectItemContent show={show} content={data.content} />
        </div>
    );
}
            