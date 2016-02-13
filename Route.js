'use strict'

import MainMenu from './components/pages/MainMenu'
import Login from './components/pages/Login'
import Post from './components/pages/Post'
import PostDetail from './components/pages/PostDetail'

import React, {
	Component,
	StyleSheet,
	View,
	Navigator,
	Text,
	Platform,
	ToastAndroid,
	Image,
	TouchableOpacity,
	PixelRatio,
	BackAndroid,
	DrawerLayoutAndroid,
	InteractionManager,
} from 'react-native'

let _this = undefined

export default class Route extends Component{
	constructor(props){
		super(props)
		_this = this
	}
	render(){
	  return (
      <Navigator
				ref='navigator'
        initialRoute={{
          id: 'login'
        }}
        renderScene={(route, navigator) => {
					// alert(route.prop)
					if(route.id === 'login') {
						return <Login route={route} navigator={navigator} />
					} else if(route.id === 'mainMenu') {
						return <MainMenu route={route} navigator={navigator} />
					} else if(route.id === 'post') {
						return <Post route={route} navigator={navigator} />
					} else if(route.id === 'postDetail') {
						return <PostDetail route={route} navigator={navigator} />
					}
//           return React.createElement(route.scene_component, {navigator})
        }}
      />
    )	
	}
}




