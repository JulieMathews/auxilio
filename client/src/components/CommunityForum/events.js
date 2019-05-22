import React, { Component } from "react";
import CSSTransitionGroup from "react-addons-css-transition-group"
import Event from "./event";



class Events extends Component {
	render() {
    var eventsLength = this.props.events.length;
    var eventsMapped = this.props.events.map(function (evt, index) {
      const key = eventsLength - index;
      return <Event event={evt} key={key} />
    });

    return <section className={'blue-gradient-background intro-splash splash'}>
             <div className={'container center-all-container'}>
               
               <CSSTransitionGroup component="ul" className="evts" transitionName="evt-transition" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                 {eventsMapped}
               </CSSTransitionGroup>
             </div>
           </section>;
	}
}

export default Events;