import React from 'react';
import '../css/style.css';

// Header message = { this.state.info }

const InSchoolForum = (props) => {
  return (
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div class="container">
					<div class="banner_content text-center">
						<h2>POST DETAILS</h2>
					</div>
				</div>
      </div>
    </section>
    <section class="blog_area single-post-area p_120">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 posts-list">
            <div class="single-post row">
              <div class="col-lg-12">
              </div>
              <div class="col-lg-3  col-md-3">
                <div class="blog_info text-right">
                  <ul class="blog_meta list">
                    <div class="thumb">
                      <img src="img/blog/c5.jpg"/>
                    </div>
                    <li><a href="#">Bob<i class="lnr lnr-user"></i></a></li>
                    <li><a href="#">3 May, 2019<i class="lnr lnr-calendar-full"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-9 col-md-9 blog_details">
                <h2>Amet consectetur adipiscing</h2>
                <p class="excert">
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
            <div class="navigation-area">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                  <div class="thumb">
                    <a href="#"><img class="img-fluid" src="img/blog/prev.jpg"/></a>
                  </div>
                  <div class="arrow">
                    <a href="#"><span class="lnr text-white lnr-arrow-left"></span></a>
                  </div>
                  <div class="detials">
                    <p>Prev Post</p>
                    <a href="#"><h4>Space The Final Frontier</h4></a>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                  <div class="detials">
                    <p>Next Post</p>
                    <a href="#"><h4>Telescopes 101</h4></a>
                  </div>
                  <div class="arrow">
                    <a href="#"><span class="lnr text-white lnr-arrow-right"></span></a>
                  </div>
                  <div class="thumb">
                    <a href="#"><img class="img-fluid" src="img/blog/next.jpg"/></a>
                  </div>										
                </div>									
              </div>
            </div>
            <div class="comments-area">
              <h4>05 Comments</h4>
              <div class="comment-list">
                <div class="single-comment justify-content-between d-flex">
                  <div class="user justify-content-between d-flex">
                    <div class="thumb">
                      <img src="img/blog/c1.jpg"/>
                    </div>
                    <div class="desc">
                      <h5><a href="#">Emilly</a></h5>
                      <p class="date">3 May, 2019 at 3:12 pm </p>
                      <p class="comment">
                        Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div class="reply-btn">
                    <a href="" class="btn-reply text-uppercase">reply</a> 
                  </div>
                </div>
              </div>	
              <div class="comment-list left-padding">
                <div class="single-comment justify-content-between d-flex">
                  <div class="user justify-content-between d-flex">
                    <div class="thumb">
                      <img src="img/blog/c2.jpg"/>
                    </div>
                    <div class="desc">
                      <h5><a href="#">Henry</a></h5>
                      <p class="date">3 May, 2019 at 3:12 pm </p>
                      <p class="comment">
                        Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div class="reply-btn">
                    <a href="" class="btn-reply text-uppercase">reply</a> 
                  </div>
                </div>
              </div>	
              <div class="comment-list left-padding">
                <div class="single-comment justify-content-between d-flex">
                  <div class="user justify-content-between d-flex">
                    <div class="thumb">
                      <img src="img/blog/c3.jpg"/>
                    </div>
                    <div class="desc">
                      <h5><a href="#">Annie</a></h5>
                      <p class="date">3 May, 2019 at 3:12 pm </p>
                      <p class="comment">
                          Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                  <div class="reply-btn">
                    <a href="" class="btn-reply text-uppercase">reply</a> 
                  </div>
                </div>
              </div>	
              <div class="comment-list">
                <div class="single-comment justify-content-between d-flex">
                  <div class="user justify-content-between d-flex">
                    <div class="thumb">
                      <img src="img/blog/c4.jpg"/>
                    </div>
                    <div class="desc">
                      <h5><a href="#">Maria</a></h5>
                      <p class="date">3 May, 2019 at 3:12 pm </p>
                      <p class="comment">
                          Never say goodbye till the end comes!
                      </p>
                    </div>
                  </div>
                <div class="reply-btn">
                  <a href="" class="btn-reply text-uppercase">reply</a> 
                </div>
              </div>
            </div>	
            <div class="comment-list">
              <div class="single-comment justify-content-between d-flex">
                <div class="user justify-content-between d-flex">
                  <div class="thumb">
                    <img src="img/blog/c5.jpg"/>
                  </div>
                  <div class="desc">
                    <h5><a href="#">Bob</a></h5>
                    <p class="date">3 May, 2019 at 3:12 pm </p>
                    <p class="comment">
                        Never say goodbye till the end comes!
                    </p>
                  </div>
                </div>
                <div class="reply-btn">
                  <a href="" class="btn-reply text-uppercase">reply</a> 
                </div>
              </div>
            </div>	                                             				
          </div>
          <div class="comment-form">
            <h4>Leave a Reply</h4>
            <form>
              <div class="form-group form-inline">
                <div class="form-group col-lg-6 col-md-6 name">
                  <input type="text" class="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'">
                  </div>
                  <div class="form-group col-lg-6 col-md-6 email">
                    <input type="email" class="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'">
                  </div>										
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'">
                </div>
                <div class="form-group">
                    <textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required=""></textarea>
                </div>
                <a href="#" class="primary-btn submit_btn">Post Comment</a>	
              </form>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog_right_sidebar">
              <aside class="single_sidebar_widget search_widget">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search Posts">
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

export default InSchoolForum;