var React = require('react-native')
var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;
import MainMenu from './main_menu'


import JelyApi from './../data/JelyApi'

// Getting name from facebook
// https://graph.facebook.com/<userid>/?fields=first_name,last_name&access_token=<>
var JelyLogin = React.createClass({
  render: function() {
    var _this = this;
    return (
      <FBLogin style={{ marginBottom: 10, }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          JelyApi.storeUserInfo(data.credentials.token, data.credentials.userId)
          _this.props.navigator.replace({scene_component: MainMenu})
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
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
    );
  }
});

module.exports = JelyLogin