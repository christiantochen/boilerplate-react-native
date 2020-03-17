import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './RootStack'

class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    )
  }
}

export default AppNavigator
