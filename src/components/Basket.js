import React from "react";
import BasketItem from "./BasketItem";

function Basket(props) {
    return (
        <ul className="basket">
            {props.items.map((item) => (
                <BasketItem {...item}></BasketItem>
            ))}
        </ul>
    );
}

export default Basket;
