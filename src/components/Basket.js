import React, { useState } from "react";
import BasketItem from "./BasketItem";
import Checkoutform from "./Checkoutform";
import { Button } from "antd";

function Basket(props) {
    const [inCheckout, setInCheckout] = useState(false);
    return (
        <div className="basket">
            <h2>Basket</h2>
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
            {props.items.length > 0 && !inCheckout && (
                <Button type="primary" onClick={() => setInCheckout(true)}>
                    go to Checkout
                </Button>
            )}
            {inCheckout && <Checkoutform></Checkoutform>}
        </div>
    );
}

export default Basket;
