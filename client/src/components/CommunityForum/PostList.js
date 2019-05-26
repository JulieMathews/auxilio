import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  render() {
    return this.props.posts.map(p => <Post key={p.id} post={p} onSendComment={this.props.onSendComment} />)
  }
}

export default PostList;
