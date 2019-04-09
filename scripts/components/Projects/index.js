import React from "react";
import { PROJECTS } from "./projects";
import { ProjectItem } from "./ProjectItem";

export const Projects = (props) => {
    const projects = PROJECTS.map(project => <ProjectItem key={project.name} data={project} />);
    return (
        <section className="portfolio__projects">
            { projects }
        </section>
    )
};