import React, { Component } from 'react';
import './instantMessenger.css';
import Messages from "./Messages";
import Input from "./Input";


function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class InstantMessenger extends Component {
  state = {
    messages: [],
    member: {
      username: "Sonja",
      color: randomColor(),
    }
  }

  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("czBgrob2FXXXRdrO", {
      data: this.state.member
    });
    const fixedState = {...this.state}
    fixedState.member.username = props.currentUser
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
      const room = this.drone.subscribe("observable-room", {historyCount: 5});
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
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1><i class="far fa-comments"></i></h1>
        </div>
        <div className="messageParent">
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
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

}

export default InstantMessenger ;
