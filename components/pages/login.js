'use strict'

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

export default class Login extends Component {
	render(){
		return(
			<View style = {styles.container}>
				<Image style = {styles.background} 
				source = {require('./../img/mainbg.jpg')}/>
			</View>
		)
	}
}
	
var styles = StyleSheet.create({
	container: {
		position: 'absolute',
    top: 0, right: 0, left:0, bottom: 0
	},
	background: {
		flex: 1,
    resizeMode: "cover"
	}
})
