import {ADD_FRIEND} from './types';

const initialState = {
  count: 0,
  friends: 0,
  friendArray: [1, 2, 3, 4]
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1, somethingElse: 'new' }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'SET_COUNT':
      return { ...state, count: action.payload.count }
    case 'INCREMENT_FRIENDS':
      return { ...state, friends: state.friends + 1 }
    case ADD_FRIEND:
      return { ...state, friendArray: [...state.friendArray, action.payload] }
    default:
      return state;
  }
}
