import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView,Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from '../Screens/HomeScreen';
import ExchangeScreen from '../Screens/ExchangeScreen'
import { Icon } from 'react-native-elements';

export const AppTabNavigator=createBottomTabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel:"Home Screen",
            tabBarIcon:<Icon name={'home'} type={'ant-design'}/>
        }
    },
    Exchange:{
        screen:ExchangeScreen,
        navigationOptions:{
            tabBarLabel:"Exchange",
            tabBarIcon:<Icon name={'exchange'} type={'font-awesome'}/>
        }
    }
})