import React from 'react';
import '../css/style.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';

const InSchoolForum = (props) => {
  return (
  <div>
    <Header />
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
        <div className="container">
          <div className="banner_content text-center">
            <h2>In School Forum</h2>
          </div>
        </div>
      </div>
    </section>
    <section className="blog_area single-post-area p_120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog_left_sidebar">
              <article className="row blog_item">
                <div className="col-md-3">
                    <div className="blog_info text-right">
                      <ul className="blog_meta list">
                        <div className="thumb">
                        <img src={ require('../../img/blog/c5.jpg') } alt="c5" />
                        </div>
                        <li>Bob<i className="lnr lnr-user"></i></li>
                        <li>3 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                        <li>05 Comments<i className="lnr lnr-bubble"></i></li>
                      </ul>
                    </div>
                  </div>
                <div className="col-md-9">
                  <div className="blog_post">
                    <div className="blog_details">
                      <Link href="singlePost.html"><h2>What is an IEP?</h2></Link>
                      <p>Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Pellentesque id nibh tortor id aliquet lectus proin nibh.</p>
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
                      <li>Emily<i className="lnr lnr-user"></i></li>
                      <li>3 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                      <li>05 Comments<i className="lnr lnr-bubble"></i></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="blog_post">
                    <div className="blog_details">
                      <Link href="singlePost.html"><h2>What do I pack my picky eater for school?</h2></Link>
                      <p>Imperdiet proin fermentum leo vel orci porta non pulvinar. Amet dictum sit amet justo donec enim diam vulputate ut.</p>
                    </div>
                  </div>
                </div>
              </article>
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
                    <h2>No one will play with my child at recess.</h2>
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
                    <Link href="singlePost.html"><h2>HELP! There's a bully on the school bus.</h2></Link>
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
                    <li>Emily<i className="lnr lnr-user"></i></li>
                    <li>1 May, 2019<i className="lnr lnr-calendar-full"></i></li>
                    <li>05 Comments<i className="lnr lnr-bubble"></i></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="blog_post">
                  <div className="blog_details">
                    <Link href="singlePost.html"><h2>Inclusion or exclusion?</h2></Link>
                    <p>Metus aliquam eleifend mi. Sed adipiscing diam donec adipiscing tristique risus nec. </p>
                  </div>
                </div>
              </div>
            </article>
            <nav className="blog-pagination justify-content-center d-flex">
              <ul className="pagination">
                <li className="page-item">
                  <Link href="#" className="page-link" aria-label="Previous"></Link>
                    <span aria-hidden="true">
                      <img src={ require('../../img/prev.png') } alt="prev" />
                      <span className="lnr lnr-chevron-left"></span>
                    </span>
                </li>
                <li className="page-item active page-link">01</li>
                <li className="page-item page-link">02</li>
                <li className="page-item page-link">03</li>
                <li className="page-item page-link">04</li>
                <li className="page-item">
                  <Link href="#" className="page-link" aria-label="Next"></Link>
                    <span aria-hidden="true">
                      <img src={ require('../../img/next.png') } alt="next" />
                      <span className="lnr lnr-chevron-right"></span>
                    </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
{/*
          !!!!! Searchbar commented out until we need it !!!!!
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              <aside className="single_sidebar_widget search_widget">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search Posts">
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

export default InSchoolForum;
