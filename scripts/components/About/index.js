import React from "react";
import { ScrollIn } from "../Utilities/ScrollIn";
import { Container } from "../Utilities/Container";
import { Tag } from "../Utilities/Tag";

export const AboutSection = (props) => {
    return (
        <ScrollIn>
            <section className="portfolio__about">
                <Container>
                    <h2 className="text--black">about me</h2>
                    
                    <p>My name is Nicolas Sam <Tag inline="true">Nick Sam</Tag>. 
                        I'm currently a <b>Front End Developer</b> at <a href="http://www.whereoware.com" target="_blank">Whereoware</a>, where I've been working for ~3 years. I got started with <Tag inline="true">web development</Tag> when I had to create a website for a business I was running. What drew me in was the ability to create anything; with proper planning
                        and execution, you can truly <Tag inline="true">build anything</Tag>. I fell in love with it instantly.
                    </p>
                    
                    <p>This love started when <b>I learned</b> <Tag inline="true">html</Tag> <Tag inline="true">css</Tag> and <Tag inline="true">javascript</Tag>. Then more <Tag inline="true">javascript</Tag>! <b>I learned</b> how useful <Tag inline="true">css preprocessers</Tag> are. I did a volunteer project with <b>Code 4 DC</b> and began a secret love affair with <Tag inline="true">python</Tag> for chunking, organizing, and visualizing data, but javascript is a jealous language. I discovered the limits of declarative programming and got on board <Tag inline="true">Object Oriented Programming</Tag> and <Tag inline="true">design patterns</Tag>. <b>I learned</b> how to use <Tag inline="true">angular</Tag> &amp; <Tag inline="true">react</Tag>, and more importantly, <b>when to use them</b>. I started needing more back-end funcitonality in my side projects, so <b>I learned</b> <Tag inline="true">Node</Tag> and <Tag inline="true">express</Tag>. Then more <Tag inline="true">express</Tag> and <Tag inline="true">authentication strategies</Tag>. Then <Tag inline="true">postgres</Tag>!
                    </p>

                    <p>As you can see, <b>I love learning</b>.</p>
                    
                    <p>In between all that, you can often find me on a bicycle, racing for <Tag inline="true">lindsay cars - spokes etc.</Tag> race team <span className="bicycle">🚴🏿🚴🏿</span></p>
                </Container>
            </section>
        </ScrollIn>
    );
}