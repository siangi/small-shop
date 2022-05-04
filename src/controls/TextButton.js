import React from "react";

function TextButton(props) {
    return (
        <button className="h-8 px-3 font-bold hover:scale-110" onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default TextButton;
