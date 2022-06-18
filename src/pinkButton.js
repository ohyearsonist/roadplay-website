import React from "react";
import "./pinkButton.css"

function PinkButton(props) {
    return (
        <button className="pinkButton">
            <p>{props.text}</p>
        </button>
    )
}

export default PinkButton;