import React from 'react';
import './Landing.css';


const Landing = (props) => {
  return (
    <div>
    <div class="row">
      <div class="col-lg-8">
        <div class="banner_content">
          <h2>Family App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a class="banner_btn" href="/login">Sign In</a>
        </div>
      </div>
          
      <div class="col-lg-4">
        <div class="home_right_box">
          <div class="home_item">
            <a><img src="../img/familyapp/family.png" alt="School Related"></img></a>
          </div>
          <div class="home_item">
            <p>Community Forum</p>
          </div>          
        </div>
      </div>
    </div>

    <section class="popular_area p_120">
      <div class="container">
        <div class="main_title">
          <h2>Most Recent Forums</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
        <div class="popular_inner row">
          <div class="col-lg-4">
            <div class="popular_item">
              <a href="communityForum.html"><img class="img-fluid" src="img/family/family001.jpeg" /></a>
              <h4>Community</h4>
              <p>Risus viverra adipiscing at in tellus integer feugiat scelerisque varius.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="popular_item">
              <a href="inschoolForum.html"><img class="img-fluid" src="img/family/kids001.jpeg" alt="School" /></a>
              <h4>In-School</h4>
              <p>Risus viverra adipiscing at in tellus integer feugiat scelerisque varius.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="popular_item">
                <a href="specialistForum.html"><img class="img-fluid" src="img/family/talk001.jpeg" alt="Therapist" /></a>
              <h4>Specialist</h4>
              <p>Risus viverra adipiscing at in tellus integer feugiat scelerisque varius.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
};

export default Landing;