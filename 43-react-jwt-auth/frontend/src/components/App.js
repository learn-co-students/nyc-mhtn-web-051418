import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Welcome from './Welcome';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Snacks from './Snacks';
import MySnacks from './MySnacks';

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavBar />

          <Route exact path="/" component={Welcome} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/snacks" component={Snacks} />
          <Route exact path="/my-snacks" component={MySnacks} />
        </div>
    );
  }
}

export default App;
