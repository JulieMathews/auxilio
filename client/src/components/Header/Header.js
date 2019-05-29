import React from 'react';
import './Header.css';

// Header message = { this.state.info }

const Header = (props) => {

  function homeBanner() {
    console.log('header:', props);
    if(!props.landing) return null;
    return (
      <div>
      <section className="home_banner_area">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-lg-8">
                <div className="banner_content">
                  <h2>Auxilio</h2>
                  <p>Parents, teachers and therapists giving professional advice and community support for ADHD and Autism.</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="home_right_box">
                  <div className="home_item">
                    <span className="nav-item active nav-link"><img src={ require('../../img/familyapp/family.png')} alt="School Related"/></span>
                  </div>
                  <div className="home_item">
                    <p>Community Forum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }

  function banner() {
    if(props.landing) return null;
    return (
      <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
        <div className="container">
          <div className="banner_content text-center">
            <h2>{props.headline}</h2>
          </div>
        </div>
      </div>
    </section>
    )
  }

  return (
    <React.Fragment>
      {homeBanner()}
      {banner()}
    </React.Fragment>

  )
};

export default Header;
