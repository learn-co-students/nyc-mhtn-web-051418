import React, { Component } from 'react';

class Button extends Component {
	// constructor(props) {
	// 	super(props);
	//
	// 	// this.handleClick = this.handleClick.bind(this);
	// 	this.state = {
	// 		name: this.props.name
	// 	}
	// }

	state = {
		name: this.props.name
	}

	handleClick = (event) => {
		// event.persist();
		// console.log('Test the button');
		// console.log(event.nativeEvent);
		// setTimeout(() => {
		// 	console.log('timeout', event);
		// }, 1000);
		console.log('before setState', this.state);
		// this.state.name = this.state.name + " Clicked";
		// this.forceUpdate();
		// this.setState({
		// 	name: this.state.name + " Clicked",
		// 	somethingElse: "somethingElse",
		// }, () => {
		// 	console.log('after setState', this.state);
		// })

		this.setState((prevState) => {
			return {
				name: prevState.name + " Clicked",
				somethingElse: "somethingElse",
			}
		})

			// this.props.name = this.props.name + " Clicked"
	}

	render() {
		console.log('render', this.state);
		// return <button onClick={(event) => this.handleClick(event, this.props.name)} className="button">{this.props.name}</button>;
		// return <button onClick={this.handleClick.bind(this)} className="button">{this.props.name}</button>;
		return <button onClick={this.props.handleClick} className="button">{this.state.name}</button>;
	}
}

export default Button;
