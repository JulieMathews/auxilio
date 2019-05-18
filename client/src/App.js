import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <h1>Hello World</h1>
      </div>
    );
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
