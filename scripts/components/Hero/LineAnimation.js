import React, { useEffect } from "react";
import uuid from "uuid/v4";
import { lineAnimation } from "./animations";

export const LineAnimation = ({ name, cssClasses=[], ...props }) => {
    const id = uuid();
    const styles = ["lineAnimation", `lineAnimation--${id}`, ...cssClasses ].join(" ");
    let lettersRef = React.createRef();
    let letterEls = name.split("").map((letter, i) => <span key={i} className="letter">{letter}</span>);

    useEffect(() => {
        setTimeout(() => {
            lineAnimation(id, lettersRef.current, props.delay || 0);
        }, 1000)
    }, []);

    return (
        <h1 className={styles}>
            <span className="text-wrapper">
                <span className="line line1"></span>
                <span ref={lettersRef} className="letters">
                    { letterEls }
                </span>
            </span>
        </h1>
    )
}