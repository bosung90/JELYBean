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
// import Post from './Post'
const JelyLogin = require('./JelyLogin')

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
					<TouchableOpacity onPress={()=>{_this.props.navigator.push({id: 'post', prop: _this.props})}}>
						<Image
							style = {styles.newPostIcon}
							source = {require('./../img/new_post_icon.png')}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{_this.props.navigator.push({id: 'postList', prop: _this.props})}}>
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
				<Text style = {styles.text3}>WEEKEND DATES</Text>
				<Image style = {styles.recommendationImages}
					source = {require('./../img/weekend_dates.jpg')}
				/>
				<Text style = {styles.text4}>Movie Date @Dunbar Theatre</Text>

				<View style = {styles.line}></View>
				<Text style = {styles.text3}>NEARBY DATES</Text>
				<Image style = {styles.recommendationImages}
					source = {require('./../img/nearby_dates.jpg')}
				/>
				<Text style = {styles.text4}>Kitsilano Beach Picnic</Text>

				<View style = {styles.line}></View>
				<Text style = {styles.text3}>POPULAR DATES</Text>
				<Image style = {styles.recommendationImages}
					source = {require('./../img/popular_dates.jpg')}
				/>
				<Text style = {styles.text4}>Let's Guitar Jam</Text>

				<View style = {styles.logoutButton}>
					<JelyLogin {..._this.props}/>
				</View>
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
	text3: {
		fontFamily: 'Cochin',
		alignSelf: 'flex-start',
		fontSize: 10,
		color: '#404040',
		marginLeft: 23,
		marginTop: 10
	},
	text4: {
		
		alignSelf: 'flex-start',
		fontSize: 15,
		color: '#404040',
		marginLeft: 23,
		marginTop: 5
	},
	line: {
		backgroundColor: '#bababa',
		height: 1,
		width: width*0.9,
		alignSelf: 'center',
		marginTop: 30
	},
	recommendationImages: {
		alignSelf: 'center',
		width: width*0.9,
		height: width/2,
		marginTop: 1
	},
	logoutButton: {
		alignItems: 'center',
		marginTop: 50
	}

})