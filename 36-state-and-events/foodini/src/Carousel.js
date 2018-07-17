import React, { Component } from 'react';

class Carousel extends Component {
	constructor(props) {
		super(props);
		
		console.log('constructor props', this.props);
	}

	render() {
		console.log('props', this.props);

		return <img src={this.props.src} alt={this.props.alt} />;
	}
}

export default Carousel;