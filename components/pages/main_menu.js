'use strict'

import React, {
	Button,
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

import {
	Router, 
	Route, 
	Schema, 
	Animations, 
	TabBar
} from 'react-native-router-flux'


var name = 'Jenny'

export default class MainMenu extends Component{
	render(){
		return(
			<View>
				<Text>Recommendations for {name}</Text>
			</View>
		)
	}
}