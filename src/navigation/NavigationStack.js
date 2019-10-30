import React from 'react'
import { Icon } from 'react-native-elements'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import { ACCENT_COLOR, TEXT_COLOR_WHITE, TEXT_COLOR_GRAY } from '../fixtures/styles'

import Sidebar from 'app/components/Sidebar'

import { Splash, Home, Login, PitSelection, Checklist } from '../screens'

const SplashScreen = { screen: Splash }
const LoginScreen = { screen: Login }
const PitSelectionScreen = { screen: PitSelection }
const HomeScreen = { screen: Home }
const ChecklistScreen = { screen: Checklist }

const options = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: ACCENT_COLOR,
    },
    headerTintColor: TEXT_COLOR_WHITE,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Tasks: createStackNavigator({ Tasks: HomeScreen }, options),
    Performances: createStackNavigator({ Performances: HomeScreen }, options),
    Checklist: createStackNavigator({ Checklist: ChecklistScreen }, options),
    Report: createStackNavigator({ Report: HomeScreen }, options),
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        if (routeName === 'Tasks') {
          return <Icon size={24} name="announcement" color={tintColor} />
        } else if (routeName === 'Performances') {
          return <Icon size={24} name="assessment" color={tintColor} />
        } else if (routeName === 'Checklist') {
          return <Icon size={24} name="assignment" color={tintColor} />
        } else {
          return <Icon size={24} name="description" color={tintColor} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: ACCENT_COLOR,
      inactiveTintColor: TEXT_COLOR_GRAY,
    },
  }
)

const drawerNavigator = createDrawerNavigator(
  {
    Home: bottomTabNavigator,
  },
  {
    contentComponent: Sidebar,
  }
)

const nav = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Login: LoginScreen,
    PitSelection: PitSelectionScreen,
    App: drawerNavigator,
  },
  {
    initialRouteName: 'Splash',
  }
)

export default createAppContainer(nav)