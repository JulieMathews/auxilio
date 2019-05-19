import React from 'react';
import '../css/style.css';

const Landing = (props) => {
  return (
    <Header />
    <div class="row">
      <div class="col-lg-8">
        <div class="banner_content">
          <h2>Family App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a class="banner_btn" href="/login">Get Started</a>
        </div>
      </div>
          
      <div class="col-lg-4">
        <div class="home_right_box">
          <div class="home_item">
            <a><img src="img/familyapp/family.png" alt="School Related"></img></a>
          </div>
          <div class="home_item">
            <p>Community Forum</p>
          </div>
          {/*
          <!--
          <div class="home_item">
            <img src="img/familyapp/book.png" alt="Most Commented On"></img>
          </div>
          <div class="home_item">
            <p>In-School Forum</p>
          </div>
          <div class="home_item">
            <img src="img/familyapp/recruitment.png" alt="Written by Therapist"></img>
          </div>
          <div class="home_item">
            <p>Specialists Articles</p>
          </div>
          -->
          */}
        </div>
      </div>
    </div>
  )
};

export default Landing;

state={info: 'landing'}

<Header message = { this.state.info }
  <div> {this.prop.message}</div>