import React from "react";
import Article from "./Article";

function ArticleList(props) {
    return (
        <div className="article-list">
            <h2>Articles</h2>
            <ul>
                {props.articles.map((article) => (
                    <Article key={article.id} {...article} addToBasket={props.addToBasket}></Article>
                ))}
            </ul>
            <button onClick={props.nextPage}>Load More</button>
        </div>
    );
}

export default ArticleList;
