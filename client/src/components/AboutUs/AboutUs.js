import React from 'react';
import './AboutUs.css';


const AboutUs = (props) => {
  return (
  <div>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
        <div className="container">
          <div className="banner_content text-center">
            <section className="feature_area p_120">
              <div className="container">
                <div className="main_title">
                  <h2>What Make Us Unique</h2>
                  <p>Auxilio is an online community to support parents and caregivers on a daily basis. Auxlilio will build community by publishing articles written by therapists who specialize in specific learning disabilities, create an active user-engaged community forum and offer real time private messaging with fellow community members. </p>
                </div>

                <div className="row feature_inner">
                  <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                      <h6>Expert Therapists</h6>
                      <p>Ask questions and receive input for everyday scenarios.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                      <h6>Professional Services</h6>
                      <p>Read articles and connect for one-on-one communication.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                      <h6>Love & Support</h6>
                      <p>Find other guardians with relatable circumstances.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <section className="about_area p_120">
      <div className="container">
        <div className="about_inner row">
          <div className="col-lg-6">
            <div className="about_left_text">
              <h6>Brand new app for</h6>
              <h3>The Support You Need</h3>
              <h5>We are here to listen and deliver exellence!</h5>
              <p>Consider this a safe-place to ask questions, get advice, and meet new people with similar circumstances.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={ require('../../img/about-1.jpg') } alt="AboutUs" />
          </div>
        </div>
      </div>
    </section>

    <section className="projects_area">
      <div className="row m0">
        <div className="projects_item wd_18">
          <img src={ require('../../img/aboutUs/sonja-1.png') } alt="Sonja" />
          <div className="hover">
            <h4>Sonja</h4>
            <p>Mother of two active children, helping change the world and solve every day problems.</p>
          </div>
        </div>
        <div className="projects_item wd_18">
          <img src={ require('../../img/aboutUs/ben-1.png') } alt="Ben" />
          <div className="hover">
            <h4>Ben</h4>
            <p>A debonair ambassador for the growing community with aspirations of fatherhood.</p>
          </div>
        </div>
        <div className="projects_item wd_18">
          <img src={ require('../../img/aboutUs/julie-1.png') } alt="Julie" />
          <div className="hover">
            <h4>Julie</h4>
            <p>Mother of four, all of which had speech delay and one on the Autism Spectrum.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
  )
};

export default AboutUs;
