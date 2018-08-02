import React, { Component, Fragment } from 'react';
import '../assets/css/App.css';
import RecipeContainer from './RecipeContainer';
// import ingredients from './ingredients';
import NewRecipeForm from './NewRecipeForm'
import Navbar from './Navbar'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Login';
import Adapter from '../apis/Adapter';

import withAuth from '../hocs/withAuth';
import withLoading from '../hocs/withLoading';
import withAd from '../hocs/withAd';

import { connect } from 'react-redux';

const AdRecipeContainer = withAd(RecipeContainer);
const AdNavbar = withAd(Navbar);
const AdNewRecipeForm = withAd(NewRecipeForm);

// http://www.recipepuppy.com/api/?i=beef&q=steak&p=1

class App extends Component {
	constructor(props) {
		super(props);

		let recipes = [];
		if (this.props.initialData) {
			recipes = this.props.initialData.map((r,idx) => {return {...r, id: idx+1}})
		}

		this.state = {
			recipes,
			currentRecipe: recipes[0],
			like: 0,
			dislike: 0,
			page: "show",
			userId: this.props.userId,
			username: this.props.username,
		}
	}

	loadRecipes = (id) => {
		Adapter.getUserRecipes(id)
			.then(res => {
				let recipes = res.map((r,idx) => {return {...r, id: idx+1}})

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
		})
	}

	componentDidUpdate(prevProps, prevState, snapshot){
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
		})
	}

	dislike = (event) => {
		let recipes = this.state.recipes.slice();
		recipes.pop();

		this.setState({
			recipes,
			currentRecipe: recipes[0],
			dislike: this.state.dislike + 1,
		})
	}

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
		return (
			<Fragment>
				<Route path="/" render={(routerProps) => <AdNavbar {...routerProps} logout={this.logout}/>}/>
				{
					!!Adapter.getToken() ?
						<Switch>
							<Route path="/recipes/new" render={(routerProps) => <AdNewRecipeForm {...routerProps} handleSubmit={this.handleSubmit}/>}/>
							<Route path="/recipes/:id/edit" render={(routerProps) => {
								let id = routerProps.match.params.id
								let foundRecipe = this.state.recipes.find((r) => r.id === parseInt(id, 10))
								return <NewRecipeForm {...routerProps} recipe={foundRecipe} handleSubmit={this.handleSubmit}/>
							}}/>
							<Route path="/recipes" render={() => <AdRecipeContainer recipes={this.state.recipes} likes={this.state.like} dislikes={this.state.dislike} like={this.like} dislike={this.dislike} /> }/>
						</Switch>
					:
						<Switch>
							<Route path='/login' render={(routerProps) => <Login {...routerProps} setUser={this.setUser} />} />
						</Switch>
				}
			</Fragment>
		);
	}
}

// connect is a higher order function that returns a higher order component

// connect()(App)
export default withRouter(withAuth(withLoading(App, (id) => { return Adapter.getUserRecipes(id) }, true)));
