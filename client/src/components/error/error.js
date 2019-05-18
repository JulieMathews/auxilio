import React, { Component } from 'react'

class Error extends Component {
    render() {
        if (this.props.message) {
            return (
                <div className="error">{this.props.message}</div>
            )
        }
        return null;
    }
}

export default Error;
