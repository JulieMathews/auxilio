import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div>
      <footer className="footer_area p_120">
        <div className="container">
          <div className="row footer_inner">

            <div className="col-lg-4 col-sm-4">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h3>Sonja</h3>
                </div>
                <p>LinkedIn</p>
                <p>GitHub</p>
                <p>Portfolio</p>
              </aside>
            </div>
            <div className="col-lg-4 col-sm-3">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h3>Ben</h3>
                </div>
                <p>LinkedIn</p>
                <p>GitHub</p>
                <p>Portfolio</p>
              </aside>
            </div>
            <div className="col-lg-4 col-sm-3">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h3>Julie Mathews</h3>
                </div>
                <a href="https://www.linkedin.com/in/julie-mathews/"><p>LinkedIn</p></a>
                <a href="https://github.com/JulieMathews"><p>GitHub</p></a>
                <a href="https://juliemathews.github.io/New_Port/"><p>Portfolio</p></a>
              </aside>
            </div>

          </div>
        </div>
      </footer>
      </div>
  )
};

export default Footer;