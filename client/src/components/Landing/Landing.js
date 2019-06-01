import React, {useState, useEffect, useContext} from 'react';
import './Landing.css';
import GlobalContext from "../../context/global-context";
import axios from 'axios';

import {Link} from 'react-router-dom';


const Landing = (props) => {
  const context = useContext(GlobalContext);
  const [articles, setArticles] = useState([]);

  //const fetchArticles = async() => {
  //   const response = await axios.get('/article');
  //   console.log('fetch articles:', response.data)
  //   let len = response.data.length;
  //   if (len > 3 ) len = 3;
  //   const parsedArticles = response.data.slice(0, len);
  //   setArticles(parsedArticles);
  // }

  // useEffect(() => {
  //   fetchArticles();
  // }, []);

  const renderArticles = () => {
    console.log('article:', context.articles);
    return context.articles.map(article => {
      return (
        <div className="col-lg-4" key={`/article/${article.id}`}>
          <div className="popular_item">
            <Link to="/articles">
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
                  <h2>Auxilio</h2> <h6>-- to give help, give assistance</h6>
                  <div className="para">
                  <p>Having children with learning disabilities puts a lot of stress on families and can feel very isolating. Navigating the school system and getting access to professional help is expensive and very limited.</p>
                  <p>Signup to access the forum and direct messaging.</p>
                  </div>
                </div>
              </div>
{/*  ONLY FOR LOGGEDIN */}
              <div className="col-lg-4">
                <div className="home_right_box">

                  <div className="home_item">
                    <span className="nav-item active nav-link"><img src={ require('../../img/familyapp/family.png')} alt="community"/><Link to="/communityforum"><p>Community Forum</p></Link></span>
                  </div>
                  {/* <div className="home_item">
                    <Link to="/communityforum"><p>Community Forum</p></Link>
                  </div> */}

                  <div className="home_item">
                    <span className="nav-item active nav-link"><img src={ require('../../img/familyapp/happy.png')} alt="messages"/><Link to="/messages"><p>Messenger</p></Link></span>
                  </div>
                  {/* <div className="home_item">
                    <Link to="/messages"><p>Messenger</p></Link>
                  </div> */}

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
            <p>Read what our Specialists have written on topics to help you through everyday issues and questions.</p>
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
