import React, { Component, Fragment } from 'react';
import './App.css';
import Card from './Card';
import Button from './Button';
import ingredients from './ingredients';
import UUID from 'uuid';

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
			recipes: ingredients,
			like: 0,
			dislike: 0,
			title: "",
			href: "",
			ingredients: "",
			thumbnail: "",
		}
	}

	renderCards() {
		return this.state.recipes.map((r, index) => (
			<Card
				key={UUID()}
				title={r.title}
				ingredients={r.ingredients}
				thumbnail={r.thumbnail}
				description={r.href}
				order={index}
			/>
		));
	}

	like = (event) => {
		let recipes = this.state.recipes.slice();
		recipes.pop();

		this.setState({
			recipes,
			like: this.state.like + 1,
		})
	}

	dislike = (event) => {
		let recipes = this.state.recipes.slice();
		recipes.pop();

		this.setState({
			recipes,
			dislike: this.state.dislike + 1,
		})
	}

	handleInputChange = (event) => {
		console.log("event", event.nativeEvent);
		// debugger;
		// event.target.value
		console.log('target', event.target);
		console.log('event', event);
		console.log('value', event.target.value);
		console.log('id', event.target.id);
		// console.log('data', event.target.dataset.something);
		console.log('data', event.target.getAttribute("data-something"));

		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleHrefChange = (event) => {
		this.setState({
			href: event.target.value,
		})
	}

	handleIngredientsChange = (event) => {
		let ingredientsArray = event.target.value.split(',');
		ingredientsArray = ingredientsArray.map(i => i.trim());
		let ingredients = ingredientsArray.join(', ');

		this.setState({
			ingredients,
		})
	}

	handleThumbnailChange = (event) => {
		this.setState({
			thumbnail: event.target.value,
		})
	}

	handleSubmit = (event) => {
		console.log(event);
		event.preventDefault();

		let recipes = [...this.state.recipes];

		let ingredientsArray = this.state.ingredients.split(',');
		ingredientsArray = ingredientsArray.map(i => i.trim());
		// if (ingredientsArray[ingredientsArray.length - 1] === '') {
		// 	ingredientsArray.pop();
		// }

		let ingredients = ingredientsArray.filter(i => i !== '').join(', ');

		recipes.push({
			title: this.state.title,
			href: this.state.href,
			ingredients,
			thumbnail: this.state.thumbnail,
		})
		this.setState({
			recipes,
			title: "",
			href: "",
			ingredients: "",
			thumbnail: "",
		});

		console.log(React.createElement('div', null));
	}

	render() {
		console.log(this.state);
		// if (this.state.ingredients.length === 0) {
		// 	return (
		// 		<div className="foodini-container">
		// 			<p>Likes: {this.state.like}</p>
		// 			<p>Dislikes: {this.state.dislike}</p>
		// 		</div>
		// 	)
		// }

		return (
			<div className="foodini-container">
				{
					this.state.recipes.length === 0 ?
						<Fragment>
							<p>Likes: {this.state.like}</p>
							<p>Dislikes: {this.state.dislike}</p>
						</Fragment>
					:
						<Fragment>
							<div className="card-container">
								{this.renderCards()}
							</div>

							<div className="button-container">
								<Button name="Like" handleClick={this.like} />
								<Button name="Dislike"  handleClick={this.dislike} />
							</div>
						</Fragment>
				}
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="title">Recipe</label>
					<input
						data-something="data"
						id="title"
						type="text"
						name="title"
						value={this.state.title}
						onChange={this.handleInputChange}
					/>
					<label htmlFor="href">Link</label>
					<input
						id="href"
						type="text"
						name="href"
						value={this.state.href}
						onChange={this.handleInputChange}
					/>
					<label htmlFor="ingredients">Ingredients</label>
					<input
						id="ingredients"
						type="text"
						name="ingredients"
						value={this.state.ingredients}
						onChange={this.handleIngredientsChange}
					/>
					<label htmlFor="thumbnail">Picture</label>
					<input
						id="thumbnail"
						type="text"
						name="thumbnail"
						value={this.state.thumbnail}
						onChange={this.handleInputChange}
					/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}

export default App;
