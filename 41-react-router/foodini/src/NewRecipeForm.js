import React from 'react'

class NewRecipeForm extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			title: "",
			href: "",
			ingredients: "",
			thumbnail: "",
		}
	}
	
	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	static getDerivedStateFromProps(props, state){
		console.log("GDSFP", props.recipe)

		if (props.recipe){
			return {
				title: props.recipe.title,
				href: props.recipe.href,
				ingredients: props.recipe.ingredients,
				thumbnail: props.recipe.thumbnail,
			}
		} else {
			return state
		}
	}

	handleIngredientsChange = (event) => {
		let ingredientsArray = event.target.value.split(',');
		ingredientsArray = ingredientsArray.map(i => i.trim());
		let ingredients = ingredientsArray.join(', ');

		this.setState({
			ingredients,
		})
	}

	render(){
		return (
			<form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
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
		)
	}
}

export default NewRecipeForm