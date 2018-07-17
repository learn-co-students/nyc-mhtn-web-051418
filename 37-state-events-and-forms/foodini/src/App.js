import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Button from './Button';
import ingredients from './ingredients';

/*
	App
		Card
			List
			Carousel
			Ratings
			List
		Button
		Button
*/
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ingredients,
			value: ""
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
		let ingredients = this.state.ingredients.slice();
		ingredients.pop();

		this.setState({
			ingredients
		})
	}

	render() {
		return (
			<div className="foodini-container">
				<div className="card-container">
					{this.renderCards()}
				</div>

				<div className="button-container">
					<Button name="Like" handleClick={this.handleClick} />
					<Button name="Dislike"  handleClick={this.handleClick} />
				</div>
			</div>
		);
	}
}

export default App;
