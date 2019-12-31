import React from 'react'
import { Icon } from 'native-base'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Transition } from 'react-native-reanimated'

import { ACCENT_COLOR, TEXT_COLOR_WHITE, TEXT_COLOR_GRAY } from '../fixtures/styles'

import SideBar from '../components/SideBar'
import BottomBar from '../components/BottomBar'

import {
  Splash,
  Home,
  Login,
  PitSelection,
  Checklist,
  ChecklistCoalWinningCreate,
  ChecklistCoalWinningSubmit,
} from '../screens'

const SplashScreen = { screen: Splash }
const LoginScreen = { screen: Login }
const PitSelectionScreen = { screen: PitSelection }
const HomeScreen = { screen: Home }

const stackOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: ACCENT_COLOR,
    },
    headerTintColor: TEXT_COLOR_WHITE,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  navigationOptions: ({ navigation }) => {
    return { tabBarVisible: navigation.state.routes.length === 1 }
  },
  transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
}

const ChecklistStack = {
  Checklist: { screen: Checklist },
  ChecklistCoalWinningCreate: { screen: ChecklistCoalWinningCreate },
  ChecklistCoalWinningSubmit: { screen: ChecklistCoalWinningSubmit },
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Tasks: createStackNavigator({ Tasks: HomeScreen }, stackOptions),
    Performances: createStackNavigator({ Performances: HomeScreen }, stackOptions),
    Checklist: createStackNavigator(ChecklistStack, stackOptions),
    Report: createStackNavigator({ Report: HomeScreen }, stackOptions),
  },
  {
    tabBarComponent: BottomBar,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        if (routeName === 'Tasks') {
          return <Icon type="MaterialIcons" name="announcement" style={{ color: tintColor, width: 24, height: 24 }} />
        } else if (routeName === 'Performances') {
          return <Icon type="MaterialIcons" name="assessment" style={{ color: tintColor, width: 24, height: 24 }} />
        } else if (routeName === 'Checklist') {
          return <Icon type="MaterialIcons" name="assignment" style={{ color: tintColor, width: 24, height: 24 }} />
        } else {
          return <Icon type="MaterialIcons" name="description" style={{ color: tintColor, width: 24, height: 24 }} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: ACCENT_COLOR,
      inactiveTintColor: TEXT_COLOR_GRAY,
    },
  }
)

const drawerNavigator = createDrawerNavigator({ Home: bottomTabNavigator }, { contentComponent: SideBar })

const nav = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Login: LoginScreen,
    PitSelection: PitSelectionScreen,
    App: drawerNavigator,
  },
  {
    // transition: (
    //   <Transition.Together>
    //     <Transition.Out type="slide-left" durationMs={200} />
    //     <Transition.In type="slide-right" durationMs={300} />
    //   </Transition.Together>
    // ),
    initialRouteName: 'Splash',
  }
)

export default createAppContainer(nav)
