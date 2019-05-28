import React from 'react';
import '../css/style.css';

// Header message = { this.state.info }

const SpecialistContact = (props) => {
  return (
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
        <div className="container">
          <div className="banner_content text-center">
            <h2>CONTACT A SPECIALIST</h2>
          </div>
        </div>
      </div>
    </section>
    <section className="contact_area p_120">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name">
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address">
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject">
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                </div>
              </div>
              <div className="col-md-12 text-right">
                <button type="submit" value="submit" className="btn submit_btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SpecialistContact;