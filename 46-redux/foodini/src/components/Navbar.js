import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Adapter from '../apis/Adapter';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { incrementAction, incrementFriendsAction, addFriendAction} from '../actions';

class Navbar extends React.Component {
  logout = () => {
    Adapter.deleteToken();
    this.props.logout();
  }


    // increment = () => {
    //   this.props.dispatch({
    //     type: 'INCREMENT'
    //   })
    // }
    //
    // incrementFriends = () => {
    //   this.props.dispatch({
    //     type: 'INCREMENT_FRIENDS'
    //   })
    // }
    //
    // addFriend = () => {
    //   this.props.dispatch({
    //     type: ADD_FRIEND,
    //     payload: uuid()
    //   })
    // }

  render(){
    console.log('Navbar', this.props);

    return (
      <div className="navbar">
        {
          !!Adapter.getToken() ?
            <Fragment>
              <Link to="/recipes/new">Make a New Recipe!</Link>
              <Link to="/recipes"> Choose Recipes!</Link>
              <button onClick={this.logout}>Logout!</button>
              <button onClick={this.props.increment}>INCREMENT!</button>
              <button onClick={this.props.incrementFriends}>INCREMENT FRIENDS!</button>
              <button onClick={() => this.props.addFriend(uuid())}>ADD FRIEND!</button>
            </Fragment>
          :
            <Link to="/login">Login!</Link>
        }
        <p>{this.props.count}</p>
      </div>
    )
  }
}

// callback
// props
// store xxxxxxx
// state xxxxxxx
function mapStateToProps(state) {
  // get a portion of state and put it in props
  console.log('hello from inside mapStateToProps', state);
  return {
    count: state.count
  }
}

// [1, 2, 3].map(number => {
//   return number * 2;
// })

// dispatch.js
// map state to props ====> map (callbacks) to props ===> map dispatch to props
function mapDispatchToProps(dispatch) {
  // dispatch()

  //   this.props.dispatch({
  //     type: 'INCREMENT'
  //   })
  return {
    increment: () => dispatch(incrementAction()),
    incrementFriends: () => dispatch(incrementFriendsAction()),
    addFriend: (friend) => dispatch(addFriendAction(friend)) // props, argument
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
