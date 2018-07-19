import React from 'react'

class Navbar extends React.Component {
  render(){
    return (
      <div className="navbar">
        <button id="new" onClick={this.props.handleNavigation}>Make a New Recipe!</button>
        <button id="show" onClick={this.props.handleNavigation}>Choose Recipes!</button>
      </div>
    )
  }
}

export default Navbar