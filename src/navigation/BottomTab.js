import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExploreTab } from '../screens'

const Tab = createBottomTabNavigator()

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Explore'} component={ExploreTab} />
    </Tab.Navigator>
  )
}
