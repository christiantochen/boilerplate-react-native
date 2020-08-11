import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useSelector } from 'react-redux'

import { Home, Login } from '../screens'
import NavigationService from './NavigationService'

const Stack = createStackNavigator()

function AuthScreens() {
  return (
    <>
      <Stack.Screen name="Login" component={Login} />
    </>
  )
}

function ProtectedScreens() {
  return (
    <>
      <Stack.Screen name="Home" component={Home} />
    </>
  )
}

export default function AppNavigator() {
  const auth = useSelector(state => state.auth)

  return (
    <NavigationContainer ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}>
      <Stack.Navigator initialRouteName="App" headerMode="none">
        {/* {auth.token ? ProtectedScreens() : AuthScreens()} */}
        {/* {AuthScreens()} */}
        {ProtectedScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
