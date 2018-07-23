import React, { Component, Fragment } from 'react';
import './App.css';
import RecipeContainer from './RecipeContainer';
import ingredients from './ingredients';
import NewRecipeForm from './NewRecipeForm'
import Navbar from './Navbar'
import Ad from './Ad'
import { Route, Switch, withRouter } from 'react-router-dom'


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
    }
  }

  componentDidMount(){
   fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=beef&q=steak&p=1')
   .then(r => r.json())
   .then(res => {
     let recipes = res.results.map((r,idx) => {return {...r, id: idx+1}})

     // setTimeout(()=>this.setState({loaded: true}), 3000)

     this.setState({
       recipes,
       currentRecipe: recipes[0],
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



  render() {
    if (this.state.showAd){
      return <Ad toggleAd={this.toggleAd} />
    } else {
      return (
        <Fragment>
          <Route path="/" component={Navbar}/>
          <Switch>
            <Route path="/recipes/new" render={(routerProps) => <NewRecipeForm {...routerProps} handleSubmit={this.handleSubmit}/>}/>
            <Route path="/recipes/:id/edit" render={(routerProps) => {
              let id = routerProps.match.params.id
              let foundRecipe = this.state.recipes.find((r) => r.id === parseInt(id))
              return <NewRecipeForm {...routerProps} recipe={foundRecipe} handleSubmit={this.handleSubmit}/>
            }}/>
            <Route path="/recipes" render={() => <RecipeContainer recipes={this.state.recipes} likes={this.state.like} dislikes={this.state.dislike} like={this.like} dislike={this.dislike} /> }/>
          </Switch>
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
