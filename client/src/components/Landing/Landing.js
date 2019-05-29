import React, {useState, useEffect} from 'react';
import './Landing.css';
import axios from 'axios';

import {Link} from 'react-router-dom';

const Landing = (props) => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async() => {
    const response = await axios.get('/article');
    console.log('fetch articles:', response.data)
    let len = response.data.length;
    if (len > 3 ) len = 3;
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
          </div>
        </div>
      );
    })
  }

  return (
    <div>
      <section className="home_banner_area">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-lg-8">
                <div className="banner_content">
                  <h2>Auxilio</h2>
                  <p>Parents, teachers and therapists giving professional advice and community support for ADHD and Autism.</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="home_right_box">
                  <div className="home_item">
                    <span className="nav-item active nav-link"><img src={ require('../../img/familyapp/family.png')} alt="School Related"/></span>
                  </div>
                  <div className="home_item">
                    <Link to="/communityforum"><p>Community Forum</p></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Most Recent Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div className="popular_inner row">
            {renderArticles()}
          </div>
        </div>
      </section>

    </div>
  )
};

export default Landing;
