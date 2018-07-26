import React, { Component } from 'react';
import SnackList from './SnackList';

class Snacks extends Component {
  state = {
    snacks: [],
  }

  componentDidMount() {
    this.getSnacks();
  }

  getSnacks = () => {
    fetch(
      `http://localhost:3000/snacks/`,
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
    .then(res => res.json())
    .then(json => {
      this.setState({
        snacks: json,
      });
    });
  }

  render() {
    return (
      <div className="snacks">
        <h2>Snacks</h2>
        <SnackList snacks={this.state.snacks} />
      </div>
    )
  }
}

export default Snacks;
