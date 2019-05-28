import React, { Component } from 'react';
import './instantMessenger.css';
import Messages from "./Messages";
import Input from "./Input";
import UserList from "./UserList";
import axios from "axios";

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class InstantMessenger extends Component {
  state = {
    messages: [],
    roomName: "observable-room",
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
    const room = this.drone.subscribe(newRoomName, {historyCount: 5});
    room.on('history_message', (message) => {
      console.log(message);
      const messages = this.state.messages;
      console.log(message.member);
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
    room.on('data', (message, member) => {
      console.log("Data: ");
      console.log(message);
      console.log(member);
    });
    console.log(room);
    this.setState({room: room});
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

  render() {
    if (this.props.currentUser) {
      var member = {...this.state.currentUser};
      member.id = this.state.clientId;
    return (
      <div className="App">
        <div className="App-header">
          <h1><i className="far fa-comments"></i></h1>
        </div>
        <div className="messageParent">
        <Messages
          messages={this.state.messages}
          currentMember={member}
        />
        <Input onSendMessage={this.onSendMessage} />
        </div>
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
