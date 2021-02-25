import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView,FlatList } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import firebase from 'firebase';
import db from '../config'
import {ListItem, Card} from 'react-native-elements'

export default class SettingScreen extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            username:'',
            firstName:'',
            lastName:''
        }
    }

    getUserDetails=()=>{
        var email=firebase.auth().currentUser.email
        db.collection('users').where('email','==',email).get()
        .then(snapshot=>{snapshot.forEach(doc=>{var document=doc.data});
    this.setState({
        email:document.email,
        password:document.password,
        username:document.username,
        lastName:document.lastName,
        firstName:document.firstName
    })})  
    }

    updateUserDetails=(email,password,lastName,username,firstName)=>{
        db.collection('users').update({
            email:this.state.email,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            username:this.state.username
        })
    }

    componentDidMount(){
        this.getUserDetails()
    }

    render(){
        return(
            <View style={styles.container}>
             <View style={styles.headerContainer}>
                <Text style={styles.header}>Setting Screen</Text>
            </View>

            <Card>

            <Card>
            <TextInput
            placeholder={'Enter Email'}
            onChangeText={text=>{this.setState({email:text})}}
            />
            </Card>

            <Card>
            <TextInput
            placeholder={'Enter Email'}
            onChangeText={text=>{this.setState({email:text})}}
            />
            </Card>

            <Card>
            <TextInput
            placeholder={'Enter Password'}
            secureTextEntry={true}
            onChangeText={text=>{this.setState({password:text})}}
            />
            </Card>

            <Card>
            <TextInput
            placeholder={'Enter Username'}
            onChangeText={text=>{this.setState({username:text})}}
            />
            </Card>

            <Card>
            <TextInput
            placeholder={'Enter First Name'}
            onChangeText={text=>{this.setState({firstName:text})}}
            />
            </Card>

            <Card>
            <TextInput
            placeholder={'Enter Last Name'}
            onChangeText={text=>{this.setState({lastName:text})}}
            />
            </Card>
            
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.updateUserDetails(this.state.email, this.state.firstName,this.state.lastName, this.state.password, this.state.username)}}
            >
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>

            </Card>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    headerContainer:{
        alignItems:'center',
        backgroundColor:'#63C5DA'
    },
    header:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:50,
        color:'white'
    },
    button:{
        backgroundColor:'red',
        width:100,
        height:35,
        borderRadius:5,
        alignSelf:'center',
        marginTop:20
    },
    buttonText:{
        fontWeight:'bold',
        color:'white',
        fontSize:20,
        alignSelf:'center'
    }
})