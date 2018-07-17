JSX & Props
===========

## SWBAT

- [x] Use historical context and the Mod 3 experience to explain why React and declarative programming is special
- [x] Setup a new React app and play around with building things
- [x] Understand how create-react-app works and what it offers a developer
- [x] Learn how to identify components on a page, visually
- [x] See what a React Component actually is (an object, made by a class)
- [x] Build custom components and see initial JSX
- [x] Build modular & reusable components
- [x] See how props are to components as arguments are to functions

## Outline

### React.Component

- class syntax review (mod 3)
  - `extends Component` <= what is this?
- Inherits:
  - `render()` <= is required!!
    - Must always return 1 JSX, an array of JSX, or one of the things that renders as nothing (`null`, `true`, `false`, `undefined`): [See React Docs](https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored)
  - `constructor()`
  - Among many many others.

### Modular Components

- Single Responsibility Principle is used to identify components (most of which are reusable)
- `import` / `export`
  - You can do everything in one file, but please don't!
- **Declarative vs. Imperative**
  - Declarative _declares_ what should happen.
  - Imperative is where you _instruct_ how to make things happen.
  - Abstraction, abstraction, abstraction.
    - Imperative is just abstraction on more lower level imperative stuff.
  - our renders should read like instructions on what to display to the screen

### Component Extras

`constructor()` vs `constructor(props)`
- https://github.com/facebook/react/issues/11671

### Props

- what are they?
  - They are those JSX attributes. On Components, they are called `props`.
  - _Sidenote:_ JSX attributes are still props as we can see in Babel that they are placed in the argument for `props` in `React.createElement()`.
- how do we use them?
  - Same way as attributes on JSX.
  - They are then accessible in your Component via `this.props`.
- passing props down
  - In doing the above, we can see that `props` are passed down from the parent Component.
  - We also see that you can name your `props` **anything**!
    - You should be naming you props so they make sense within the Component as that is where they are used.
    - Remember that Components are reusable pieces of UI. When possible, they should be self-contained in a way that makes them reusable. Sometimes for different purposes.
- **My favorite analogy:** props are to components as arguments are to functions.


```javascript
// ... in App.js
render() {
  return (
    <div className="foodini-container">
      {
        recipes.map(r => (
          <Card
            title={r.title}
            ingredients={r.ingredients}
            thumbnail={r.thumbnail}
            description={r.href}
          />
        ));
      }
    </div>
  )
}

// ... in Card.js
class Card extends Component {
  // ...
	render() {
    // ...
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
```
