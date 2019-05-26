import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header/Header';
import './CommunityForum.css';
import PostList from "./PostList";
import Input from "./Input";
import axios from "axios";


class CommunityForum extends Component {
  state = {
    posts: []
  }

  fetchComments = (parentIds) => {
    var params = new URLSearchParams();
    if (parentIds) {
      for (var parentId of parentIds) {
        params.append("parentId", parentId);
      }
    }
    axios
      .get("/api/posts", { params: params })
      .then(response => {
        if (response.status === 200) {
          if (!parentIds) {
            this.posts = response.data;
            this.fetchComments(response.data.map(p => p.id));
          } else {
            this.updatePosts(this.posts, response.data);
          }
        }
      })
      .catch(error => {
        console.log("Posts error:");
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchComments();
  }

  updatePosts = (posts, comments) => {
    var combinedPosts = [];
    for (var post of posts) {
      post.comments = comments.filter(c => c.parentId == post.id) || [];
      combinedPosts.push(post);
    }
    this.setState({ posts: combinedPosts });
  }

  onSendMessage = (title, message) => {
    axios
      .post("/api/posts", { title: title, message: message })
      .then(response => {
        if (response.status === 200) {
          const posts = this.state.posts;
          var post = response.data;
          post.comments = [];
          posts.unshift(post);
          this.setState({ posts });
        }
      })
      .catch(error => {
        console.log("Post error:");
        console.log(error);
      });
  }

  onSendComment = (parentId, message) => {
    axios
      .post("/api/posts", { parentId: parentId, title: "", message: message })
      .then(response => {
        if (response.status === 200) {
          const comment = response.data;
          const posts = this.state.posts;
          var post = posts.find(p => p.id === comment.parentId);
          post.comments.push(comment);
          this.setState({ posts });
        }
      })
      .catch(error => {
        console.log("Comment error:");
        console.log(error);
      });
  }

  render() {
    console.log('community', this.props);
    return (
    <div>
      <Navbar/>
      <Header/>
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
          <div className="container">
            <div className="banner_content text-center">
              <h2>Community Forum</h2>
            </div>
          </div>
        </div>
      </section>
      <Input onSendMessage={this.onSendMessage} />
      <PostList posts={this.state.posts} onSendComment={this.onSendComment} />
      <Footer/>
    </div>
    )
  }
  };


export default CommunityForum;
