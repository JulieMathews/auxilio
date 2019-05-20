import React from 'react';
import '../css/style.css';

// Header message = { this.state.info }

const Header = (props) => {
  return (
    <section class="home_banner_area">
      <div class="banner_inner">
        <div class="container">
          <div class="row">
            
          {/*  <div> {this.prop.message}</div> */}
                
            <div class="col-lg-4">
              <div class="home_right_box">
                <div class="home_item">
                  <a><img src="../img/familyapp/family.png"></img></a>
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
        </div>
      </div>
    </section>
  )
};

export default Header;