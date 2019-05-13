import React from "react";
import { PROJECTS } from "./projects";
import { ProjectItem } from "./ProjectItem";
import { ScrollIn } from "../Utilities/ScrollIn";

export const Projects = (props) => {    
    return (
        <section className="portfolio__projects">
            {/* <h1 class="section--header">projects</h1> */}

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
        </section>
    )
};