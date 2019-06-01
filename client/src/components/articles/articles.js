import React, {useContext} from 'react';
import axios from 'axios';
import './articles.css';
import ArticleBody from './body.js';
import GlobalContext from "../../context/global-context";

const Articles = (props) => {
  const context = useContext (GlobalContext);
  //   const [articles, setArticles] = useState([]);
  //
  // const fetchArticles = async() => {
  //   const response = await axios.get('/article');
  //   console.log('fetch articles:', response.data)
  //   let len = response.data.length;
  //   if (len > 9 ) len = 9;
  //   const parsedArticles = response.data.slice(0, len);
  //   setArticles(parsedArticles);
  // }
  //
  // useEffect(() => {
  //   fetchArticles();
  // }, []);

  const renderArticles = () => {
    console.log('article:', context.allArticles);
    return context.allArticles.map(article => {
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
