import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import firebase from 'firebase';
import db from '../config'

export default class ExchangeScreen extends Component{
    constructor(){
        super()
        this.state={
            item_name:'',
            description:'',
            username:firebase.auth().currentUser.email
        }
    }

    addItem=(item_name,description)=>{
        db.collection('requests').add({
        item_name:this.state.item_name,
        description:this.state.description,
        userId:this.state.username
        })
        alert('Request generated')
        this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <View style={styles.conatiner}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Exchange Screen</Text>
            </View>

            <View>
            <TextInput
            style={styles.itemInput}
            placeholder={"Enter Item"}
            onChangeText={text=>this.setState({item_name:text})}
            value={this.state.item_name}
            />

            <TextInput
            style={styles.descriptionInput}
            placeholder={"Enter the item description"}
            onChangeText={text=>{this.setState({description:text})}}
            multiline={true}
            value={this.state.description}
            />

            <TouchableOpacity
            style={styles.addItemButton}
            onPress={()=>{this.addItem(this.state.item,this.state.description)}}
            >
                <Text style={styles.addItemButtonText}>Add Item</Text>
            </TouchableOpacity>
            </View>
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
    itemInput:{
        alignSelf:'center',
        width:250,
        height:35,
        marginTop:20,
        borderWidth:1,
        borderRadius:2
    },
    descriptionInput:{
        alignSelf:'center',
        width:350,
        height:150,
        borderWidth:1,
        marginTop:20,
        borderRadius:2
       
    },
    addItemButton:{
        backgroundColor:'red',
        width:100,
        height:35,
        borderRadius:5,
        alignSelf:'center',
        marginTop:20
    },
    addItemButtonText:{
        fontWeight:'bold',
        color:'white',
        fontSize:20,
        alignSelf:'center'
    }
})