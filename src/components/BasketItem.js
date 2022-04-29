import React from "react";

function BasketItem(props) {
    return (
        <ul>
            <h3>{props.productdisplayname}</h3>
            <p>{props.amount}</p>
        </ul>
    );
}

export default BasketItem;
