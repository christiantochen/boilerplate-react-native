import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Home, Login, Splash } from '../screens'

const Stack = createStackNavigator()

class AppNavigator extends Component {
  AuthScreens = (
    <>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
    </>
  )

  ProtectedScreens = (
    <>
      <Stack.Screen name="Home" component={Home} />
    </>
  )

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App" headerMode="none">
          {this.props.auth.token ? this.ProtectedScreens : this.AuthScreens}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

AppNavigator.propTypes = {
  auth: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(AppNavigator)
