import React, { Component } from 'react';
import './instantMessenger.css';
import Messages from "./Messages";
import Input from "./Input";

class InstantMessenger extends Component {
  state = {
    messages: [],
    room: {},
  }

  constructor(props) {
    super(props)
    if (props.currentUser) {
      this.drone = props.drone;
      const fixedState = {...this.state}
      this.state = fixedState
      console.log(props);
      this.drone.on('open', error => {
        if (error) {
          return console.error(error);
        }

        this.setState({ clientId: this.drone.clientId });
      });
    }
  }

  subscribe(newRoomName) {
    console.log("Subscribing to", newRoomName);
    const room = this.drone.subscribe(newRoomName, {historyCount: 5});
    room.on('history_message', (message) => {
      console.log("history message: ");
      console.log(message);
      const messages = this.state.messages;
      messages.push(message);
      this.setState({messages});
    });
    room.on('message', message => {
      console.log("message: ");
      const messages = this.state.messages;
      console.log(message);
      messages.push(message);
      this.setState({messages});
    });
    console.log(room);
    this.setState({ room });
    console.log(this.state);
  }

  componentDidMount() {
    this.subscribe(this.props.roomName);
  }

  componentWillUnmount() {
    if (this.state.room) {
      this.state.room.unsubscribe();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.roomName !== this.props.roomName) {
      if (prevState.room) {
        console.log("Unsubscribing from", prevProps.roomName);
        prevState.room.unsubscribe();
      }
      if (this.state.messages && this.state.messages.length !== 0) {
        console.log("Clearing messages");
        this.setState({ messages: [] });
      }
      if (this.props.roomName) {
        this.subscribe(this.props.roomName);
      }
    }
  }

  render() {
    if (this.props.currentUser) {
      var member = {...this.state.currentUser};
      member.id = this.state.clientId;
    return (
      <div className="messageParent">
        <h4>{this.props.roomDescription}</h4>
        <button onClick={this.props.closeChat}>Close</button>
        <Messages
          messages={this.state.messages}
          currentMember={member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
    } else {
      return null;
    }
  }

  onSendMessage = (message) => {
    this.props.drone.publish({
      room: this.props.roomName,
      message
    });
  }
}

export default InstantMessenger;
