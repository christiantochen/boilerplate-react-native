import React from 'react'
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {
    ACCENT_COLOR,
    TEXT_COLOR_WHITE
} from 'app/fixtures/styles';

import DrawerMenu from 'app/components/DrawerMenu'
import HamburgerMenu from 'app/components/HamburgerMenu'

import Splash from 'app/screens/Splash';
import Login from 'app/screens/Login';
import PitSelection from 'app/screens/PitSelection';
import Home from 'app/screens/Home';

const SplashScreen = { screen: Splash }
const LoginScreen = { screen: Login }
const PitSelectionScreen = { screen: PitSelection }
const HomeScreen = { screen: Home, params: { test: 'test' } }

const AppStackNavigator = createStackNavigator(
    {
        Home: HomeScreen
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: ACCENT_COLOR,
            },
            headerTintColor: TEXT_COLOR_WHITE,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerLeft: (
                <HamburgerMenu onPress={() => { navigation.toggleDrawer(); }} />
            )
        })
    }
)

const AppDrawerNavigator = createDrawerNavigator(
    {
        App: AppStackNavigator
    },
    {
        contentComponent: DrawerMenu
    })

const RNApp = createStackNavigator(
    {
        Splash: SplashScreen,
        Login: LoginScreen,
        PitSelection: PitSelectionScreen,
        App: AppDrawerNavigator
    }, {
        initialRouteName: 'App',
        headerMode: 'none'
    }
);

export default createAppContainer(RNApp);
