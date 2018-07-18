import React, { Component } from 'react';
import UUID from 'uuid';

class List extends Component {
	render() {
		return (
			<ul>
				{this.props.listOfThings.map(i => <li key={UUID()}>{i}</li>)}
			</ul>
		);
	}
}

export default List;
