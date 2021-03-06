import React from "react";

function Article(props) {
    function handleBuy() {
        props.addToBasket(props.id);
    }

    return (
        <li className="article">
            <article>
                <h3>{props.productdisplayname}</h3>
                <p>{props.price} Kr</p>
                {props.addToBasket != null ? <button onClick={handleBuy}>Add to basket</button> : null}
            </article>
        </li>
    );
}

export default Article;
