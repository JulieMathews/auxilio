import React from 'react';
import './CommunityForum.css';
import Events from "./events";
import Input from "./input";

// Header message = { this.state.info }

class CommunityForum extends React.Component {
  state = {
    events: []
  }

  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("czBgrob2FXXXRdrO", {
      data: { username: "fuckface" }
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
    });
    const room = this.drone.subscribe("observable-community-forum");
    room.on('message', message => {
      const events = this.state.events;
      events.push({text: message.data });
      this.setState({events});
    });
  }

  onSendMessage = (text) => {
    console.log("onSendMessage:");
    console.log(text)
    this.drone.publish({
      room: "observable-community-forum",
      message: text
    });
  }

  render() {
  return (
<div>
    

    <Events events={this.state.events} />

    <Input onSendMessage={this.onSendMessage} />
 
    <section class="blog_area">
      <div class="container">
        
             </div>
    </section>
    </div>
  )
  }
};

export default CommunityForum;