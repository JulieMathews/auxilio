import React from 'react';
import '../css/style.css';

// Header message = { this.state.info }

const SpecialistPost = (props) => {
  return (
  <div>
    <Navbar/>
    <Header/>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-center">
						<h2>POST DETAILS</h2>
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
                <div className="feature-img">
                <img src={ require('../../img/blog/c5.jpg') } alt="c5" />
                </div>									
              </div>
              <div className="col-lg-3  col-md-3">
                <div className="blog_info text-right">
                  <ul className="blog_meta list">
                    <li>Mark wiens<i className="lnr lnr-user"></i></li>
                    <li>12 Dec, 2017<i className="lnr lnr-calendar-full"></i></li>
                    <li>06 Comments<i className="lnr lnr-bubble"></i></li>
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
            <nav className="blog-pagination justify-content-center d-flex">
              <ul className="pagination">
                <li className="page-item">
                  <Link href="#" className="page-link" aria-label="Previous"></Link>
                    <span aria-hidden="true">
                      <img src={ require('../../img/prev.png') } alt="prev" />
                      <span className="lnr lnr-chevron-left"></span>
                    </span>                  
                </li>
                <li className="page-item">
                  <Link href="#" className="page-link" aria-label="Next"></Link>
                    <span aria-hidden="true">
                      <img src={ require('../../img/next.png') } alt="next" />
                      <span className="lnr lnr-chevron-right"></span>
                    </span>
                </li>
              </ul>
            </nav>
            <div className="comments-area">
              <h4>05 Comments</h4>
              <div className="comment-list">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                    <img src={ require('../../img/blog/c1.jpg') } alt="c1" />
                    </div>
                    <div className="desc">
                      <h5>Emilly Blunt</h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
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
                      <h5>Elsie Cunningham</h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
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
                      <h5>Annie Stephens</h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
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
                      <h5>Maria Luna</h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
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
                      <h5>Ina Hayes</h5>
                      <p className="date">December 4, 2017 at 3:12 pm </p>
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
            </div>
            <div className="comment-form">
              <h4>Leave a Reply</h4>
              <form>
                <div className="form-group form-inline">
                  <div className="form-group col-lg-6 col-md-6 name">
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'">
                  </div>
                  <div className="form-group col-lg-6 col-md-6 email">
                    <input type="email" className="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'">
                  </div>										
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'">
                </div>
                <div className="form-group">
                  <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required=""></textarea>
                </div>
                <Link href="#" className="primary-btn submit_btn">Post Comment</Link>	
              </form>
            </div>
          </div>
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

export default SpecialistPost;