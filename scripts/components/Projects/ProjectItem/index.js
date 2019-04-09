import React, { useState, useEffect, Fragment} from "react";
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
                <div className="content">
                    { content }
                </div>
            </Container>
        </article>
    );
};

export const ProjectItem = ({data}) => {
    const [show, shouldShow] = useState(false);
    
    const tags = [data.for, ...data.tags]; 

    const openContent = () => {
        shouldShow(!show);
    }

    return (
        <div className="portfolio__projects--project">
            <Container>
                <header>
                    <h3 onClick={openContent}>{ data.name }</h3>
                </header>

                <div className="portfolio__project--tags">
                    {
                        tags.map((tag, index) => <Tag key={index} value={tag} />)
                    }
                </div>
                
                {/* <div className="portfolio__project--description">{ data.description }</div> */}

                <ProjectItemContent show={show} content={data.description} />
            </Container>

        </div>
    );
}
            