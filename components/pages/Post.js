
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
			purpose: '',
			date: '',
			location: '',
		}
	}

	_onPressSubmit(){
		alert(mySelf.state.purpose+" "+mySelf.state.date+" "+mySelf.state.location)
	}

	render() {
		return(
			<View>
				<ScrollView style={{height: height}}>
					<View style = {styles.container}>
		      	<Image
		        	style={styles.postPoto}
		        	source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
		      	/>
				    <Text>Location</Text>
						<TextInput style={styles.textInput}
					    	autoCorrect={false}
								placeholder='Location'
								placeholderTextColor='#C7C7CD'
								autoCapitalize='none'
					    	onChangeText={(text) => mySelf.setState({location:text})}
					    	value={mySelf.state.location}
					    	textAlign='center'/>
						<Text>Date</Text>
						<TextInput style={styles.textInput}
					    	autoCorrect={false}
								placeholder= {'dd/mm/yyyy 00:00'}
								placeholderTextColor='#C7C7CD'
								autoCapitalize='none'
					    	onChangeText={(text) => {mySelf.setState({date:text})}}
					    	value={mySelf.state.date}
					    	textAlign='center'/>
						<Text>What do you want to do?</Text>
						<TextInput style={styles.purposeInput}
								autoCorrect={false}
								placeholder= {'ex) dine out, movie night, and etc.'}
								placeholderTextColor='#C7C7CD'
								autoCapitalize='none'
								multiline={true}
					    	onChangeText={(text) => {mySelf.setState({purpose: text})}}
					    	value={mySelf.state.purpose}					  	
					  />
						<TouchableOpacity onPress={mySelf._onPressSubmit}>
					    <Image
					        style={styles.submit}
					        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
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
		backgroundColor: '#46B7C7',
		height: height
		// flex:1,
		// flexDirection: 'column',
		// height: 2000,
	},
	postPoto: {
		borderWidth:10,
		width:100,
		height:100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	submit: {
		borderWidth:10,
		width:100,
		height:30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		marginTop: 4,
		marginBottom: 4,
		padding: 0,
		height: 32,
		width: 200,
		borderRadius: 4,
		backgroundColor: 'white',
	},
	purposeInput: {
		marginTop: 4,
		marginBottom: 4,
		padding: 0,
		height: 100,
		width: 200,
		borderRadius: 4,
		backgroundColor: 'white',
	},
})
