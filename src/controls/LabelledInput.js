import React from "react";

function LabelledInput(props) {
    return (
        <label>
            {props.label}
            <input type={props.type} />
        </label>
    );
}

export default LabelledInput;
