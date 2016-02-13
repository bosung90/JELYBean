'use strict'

import React, {
	Button,
	Component,
	Dimensions,
	StyleSheet,
	View,
	Navigator,
	Text,
	Platform,
	ToastAndroid,
	Image,
	ScrollView,
	TouchableOpacity,
	PixelRatio,
	BackAndroid,
	DrawerLayoutAndroid,
	InteractionManager,
} from 'react-native'
import Post from './Post'

const {height, width} = Dimensions.get('window')
var name = 'Jenny'
let _this

export default class MainMenu extends Component{
	render(){
		_this = this
		return(
			<ScrollView style={styles.scrollView}>
				<View style = {styles.imageContainer}>
					<Image 
						style = {styles.mainImage}
						source = {require('./../img/main_menu_img1.jpg')}
						resizeMode={Image.resizeMode.cover}
					/>
					<TouchableOpacity onPress ={()=>{_this.props.navigator.push({scene_component: Post, prop: _this.props})}}>
						<Image
							style = {styles.newPostIcon}
							source = {require('./../img/new_post_icon.png')}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
					<Image
						style = {styles.searchIcon}
						source = {require('./../img/search_icon.png')}
					/>
					</TouchableOpacity>
				</View>
				<Text style = {styles.text1}>JELYBEAN</Text>
				<Text style = {styles.text2}>Looking for the sun to shine again</Text>
				<Text style = {styles.text2}>Longing to feel the tingles that come with a touch</Text>
				<Text style = {styles.text2}>Seeking the security of being in arms tightly tucked</Text>
				<Text style = {styles.text2}>Imagining the passion of your kiss</Text>
				<Text style = {styles.text2}>Wanting to feel a belonging</Text>
				<Text style = {styles.text2}>Needing to be needed</Text>
				<View style = {styles.line}></View>
			</ScrollView>
		)
	}
}

var styles = StyleSheet.create({
	scrollView: {
	},
	imageContainer: {
	},
	mainImage: {
		width: width,
    height: 1.25*width,
	},
	newPostIcon:{
		width: width*0.16,
		height: width*0.16,
		marginLeft: 25,
		marginTop: -0.4*width
	},
	searchIcon:{
		width: width*0.16,
		height: width*0.16,
		marginLeft: 25,
		marginTop: -0.2*width
		
	},
	text1: {
		fontFamily: 'Cochin',
		alignSelf: 'center',
		fontSize: 30,
		marginTop: 65,
		marginBottom: 20,
		color: '#404040'
	},
	text2: {
		fontFamily: 'Cochin',
		alignSelf: 'center',
		fontSize: 14,
		color: '#404040'
	},
	line: {
		backgroundColor: '#bababa',
		height: 1,
		width: width*0.9,
		alignSelf: 'center',
		marginTop: 30
	},

})