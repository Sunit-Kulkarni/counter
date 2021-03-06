import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import axios from 'axios';

class App extends Component {

  constructor() {
      super();
      this.state = {};
  }

  // componentWillMount() {
  //     axios.get('/')
  //     .then(({ data }) => {
  //         this.setState(data);
  //     })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
      </div>
    );
  }
}

export default App;
