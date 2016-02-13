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

const {height, width} = Dimensions.get('window')
var name = 'Jenny'

export default class MainMenu extends Component{
	render(){
		return(
			<ScrollView style={styles.scrollView}>
				<View style = {styles.imageContainer}>
					<Image 
						style = {styles.mainImage}
						source = {require('./../img/main_menu_img1.jpg')}
						resizeMode={Image.resizeMode.contain}
					/>
					<Image
						style = {styles.newPostIcon}
						source = {require('./../img/new_post_icon.png')}
					/>
					<Image
						style = {styles.searchIcon}
						source = {require('./../img/search_icon.png')}
					/>
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
		fontSize: 16,
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