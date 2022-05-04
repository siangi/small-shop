import React from "react";
import { useEffect, useState } from "react";
import ArticleList from "./../components/ArticleList";
import Basket from "./../components/Basket";

function Home() {
    const [articles, setArticles] = useState([]);
    const [count, setCount] = useState(0);
    const [basket, setBasket] = useState([]);

    function addToBasket(id) {
        const articleInBasket = basket.some((article) => article.id === id);

        if (articleInBasket) {
            setBasket((oldState) =>
                oldState.map((basketItem) => {
                    if (basketItem.id === id) {
                        basketItem.amount = basketItem.amount + 1;
                    }

                    return basketItem;
                })
            );
        } else {
            const toAdd = articles.find((article) => article.id === id);
            toAdd.amount = 1;
            setBasket((oldState) => oldState.concat(toAdd));
        }
    }

    function removeFromBasket(id) {
        setBasket((oldState) => {
            return oldState.filter((item) => {
                return item.id !== id;
            });
        });
    }

    function changeBasketAmount(id, inc) {
        const item = basket.find((item) => item.id === id);
        if (!inc && item !== null && item.amount === 1) {
            removeFromBasket(id);
            return;
        }

        setBasket((oldState) => {
            return oldState.map((item) => {
                if (item.id === id) {
                    if (inc) {
                        item.amount++;
                    } else {
                        item.amount--;
                    }
                }

                return item;
            });
        });
    }

    function nextPage() {
        setCount((oldCount) => oldCount + 1);
    }

    useEffect(() => {
        fetch(`https://kea-alt-del.dk/t7/api/products?start=${count * 12}&limit=12`)
            .then((response) => response.json())
            .then((data) => {
                setArticles((previousState) => {
                    return previousState.concat(data);
                });
            });
    }, [count]);

    return (
        <div className="flex flex-row gap-4">
            <ArticleList addToBasket={addToBasket} articles={articles} nextPage={nextPage}></ArticleList>
            <Basket items={basket} deleteItem={removeFromBasket} changeAmount={changeBasketAmount}></Basket>
        </div>
    );
}

export default Home;
