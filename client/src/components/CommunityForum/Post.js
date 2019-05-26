import React, { Component } from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';
import Comment from './Comment';
import CommentInput from './CommentInput';

class Post extends Component {
  render() {
    const post = this.props.post;
    const name = (post.User && post.User.username) ? post.User.username : "Anonymous Coward";
    return (
      <article className="row blog_item" key="{post.id}">
        <div className="col-md-3">
          <div className="blog_info text-right">
            <ul className="blog_meta list">
              <div className="thumb">
                <img src={ require('../../img/blog/c2.jpg') } alt="c2" />
              </div>
              <li><a href="#">{name}<i className="lnr lnr-user"></i></a></li>
              <li><a href="#">{moment(post.createdAt).fromNow()}<i className="lnr lnr-calendar-full"></i></a></li>
              <li><a href="#">{post.comments ? post.comments.length : 0} Comments<i className="lnr lnr-bubble"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="blog_post">
            <div className="blog_details">
              <Link to="/singlepost" className="btn btn-link text-secondary">
                <h2>{post.title}</h2>
              </Link>
              <p>{post.message}</p>
            </div>
          </div>
          <div className="CommentList">
          { post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
          </div>
          <CommentInput parentId={post.id} onSendComment={this.props.onSendComment} />
        </div>
      </article>
    )
  }
}

export default Post;
