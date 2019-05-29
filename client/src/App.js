import React, { Component } from 'react';
import '../src/css/style.css';
import axios from 'axios'
import { Route } from 'react-router-dom'
// components
import Signup from './components/signup/sign-up'
import LoginForm from './components/login/login-form'
import InstantMessenger from './components/chat/chat'
import Articles from './components/articles/articles';

// pages
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import CommunityForum from "./components/CommunityForum/CommunityForum";
import SinglePost from './components/SinglePost/SinglePost';
import UserList from './components/chat/UserList';

//import SpecialistForum from './compoenents/SpecialistForum';
//import SpecialistContact from './components/SpecialistContact';
//import SpecialistPost from './components/SpecialistPost';

  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null,
      chatRoomName: null,
    }

    this.getUser = this.getUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(userObject) {
    if (userObject.loggedIn) {
      console.log("Creating Scaledrone object:");
      console.log(userObject.user);
      this.drone = new window.Scaledrone("czBgrob2FXXXRdrO", {
        data: {
          uuid: userObject.user.uuid,
          username: userObject.user.username,
          email: userObject.user.email,
        }
      });
      this.getAllUsers()
      this.getUser()
    }
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          user: response.data,
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          user: null,
        })
      }
    })
  }

  getAllUsers() {
    // This will fetch all users for the user list
    axios.get('/api/users').then(response =>
     this.setState({
       allUsers: response.data
     })
    )
  }

  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p id="joinParty">Join the party, {this.state.user.username}!</p>
        }
        {/* Routes to different components */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route path="/login" render={() =>
          <LoginForm updateUser={this.updateUser} />}
        />
        <Route path="/signup" render={() =>
          <Signup/>}
        />
        {this.state.loggedIn &&
          <React.Fragment>
          <Route path="/messenger" render={() =>
            <InstantMessenger currentUser={this.state.username} />}
          />
          <Route exact path="/communityforum" component={CommunityForum} />
          <Route exact path="/singlepost" component={SinglePost} />
          <Route path="/articles" render={() =>
            <Articles/> }
          />
          <Route exact path="/article/:id" />
          <UserList currentUser={this.state.user} allUsers={this.state.allUsers} onChangeRoom={this.onChangeRoom} />
          {this.state.chatRoomName &&
            <InstantMessenger currentUser={this.state.user} drone={this.drone} roomName={this.state.chatRoomName} />
          }
          </React.Fragment>
        }
        <Footer/>
      </div>
    );
  }
  onChangeRoom = (roomName) => {
    this.setState({ chatRoomName: roomName });
  }
}
export default App;
