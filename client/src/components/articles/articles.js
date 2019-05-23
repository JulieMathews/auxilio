import {Component} from "react";
import React from "react";
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';

class Articles extends Component {
    state = {
        articles: []
    }
    executeOnClick(isExpanded) {
        console.log(isExpanded);
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
        <React.Fragment>
        <ShowMoreText
                
                lines={3}
                more='Show more'
                less='Show less'
                anchorClass=''
                onClick={this.executeOnClick
                }>

                {article}
            
            </ShowMoreText>
         
            
          <article className="article">
              <div className="col-md-9">
                  <div className="blog_post">
                      <img src="img/blog/main-blog/m-blog-2.jpg" alt="" />
                      <div className="blog_details">
                        <img src= {article.headerImageUrl} alt={`${article.headerImageUrl}'s picture` } className="img-responsive"/>
                          <a href="single-blog.html"><h2>{article.title}</h2></a>
                          <p>{article.blurb}</p>
                          <a href="single-blog.html" className="blog_btn">View More</a>
  
                      </div>
                  </div>
              </div>
          </article>
          </React.Fragment> 
    )
    }

}
    export default Articles;