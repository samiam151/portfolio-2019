import React, { useState, useEffect } from "react";

export const Delay = ({ ms, children }) => {
    const [render, shouldRender] = useState(false);

    setTimeout(() => {
        shouldRender(true);
    }, ms);

    return render ? children : "";
}