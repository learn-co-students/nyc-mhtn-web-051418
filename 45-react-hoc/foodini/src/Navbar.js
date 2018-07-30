import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Adapter from './Adapter';

class Navbar extends React.Component {
  logout = () => {
    Adapter.deleteToken();
    // push login
    // we change state
    this.props.logout();
  }

  render(){
    return (
      <div className="navbar">
        {
          !!Adapter.getToken() ?
            <Fragment>
              <Link to="/recipes/new">Make a New Recipe!</Link>
              <Link to="/recipes"> Choose Recipes!</Link>
              <button onClick={this.logout}>Logout!</button>
            </Fragment>
          :
            <Link to="/login">Login!</Link>
        }

      </div>
    )
  }
}

export default Navbar
