import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomescreen';
import { createAppContainer,createSwitchNavigator} from 'react-navigation'
import {AppTabNavigator} from './components/AppTabNavigator'
import {AppDrawerNavigator} from './components/appdrawernavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  HomeScreen:{screen:HomeScreen}
})
const AppContainer = createAppContainer(SwitchNavigator)

const TabNavigator = createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen},
  ExchangeScreen:{screen:ExchangeScreen}
},
)
const Appcontainer = createAppContainer(TabNavigator)
