import React from "react";
import { Container } from "../Utilities/Container";
import { FaLinkedin, FaEnvelope, FaGithubSquare } from "react-icons/fa";
import { Tag } from "../Utilities/Tag";

export const ContactSection = (props) => {
    return (
        <section className="portfolio__contact background--green">
            <Container>
                <h2>talk to me</h2>
                <p>If you're intersting in talking about <Tag inline="true">freelance</Tag> or <Tag inline="true">career</Tag> opportunities, or just to meet up and talk shop, shoot me and email at <a href="mailto:nick@nicksam.com">nick@nicksam.com</a></p>

                <div className="portfolio__contact--links">
                    <a target="_blank" href="https://github.com/samiam151">
                        <FaGithubSquare />
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/nicolas-sam-6b695050/">
                        <FaLinkedin />
                    </a>

                    <a target="_blank" href="mailto:nick@nicksam.com">
                        <FaEnvelope />
                    </a>
                </div>
            </Container>
        </section>
    );
}