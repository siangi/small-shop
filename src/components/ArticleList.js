import React from "react";
import Article from "./Article";

function ArticleList(props) {
    return (
        <ul className="article-list">
            {props.articles.map((article) => (
                <Article key={article.id} {...article} addToBasket={props.addToBasket}></Article>
            ))}
        </ul>
    );
}

export default ArticleList;
