Advanced React / React Best Practices
=====================================

## SWBAT

- [x] Write functional components
- [x] Explain the differences between functional and class components
- [x] Understand when to use presentational vs container components
- [x] Write clean React code

## Objectives

- [x] Introduce functional components
- [x] Functional vs Class components
- [x] Presentational vs Container components
- Syntax often seen in React:
  - [x] Destructuring
  - [x] Spread
  - [x] Objects with the same key/value name
  - [x] constructor vs. ES7 instance variables
  - [x] map (as a way to update objects in an array of objects)
  - [ ] Object.assign (maybe, I never use this though)
  - [x] JSON.parse(JSON.stringify({ object: something }))

## Lecture Notes

To run the `lecture.txt` script line-by-line:

```sh
sh instructor-bot.sh
```

### Functional Components

Alternative syntax for components that don't need:
- `render()`
- Component Lifecycle Methods

Reasons why as mentioned in class:
- class is heavier
  - except Facebook has yet to do anything special to optimize functional components
- class indicates you have intention to do something
- functions are very limited, they indicate that they are pretty much presenting info
- functional components can be reused
- security reasons, backend, maybe server side rendering
- far less bugs

**Syntax**

```javascript
import React, { Fragment } from 'react';

// Class Component
class NowSaying extends Component {
  render() {
    return (
      <Fragment>
        <h2>{this.props.header}:</h2>
        <p>{this.props.text}</p>
      </Fragment>
    )
  }
}

// Functional Component
function NowSaying(props) {
  return (
    <Fragment>
      <h2>{props.header}:</h2>
      <p>{props.text}</p>
    </Fragment>
  )
}

// Functional Component as an arrow function
const NowSaying = (props) => {
  return (
    <Fragment>
      <h2>{props.header}:</h2>
      <p>{props.text}</p>
    </Fragment>    
  )
}

// Functional Component as an arrow function with implicit return
// We can do this shorthand ecause we aren't doing anything else in our function.
const NowSaying = (props) => (
  <Fragment>
    <h2>{props.header}:</h2>
    <p>{props.text}</p>
  </Fragment>
)

// Destructuring our props inside the functional component
// We can now do stuff in our function and act like those props are our arguments.
// We can also use conditionals to setup default values for them.
const NowSaying = (props) => {
  const { header, text } = props;

  return (
    <Fragment>
      <h2>{props.header}:</h2>
      <p>{props.text}</p>
    </Fragment>
  )
}

// Destructuring props in argument
// Also going back to implicit return because we aren't doing anything inside.
const NowSaying = ({ header, text }) => (
  <Fragment>
    <h2>{header}:</h2>
    <p>{text}</p>
  </Fragment>
)

// Destructuring props in argument with default values!
const NowSaying = ({ header = "default", text = "" }) => (
  <Fragment>
    <h2>{header}:</h2>
    <p>{text}</p>
  </Fragment>
)

export default NowSaying;
```

### Presentational vs Container Components

Everything you need to know is in this article: [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

### Cool Syntax Tricks

We already saw destructuring above. Here are a few more.

```javascript
// We can do this:
constructor(props) {
  super(props);

  this.state = {};
}
// Or we can do this:
state = {};
// This ECMAScript proposal is what let's use that
// and what lets us do arrow functions to autobind:
//     https://github.com/tc39/proposal-class-fields

// ==================================================

// Fake state object to play around with:
const lines = lecture.split(`\n`);
let state = {
  lines,
  isSpeaking: false,
  nextLine: 0,
  text: "",
}

// SPREAD!
// Can be used like slice to make copies.
const newLines = [...lines];

// But it has a few cool tricks up its sleeve
// append
const newLines = [...lines, "something else"];
// prepending
const newLines = ["something else", ...lines];

// ==================================================

// fiiiine
// making a quick array of objects with id and text
let index = 0;
let arrayOfObjects = lines.map(l => {
  return {
    id: index++,
    text: l,
  }
})

console.log(arrayOfObjects);

// Problem: We want to update one object in this array.
//          However, this is part of state so we can't mutate it.
// Solution A:
//     1. find index
//     2. manually reassign it
// Solution B: map
let newObject = { id: 2, text: "some new text" } // what we want to update to
let newArrayOfObjects = [...arrayOfObjects].map(o => {
  if (o.id === newObject.id) {
    return newObject;
  }
  return o;
})
console.log(newArrayOfObjects);

// ==================================================

// The setup:
let state = {
  lines,
  isSpeaking: false,
  nextLine: 0,
  text: "",
}

// We can spread objects too:
let newState = { ...state };
console.log(state === newState); // false

// We can add or overwrite keys like this:
let newState = { ...state, isSpeaking: true };
console.log(newState.isSpeaking) // true

// Or we can do the reverse:
let newState = { isSpeaking: true, ...state };
console.log(newState.isSpeaking) // false

// Lastly, if we want to use a variable with the same name as the key:
let isSpeaking = true;
let newState = { ...state, isSpeaking: isSpeaking };
// We can shorten it to:
let newState = { ...state, isSpeaking };
console.log(newState.isSpeaking) // true

// ==================================================

// If you are dealing with a ton of nested state and just want
// to test that your code works:
let newState = JSON.parse(JSON.stringify(state));
console.log(state === newState); // false
// This is a quick hack to make a brand new copy of an object.
// Drawbacks:
//     - Performance
```
