import React from "react";
import TextButton from "../controls/TextButton";
import AmountControl from "../controls/AmountControl";

function BasketItem(props) {
    return (
        <li className="grid grid-rows-2 gap-1 pb-3 pt-2 w-full border-b-2">
            <div className="flex flex-row justify-between">
                <h3 className="text-md font-bold">{props.productdisplayname}</h3>
                <TextButton text="x" onClick={() => props.deleteItem(props.id)} />
            </div>
            <div className="flex flex-row justify-between items-end">
                <AmountControl changeAmount={props.changeAmount} id={props.id} amount={props.amount}></AmountControl>

                <span className="col-start-5">{(props.price * props.amount).toFixed(2)} Kr.</span>
            </div>
        </li>
    );
}

export default BasketItem;
