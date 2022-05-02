import React from "react";

function BasketItem(props) {
    return (
        <li>
            <h3>{props.productdisplayname}</h3>
            <div className="amount-group">
                <button onClick={() => props.changeAmount(props.id, false)}>-</button>
                <p>{props.amount}</p>
                <button onClick={() => props.changeAmount(props.id, true)}>+</button>
            </div>
            <span>{(props.price * props.amount).toFixed(2)} Kr.</span>
        </li>
    );
}

export default BasketItem;
