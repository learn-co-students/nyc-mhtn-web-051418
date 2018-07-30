import React, { Component } from 'react';
import List from './List';
import Carousel from './Carousel';
import { Link } from 'react-router-dom'

class Card extends Component {
	render() {
		const ingredientsArray = this.props.ingredients.split(', ');
		const allergensArray = ingredientsArray.slice(ingredientsArray.length / 2);

		return (
			<div className="card" style={{ zIndex: this.props.order }}>
				<h1>{this.props.title}</h1>
				<List listOfThings={ingredientsArray} />
				<Carousel src={this.props.thumbnail} alt={this.props.title} />
				<List listOfThings={allergensArray} />
				<Link to={`/recipes/${this.props.id}/edit`} >Edit!</Link>
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default Card;
