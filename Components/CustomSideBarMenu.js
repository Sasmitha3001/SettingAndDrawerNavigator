import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import {DrawerItems,createDrawerNavigator} from 'react-navigation-drawer'

export default class SideBarMenu extends Component{
    render(){
        return(
            <View>
                <DrawerItems {...this.props}/>
                <View style={styles.container}>

                <TouchableOpacity
                style={styles.logOutButton}
                onPress={()=>{firebase.auth().signOut();
                this.props.navigation.navigate('LoginScreen')}}
                >
                    <Text style={styles.logOutButtonText}>Log Out</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({})