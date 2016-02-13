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
import MainMenu from './MainMenu'
import JelyApi from './../data/JelyApi'
const JelyLogin  = require('./JelyLogin')

let prop

export default class Login extends Component {
	constructor(props) {
		super(props)
		prop = props
	}
	componentDidMount() {
		JelyApi.getUserId().then((userId)=>{
			if(userId){
				prop.navigator.replace({scene_component: MainMenu, prop: prop})
			}
		})
	}
	_fbLogin() {
		prop.navigator.replace({scene_component: MainMenu, prop: prop})
	}
	render(){
		return(
			<View style = {styles.container}>
				<Image style = {styles.background} 
					source = {require('./../img/mainbg.jpg')}/>
				<Image style = {styles.logo}
					source = {require('./../img/logo.png')}/>
				<JelyLogin {...prop}/>
			</View>
		)
	}
}
	




var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	background: {
		flex: 1,
		position: 'absolute',
    resizeMode: "cover"
	},
	logo: {
		marginTop: 280,
	},
	button: {
		marginTop: 100
	},
	buttonText: {
		fontSize: 30,
		backgroundColor: 'rgba(0,0,0,0)',
	}	
})
