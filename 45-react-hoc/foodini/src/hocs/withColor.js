import React, { Component } from 'react';

function withColor(WrappedComponent, color = 'blue') {
  // return new Component
  return class extends Component {
    constructor(props) {
      super(props);

      console.log('withColor', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} color={color} />
    }
  }
}

export default withColor;
