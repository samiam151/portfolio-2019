import React from "react";

export const Tag = (props) => {
    let cssClasses = "tag";
    if (props.inline === "true") {
        cssClasses += " tag--inline";
    }

    return (
        <span className={`${cssClasses}`}>{props.children}</span>
    );
}