import React, { Component } from 'react';
import Results from './Components/Results'
import Keypad from './Components/Keypad'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Calculator</h1>
      <Results />

      </div>
    );
  }
}

export default App;
