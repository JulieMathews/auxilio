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
import UserList from './components/chat/UserList';

//import SpecialistForum from './compoenents/SpecialistForum';
//import SpecialistContact from './components/SpecialistContact';
//import SpecialistPost from './components/SpecialistPost';

  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      chatRoomName: null,
    }

    this.getUser = this.getUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      if (this.state.user) {
        console.log("Creating Scaledrone object:");
        this.drone = new window.Scaledrone("czBgrob2FXXXRdrO", {
          data: {
            uuid: this.state.user.uuid,
            username: this.state.user.username,
            email: this.state.user.email,
          }
        });
        this.getAllUsers();
      } else {
        this.setState({ allUsers: [] });
      }
    }
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          user: response.data,
        })
      } else {
        console.log('Get user: no user');
        this.setState({
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

  closeChat = () => {
    console.log("Closing chat...");
    this.setState({ chatRoom: null });
  }

  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.user !== null} />
        {/* greet user if logged in: */}
        {this.state.user &&
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
        {this.state.user &&
          <React.Fragment>
          <Route path="/messenger" render={() =>
            <InstantMessenger currentUser={this.state.user} />}
          />
          <Route exact path="/communityforum" component={CommunityForum} />
          <Route path="/articles" render={() =>
            <Articles/> }
          />
          <Route exact path="/article/:id" />
          <UserList currentUser={this.state.user}
            allUsers={this.state.allUsers}
            onChangeRoom={this.onChangeRoom} />
          {this.state.chatRoom &&
            <InstantMessenger
              currentUser={this.state.user}
              drone={this.drone}
              closeChat={this.closeChat}
              roomName={this.state.chatRoom.name}
              roomDescription={this.state.chatRoom.description} />
          }
          </React.Fragment>
        }
        <Footer/>
      </div>
    );
  }
  onChangeRoom = (roomName, description) => {
    this.setState({ chatRoom: { name: roomName, description: description } });
  }
}
export default App;
