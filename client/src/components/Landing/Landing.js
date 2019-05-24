import React, {useState, useEffect} from 'react';
import './Landing.css';
import axios from 'axios';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
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
            <Link to={`/article/${article.id}`}><img className="img-fluid" src={article.headerImageUrl} /></Link>
            <h4>{article.title}</h4>
            {article.blurb}
          </div>
        </div>
      );
    })
  }

  return (
    <div>
      <Navbar/>
      <Header landing={true} headline='Community Forum' />
      

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
      <Footer />
    </div>
  )
};

export default Landing;
