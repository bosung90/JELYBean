'use strict'

import MainMenu from './components/pages/MainMenu'
import Login from './components/pages/Login'
import Post from './components/pages/Post'
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
var page = 'login';
export default class Route extends Component{
	render(){
	  return (
      <Navigator
        initialRoute={{
          scene_component: Login,
        }}
        renderScene={(route, navigator) => {
	
          return React.createElement(route.scene_component, {navigator: navigator, prop: route.prop});
        }}
      />
    )	
	}
}




