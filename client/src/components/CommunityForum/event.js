import React, { Component } from "react";
import moment from "moment";


class Event extends Component {
    render() {
      //var username = this.props.event.name;
      //var uuid = this.props.event.id;
      var date = moment(this.props.event.date).fromNow();
      var discussion = this.props.event.text;
   
  
      return (
        <li className={'evt'}>
          {/* <div className={'evt-name'}>{name}:</div> */}
          {/* <div className={'evt-id'}>{uuid}</div> */}
          <div className={'evt-date'}>{date}</div>
          <div className={'evt-measure'}>{discussion}</div>
        </li>
      );
    }
  }

  export default Event;