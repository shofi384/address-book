import React, { Component } from 'react';
import logo from './icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p><img src={logo} className="App-logo" alt="logo" />Create your personalized address book here!</p>
          <a
            className="App-link"
            href=""
            target=""
            rel="noopener noreferrer"
          >Add Address</a>
        </header>
      </div>
    );
  }
}

export default App;
