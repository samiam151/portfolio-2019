import React from "react";
import { PROJECTS } from "./projects";
import { ProjectItem } from "./ProjectItem";
import { ScrollIn } from "../Utilities/ScrollIn";
import { Container } from "../Utilities/Container";

export const Projects = (props) => {    
    return (
        <section className="portfolio__projects background--white">
            <Container>
                <h2 className="text--black">latest works</h2>

                <ProjectItem data={PROJECTS[0]}>
                    <div>tester test/></div>
                </ProjectItem>

                <ProjectItem data={PROJECTS[1]}>

                </ProjectItem>

                <ProjectItem data={PROJECTS[2]}>

                </ProjectItem>

                <ProjectItem data={PROJECTS[3]}>

                </ProjectItem>

                <ProjectItem data={PROJECTS[4]}>

                </ProjectItem>
            </Container>
        </section>
    )
};