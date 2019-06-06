import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import './article.css';
import ArticleBody from './body.js';
import GlobalContext from "../../context/global-context";

 const Article = (props) => {
  const context = useContext(GlobalContext);
  let currArticle;
  context.allArticles.forEach((article) => {
    if (parseInt(props.match.params.id) === article.id) {
      currArticle = article;
    }
  })


   return (
    <div>
      <section className="popular_area p_120">
        <div className="container">
          <div className="popular_inner row">
            <div className="singleArt">
              <ArticleBody article={currArticle} showAll={true} />
            </div>
          </div>
        </div>
      </section>

     </div>
  )
};
export default Article;
