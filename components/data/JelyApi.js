'use strict'
const Firebase = require('firebase')
const ref = new Firebase("https://jelybean.firebaseio.com")
const postRef = new Firebase("https://jelybean.firebaseio.com/posts")
import React, {
  AsyncStorage,
} from 'react-native'

export default class JelyApi{
  // create a post
  static async createPost(actDate, photo, location, activity){
    let userId = await JelyApi.getUserId()
  	postRef.push({
  		activityDate: actDate, 
  		location: location,
  		activity: activity,
  		userId: userId,
      postDate: Date.now(),
      photo: photo
  	})
  }

  // Retrieve top 10 posts
  static retrieveLatestPosts(){
    let promise = new Promise((resolve) => {
      postRef.orderByChild("postDate").limitToLast(10).on("value", (snapshot)=>{
        resolve(snapshot.val())
      })
    })
    return promise
  }

  // Retrieve top 10 posts by a user
  static retrieveMyPosts(){
    let promise = new Promise((resolve) => {
      JelyApi.getUserId().then((userId)=>{
        postRef.orderByChild("userId").equalTo(userId).limitToLast(10).on("value", (snapshot)=> {
          resolve(snapshot.val())
        })
      })
    })
    return promise
  }

  static storeUserInfo(token, userId){
    AsyncStorage.setItem("fbToken", token)
    AsyncStorage.setItem("fbUserId", userId)
  }

  static async getUserId(){
    const userId = await AsyncStorage.getItem('fbUserId')
    return userId
  }

  static async getToken(){
    const token = await AsyncStorage.getItem('fbToken')
    return token
  }
}

