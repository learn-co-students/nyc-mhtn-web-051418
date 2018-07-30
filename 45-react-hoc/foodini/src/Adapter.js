import { BadTokenError } from './error';

const API = 'http://localhost:3000';

export default class Adapter {
  static getToken() {
    return localStorage.getItem('token');
  }

  static deleteToken() {
    localStorage.removeItem('token');
  }

  static getUserRecipes(id) {
    return fetch(`${API}/users/${id}/recipes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken(),
      }
    })
 	    .then(r => r.json())
  }

  static getCurrentUser() {
    return fetch('http://localhost:3000/current_user', {
   		 method: 'GET',
   		 headers: {
   			 'Content-Type': 'application/json',
   			 'Authorization': this.getToken(),
   		 }
   	 })
   	 	.then(res => {
   			// console.log(res);
   			if (res.ok) {
   				return res.json()
   			} else if (res.status === 401) {
   				throw new BadTokenError("Bad token")
   			} else {
   				throw new Error("Unhandled error")
   			}
   		})
  }
}
