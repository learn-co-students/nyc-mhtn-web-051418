import React, { Component } from 'react';
import List from './List';
import Carousel from './Carousel';
import Ratings from './Ratings';

class Card extends Component {
	render() {
		const ingredientsArray = this.props.ingredients.split(', ');
		// Fake list of allergens
		const allergensArray = ingredientsArray.slice(ingredientsArray.length / 2);

		return (
			<div className="card">
				<h1>{this.props.title}</h1>
				<List listOfThings={ingredientsArray} />
				<Carousel src={this.props.thumbnail} alt={this.props.title} />
				<Ratings />
				<List listOfThings={allergensArray} />
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default Card;
