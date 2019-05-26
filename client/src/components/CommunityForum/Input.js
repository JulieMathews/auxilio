import React, { Component } from "react";
import axios from 'axios'

class Input extends Component {
  state = {
    title: "",
    message: ""
  }

  onChange(e, part) {
    var objState = {};
    objState[part] = e.target.value;
    this.setState(objState);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ title: "", message:"" });
    this.props.onSendMessage(this.state.title, this.state.message);
  }

  render() {
    return (
      <div className="Input">
        <form className="forumForm" onSubmit={e => this.onSubmit(e)}>
          <ul style={{ listStyle: "none", position: "relative" }}>
            <li>
              <input
                onChange={e => this.onChange(e, "title")}
                value={this.state.title}
                type="text"
                placeholder="The title of your post" />
            </li>
            <li>
              <textarea
                onChange={e => this.onChange(e, "message")}
                value={this.state.message}
                placeholder="Type words and then press enter"
                autoFocus="{true}?"
                style={{ width: '100%' }}
                />
            </li>
            <li>
              <button style={{ float: 'right' }}>Post</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default Input;
