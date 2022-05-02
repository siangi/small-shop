import "./App.css";
import { useEffect, useState } from "react";
import { Layout } from "antd";
import ArticleList from "./components/ArticleList";
import Navigation from "./components/Navigation";
import Basket from "./components/Basket";

const { Header, Sider, Content } = Layout;

function App() {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
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

    useEffect(() => {
        fetch(`https://kea-alt-del.dk/t7/api/products?start=${(page - 1) * 12}&limit=12`)
            .then((response) => response.json())
            .then((data) => {
                setArticles((previousState) => {
                    return data;
                });
            });
    }, [page]);

    return (
        <div className="App">
            <Layout>
                <Header>
                    <Navigation></Navigation>
                </Header>
                <Layout>
                    <Content>
                        <ArticleList addToBasket={addToBasket} articles={articles} pageChange={setPage}></ArticleList>
                    </Content>
                    <Sider theme="dark">
                        <Basket items={basket} deleteItem={removeFromBasket} changeAmount={changeBasketAmount}></Basket>
                    </Sider>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
