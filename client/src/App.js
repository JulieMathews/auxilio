import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route } from 'react-router-dom'
// components
import Signup from './components/signup/sign-up'
import LoginForm from './components/login/login-form'
//import Navbar from './components/navbar'
import Home from './components/home'
import InstantMessenger from './components/chat/chat'

// pages
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';

  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
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
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
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
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />

        <Route
          path="/messenger"
          render={() =>
            <InstantMessenger/>}
        />  
   <Header />
  
      </div>
    );
  }
}

export default App;
