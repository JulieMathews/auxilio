import React, {useContext} from 'react';
import axios from 'axios';
import './articles.css';
import ArticleBody from './body.js';
import GlobalContext from "../../context/global-context";

const Articles = (props) => {
  const context = useContext(GlobalContext);

  const renderArticles = () => {
    console.log('article:', context.articles);
    return context.articles.map(article => {
      return (
        <ArticleBody article={article} />
      );
    })
  }

  return (
    <div>
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
          <div className="container">
            <div className="banner_content text-center">
              <h2>Most Recent Articles</h2>

            </div>
          </div>
        </div>
      </section>
      <section className="popular_area p_120">
        <div className="container">
          <div className="popular_inner row">
            {renderArticles()}
          </div>
        </div>
      </section>

    </div>
  )
};
export default Articles;
