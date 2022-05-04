import React from "react";
import Button from "../controls/Button";

function Article(props) {
    function handleBuy() {
        props.addToBasket(props.id);
    }

    return (
        <li className="article">
            <article className="h-full flex flex-col justify-between">
                <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`} alt=""></img>
                <h3 className="text-lg font-bold">{props.productdisplayname}</h3>
                <p>{props.price} Kr</p>
                {props.addToBasket != null ? <Button onClick={handleBuy} text="Add to basket" /> : null}
            </article>
        </li>
    );
}

export default Article;
