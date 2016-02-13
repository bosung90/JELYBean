var React = require('react-native')
var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;
// import MainMenu from './MainMenu'
const {
  Platform,
} = React

import JelyApi from './../data/JelyApi'
 // import LoginPage from './Login'

// Getting name from facebook
// https://graph.facebook.com/<userid>/?fields=first_name,last_name&access_token=<>
var JelyLogin = React.createClass({

  storeUserInfoToJelyApi(data){
    if(Platform.OS ==="ios"){
      JelyApi.storeUserInfo(data.credentials.token, data.credentials.userId)
    } else{
      JelyApi.storeUserInfo(data.token, data.profile.id)
    }
  },

  render() {
    var _this = this;
      return (
        <FBLogin style={{ marginBottom: 10, }}
          permissions={["email","user_friends"]}
          //loginBehavior={"FBLoginManager.LoginBehaviors.Native"}
          onLogin={function(data){
            console.log("Logged in!");
            console.log(data);
            _this.storeUserInfoToJelyApi (data)
            _this.props.navigator.replace({id: 'mainMenu'})
          }}
          onLogout={function(){
            console.log("Logged out.");
            JelyApi.removeTokenAndUserId();
            _this.setState({ user : null });
            _this.props.navigator.replace({id: 'login'})
          }}
          onLoginFound={function(data){
            console.log("Existing login found.");
            console.log(data);
            _this.setState({ user : data.credentials });
          }}
          onLoginNotFound={function(){
            console.log("No user logged in.");
            _this.setState({ user : null });
          }}
          onError={function(data){
            console.log("ERROR");
            console.log(data);
          }}
          onCancel={function(){
            console.log("User cancelled.");
          }}
          onPermissionsMissing={function(data){
            console.log("Check permissions!");
            console.log(data);
          }}
        />
      )
  }
});

module.exports = JelyLogin