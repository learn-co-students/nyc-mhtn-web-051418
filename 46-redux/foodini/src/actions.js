import {ADD_FRIEND} from './types';

export function incrementAction() {
  return { type: 'INCREMENT' }
}

export function incrementFriendsAction() {
  return { type: 'INCREMENT_FRIENDS' }
}

export function addFriendAction(friend) {
  return { type: ADD_FRIEND, payload: friend }
}

export function setCountAction(count) {
  return { type: 'SET_COUNT', payload: count }
}
//
// export function resetCountAction() {
//   return { type: 'SET_COUNT', payload: 0 }
// }

// map before we change state
