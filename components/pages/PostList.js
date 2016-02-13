import React, {
	Component,
	Dimensions,
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	ListView,
} from 'react-native'
import JelyApi from './../data/JelyApi'


let _this
const {height, width} = Dimensions.get('window')

export default class PostList extends Component {
	constructor(props){
		super(props)
		_this = this
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		this.state = {
			postListData: ds.cloneWithRows(['row 1', 'row 2'])
		}
	}
	componentDidMount(){
		JelyApi.retrieveLatestPosts().then((postData)=>{
			let postArray = []
			for(var key in postData) {
				postArray.push(postData[key])
			}
			var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
			_this.setState({postListData: ds.cloneWithRows(postArray)})
		})
	}
	render() {
		return(
			<View>
				<ScrollView style={{height: height}}>
					<View>
						<Image
							style = {styles.postListBG}
							source = {require('./../img/postListbg.jpg')}
						/>
					</View>
					<View style={styles.container}>
						<ListView dataSource={this.state.postListData}
						renderRow={(rowData) =>(
							<View>
								<Image style = {styles.profileImage} source = {require('./../img/profileImage.png')} />
								<Text style = {styles.text1}>{rowData.activity}</Text>
								<Text style = {styles.text2}>Location: {rowData.location}</Text>
								<Text style = {styles.text2}>Time: {rowData.activityDate}</Text>
								<Text style = {styles.text2}>Contact: {rowData.contact}</Text>
							</View>
						)
						}/>
					</View>
				</ScrollView>	
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		marginTop: 15,
	},
	postListBG: {
		position: 'absolute',
	},
	profileImage: {
		marginTop: 40,
		marginLeft: 20
	},
	text1: {
		marginTop: 5,
		marginLeft: 20,
		width: width*.9,
		color: '#65230f',
		fontWeight: 'bold',
		fontSize: 15
	},
	text2: {
		marginLeft: 20,
		color: '#65230f',
		fontSize: 13
	},

})

module.exports = PostList