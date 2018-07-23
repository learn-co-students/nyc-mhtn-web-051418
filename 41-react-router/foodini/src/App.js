import React, { Component, Fragment } from 'react';
import './App.css';
import RecipeContainer from './RecipeContainer';
// import ingredients from './ingredients';
import NewRecipeForm from './NewRecipeForm'
import Navbar from './Navbar'
import Ad from './Ad'


// http://www.recipepuppy.com/api/?i=beef&q=steak&p=1
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: [], //ingredients,
			like: 0,
			dislike: 0,
			clicks: 0,
			page: "show",
			showAd: false,
		}
	}

	componentDidMount(){
		const PROXY = `https://cors-anywhere.herokuapp.com`;
		const API = `http://www.recipepuppy.com/api`
		fetch(`${PROXY}/${API}/?i=beef&q=steak&p=1`)
		.then(r => r.json())
		.then(res => {
			let recipes = res.results

			// setTimeout(()=>this.setState({loaded: true}), 3000)

			this.setState({
				recipes,
				loaded: true
			})
		})
	}

	toggleAd = () => {
		this.setState({
			showAd: !this.state.showAd
		})
	}

	componentDidUpdate(){
		if (this.state.clicks === 3 && !this.state.showAd) {
			this.setState({
				clicks: 0,
				showAd: true
			})
		}
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
			clicks: this.state.clicks + 1,
		})
	}

	dislike = (event) => {
		let recipes = this.state.recipes.slice();
		recipes.pop();

		this.setState({
			recipes,
			dislike: this.state.dislike + 1,
			clicks: this.state.clicks + 1,
		})
	}

	handleNavigation = (event) => {
		this.setState({
			page: event.target.id
		})
	}

	renderPage = () => {
		switch(this.state.page){
			case "new":
				return <NewRecipeForm handleSubmit={this.handleSubmit}/>
			case "show":
				return <RecipeContainer recipes={this.state.recipes} likes={this.state.like} dislikes={this.state.dislike} like={this.like} dislike={this.dislike}/>
			default:
				return null
		}
	}

	render() {
		// console.log(this.state.clicks)
		if (this.state.showAd){
			return <Ad toggleAd={this.toggleAd} />
		} else {
			return (
				<Fragment>
					<Navbar handleNavigation={this.handleNavigation} />
					<div className="foodini-container">
						{ this.renderPage()}
					</div>
				</Fragment>
			);
		}
	}
}

export default App;
