import React, { Component } from 'react';
import UUID from 'uuid';

class List extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('List props', this.props);

		return (
			<ul>
				{this.props.listOfThings.map(i => <li key={UUID()}>{i}</li>)}
			</ul>
		);
	}
}

export default List;