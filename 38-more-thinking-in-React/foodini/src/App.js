import React, { Component, Fragment } from 'react';
import './App.css';
import Card from './Card';
import Button from './Button';
import ingredients from './ingredients';
import UUID from 'uuid';
import NewRecipeForm from './NewRecipeForm'

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
			page: "show"
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

	handleSubmit = (event, formState) => {
		console.log(event);
		event.preventDefault();

		let recipes = [...this.state.recipes];

		let ingredientsArray = formState.ingredients.split(',');
		ingredientsArray = ingredientsArray.map(i => i.trim());


		let ingredients = ingredientsArray.filter(i => i !== '').join(', ');

		recipes.push({
			title: formState.title,
			href: formState.href,
			ingredients,
			thumbnail: formState.thumbnail,
		})

		this.setState({
			recipes,
			title: "",
			href: "",
			ingredients: "",
			thumbnail: "",
		});

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

	handleNavigation = (event) => {
		this.setState({
			page: event.target.id
		})
	}

	renderShow = () => {
		return this.state.recipes.length === 0 ?
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

	renderPage = () => {
		switch(this.state.page){
			case "new":
				return <NewRecipeForm handleSubmit={this.handleSubmit}/>
			case "show":
				return this.renderShow()
			default: 
				return null
		}
	}



	render() {
		return (
			<Fragment>
				<div className="navbar">
					<button id="new" onClick={this.handleNavigation}>Make a New Recipe!</button>
					<button id="show" onClick={this.handleNavigation}>Choose Recipes!</button>
				</div>
				<div className="foodini-container">
					{	this.renderPage()}
				</div>
			</Fragment>
		);
	}
}

export default App;
