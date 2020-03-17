import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTab from './BottomTab'
import { Splash, ExploreTab as Explore} from '../screens'

const Stack = createStackNavigator()

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="App" headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="App" component={Explore} />
    </Stack.Navigator>
  )
}
