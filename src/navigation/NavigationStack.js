import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { ACCENT_COLOR, TEXT_COLOR_WHITE } from '../fixtures/styles';

import Sidebar from 'app/components/Sidebar';

import { Splash, Home, Login, PitSelection } from '../screens';

const SplashScreen = { screen: Splash };
const LoginScreen = { screen: Login };
const PitSelectionScreen = { screen: PitSelection };
const HomeScreen = { screen: Home };

const options = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: ACCENT_COLOR
    },
    headerTintColor: TEXT_COLOR_WHITE,
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  },
};

const bottomTabNavigator = createBottomTabNavigator({
  Tasks: createStackNavigator({ Tasks: HomeScreen }, options),
  Performances: createStackNavigator({ Performances: HomeScreen }, options),
  Checklist: createStackNavigator({ Checklist: HomeScreen }, options),
  Report: createStackNavigator({ Report: HomeScreen }, options)
});

const drawerNavigator = createDrawerNavigator(
  {
    Home: bottomTabNavigator
  },
  {
    contentComponent: Sidebar
  }
);

const nav = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Login: LoginScreen,
    PitSelection: PitSelectionScreen,
    App: drawerNavigator
  },
  {
    initialRouteName: 'Splash'
  }
);

export default createAppContainer(nav);
