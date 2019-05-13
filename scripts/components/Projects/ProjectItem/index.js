import React, { useState, useEffect, Fragment} from "react";
import { Container } from "../../Utilities/Container";
import { Tag } from "./Tag";
import { PropertyLink } from "../../Utilities/PropertyLink";
import $ from "jquery";

import { ScrollIn } from "../../Utilities/ScrollIn";

export const ProjectItem = ({data, ...props}) => {
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
        <div className="portfolio__projects--project">
            <ScrollIn>
                <Container>
                    <header>
                        <h3 onClick={openContent}>{ data.name }</h3>
                        <span>{ show ? "-" : "+" }</span>
                    </header>

                    <div className="portfolio__project--tags">
                        {
                            tags.map((tag, index) => <Tag key={index} value={tag} />)
                        }
                    </div>
                    
                    <article ref={contentRef} className="portfolio__project--content"> 
                        <div className="portfolio__project--description">
                            <div>
                                { data.description }
                            </div>
                            {
                                data.website ? <PropertyLink name="Website" value={data.website} /> : ""
                            }
                            {
                                data.code ? <PropertyLink name="GitHub" value={data.code} /> : ""
                            }
                            <div>
                                
                            </div>
                        </div>
                        <div className="content">
                            { props.children }
                        </div>
                    </article>
                </Container>
            </ScrollIn>
        </div>
    );
}
            