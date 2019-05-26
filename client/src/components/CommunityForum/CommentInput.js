import React, { Component } from "react";

class CommentInput extends Component {
  state = {
    message: ""
  }

  onChange(e) {
    this.setState({ message: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ message: "" });
    this.props.onSendComment(this.props.parentId, this.state.message);
  }

  render() {
    return (
      <div className="CommentInput">
        <form className="commentForm" onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.message}
            type="text"
            placeholder="Type words and then press enter" />
          <button>Comment</button>
        </form>
      </div>
    )
  }
}

export default CommentInput;
