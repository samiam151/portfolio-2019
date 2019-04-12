import React, { useState, useEffect, Fragment} from "react";
import { Container } from "../../Utilities/Container";
import { Tag } from "./Tag";
import { ProjectItemContent } from "./ProjectItemContent";

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
            