import {Component} from "react";
import React from "react";
import axios from 'axios';

class Articles extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        axios
            .get('/article')
            .then(response => {
                console.log('Articles response:');
                console.log(response);
                if (response.status === 200) {
                    this.setState({articles: response.data.articles});
                }
            })
            .catch(error => {
                console.log('Articles error:');
                console.log(error);
            })
    }
  render() {
      const articles = this.state.articles;
      return (
          <div className="Articles-list">
            {articles.map(a => this.renderArticle(a))}
          </div>
      )
  }

  renderArticle(article) {
    return(
        <article className="article">
            <div className="col-md-9">
                <div className="blog_post">
                    <img src="img/blog/main-blog/m-blog-2.jpg" alt="" />
                    <div className="blog_details">
                        <a href="single-blog.html"><h2>{article.title}</h2></a>
                        <p>{article.blurb}</p>
                        <a href="single-blog.html" className="blog_btn">View More</a>
                        
                    </div>
                </div>
            </div>
        </article>
    )
    }

}
    export default Articles;