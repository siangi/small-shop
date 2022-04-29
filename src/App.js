import "./App.css";
import { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";
import Navigation from "./components/Navigation";
import Basket from "./components/Basket";

function App() {
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

    const [articles, setArticles] = useState([]);
    const [count, setCount] = useState(0);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        fetch(`https://kea-alt-del.dk/t7/api/products?start=${count * 10}&limit=10`)
            .then((response) => response.json())
            .then((data) => {
                setArticles((previousState) => {
                    console.log(previousState);
                    return previousState.concat(data);
                });
            });
    }, [count]);

    return (
        <div className="App">
            <Navigation></Navigation>
            <div className="split-container">
                <ArticleList addToBasket={addToBasket} articles={articles} nextPage={setCount}></ArticleList>
                <Basket items={basket}></Basket>
            </div>
        </div>
    );
}

export default App;
