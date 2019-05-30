import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './articles.css';
import {Link} from 'react-router-dom';

const Articles = (props) => {
    const [articles, setArticles] = useState([]);

  const fetchArticles = async() => {
    const response = await axios.get('/article');
    console.log('fetch articles:', response.data)
    let len = response.data.length;
    if (len > 9 ) len = 9;
    const parsedArticles = response.data.slice(0, len);
    setArticles(parsedArticles);
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  const renderArticles = () => {
    console.log('article:', articles);
    return articles.map(article => {
      return (
        <div className="col-lg-4" key={article.id}>
          <div className="popular_item">
            <Link to={`/article/${article.id}`}>
              <img className="img-fluid" src={article.headerImageUrl} alt="Article header" />
            </Link>
            <h4>{article.title}</h4>
            {article.blurb}
            <div dangerouslySetInnerHTML={{ __html:article.article }} />
          </div>
        </div>
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
