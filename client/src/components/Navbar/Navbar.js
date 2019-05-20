import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../../img/logo.png';
import Axios from 'axios';



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


render() {

  const loggedIn = this.props.loggedIn;
  console.log('navbar render, props: ')
  console.log(this.props);

return(
<div> 

<header className="header_area">
<div className="main_menu" id="mainNav">
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
    
      <div className="navbar-brand logo_h"><img src={logo} alt=""/><img src={logo} alt="logo"/></div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      
    {loggedIn ? (
     

          <section className="collapse navbar-collapse offset" id="navbarSupportedContent">
          <ul className="nav navbar-nav menu_nav ml-auto"> 

          <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
          <li><span className="nav-item active"><a className="nav-link">Logout</a></span></li></Link>
          
          <Link to="/messenger" className="btn btn-link text-secondary">
          <li><span className="nav-item active"><a className="nav-link">messenger</a></span></li></Link>
          
         
          
         
          <Link to="/community-forum" className="btn btn-link text-secondary">
          <li className="nav-item submenu dropdown">
                  <div className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Forums</div>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link">Community Forum</a></li>
                    {/*
                    <li className="nav-item"><a className="nav-link" href="inschoolForum.html">In School Forum</a></li>
                    <li className="nav-item"><a className="nav-link" href="specialistForum.html">Specialist Forum</a></li>
                    */}

                  </ul>
                </li> </Link>
          
          
          
          
          
          
          
          <Link to="/articles" className="btn btn-link text-secondary">
          <li><span className="nav-item active"><a className="nav-link">Articles</a></span></li></Link>

          <Link to="/about" className="btn btn-link text-secondary">
          <li><span className="nav-item active"><a className="nav-link">About</a></span></li></Link>

          </ul>
      </section>
) : (
     
      <section className="collapse navbar-collapse offset" id="navbarSupportedContent">
      <ul className="nav navbar-nav menu_nav ml-auto"> 
      
      <Link to="/" className="btn btn-link text-secondary">
      <li><span className="nav-item active"><a className="nav-link">Home</a></span></li></Link>
      
      <Link to="/login" className="btn btn-link text-secondary">
      <li><span className="nav-item active"><a className="nav-link">Login</a></span></li></Link>
      
      <Link to="/signup" className="btn btn-link text-secondary">
      <li><span className="nav-item active"><a className="nav-link">Signup</a></span></li></Link>
      </ul>
      </section>
      )}
  
      </div> 
  </nav>
</div>

</header>

</div>
    );
  }
};  

export default Navbar