import React from "react";
import BasketItem from "./BasketItem";
import Checkoutform from "./Checkoutform";
function Basket(props) {
    // function calculateTotal{

    // }

    return (
        <div className="basket">
            <h2>Basket</h2>
            <ul>
                {props.items.map((item) => (
                    <BasketItem key={item.id} changeAmount={props.changeAmount} {...item}></BasketItem>
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
            <Checkoutform></Checkoutform>
        </div>
    );
}

export default Basket;
