import React, { Component } from 'react';

function withLoading(WrappedComponent, dataLoader, requiresAuth = false) {
  return class extends Component {
    state = {
      initialData: null,
      isLoaded: false,
    }

    componentDidMount() {
      if (!requiresAuth || (requiresAuth && this.props.userId)) {
        dataLoader(this.props.userId)
          .then(result => {
            this.setState({
              initialData: result,
              isLoaded: true
            });
          });
      } else {
        this.setState({
          isLoaded: true
        });
      }
    }

    render() {
      if (this.state.isLoaded) {
        return <WrappedComponent {...this.props} initialData={this.state.initialData} />
      } else {
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      }
    }
  }
}

export default withLoading;
