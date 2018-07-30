// What is withAuth supposed to do?
// check to see if someone is authorized
// -- if not => error message, redirect, ~~ban the ip~~

import React, { Component } from 'react';
import Adapter from '../Adapter';

function withAuth(WrappedComponent) {
  return class extends Component {
    state = {
      loading: true,
      userId: null,
      username: null,
    }

    componentDidMount() {
      // check for token,
      if (Adapter.getToken()) {
        Adapter.getCurrentUser()
     		.then(json => {
     			this.setState({
     				userId: json.id,
     				username: json.username,
             loading: false,
     			})
     		})
     		.catch(err => {
     			console.warn(err);
     			Adapter.deleteToken();
          this.setState({ loading: false }, () => {
            this.props.history.push('/login');
          })
     		})
      } else {
        this.setState({ loading: false }, () => {
          this.props.history.push('/login');
        })
      }
  	}

    render() {
      if (this.state.loading) {
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      } else {
        return <WrappedComponent {...this.props} userId={this.state.userId} username={this.state.username} />
      }
    }
  }
}

export default withAuth;


// import React, { Component } from 'react';
//
// function withAuth(WrappedComponent) {
//   return class extends Component {
//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
// }
//
// export default withAuth;
