import React from 'react';
import '../css/style.css';
import logo from '../img/logo.png';

const Navbar = (props) => {
  return (
    <div className="header_area">
      <div className="main_menu" id="mainNav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">

            <div className="navbar-brand logo_h"><img src={logo} alt=""/><img src={logo} alt="logo"/></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li> 
                  
                <li className="nav-item submenu dropdown">
                  <div className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Forums</div>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="communityForum.html">Community Forum</a></li>
                    {/*
                    <li className="nav-item"><a className="nav-link" href="inschoolForum.html">In School Forum</a></li>
                    <li className="nav-item"><a className="nav-link" href="specialistForum.html">Specialist Forum</a></li>
                    */}
                  </ul>
                </li> 

                {/* 
                <li className="nav-item submenu dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Specialist</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="specialistArticles.html">Articles</a></li>
                    <li className="nav-item"><a className="nav-link" href="specialistContact.html">Speak With</a></li>
                  </ul>
                </li>
                */} 
                
                <li className="nav-item"><a className="nav-link" href="about-us.html">About</a></li> 

              </ul>
            </div> 
          </div>
        </nav>
      </div>
    </div>
  )
};

export default Navbar;