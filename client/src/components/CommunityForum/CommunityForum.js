<<<<<<< HEAD
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
=======
import React, {Fragment} from 'react';
import Header from '../Header/Header';
import './CommunityForum.css';

// Header message = { this.state.info }

const CommunityForum = (props) => {
  console.log('community', props);
  return (
    <Fragment>
    <Header landing={false} headline="Community Forum" />
    <section class="blog_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog_left_sidebar">
              <article class="row blog_item">
                <div class="col-md-3">
                  <div class="blog_info text-right">
                    <ul class="blog_meta list">
                      <div class="thumb">
                        <img src={ require("../../img/blog/c2.jpg")} alt="School Related"/>
                      </div>
                      <li><a href="#">Henry<i class="lnr lnr-user"></i></a></li>
                      <li><a href="#">2 May, 2019<i class="lnr lnr-calendar-full"></i></a></li>
                      <li><a href="#">05 Comments<i class="lnr lnr-bubble"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="blog_post">
                    <div class="blog_details">
                      <a href="/singlepost"><h2>Issues at the playground</h2></a>
                      <p>Sed adipiscing diam donec adipiscing tristique risus nec. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius.</p>
                    </div>
                  </div>
                </div>
              </article>

              <article class="row blog_item">
                <div class="col-md-3">
                  <div class="blog_info text-right">
                    <ul class="blog_meta list">
                      <div class="thumb">
                        <img src={ require("../../img/blog/c3.jpg")} alt="School Related"/>
                      </div>
                      <li><a href="#">Annie<i class="lnr lnr-user"></i></a></li>
                      <li><a href="#">2 May, 2019<i class="lnr lnr-calendar-full"></i></a></li>
                      <li><a href="#">05 Comments<i class="lnr lnr-bubble"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="blog_post">
                    <div class="blog_details">
                      <a href="singlePost.html"><h2>Eating out troubles</h2></a>
                      <p>Aliquet bibendum enim facilisis gravida neque convallis a. Habitant morbi tristique senectus et netus. Lacus vestibulum sed arcu non odio euismod lacinia at.</p>
                    </div>
                  </div>
                </div>
              </article>

              <article class="row blog_item">
                <div class="col-md-3">
                  <div class="blog_info text-right">
                    <ul class="blog_meta list">
                      <div class="thumb">
                        <img src={ require("../../img/blog/c1.jpg")} alt="School Related"/>
                      </div>
                      <li><a href="#">Emily<i class="lnr lnr-user"></i></a></li>
                      <li><a href="#">1 May, 2019<i class="lnr lnr-calendar-full"></i></a></li>
                      <li><a href="#">05 Comments<i class="lnr lnr-bubble"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="blog_post">
                    <div class="blog_details">
                      <a href="singlePost.html"><h2>Why don't my parents leave us alone?</h2></a>
                      <p>Metus aliquam eleifend mi. Sed adipiscing diam donec adipiscing tristique risus nec. </p>
                    </div>
                  </div>
                </div>
              </article>

              <nav class="blog-pagination justify-content-center d-flex">
                <ul class="pagination">
                  <li class="page-item">
                    <a href="#" class="page-link" aria-label="Previous">
                      <span aria-hidden="true">
                        <span class="lnr lnr-chevron-left"></span>
                      </span>
                    </a>
                  </li>
                  <li class="page-item active"><a href="#" class="page-link">01</a></li>
                  <li class="page-item"><a href="#" class="page-link">02</a></li>
                  <li class="page-item"><a href="#" class="page-link">03</a></li>
                  <li class="page-item"><a href="#" class="page-link">04</a></li>
                  <li class="page-item"><a href="#" class="page-link">09</a></li>
                  <li class="page-item">
                    <a href="#" class="page-link" aria-label="Next">
                      <span aria-hidden="true">
                        <span class="lnr lnr-chevron-right"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog_right_sidebar">
              <aside class="single_sidebar_widget search_widget">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search Posts"/>
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button"><i class="lnr lnr-magnifier"></i></button>
                  </span>
                </div>
                <div class="br"></div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
>>>>>>> 9685d65ef70f081c76469533ec938170bb5faef4
  )
  }
};

export default CommunityForum;