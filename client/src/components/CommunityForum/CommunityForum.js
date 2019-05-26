import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CommunityForum.css';

// import React from 'react';
// import './CommunityForum.css';
// import Events from "./events";
// import Input from "./input";

// className CommunityForum extends React.Component {
//   state = {
//     events: []
//   }

//   constructor(props) {
//     super(props);
//     this.drone = new window.Scaledrone("czBgrob2FXXXRdrO", {
//       data: { username: "fuckface" }
//     });
//     this.drone.on('open', error => {
//       if (error) {
//         return console.error(error);
//       }
//     });
//     const room = this.drone.subscribe("observable-community-forum");
//     room.on('message', message => {
//       const events = this.state.events;
//       events.push({text: message.data });
//       this.setState({events});
//     });
//   }

//   onSendMessage = (text) => {
//     console.log("onSendMessage:");
//     console.log(text)
//     this.drone.publish({
//       room: "observable-community-forum",
//       message: text
//     });
//   }

//   render() {
//   return (
// <div>
    

//     <Events events={this.state.events} />

//     <Input onSendMessage={this.onSendMessage} />
 
//     <section className="blog_area">
//       <div className="container">
        
//              </div>
//     </section>
//     </div>

// Header message = { this.state.info }

const CommunityForum = (props) => {
  console.log('community', props);
  return (
  <div>
    <Navbar />
    <Header />
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
        <div className="container">
          <div className="banner_content text-center">
            <h2>Community Forum</h2>
          </div>
        </div>
      </div>
    </section>  
{/* 
    <Fragment>
    <Header landing={false} headline="Community Forum" />
*/}
    <section className="blog_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog_left_sidebar">
              <article className="row blog_item">
                <div className="col-md-3">
                  <div className="blog_info text-right">
                    <ul className="blog_meta list">
                      <div className="thumb">
                        <img src={ require('../../img/blog/c2.jpg') } alt="c2" />
                      </div>
                      <li>Henry<i className="lnr lnr-user"></i></li>
                      <li>2 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                      <li>05 Comments<i className="lnr lnr-bubble"></i></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="blog_post">
                    <div className="blog_details">
                      <Link to="/singlepost" classNameName="btn btn-link text-secondary">
                        <h2>Issues at the playground</h2>
                      </Link>
                      <p>Sed adipiscing diam donec adipiscing tristique risus nec. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius.</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="row blog_item">
                <div className="col-md-3">
                  <div className="blog_info text-right">
                    <ul className="blog_meta list">
                      <div className="thumb">
                        <img src={ require('../../img/blog/c3.jpg') } alt="c3" />
                      </div>
                      <li>Annie<i className="lnr lnr-user"></i></li>
                      <li>2 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                      <li>05 Comments<i className="lnr lnr-bubble"></i></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="blog_post">
                    <div className="blog_details">
                      <Link to="/singlepost" classNameName="btn btn-link text-secondary">
                        <h2>Eating out troubles</h2>
                      </Link>
                      <p>Aliquet bibendum enim facilisis gravida neque convallis a. Habitant morbi tristique senectus et netus. Lacus vestibulum sed arcu non odio euismod lacinia at.</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="row blog_item">
                <div className="col-md-3">
                  <div className="blog_info text-right">
                    <ul className="blog_meta list">
                      <div className="thumb">
                        <img src={ require('../../img/blog/c1.jpg') } alt="c1" />
                      </div>
                      <li>Jane<i className="lnr lnr-user"></i></li>
                      <li>1 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                      <li>05 Comments<i className="lnr lnr-bubble"></i></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="blog_post">
                    <div className="blog_details">
                      <Link to="/singlepost" classNameName="btn btn-link text-secondary">
                        <h2>Why don't my parents leave us alone?</h2>
                      </Link>
                      <p>Metus aliquam eleifend mi. Sed adipiscing diam donec adipiscing tristique risus nec. </p>
                    </div>
                  </div>
                </div>
              </article>

              <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                  <li className="page-item">
                    <div className="page-link" aria-label="Previous">
                      <span aria-hidden="true">
                        <img src={ require('../../img/prev.png') } alt="prev" />
                      </span>
                    </div>
                  </li>
                  <li className="page-item active page-link">01</li>

                  <li className="page-item page-link">02</li>
                  <li className="page-item page-link">03</li>
                  <li className="page-item page-link">04</li>

                  <li className="page-item page-link" aria-label="Next">
                      <span aria-hidden="true">
                        <img src={ require('../../img/next.png') } alt="next" />
                      </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
{/*          !!!!!!!!!SEARCH FOR POSTS!!!!!!!!!
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              <aside className="single_sidebar_widget search_widget">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search Posts"/>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier"></i></button>
                  </span>
                </div>
                <div className="br"></div>
              </aside>
            </div>
          </div>
*/}
        </div>
      </div>
    </section>
  <Footer />
  </div>
  )
  };


export default CommunityForum;