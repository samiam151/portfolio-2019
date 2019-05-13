import React, { useEffect, useState } from "react";

export const ScrollIn = ({ top, ...props }) => {
    const [hidden, setHidden] = useState(true);
    const elementRef = React.createRef();
    const PADDING = 150;

    useEffect(() => {
        let topOffset = elementRef.current.offsetTop;
        if (topOffset < window.innerHeight || topOffset <= top) {
            setHidden(false);
        }

        window.addEventListener("scroll", handler);

        return function() {
            window.removeEventListener(handler);
        };
    }, []);

    function handler({target}) {
        let top = target.scrollingElement.scrollTop + (window.innerHeight - PADDING),
            topOffset = elementRef.current.offsetTop;

        if (topOffset < window.innerHeight || topOffset <= top) {
            setHidden(false);
        }
    }

    return (
        <div className="scrollIn" aria-hidden={hidden} ref={elementRef}>
            {props.children}
        </div>
    );
};
