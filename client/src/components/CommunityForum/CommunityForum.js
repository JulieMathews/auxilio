import React from 'react';
import '../css/style.css';

// Header message = { this.state.info }

const CommunityForum = (props) => {
  return (

    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
        <div class="container">
          <div class="banner_content text-center">
            <h2>Community Forum</h2>
          </div>
        </div>
      </div>
    </section>  
 
    <section class="blog_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog_left_sidebar">
              {{#each posts}}
              <article class="row blog_item">
                <div class="col-md-3">
                  <div class="blog_info text-right">
                    <div class="post_tag">
                      <a href="#">Family</a>
                    </div>
                    <ul class="blog_meta list">
                      <li><a href="#">Jane Doe<i class="lnr lnr-user"></i></a></li>
                      <li><a href="#">3 May, 2019<i class="lnr lnr-calendar-full"></i></a></li>
                      <li><a href="#">184 Views<i class="lnr lnr-eye"></i></a></li>
                      <li><a href="#">06 Comments<i class="lnr lnr-bubble"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="blog_post">
                    <img src="img/family/fighting001.jpeg"/>
                    <div class="blog_details">
                      <a href="single-blog.html"><h2>Trouble with siblings.</h2></a>
                      <p>{{message}}</p>
                      <a href="single-blog.html" class="blog_btn">View More</a>
                    </div>
                  </div>
                </div>
              </article>

              {{/each}}

              <article class="row blog_item">
                <div class="col-md-3">
                  <div class="blog_info text-right">
                    <ul class="blog_meta list">
                      <div class="thumb">
                        <img src="img/blog/c2.jpg" alt=""/>
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
                      <a href="singlePost.html"><h2>Issues at the playground</h2></a>
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
                        <img src="img/blog/c3.jpg"/>
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
                        <img src="img/blog/c1.jpg"/>
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
  )
};

export default CommunityForum;