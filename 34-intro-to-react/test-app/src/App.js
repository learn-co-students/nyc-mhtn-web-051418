import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Attribute naming exceptions (camelCasing) (PascalCase) (snake_case) (kebab-case)
data-attribute
aria
className => class
htmlFor => for
*/
/*
  { } => expression
  whatever is inside of it is evaluated
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {1}
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
