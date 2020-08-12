import { createDrawerNavigator } from '@react-navigation/drawer'
import { Icon } from 'native-base'
import React from 'react'

import { Home, MyAccount } from '../screens'

const Drawer = createDrawerNavigator()

export default function TabNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Drawer.Screen name="MyAccount" component={MyAccount} options={{ title: 'My Account' }} />
    </Drawer.Navigator>
  )
}
