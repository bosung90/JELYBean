import React, {
	Component,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	StyleSheet,
	Dimensions,
} from 'react-native'
const {height, width} = Dimensions.get('window')

export default class Post extends Component {
	componentDidMount(){
		// alert(width)
		this.wants = ''
	}
	render() {
		return(
			<View>
				<ScrollView style={{height: height}}>
					<View>
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
						<Text>Hello Post Page</Text>
						<Text>Location</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
						<Text>Hello Post Page</Text>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		// flex:1,
		// flexDirection: 'column',
		// height: 2000,
	},
	postPoto: {
		borderWidth:10,
		width:100,
		height:100,

	},
})
