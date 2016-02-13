'use strict'
const Firebase = require('firebase')
const ref = new Firebase("https://jelybean.firebaseio.com")
const postRef = new Firebase("https://jelybean.firebaseio.com/posts")
import React, {
  Component,
  AsyncStorage,
} from 'react-native'

export default class JelyApi extends Component{
  // create a post
  static createPost(date, photo, location, activity, userid){
  	postRef.push().set({
  		date: date, 
  		location: location,
  		activity: activity,
  		userid: userid,
  	})
  }


  // retrieve all posts by a user
  static retrieveLatestPosts(){


  }

  static retrieveMyPosts(){

  }

  // facebook login
  static fbLogin(){
    alert('calling fbLogin')
    let promise = new Promise((resolve, reject) =>{
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        alert('return from auth')
        if (error) {
          console.log("Login Failed!", error)
          reject({message: 'Login Failed'})
        } else {
          console.log("Authenticated successfully with payload:", authData)
          AsyncStorage.setItem("fbToken", authData.token)
          AsyncStorage.setItem("fbUserId", authData.uid)
          resolve(authData)
        }
      })
    })
    return promise
  }

  static async getUserId(){
    const userId = await AsyncStorage.getItem('fbUserId')
    alert(userId)
    return userId
  }

  static async getToken(){
    const token = await AsyncStorage.getItem('fbToken')
    alert(token)
    return token
  }

}

