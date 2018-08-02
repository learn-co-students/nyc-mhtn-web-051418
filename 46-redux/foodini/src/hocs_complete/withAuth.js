import React, { Component } from 'react'
import Adapter from '../Adapter';

function withAuth(WrappedComponent, redirect = '/login') {
  return class extends Component {
    state = {
      userId: null,
      username: null,
      loading: true,
    }

    componentDidMount () {
      if (!Adapter.getToken()) {
        this.setState({ loading: false });
        this.props.history.push(redirect);
      } else {
        this.validateToken();
      }
    }

    validateToken = () => {
      Adapter.getCurrentUser()
        .then(json => {
          this.setState({
            userId: json.id,
            username: json.username,
            loading: false,
          })
        })
        .catch(err => {
          Adapter.deleteToken();
          this.setState({
            loading: false,
          }, () => {
            this.props.history.push(redirect)
          })
        })
    }

    render(){
      if (this.state.loading) {
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      } else {
        return <WrappedComponent {...this.props} userId={this.state.userId} username={this.state.username} />
      }
    }
  }
}

export default withAuth;
