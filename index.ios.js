/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

import Route from './Route.js'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

class JELYBean extends Component {
  render() {
    return (
      <Route />
    )
  }
}

AppRegistry.registerComponent('JELYBean', () => JELYBean)
