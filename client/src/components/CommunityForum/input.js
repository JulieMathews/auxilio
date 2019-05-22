import React, { Component } from "react";
import axios from 'axios'

class Input extends Component {
    state = {
        text: ""
    }

    onChange(e) {
        console.log(e.target.value);
        this.setState({ text: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ text: "" });
        axios
            .post('/api/discussion/new', {
                discussion: this.state.text
            })
            .then(response => {
                console.log("discussion response:")
                console.log(response);
            })
            .catch(error => {
                console.log("discussion error:")
                console.log(error);
            })
        this.props.onSendMessage(this.state.text);
    }

    render() {
        return (
            <div className="Input">
                <form className="forumForm" onSubmit={e => this.onSubmit(e)}>
                    <textarea
                      onChange={e => this.onChange(e)}
                      value={this.state.text} />
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default Input;