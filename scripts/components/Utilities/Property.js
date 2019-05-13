import React from "react";

export const Property = ({name, value, ...props}) => {
    return (
        <div className={`property property--${name}`}>
            <strong>{ name }: </strong>
            <span>{ value }</span>
        </div>
    );
};