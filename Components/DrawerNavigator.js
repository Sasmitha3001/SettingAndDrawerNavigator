import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import {DrawerItems,createDrawerNavigator} from 'react-navigation-drawer'
import HomeScreen from './Screens/HomeScreen';
import CustomSideBarMenu from './Components/CustomSideBarMenu'
import SettingScreen from './Screens/SettingScreen'

export const DrawerNavigator=createDrawerNavigator({
    Home:{
      screen:HomeScreen
    },
    Settings:{
      screen:SettingScreen
    },
    contentComponent:{
      screen:CustomSideBarMenu
    },
    initialRoute:'Home'
  })
  