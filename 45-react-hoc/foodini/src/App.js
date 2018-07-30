import React, { Component, Fragment } from 'react';
import './App.css';
import RecipeContainer from './RecipeContainer';
// import ingredients from './ingredients';
import NewRecipeForm from './NewRecipeForm'
import Navbar from './Navbar'
import Ad from './Ad'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Login';
import Adapter from './Adapter';

// http://www.recipepuppy.com/api/?i=beef&q=steak&p=1

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: [],
			currentRecipe: {},
			like: 0,
			dislike: 0,
			clicks: 0,
			page: "show",
			showAd: false,
			userId: null,
			username: null,
		}
	}

	componentDidMount(){
	 // fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=beef&q=steak&p=1')

	 Adapter.getCurrentUser()
		.then(json => {
			// console.log(json);
			this.setState({
				userId: json.id,
				username: json.username,
			}, () => {
				this.loadRecipes(this.state.userId);
			})
		})
		.catch(err => {
			// console.warn(err);
			Adapter.deleteToken();
			this.props.history.push('/login');
		})
	}

	// componentDidUpdate(prevProps, prevState, snapshot) {
	// 	console.log('%c componentDidUpdate', 'color: red', this.state, prevState, prevProps);
	// 	if (this.state.userId && prevState.userId !== this.state.userId) {
	// 		this.loadRecipes(this.state.userId);
	// 	}
	// }

	loadRecipes = (id) => {
		Adapter.getUserRecipes(id)
			.then(res => {
				// console.log(res);
				// let recipes = res.results.map((r,idx) => {return {...r, id: idx+1}})
				let recipes = res.map((r,idx) => {return {...r, id: idx+1}})

				// setTimeout(()=>this.setState({loaded: true}), 3000)

				this.setState({
					recipes,
					currentRecipe: recipes[0],
					loaded: true
				})
			})
	}

	setUser = (userId, username) => {
		this.setState({
			userId,
			username,
		}, () => console.log('setUser', this.state))
	}

	toggleAd = () => {
		this.setState({
			showAd: !this.state.showAd
		})
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if (this.state.clicks === 3 && !this.state.showAd) {
			this.setState({
				clicks: 0,
				showAd: true
			})
		}

		// console.log('%c componentDidUpdate', 'color: red', this.state, prevState, prevProps);
		if (this.state.userId && prevState.userId !== this.state.userId) {
			this.loadRecipes(this.state.userId);
		}
	}

	handleSubmit = (event, formState) => {
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
		}, () => {this.props.history.push("/index")});
	}

	like = (event) => {
		let recipes = this.state.recipes.slice();
		recipes.pop();

		this.setState({
			recipes,
			currentRecipe: recipes[0],
			like: this.state.like + 1,
			clicks: this.state.clicks + 1,
		})
	}

	dislike = (event) => {
		let recipes = this.state.recipes.slice();
		recipes.pop();

		this.setState({
			recipes,
			currentRecipe: recipes[0],
			dislike: this.state.dislike + 1,
			clicks: this.state.clicks + 1,
		})
	}

	// handleNavigation = (event) => {
	//  this.setState({
	//    page: event.target.id
	//  })
	// }

	// renderPage = () => {
	//  switch(this.state.page){
	//    case "new":
	//      return <NewRecipeForm handleSubmit={this.handleSubmit}/>
	//    case "show":
	//      return <RecipeContainer recipes={this.state.recipes} likes={this.state.like} dislikes={this.state.dislike} like={this.like} dislike={this.dislike}/>
	//    default:
	//      return null
	//  }
	// }

	logout = () => {
		this.setState({
			userId: null,
			username: null,
			recipes: [],
		}, () => {
			this.props.history.push("/login");
		})
	}

	render() {
		// console.log(this.state)

		if (this.state.showAd){
			return <Ad toggleAd={this.toggleAd} />
		} else {
			return (
				<Fragment>
					<Route path="/" render={(routerProps) => <Navbar {...routerProps} logout={this.logout}/>}/>
					{
						!!Adapter.getToken() ?
							<Switch>
								{/* Fragment apparently doesn't work here. */}
								<Route path="/recipes/new" render={(routerProps) => <NewRecipeForm {...routerProps} handleSubmit={this.handleSubmit}/>}/>
								<Route path="/recipes/:id/edit" render={(routerProps) => {
									let id = routerProps.match.params.id
									let foundRecipe = this.state.recipes.find((r) => r.id === parseInt(id))
									return <NewRecipeForm {...routerProps} recipe={foundRecipe} handleSubmit={this.handleSubmit}/>
								}}/>
								<Route path="/recipes" render={() => <RecipeContainer recipes={this.state.recipes} likes={this.state.like} dislikes={this.state.dislike} like={this.like} dislike={this.dislike} /> }/>
							</Switch>
						:
							<Switch>
								{/*
									I moved the /login Route down to the else clause to hide that screen.
									It also let's me Switch here in case I add a registration screen later.
								*/}
								<Route path='/login' render={(routerProps) => <Login {...routerProps} setUser={this.setUser} />} />
							</Switch>
					}
				</Fragment>
			);
		}
	}
}

				// <Navbar handleNavigation={this.handleNavigation} />
				//  <div className="foodini-container">
				//    { this.renderPage()}
				//  </div>

export default withRouter(App);
