import React from "react";
export default ({ onClick, message = "Click Me", className = "" }) => (
    <button className={`${className} custom-btn`} onClick={onClick}>
        {message}
    </button>
);
