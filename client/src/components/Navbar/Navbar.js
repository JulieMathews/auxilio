import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../../img/logo.png';
import Axios from 'axios'

class Navbar extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    Axios.post('/user/logout').then(response => {
      console.log(response.data)
      if(response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error =>{ 
      console.log("Logout error")
    })
  }

  loggedInNavbar() {
    if(!this.props.loggedIn) return null;
    return (
      <section className="collapse navbar-collapse offset" id="navbarSupportedContent">
        <ul className="nav navbar-nav menu_nav ml-auto"> 

          <Link to="/" className="btn btn-link text-secondary">
            <li><span className="nav-item active nav-link">Home</span></li>
          </Link>
              
          <Link to="/communityforum" className="btn btn-link text-secondary">
            <li className="nav-item nav-link">Community Forum</li>
          </Link>

          <Link to="/articles" className="btn btn-link text-secondary">
            <li className="nav-item nav-link">Articles</li>
          </Link>

          <Link to="/aboutus" className="btn btn-link text-secondary">
            <li><span className="nav-item active nav-link">About Us</span></li>
          </Link>

          <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
            <li><span className="nav-item active nav-link">Logout</span></li>
          </Link>
        </ul>
      </section>
    ) 
  }

  notLoggedInNavbar() {
    if(this.props.loggedIn) return null;
    return (
      <section className="collapse navbar-collapse offset" id="navbarSupportedContent">
        <ul className="nav navbar-nav menu_nav ml-auto"> 
        
          <Link to="/" className="btn btn-link text-secondary">
            <li><span className="nav-item active nav-link">Home</span></li></Link>

          <Link to="/aboutus" className="btn btn-link text-secondary">
            <li><span className="nav-item active nav-link">About Us</span></li></Link>

          <Link to="/articles" className="btn btn-link text-secondary">
            <li className="nav-item nav-link">Articles</li>
          </Link>
          
          <Link to="/login" className="btn btn-link text-secondary">
            <li><span className="nav-item active nav-link">Login</span></li>
          </Link>
          
          <Link to="/signup" className="btn btn-link text-secondary">
            <li><span className="nav-item active nav-link">Signup</span></li>
          </Link>
        </ul>
      </section>
    )
  }

  render() {
    console.log('navbar render, props: ')
    console.log(this.props);
    return(
      <div> 
        <header className="header_area">
          <div className="main_menu" id="mainNav">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <div className="navbar-brand logo_h"><img src={logo} alt=""/><img src={logo} alt="logo"/></div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>   */}
                {this.loggedInNavbar()}
                {this.notLoggedInNavbar()} 
              </div> 
          </nav>
        </div>
      </header>
    </div>
    );
  }
};  

export default Navbar