import React from "react";

export const PropertyLink = ({name, value, ...props}) => {
    return (
        <div className={`propertyLink propertyLink--${name.toLowerCase()}`}>
            <strong>{ name }: </strong>
            <a href={value} target="_blank">{value}</a>
        </div>
    );
};