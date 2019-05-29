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
                  <p>We are one of a kind for building up a community for parents, experts, and specialists to come together for support and advice. </p>
                </div>

                <div className="row feature_inner">
                  <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                      <h6><i className="lnr lnr-user"></i> Expert Therapists</h6>
                      <p>Talk with an expert. Or be the expert to give input.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                      <h6><i className="lnr lnr-license"></i> Professional Services</h6>
                      <p>Read articles by our professionals. Contact a professional for one-on-one communication.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                      <h6><i className="lnr lnr-phone"></i> Great Support</h6>
                      <p>Talk with other parents and guardians to build up your village.</p>
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
              <h5>We are here to listen to you and deliver exellence</h5>
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
          <div className="hover" style={{opacity:.9}}>
            <p>Mother of two active children, whom wants to help change the world one family at a time.</p>
          </div>
        </div>
        <div className="projects_item wd_18">
          <img src={ require('../../img/aboutUs/ben-1.png') } alt="Ben" />
          <div className="hover" style={{opacity:.9}}>
            <p>A debonair ambassador for the growing community.</p>
          </div>
        </div>
        <div className="projects_item wd_18">
          <img src={ require('../../img/aboutUs/julie-1.png') } alt="Julie" />
          <div className="hover" style={{opacity:.9}}>
            <p>Mother of four, all of which had speech delay and one on the Autism Spectrum.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
  )
};

export default AboutUs;
