import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Button from './Button';

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
  abstract statements into functions
*/
class App extends Component {
  multiply(x, y) {
    return x * y;
  }

  somethingElse() {
    // if statements work in a method / function
    return this.multiply(2, 3) < 20 ? 
      "less than 20"
    : 
      "between 10 and 20"
  }

  /*
  React.createElement(App, null)
  React.createElement("header", { className: "App-header" })

  */
  render() {
    return (
      <div className="foodini-container">
        <Card/>
        <Button />
        <Button />
      </div>
    );
  }
}

export default App;
