import React, { Component } from 'react';
import List from './List';
import Carousel from './Carousel';
import Ratings from './Ratings';
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

class Card extends Component {
	constructor(props) {
		super(props);

		console.log('%c ingredients', "color: red", ingredients);
	}

	multiply(x /* this is x */, y /* this is y */) {

	}

	render() {
		const ingredientsArray = this.props.ingredients.split(', ');
		console.log('ingredientsArray', ingredientsArray);
		const allergensArray = ingredientsArray.slice(ingredientsArray.length/2);

		/*
			React.createElement('header', null, React.createElement(
				'div', null...
			))
		*/
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