import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createDrawerNavigator } from 'react-navigation-drawer'
import { Transition } from 'react-native-reanimated'

import { Splash as SplashScreen } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'

const Splash = { screen: SplashScreen }

const nav = createAnimatedSwitchNavigator(
  {
    Splash,
    App: BottomTabNavigator,
  },
  {
    // transition: (
    //   <Transition.Together>
    //     <Transition.Out type="slide-left" durationMs={200} />
    //     <Transition.In type="slide-right" durationMs={300} />
    //   </Transition.Together>
    // ),
    initialRouteName: 'App',
  }
)

export default createAppContainer(BottomTabNavigator)
