import React from "react";
import Article from "./Article";
import Button from "../controls/Button";

function ArticleList(props) {
    return (
        <div className="w-2/3 p-4">
            <h2 className="text-2xl font-bold">Articles</h2>
            <ul className="grid grid-cols-4 gap-4 mb-4">
                {props.articles.map((article) => (
                    <Article key={article.id} {...article} addToBasket={props.addToBasket}></Article>
                ))}
            </ul>
            <Button onClick={props.nextPage} text="Load More" />
        </div>
    );
}

export default ArticleList;
