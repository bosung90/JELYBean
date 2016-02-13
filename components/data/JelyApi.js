'use strict'
const Firebase = require('firebase')
const ref = new Firebase("https://jelybean.firebaseio.com")
const postRef = new Firebase("https://jelybean.firebaseio.com/posts")
import React, {
  AsyncStorage,
} from 'react-native'

export default class JelyApi{
  // create a post
  static createPost(date, photo, location, activity){
    let userId = getUserId()
  	postRef.push().set({
  		date: date, 
  		location: location,
  		activity: activity,
  		userId: userId,
  	})
  }


  // retrieve all posts by a user
  static retrieveLatestPosts(){


  }

  static async retrieveMyPosts(){
    let userId = undefined
    try {
      userId = await JelyApi.getUserId()
    } catch (error) { alert(JSON.stringify(error)) }
    // alert(userId)
    //var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
postRef.orderByChild("userid").equalTo(userId).on("value", function(snapshot) {
  return snapshot.val()
})

  }

  // facebook login
  static storeUserInfo(token, userId){
    alert(token + ' : ' + userId)
    AsyncStorage.setItem("fbToken", token)
    AsyncStorage.setItem("fbUserId", userId)

  }

  static async getUserId(){
    const userId = await AsyncStorage.getItem('fbUserId')
    // alert(userId)
    return userId
  }

  static async getToken(){
    const token = await AsyncStorage.getItem('fbToken')
    alert(token)
    return token
  }

}

