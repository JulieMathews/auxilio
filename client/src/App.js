import React, { Component } from 'react';
import '../src/css/style.css';
import axios from 'axios'
import { Route } from 'react-router-dom'
// components
import Signup from './components/signup/sign-up'
import LoginForm from './components/login/login-form'
import InstantMessenger from './components/chat/chat'
import Articles from './components/articles/articles';
import CommunityForum from "./components/CommunityForum/CommunityForum";

// pages
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';

//import SinglePost from './components/SinglePost/SinglePost';
//import SpecialistForum from './compoenents/SpecialistForum';
//import SpecialistContact from './components/SpecialistContact';
//import SpecialistPost from './components/SpecialistPost';
//import AboutUs from './components/AboutUs/AboutUs';

  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: true,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          user: response.data.user,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          user: null,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route exact path="/communityforum" component={CommunityForum} />
        <Route path="/login" render={() =>
          <LoginForm updateUser={this.updateUser} />
        }/>
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        {this.state.loggedIn && this.state.user &&
        <React.Fragment>
        <Route
          path="/messenger"
          render={() =>
            <InstantMessenger currentUser={this.state.user} />
          } />
        <Route
            path="/articles"
            render={() => <Articles/> }
          />
        <Route
            path="/community-forum"
            render={() => <CommunityForum/> }
          />
        <Route exact path="/article/:id" />
        </React.Fragment>
        }
      <Landing loggedIn={this.state.loggedIn}/>
      {/* <Footer/> */}
      </div>
    );
  }
}

export default App;

//        <Route exact path="/aboutus" component={AboutUs} />
