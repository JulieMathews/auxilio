import React from 'react';

class Comment extends React.Component {
  render() {
    const comment = this.props.comment;
    const username = comment.User ? comment.User.username : "Anonymous Coward";
    return (
      <div>
        <span className="userName">{username}</span>:
        <span className="message">{comment.message}</span>
      </div>
    )
  }
}

export default Comment;
