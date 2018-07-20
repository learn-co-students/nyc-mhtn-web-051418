import React, { Component } from 'react';
import './App.css';
import TextReader from './TextReader';
import InputReader from './InputReader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextReader />
        <hr />
        <InputReader />
      </div>
    );
  }
}

export default App;
