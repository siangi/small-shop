import React from "react";

function Button(props) {
    return (
        <button className="bg-blue-700 p-1 px-2 rounded-xl text-white" onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default Button;
