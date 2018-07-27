Babel, Webpack, ES6, and Friends
================================

## Goals

- explain a bit of history
- walkthrough of tools you should be aware of
- demonstration of the why of these tools matter

## Overview

- npm/yarn
  - package managers
  - `package.json`
- [webpack](https://webpack.js.org/)
  - module bundler & task runner
  - modules / plugins
    - compilers
    - minification
    - etc.
- [babel](https://babeljs.io/)
  - compiler / transpiler
  - ES6 / JSX
- create-react-app

### Demonstration Tools

- [Chromium (old builds)](https://www.chromium.org/getting-involved/download-chromium)
- [Network Link Conditioner](http://nshipster.com/network-link-conditioner/)
  - [Ping / Latency](https://wondernetwork.com/pings)
- [wget](https://apple.stackexchange.com/questions/100570/getting-files-all-at-once-from-a-web-page-using-curl) + [time](https://unix.stackexchange.com/questions/10745/how-do-i-time-a-specific-command)
- [How do I get the size of a directory on the command line?](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line)

```sh
# Downloading
time wget -r -np -p -k -H -e robots=off <url>
# Size of downloaded files
du -sh $pwd
```

### Starter Code

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>Demo</title>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<body>
  <div id='root'></div>
</body>
<script type="text/babel">
  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello World!</h1>
        </div>
      )
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
</script>
</html>
```

## Lecture Notes

### The Old Internet (aka: Why we need Babel)

- Compare: Chrome today vs Chromium of old.
- Does any of this syntax work?

```javascript
class Feature { speak() { console.log('hello world') } } // no
let x = 1                                                // no
const y = 0                                              // yes???
```

Babel is what will let us compile/transpile our JavaScript into... JavaScript. [Behold!](https://babeljs.io/repl/)

```javascript
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Feature = function () {
  function Feature() {
    _classCallCheck(this, Feature);
  }

  _createClass(Feature, [{
    key: 'speak',
    value: function speak() {
      console.log('hello world');
    }
  }]);

  return Feature;
}();

var x = 1;
var y = 0;

// Then demonstrate with:
var a = new Feature();
a.speak();
```

### The Old Internet (aka: Why developing pre-package.json sucked)

We saw `Hello World` work in React using Babel. Now what if we wanted to add other dependencies like [`moment.js`](https://momentjs.com/)?

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>Demo</title>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>
<body>
  <div id='root'></div>
</body>
<script type="text/babel">
  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
        </div>
      )
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
</script>
</html>
```

That would be another script with its own version, and its own min/non-min version. More stuff to keep track of. Problems:
- typos
- these are globals / managing this on all your html files
- tracking dependencies
- relying on CDNs (what if one goes down?)
- local development offline, need local copies
- etc.

Solution? npm/yarn (old: [bower](https://bower.io/)) to the rescue:
- package managers that will keep track of your dependencies for you
- can be deployed using something like Webpack
- Webpack will bundle these things into a single file to be deployed + doing other nice things like:
  - minification
  - tree shaking
  - etc. (look at their [plugins page](https://webpack.js.org/plugins/) to see other fun stuff)

### Webpack: Why bundling? Minification too.

Webpack is useful, but you'll never need to memorize configuring it unless you're going into devops. Now before we configure Webpack, I want to first convince you that one of Webpack's (et al) features, bundling, is crucial.

What is bundling?
- as name implies, combining resources into a single file
- can be applied to JavaScript, CSS, images (spritesheets)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Demo</title>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>
  <script type="text/javascript" src="./dist/dummy.js"></script>
  <script type="text/javascript" src="./dist/dummy1.js"></script>
  <script type="text/javascript" src="./dist/dummy2.js"></script>
  <script type="text/javascript" src="./dist/dummy3.js"></script>
  <script type="text/javascript" src="./dist/dummy4.js"></script>
  <script type="text/javascript" src="./dist/dummy5.js"></script>
  <script type="text/javascript" src="./dist/dummy6.js"></script>
  <script type="text/javascript" src="./dist/dummy7.js"></script>
  <script type="text/javascript" src="./dist/dummy8.js"></script>
  <script type="text/javascript" src="./dist/dummy9.js"></script>
  <script type="text/javascript" src="./dist/dummy10.js"></script>
  <script type="text/javascript" src="./dist/dummy11.js"></script>
  <script type="text/javascript" src="./dist/dummy12.js"></script>
<body>
  <div id='root'></div>
</body>
<script type="text/babel">
  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
        </div>
      )
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
</script>
</html>
```

Deploy the **Network Link Conditioner**!!!
- We'll slow down our network latency now to demonstrate.

```sh
# run some local webserver:
# (using port 3000 as that's the same as create-react-app)
python -m SimpleHTTPServer 3000

# time => times the command you're about to run
# wget => like curl, downloads website and assets using command line
#         -r == recursive, get all the files
#         -np == no parent, don't go upwards
# compare one dummy script to many
# However, note that localhost won't go over network!!
time wget -r -np http://localhost:3000

# tunnel our traffic through ssh so I can make it be served over the internet
time wget -r -np https://demo.lovescomputers.com

# Compare times:
## High Latency
FINISHED --2018-05-21 10:25:24--
Total wall clock time: 5.9s
Downloaded: 11 files, 1.0K in 0s (44.6 MB/s)

real	0m5.908s
user	0m0.024s
sys	0m0.020s
## Low Latency
FINISHED --2018-05-21 10:25:38--
Total wall clock time: 1.3s
Downloaded: 11 files, 1.0K in 0s (25.2 MB/s)

real	0m1.304s
user	0m0.024s
sys	0m0.016s
```

Bundling makes things fast!

You know what else makes things fast? **Minification**.
- compare the development vs production versions of React.

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

```sh
# now we can retest on different bandwidths with:
time wget -r -np https://demo.lovescomputers.com
```

We can also see what minifiers do by looking at various websites:
- [UglifyJS](https://github.com/mishoo/UglifyJS) is the one I know.
- [UglifyJS Online](https://skalman.github.io/UglifyJS-online/)

```javascript
class Verbose {
  speak() {
    console.log('hello world');
  }
}

// Results in:
class Verbose{speak(){console.log("hello world")}}
```

### Webpack Configuration

Let's put together what we now know about:
- npm/yarn
- babel
- webpack

```sh
mkdir react-project
cd react-project

# Setup a new project with:
# (all the docs have npm so that's why I'm using it)
npm init
# yarn init

# Now let's look at package.json
less package.json

# Note that normally you'd pick specific versions:
npm install react react-dom --save
# yarn add react react-dom

# Latest yarn has a yarn.lock
# Latest npm has a package-lock.json
# Let's also look at the node_modules folder:
ls -la node_modules

# At this stage, we have a way of creating and rendering React components.
# However, we don’t have any method of sending these components to the browser before it can show them.
# That is where a web server comes in.
npm install -D webpack webpack-cli
# aka: --save-dev
# yarn add -D webpack webpack-cli

# About Production vs Development dependencies.
less package.json

# Now we can actually make a React app where we don't need to include the scripts manually in our HTML file:
# Note: We picked index.js as our entry point.
touch index.html

# src is the default folder for entry (I won't change this)
mkdir src
touch src/index.js

# edit our files:
vim index.html
vim index.js
```

**index.html**

- The _root_ `div` is our React app's entry point.
- `bundle.js` is going to be our eventual compiled React project.
- `dist` is the default folder (I won't change this for demo)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Demo</title>
<body>
  <div id='root'></div>
</body>
<script type="text/javascript" src="./dist/bundle.js"></script>
</html>
```

**index.js**

- Simple Hello World app.
- We have other files in `src` (copy them over).

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Bundling and running our project.

```sh
# babel-loader => let's us use babel in webpack
# babel-core => what makes babel run
# babel-preset-env => for some newer ES6 syntax (optional)
# babel-preset-react => the preset for all the babel transformations we need for React
npm install -D babel-loader babel-core babel-preset-env babel-preset-react
# preset vs plugin: preset is a collection of babel plugins

# edit our babel config for:
#   entry, output, loaders
#   we have no plugins to use for now, so leaving that out
touch webpack.config.js
vim webpack.config.js

# edit our babel config to use our presets
touch .babelrc
vim .babelrc

# Now we can run webpack and bundle everything!
./node_modules/webpack/bin/webpack.js

# That's annoying though so let's use an npm/yarn script to shorten it:
npm build
# yarn build

# Finally, we can run this:
python -m SimpleHTTPServer 3000

# But let's say we want that new syntax for class field decorations:
npm install --save-dev babel-plugin-transform-class-properties

# more editing, now with a plugin:
vim .babelrc

# Finally, let's use the webpack-dev-server:
npm install -D webpack-dev-server
# yarn add -D webpack-dev-server

# Our npm/yarn script:
#   webpack-dev-server --hot --inline
npm start
# yarn start

# (given extra time)
# Example of adding dependency to use:
npm install moment --save
vim ./src/App.js
```

```javascript
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};

module.exports = config;
```

**.babelrc**

```json
{
  "presets": ["env", "react"],
  "plugins": ["transform-class-properties"]
}
```

**package.json**

```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "hello": "echo 'Hello World!'",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^16.3.2",
    "react-dom": "^16.3.2"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "webpack": "^4.8.3",
    "webpack-cli": "^2.1.3"
  }
}
```

### create-react-app

This does all of that and more for us!
- quick look over `react-scripts` and what their webpack config looks like

## Extra Reading

- [ECMAscript](https://en.wikipedia.org/wiki/ECMAScript)
  - [proposals](https://github.com/tc39/proposals)
- [Modern JavaScript Explained For Dinosaurs](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)
