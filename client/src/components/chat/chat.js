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
    users: [],
    roomName: "observable-room",
    room: {},
    member: {
      username: "Sonja",
      color: randomColor(),
    }
  }

  constructor(props) {
    super(props)
    if (props.currentUser) {
      const memberData = {...props.currentUser};
      memberData.color = randomColor();
      this.drone = new window.Scaledrone("czBgrob2FXXXRdrO", {
        data: memberData
      });
      const fixedState = {...this.state}
      fixedState.member.username = props.currentUser.username;
      this.state = fixedState
      console.log(props);
      console.log(this.state.member);
      this.drone.on('open', error => {
        if (error) {
          return console.error(error);
        }
        
        const member = {...this.state.member};
        member.id = this.drone.clientId;
        this.setState({member});
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
      const messages = this.state.messages;
      console.log(message.member)
      messages.push(message);
      this.setState({messages});
    });
    console.log(room);
    this.setState({room: room});
    console.log(this.state);
  }

  componentDidMount() {
    this.subscribe(this.state.roomName);
    axios
      .get("/api/users")
      .then(response => {
        if (response.status === 200) {
          this.setState({ users: response.data });
        }
      })
      .catch(error => {
        console.log("User list error:");
        console.log(error);
      });
  }

  render() {
    if (this.props.currentUser) {
    return (
      <div className="App">
        <div className="App-header">
          <h1><i className="far fa-comments"></i></h1>
        </div>
        <div className="messageParent">
        <UserList users={this.state.users} currentUser={this.props.currentUser} onChangeRoom={this.onChangeRoom} />
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
        </div>
      </div>
    );
    } else {
      return null;
    }
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: this.state.roomName,
      message
    });
  }

  onChangeRoom = (roomName) => {
    console.log(this.state.room);
    this.state.room.unsubscribe();
    this.setState({ messages: [], roomName: roomName, room: {} });
    this.subscribe(roomName);
  }
}

export default InstantMessenger ;
