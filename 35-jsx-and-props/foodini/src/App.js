import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Button from './Button';
import ingredients from './ingredients';

class App extends Component {
	renderCards() {
		return ingredients.map(i => (
			<Card 
				title={i.title}
				ingredients={i.ingredients}
				thumbnail={i.thumbnail}
				description={i.href}
			/>
		));
	}

	render() {
		return (
			// ingredients[0].title
			// ingredients[0].ingredients
			// ingredients[0].thumbnail
			// ingredients[0].href
			<div className="foodini-container">
				{this.renderCards()}
				
				<Button />
				<Button />
			</div>
		);
	}
}

export default App;
