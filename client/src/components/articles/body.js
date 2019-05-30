import React, {Component} from "react";
import {Link} from 'react-router-dom';

class ArticleBody extends Component {
    state = {
        showAll: false
    }

  toggleShowAll = (e) => {
    e.preventDefault();
    this.setState({showAll: !this.state.showAll});
  }

  render() {
    const article = this.props.article;
    return (
      <div className="col-lg-4" key={article.id}>
        <div className="popular_item">
          <Link to={`/article/${article.id}`}>
            <img className="img-fluid" src={article.headerImageUrl} alt="Article header" />
          </Link>
          <h4>{article.title}</h4>
          { this.state.showAll ? (
            <div dangerouslySetInnerHTML={{ __html:article.article }} />
          ) : (
            <div>{article.blurb}</div>
          ) }
          <button onClick={this.toggleShowAll}>{ this.state.showAll ? 'View Less' : 'View More' }</button>

        </div>
      </div>
    );
  }
}

export default ArticleBody;
