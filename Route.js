'use strict'

const React = require('react-native')
const Login = require('./components/pages/login')

const {
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
} = React

const Route = React.createClass({
	render(){
		return(
			<Login />
		);
	}
})
	

module.exports = Route