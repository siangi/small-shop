import React, { useState } from "react";
import BasketItem from "./BasketItem";
import Checkoutform from "./Checkoutform";
import Button from "../controls/Button";

function Basket(props) {
    const [inCheckout, setInCheckout] = useState(false);
    return (
        <div className="p-4 sticky w-1/3 top-0">
            <h2 className="text-2xl font-bold">Basket</h2>
            <ul>
                {props.items.map((item) => (
                    <BasketItem key={item.id} deleteItem={props.deleteItem} changeAmount={props.changeAmount} {...item}></BasketItem>
                ))}
            </ul>
            {props.items.length > 0 ? (
                <h4>
                    Total:
                    <strong>
                        {props.items.reduce((previousValue, currentValue) => {
                            return previousValue + currentValue.price;
                        }, 0) + " Kr."}
                    </strong>
                </h4>
            ) : null}
            {props.items.length > 0 && <Button text="go to Checkout" onClick={() => setInCheckout(true)} />}
            {inCheckout && <Checkoutform></Checkoutform>}
        </div>
    );
}

export default Basket;
