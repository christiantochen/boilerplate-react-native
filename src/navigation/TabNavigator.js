import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'native-base'
import React from 'react'

import { Home, MyAccount } from '../screens'

const Tab = createBottomTabNavigator()

function getIconName({ name }, focused) {
  switch (name) {
    case 'Home':
      return focused ? 'home' : 'home-outline'
    default:
      return focused ? 'person' : 'person-outline'
  }
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused, color, size }) => <Icon name={getIconName(route, focused)} size={size} color={color} />,
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Tab.Screen name="MyAccount" component={MyAccount} options={{ title: 'My Account' }} />
    </Tab.Navigator>
  )
}
