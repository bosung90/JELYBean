import React, {
	Component,
	View,
	Text,
	Image,
	StyleSheet,
	ListView,
} from 'react-native'
import JelyApi from './../data/JelyApi'


let _this

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
				
			</View>
			<View style={styles.container}>
				<ListView dataSource={this.state.postListData}
				renderRow={(rowData) =>(
					<View>
						<Text>{rowData.activity}</Text>
						<Text>Location: {rowData.location}</Text>
						<Text>Time: {rowData.activityDate}</Text>
						<Text>Contact: {rowData.contact}</Text>
						<Text></Text>
					</View>
				)
				}/>
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
})

module.exports = PostList