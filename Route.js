'use strict'

import Login from './components/pages/login'
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

export default class Route extends Component{
	render(){
		return(
			<Login />
		)
	}
}

