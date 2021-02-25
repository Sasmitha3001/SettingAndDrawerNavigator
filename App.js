import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView } from 'react-native';
import LoginAndSignUpScreen from './Screens/LoginandSignUpScreen'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './Screens/HomeScreen';
import AppTabNavigator from './Components/AppTabNavigator'
import {createDrawerNavigator} from 'react-navigation-drawer'
import CustomSideBarMenu from './Components/CustomSideBarMenu'
import SettingScreen from './Screens/SettingScreen'
import DrawerNavigator from './Components/DrawerNavigator'


export default class App extends Component{
  render(){
    return(
      <AppConatiner/>
    )
  }
  
}
const SwitchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginAndSignUpScreen},
  AppTabNavigator:{screen:AppTabNavigator},
  DrawerNavigator:{screen:DrawerNavigator}
})

const AppConatiner=createAppContainer(SwitchNavigator)

