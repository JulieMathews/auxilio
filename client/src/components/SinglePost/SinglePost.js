import React from 'react';
import './SinglePost.css';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SinglePost = (props) => {
  return (
  <div>
    <Navbar/>
    <Header/>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-center">
						<h2>POSTS</h2>
					</div>
				</div>
      </div>
    </section>
    <section className="blog_area single-post-area p_120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 posts-list">
            <div className="single-post row">
              <div className="col-lg-12">
              </div>
              <div className="col-lg-3  col-md-3">
                <div className="blog_info text-right">
                  <ul className="blog_meta list">
                    <div className="thumb">
                      <img src={ require('../../img/blog/c5.jpg') } alt="c5" />
                    </div>
                    <li>Bob<i className="lnr lnr-user"></i></li>
                    <li>3 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-md-9 blog_details">
                <h2>Amet consectetur adipiscing</h2>
                <p className="excert">
                  Tortor vitae purus faucibus ornare suspendisse. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Varius vel pharetra vel turpis nunc eget. Dignissim sodales ut eu sem integer vitae justo eget magna. Felis bibendum ut tristique et egestas quis. Ante metus dictum at tempor commodo ullamcorper.
                </p>
                <p>
                  Enim sed faucibus turpis in eu mi bibendum neque. Consectetur libero id faucibus nisl tincidunt eget nullam. A diam sollicitudin tempor id.
                </p>
                <p>
                  Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Urna nunc id cursus metus aliquam eleifend mi in nulla.
                </p>
              </div>
            </div>
            <div className="navigation-area">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                  <div className="thumb">
                    <img src={ require('../../img/blog/prev.jpg') } alt="prev" />
                  </div>
                  <div className="arrow">
                  <Link href="#" className="page-link" aria-label="Previous"></Link>
                  </div>
                  <div className="thumb">
                    <img src={ require('../../img/prev.png') } alt="prev" />
                    <p>Prev Post</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                  <div className="detials">
                    <p>Next Post</p>
                  </div>
                  <div className="arrow">
                    <Link href="#"><span className="lnr text-white lnr-arrow-right"></span></Link>
                  </div>
                  <div className="thumb">
                    <img src={ require('../../img/blog/next.jpg') } alt="next" />
                  </div>
                </div>
              </div>
            </div>
            <div className="comments-area">
              <h4>05 Comments</h4>
              <div className="comment-list">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src={ require('../../img/blog/c1.jpg') } alt="c1" />
                    </div>
                    <div className="desc">
                      <h5>Emilly</h5>
                      <p className="date">3 May, 2019 at 3:12 pm </p>
                      <p className="comment">
                        Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div className="reply-btn">

                    <button href="" className="btn-reply text-uppercase">reply</button>

                  </div>
                </div>
              </div>
              <div className="comment-list left-padding">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src={ require('../../img/blog/c2.jpg') } alt="c2" />
                    </div>
                    <div className="desc">
                      <h5>Henry</h5>
                      <p className="date">3 May, 2019 at 3:12 pm </p>
                      <p className="comment">
                        Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div className="reply-btn">
                    <button href="" className="btn-reply text-uppercase">reply</button>

                  </div>
                </div>
              </div>
              <div className="comment-list left-padding">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src={ require('../../img/blog/c3.jpg') } alt="c3" />
                    </div>
                    <div className="desc">
                      <h5>Annie</h5>
                      <p className="date">3 May, 2019 at 3:12 pm </p>
                      <p className="comment">
                          Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div className="reply-btn">

                    <button href="" className="btn-reply text-uppercase">reply</button>

                  </div>
                </div>
              </div>
              <div className="comment-list">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src={ require('../../img/blog/c4.jpg') } alt="c4" />
                    </div>
                    <div className="desc">
                      <h5>Maria</h5>
                      <p className="date">3 May, 2019 at 3:12 pm </p>
                      <p className="comment">
                          Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                <div className="reply-btn">

                  <button href="" className="btn-reply text-uppercase">reply</button>

                </div>
              </div>
            </div>
            <div className="comment-list">
              <div className="single-comment justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src={ require('../../img/blog/c5.jpg') } alt="c5" />
                  </div>
                  <div className="desc">
                    <h5>Bob</h5>
                    <p className="date">3 May, 2019 at 3:12 pm </p>
                    <p className="comment">
                        Never say goodbye till the end comes!
                    </p>
                  </div>
                </div>
                <div className="reply-btn">

                  <btn href="" className="btn-reply text-uppercase">reply</btn>

                </div>
              </div>
            </div>
          </div>
          <div className="comment-form">
            <h4>Leave a Reply</h4>
            <form className="singlepost_form">
              <div className="form-group form-inline">
                <div className="form-group col-lg-6 col-md-6 name">
                  <input type="text" className="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'"/>
                </div>
                <div className="form-group col-lg-6 col-md-6 email">
                  <input type="email" className="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'"/>
                </div>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'"/>
              </div>
              <div className="form-group">
                  <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required=""></textarea>
              </div>

              <button href="#" className="primary-btn submit_btn">Post Comment</button>

            </form>
          </div>
        </div>
{/*
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
        </div>
*/}
      </div>
      </div>
    </section>
    <Footer/>
  </div>
  )
};

export default SinglePost;
