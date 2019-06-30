import React from "react";
import { Container } from "../Utilities/Container";
import { FaLinkedin, FaEnvelope, FaGithubSquare, FaFileDownload } from "react-icons/fa";
import { Tag } from "../Utilities/Tag";
import { ScrollIn } from "../Utilities/ScrollIn";

export const ContactSection = (props) => {
    return (
        <ScrollIn>
            <section className="portfolio__contact background--green">
                <Container>
                    <h2>talk to me</h2>
                    <p>If you're intersting in talking about <Tag inline="true">freelance</Tag> or <Tag inline="true">career</Tag> opportunities, or just to meet up and talk shop, shoot me and email at <a href="mailto:nick@nicksam.com">nick@nicksam.com</a></p>

                    <div className="portfolio__contact--links">
                        <a className="portfolio__contact--links--github" target="_blank" href="https://github.com/samiam151">
                            <FaGithubSquare />
                        </a>

                        <a className="portfolio__contact--links--linkedin" target="_blank" href="https://www.linkedin.com/in/nicolas-sam-6b695050/">
                            <FaLinkedin />
                        </a>

                        <a className="portfolio__contact--links--mail" target="_blank" href="mailto:nick@nicksam.com">
                            <FaEnvelope />
                        </a>

                        <a className="portfolio__contact--links--resume" target="_blank" href="#">
                            <FaFileDownload />
                        </a>
                    </div>
                </Container>
            </section>
        </ScrollIn>
    );
}