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
const JelyLogin = require('./JelyLogin')

let _this

export default class Login extends Component {
	constructor(props) {
		super(props)
		_this = this
		this.state = {
			showLogin: false
		}
		// prop = props
	}
	componentDidMount() {
		JelyApi.getToken().then((token)=>{
			if(token){
				_this.props.navigator.replace({scene_component: MainMenu, prop: _this.props})
			} else {
				_this.setState({
					showLogin: true
				})
			}
		})
	}
	render(){
		return(
			<View style = {styles.container}>
				<Image style = {styles.background} source = {require('./../img/mainbg.jpg')}/>
				<Image style = {styles.logo} source = {require('./../img/logo.png')}/>
				<View style = {styles.loginButton}>
					{_this.state.showLogin?
						<JelyLogin {..._this.props} />
						:
						null
					}
				</View>	
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
		marginTop: 200,
	},	
	loginButton: {
		marginTop:60
	}
})
