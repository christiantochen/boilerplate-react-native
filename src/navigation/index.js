import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useSelector } from 'react-redux'

import Splash from '../components/Splash'
import { Home, Login } from '../screens'
import { navigationRef } from './RootNavigation'

const Stack = createStackNavigator()

export default function AppNavigator() {
  const [initialized, auth] = useSelector(state => [state.initialized, state.auth])

  const AuthScreens = (
    <>
      <Stack.Screen name="Login" component={Login} />
    </>
  )

  const ProtectedScreens = (
    <>
      <Stack.Screen name="Home" component={Home} />
    </>
  )

  if (!initialized) return <Splash />

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="App" headerMode="none">
        {auth.token ? ProtectedScreens : AuthScreens}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
