import React from "react";
import { Button } from "antd";

function Article(props) {
    function handleBuy() {
        props.addToBasket(props.id);
    }

    return (
        <li className="article">
            <article>
                <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`} alt={"image of " + props.productdisplayname}></img>
                <h3>{props.productdisplayname}</h3>
                <p>{props.price} Kr</p>
                {props.addToBasket != null ? (
                    <Button type="primary" onClick={handleBuy}>
                        Add to basket
                    </Button>
                ) : null}
            </article>
        </li>
    );
}

export default Article;
