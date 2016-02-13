
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

export default class Post extends Component {
	constructor(){
		super()
		
	}
	componentDidMount(){
		// alert(width)
		//alert(this.date)
		wants = '';
		date = '';
		location = '';
	}

	_onPressSubmit(){
		alert(this.wants+" "+this.date+" "+this.location)
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
						<Text>What do you want to do?</Text>
						<TextInput
					    	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					    	onChangeText={(text) => {this.wants=text;}}
					    	value={this.wants}					  	
					    />
						<Text>Date</Text>
						<TextInput
					    	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					    	onChangeText={(text) => {this.date=text;}}
					    	value={this.date}					  	
					    />
						<Text>Location</Text>
						<TextInput
					    	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					    	onChangeText={(text) => {this.location=text;}}
					    	value={this.location}					  	
					    />
						<TouchableOpacity onPress={this._onPressSubmit}>
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
		alignItems: 'center'
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
})
