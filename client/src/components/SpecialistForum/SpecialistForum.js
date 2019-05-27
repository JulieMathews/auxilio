import React from 'react';
import '../css/style.css';
//import { linkSync } from 'fs';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SpecialistForum = (props) => {
  return (    
    <div>
      <Header/>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
        <div className="container">
          <div className="banner_content text-center">
            <h2>Specialist Support</h2>
          </div>
        </div>
      </div>
    </section>
    <section className="blog_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog_left_sidebar">
              <article className="row blog_item">
                <div className="col-md-3">
                  <div className="blog_info text-right">
                    <ul className="blog_meta list">
                      <li>Jane Doe<i className="lnr lnr-user"></i></li>
                      <li>3 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                      <li>06 Comments<i className="lnr lnr-bubble"></i></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="blog_post">
                  <img src={ require('../../img/family/family001.jpeg') } alt="family" />
                    <div className="blog_details">
                      <Link href="specialistPost.html"><h2>Trouble with siblings.</h2></Link>
                      <p>Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Pellentesque id nibh tortor id aliquet lectus proin nibh.</p>
                    </div>
                  </div>
                </div>
              </article>
                <article className="row blog_item">
                  <div className="col-md-3">
                    <div className="blog_info text-right">
                      <ul className="blog_meta list">
                        <li>John Doe<i className="lnr lnr-user"></i></li>
                        <li>3 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                        <li>06 Comments<i className="lnr lnr-bubble"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                    <img src={ require('../../img/family/family001.jpeg') } alt="family" />
                      <div className="blog_details">
                        <Link href="specialistPost.html"><h2>Picky eater</h2></Link>
                        <p>Imperdiet proin fermentum leo vel orci porta non pulvinar. Amet dictum sit amet justo donec enim diam vulputate ut.</p>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
                    <div className="blog_info text-right">
                      <ul className="blog_meta list">
                        <li>Mark Doe<i className="lnr lnr-user"></i></li>
                        <li>2 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                        <li>78 Comments<i className="lnr lnr-bubble"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                    <img src={ require('../../img/family/family001.jpeg') } alt="family" />
                      <div className="blog_details">
                        <Link href="specialistPost.html"><h2>Issues at the playground</h2></Link>
                        <p>Sed adipiscing diam donec adipiscing tristique risus nec. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius.</p>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
                    <div className="blog_info text-right">
                      <ul className="blog_meta list">
                        <li>Sam Doe<i className="lnr lnr-user"></i></li>
                        <li>2 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                        <li>46 Comments<i className="lnr lnr-bubble"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                    <img src={ require('../../img/family/family001.jpeg') } alt="family" />
                      <div className="blog_details">
                        <Link href="specialistPost.html"><h2>Eating out troubles</h2></Link>
                        <p>Aliquet bibendum enim facilisis gravida neque convallis a. Habitant morbi tristique senectus et netus. Lacus vestibulum sed arcu non odio euismod lacinia at.</p>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
                    <div className="blog_info text-right">
                      <ul className="blog_meta list">
                        <li>Martha Green<i className="lnr lnr-user"></i></li>
                        <li>1 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                        <li>06 Comments<i className="lnr lnr-bubble"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                    <img src={ require('../../img/family/family001.jpeg') } alt="family" />
                      <div className="blog_details">
                        <Link href="specialistPost.html"><h2>Why don't my parents leave us alone?</h2></Link>
                        <p>Metus aliquam eleifend mi in. Sed adipiscing diam donec adipiscing tristique risus nec. </p>
                      </div>
                    </div>
                  </div>
                </article>
                <div classNameName="navigation-area">
              <div classNameName="row">
                <div classNameName="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                  <div classNameName="thumb">
                    <img src={ require('../../img/blog/prev.jpg') } alt="prev" />
                  </div>
                  <div classNameName="arrow">
                  <Link href="#" className="page-link" aria-label="Previous"></Link>
                  </div>
                  <div classNameName="thumb">
                  <img src={ require('../../img/prev.png') } alt="prev" />
                    <p>Prev Post</p>
                  </div>
                </div>
                <div classNameName="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                  <div classNameName="detials">
                    <p>Next Post</p>
                  </div>
                  <div classNameName="arrow">
                    <Link href="#"><span classNameName="lnr text-white lnr-arrow-right"></span></Link>
                  </div>
                  <div classNameName="thumb">
                    <img src={ require('../../img/blog/next.jpg') } alt="next" />
                  </div>										
                </div>									
              </div>
            </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">

{/*           SEARCHBAR NOT NEEDED RIGHT NOW   
              <aside className="single_sidebar_widget search_widget">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search Posts">
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier"></i></button>
                  </span>
                </div>
                <div className="br"></div>
              </aside>
*/}

              <aside className="single_sidebar_widget author_widget">
                <img className="author_img rounded-circle" src="img/blog/author.png"/>
                <h4>Charlie Barber</h4>
                <p>Therapist</p>
                <div className="social_icon">
                  <Link href="#"><i className="fa fa-facebook"></i></Link>
                  <Link href="#"><i className="fa fa-twitter"></i></Link>
                  <Link href="#"><i className="fa fa-github"></i></Link>
                  <Link href="#"><i className="fa fa-behance"></i></Link>
                </div>
                <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                <div className="br"></div>
            </aside>

            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
};

export default SpecialistForum;