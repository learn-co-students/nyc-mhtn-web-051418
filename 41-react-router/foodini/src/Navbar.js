import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
	render(){
		return (
			<div className="navbar">
				<Link to="/recipes/new">Make a New Recipe!</Link>
				<Link to="/recipes"> Choose Recipes!</Link>
			</div>
		)
	}
}

export default Navbar