Intro to React
==============

## SWBAT

- [x] Use historical context and the Mod 3 experience to explain why React and declarative programming is special
- [x] Setup a new React app and play around with building things
- [x] Understand how create-react-app works and what it offers a developer
- [-] Learn how to identify components on a page, visually
- [x] Build custom components and see initial JSX
- [x] See what a React Component actually is (an object, made by a class)
- [ ] Build modular & reusable components
- [ ] See how props are to components as arguments are to functions

## Outline

### Vanilla JS

- Pros/Cons?
- What will React help with?

- Class suggestions:
  - [x] Big blocks of `HTML`
  - [ ] Closures - interesting but tough
  - [ ] debugger <= this was a pro
  - [ ] really hard to save API keys in the frontend
  - [ ] this this this really a lot of this
  - [x] disorganized
  - [x] lots of globals
  - [x] break it down into a million functions => components

### History / Context of React

- Why React?
  - React is for building UIs!
- react vs react-dom

### Project Setup

**Objective:** We're building a tinder for recipes called `foodini`!

[Try React](https://reactjs.org/docs/try-react.html)
- create-react-app
  ```sh
  npm install -g create-react-app
  create-react-app foodini

  cd foodini
  npm start
  ```

- Anatomy of a `create-react-app`:
  - `public` => folder containing files served by our web server
  - `src` => all of our React code
    - `index.js` => entry point to the React app; this has `ReactDOM.render` which puts all of our code into the DOM element we tell it to put it into (in our case, `<div id="root">`)
    - `App.js` => our root React component; all apps will have it
    - `App.css`, `index.css` => css files
    - `App.test.js` => test file
    - `registerServiceWorker.js` => helper file for cache stuff
  - `.gitignore` => git ignore
  - `package.json` => your "Gemfile"
  - `README.md` => readme file
- Benefits to using it:
  - Hot Reloading
  - Easily add dependencies
  - Work all in JavaScript

### Component Hello World

The anatomy of a React app:
- `document.getElementById('root')`
- That's where we everything is rendered.

Simplest Component:

```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default App;
```

- `React` import is needed in any file where you use JSX.
- `render()` method is required in a Component as that's what will be called to figure out what to eventually render in the browser.

### JSX

- It's **syntatic sugar** for `React.createElement`.
  - Note that JSX won't actually work in browser console!!
  - It's translated by Babel into regular JavaScript.
- rules, differences with HTML
  - Upper case = Component
  - Lower case = HTML to render to DOM
  - Attributes = camelCase
  - Attributes = serve double duty as `props`
  - Stuff in-between open & Close Tags = `children`
- HTML vs Components
  - Lower vs Upper case
  - What gets rendered? Let's inspect it!
- expressions = `{ }`
  - Expressions Evaluate
  - [Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions): An expression is any valid unit of code that resolves to a value.

## Extras

Commenting in JSX
- `{/* commented */}`
