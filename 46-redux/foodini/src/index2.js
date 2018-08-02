import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'
// import App from './example/App2';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// store, get state, distribution

// To make something less of itself: reducer
// state
// state in arg => previous state
// this.setState(prevState => { return newState })
// this.setState({ count: this.state.count + 1 })
const initialState = {
  // recipes,
  // currentRecipe: recipes[0],
  // like: 0,
  // dislike: 0,
  // page: "show",
  // userId: this.props.userId,
  // username: this.props.username,
  count: 0,
}

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  // if (state === undefined) {
  //   return some initial state
  // }

  // payload, put a function that increments a counter
  // run that function inside of the reducer

  // if (action.type === 'INCREMENT') {
  //   state.count += 1
  // }
  // if (action.type === 'DECREMENT') {
  //   state.count -= 1
  // }

  // let newState;
  // switch(action.type) {
  //   case 'INCREMENT':
  //     // state.count += 1
  //     // newState = { ...state }
  //     // newState.count += 1
  //     // return newState;
  //     return { ...state, count: state.count + 1 }
  //   case 'DECREMENT':
  //     // newState = { ...state }
  //     // newState.count -= 1
  //     // return newState;
  //     return { ...state, count: state.count - 1 }
  //   default:
  //     // nothing
  //     return state;
  // }

  // return state;

  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1, somethingElse: 'new' }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    // case 'INCREMENT_AND_DECREMENT':
    //   return
    case 'SET_COUNT':
      // return { ...state, ...action.payload }
      return { ...state, count: action.payload.count }
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log('store', store);
console.log('state', store.getState());

// function: cause it has to do something
// attributes to be altered: { count: 1 }
let action = {
  type: 'INCREMENT', //'THE_TYPE_OF_ACTION',
  payload: "something to be delivered",
  // key: 'value'
}
store.dispatch(action) // this is now your setState
// dispatch => to send out => (is a change in state) is your action
console.log('after dispatch', store.getState());

let action2 = {
  type: 'DECREMENT',
  payload: "something to be delivered",
}
store.dispatch(action2)
console.log('after dispatch', store.getState());

let action3 = {
  type: 'SET_COUNT',
  payload: { count: 10000 },
}
store.dispatch(action3)
console.log('after dispatch', store.getState());



const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group("DISPATCH");
    console.log('%c state before dispatch', 'color: red', store.getState());
    const returnValue = rawDispatch(action);
    console.log('%c state after dispatch', 'color: blue', store.getState());
    console.groupEnd();
    return returnValue;
  }
}

store.dispatch = addLoggingToDispatch(store);

store.dispatch(action3)

// 23, 24, 17
// 17, 23, 24
// 23, 17, 24




// Provider is someone who gives => store
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
