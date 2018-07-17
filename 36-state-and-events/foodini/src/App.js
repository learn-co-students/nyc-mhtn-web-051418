import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Button from './Button';
import ingredients from './ingredients';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ingredients
		}
	}

	renderCards() {
		return this.state.ingredients.map(i => (
			<Card
				title={i.title}
				ingredients={i.ingredients}
				thumbnail={i.thumbnail}
				description={i.href}
			/>
		));
	}

	handleClick = (event) => {
		// this.state.ingredients.slice(0, -1)
		// let ingredients = this.state.ingredients.slice();
		// let ingredients = [...this.state.ingredients];
		this.state.ingredients.pop();

		this.setState({
			ingredients: this.state.ingredients
		})
	}

	render() {
		return (
			// ingredients[0].title
			// ingredients[0].ingredients
			// ingredients[0].thumbnail
			// ingredients[0].href
			<div className="foodini-container">
				{this.renderCards()}

				<Button name="Like" handleClick={this.handleClick} />
				<Button name="Dislike"  handleClick={this.handleClick} />
			</div>
		);
	}
}

export default App;
