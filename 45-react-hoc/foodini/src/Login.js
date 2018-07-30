import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }
  
  // componentDidMount() {
  //   console.log(localStorage.getItem('token'));
  // }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        // lift state to the top and keep token there
        // refresh == token gone
        // magical place in browser <=====
        // cookie!
        // global variable outside of react == var
        localStorage.setItem('token', json.token);
        this.props.setUser(json.id, json.username);
        this.props.history.push('/recipes');
      })

  }

  render() {
    console.log('i rendered');
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login;
