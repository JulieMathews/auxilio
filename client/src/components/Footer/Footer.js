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
                  <h3>Sonja Rasmussen</h3>
                </div>
                <a href="https://www.linkedin.com/in/sonja-rasmussen-15bb2814/"><p>LinkedIn</p></a>
                <a href="https://github.com/SonjaRasmussen"><p>GitHub</p></a>
                <a href="https://sonjarasmussen.github.io/"><p>Portfolio</p></a>
              </aside>
            </div>
            <div className="col-lg-4 col-sm-3">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h3>Ben Vaagen</h3>
                </div>
                <a href="https://www.linkedin.com/in/benjamin-vaagen-7b0178174/"><p>LinkedIn</p></a>
                <a href="https://github.com/benvaagen"><p>GitHub</p></a>
                <a href="https://benvaagen.github.io/officialPortfolio/"><p>Portfolio</p></a>
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