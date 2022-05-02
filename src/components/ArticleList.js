import React from "react";
import Article from "./Article";
import { Pagination } from "antd";

function ArticleList(props) {
    function handlePageChange(page) {
        props.pageChange(page);
    }

    return (
        <div className="article-list-container">
            <h2>Articles</h2>
            <ul className="article-list">
                {props.articles.map((article) => (
                    <Article key={article.id} {...article} addToBasket={props.addToBasket}></Article>
                ))}
            </ul>
            <Pagination defaultCurrent={1} total={100} onChange={handlePageChange}></Pagination>
        </div>
    );
}

export default ArticleList;
