import JelyApi from './../data/JelyApi'

import React, {
	Component,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native'

const {height, width} = Dimensions.get('window')

let mySelf
export default class Post extends Component {
	constructor(props){
		super(props)
		mySelf = this
		this.state={
			photo: 'http://facebook.github.io/react/img/logo_og.png',
			purpose: '',
			date: '',
			location: '',
			contact: '',
		}
	}
	_onPressSubmit(){
		JelyApi.createPost(mySelf.state.date, mySelf.state.photo, mySelf.state.location, mySelf.state.purpose, mySelf.state.contact)
		mySelf.props.navigator.pop()
	}
	render() {
		return(
			<View>
				<ScrollView style={{height: height}}>
					<View>
						<Image style = {styles.bgImage}
							source = {require('./../img/postbg.jpg')}
						/>
					</View>
					<View style = {styles.container}>
						<Text style = {styles.text}>I WANT TO </Text>
						<TextInput style={styles.purposeInput}
								autoCorrect={false}
								placeholder= {'ex) dine out, watch a movie, play badminton, etc.. '}
								placeholderTextColor='#C7C7CD'
								autoCapitalize='none'
								multiline={true}
					    	onChangeText={(text) => {mySelf.setState({purpose: text})}}
					    	value={mySelf.state.purpose}					  	
					  	/>
					  	
					  	<Text style = {styles.text}>ON</Text>
						<TextInput style={styles.textInput}
					    	autoCorrect={false}
								placeholder= {'dd/mm/yyyy 00:00'}
								placeholderTextColor='#C7C7CD'
								autoCapitalize='none'
					    	onChangeText={(text) => {mySelf.setState({date:text})}}
					    	value={mySelf.state.date}
					    	textAlign='center'/>

				   		<Text style = {styles.text}>AT</Text>
						<TextInput style={styles.textInput}
					    	autoCorrect={false}
								placeholder='Location'
								placeholderTextColor='#C7C7CD'
								autoCapitalize='none'
					    	onChangeText={(text) => mySelf.setState({location:text})}
					    	value={mySelf.state.location}
					    	textAlign='center'/>
				    	<Text style = {styles.text}>CONTACT</Text>
						<TextInput style={styles.textInput}
					    	autoCorrect={false}
								placeholder='Contact'
								placeholderTextColor='#C7C7CD'
								autoCapitalize='none'
					    	onChangeText={(text) => mySelf.setState({contact:text})}
					    	value={mySelf.state.contact}
					    	textAlign='center'/>


						<TouchableOpacity onPress={mySelf._onPressSubmit}>
					    <Image
					        style={styles.submit}
					        source={require('./../img/submit.png')}
					    />
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		//backgroundColor: '#46B7C7',
		height: height
	},
	bgImage:{
		position: 'absolute',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white'
	},
	submit: {
		width:width*0.3,
		height:width*0.113,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50
	},
	textInput: {
		marginTop: 4,
		marginBottom: 4,
		padding: 0,
		height: 32,
		width: width*0.9,
		alignSelf: 'center',
		borderRadius: 4,
		backgroundColor: 'white',
	},
	purposeInput: {
		marginTop: 4,
		marginBottom: 4,
		padding: 0,
		height: 100,
		width: width*0.9,
		alignSelf: 'center',
		borderRadius: 4,
		backgroundColor: 'white',
	},
})
