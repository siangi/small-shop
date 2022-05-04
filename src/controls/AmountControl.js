import React from "react";
import TextButton from "./TextButton";

function AmountControl(props) {
    return (
        <div className="flex flex-row">
            <TextButton text="-" onClick={() => props.changeAmount(props.id, false)} />
            <p>{props.amount}</p>
            <TextButton text="+" onClick={() => props.changeAmount(props.id, true)} />
        </div>
    );
}

export default AmountControl;
