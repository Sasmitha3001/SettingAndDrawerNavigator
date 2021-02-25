import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView,FlatList } from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import firebase from 'firebase';
import db from '../config'
import {ListItem} from 'react-native-elements'

export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            allRequests:[],
            username:''
        }
        
    }
    getUserDetails=()=>{
        db.collection('users').where('email','==',this.state.userId).get()
        .then((snapshot)=>{snapshot.forEach(doc=>{var document=doc.data();
        this.setState({username:document.firstName+" "+document.lastName}
            )})})
    }

    getAllRequests=()=>{
        db.collection('requests').where('userId','==',this.state.userId)
        .onSnapshot((snapshot)=>{
            var allRequests=[]
            snapshot.docs.map(doc=>{var document=doc.data();
            document['doc_id']=doc.id
            allRequests.push(document)
            this.setState({
                allRequests:allRequests
            })
        })
        })
    }

    componentDidMount(){
        this.getUserDetails()
        this.getAllRequests()
    }

   keyExtractor=(item,index)=>index.toString()

   renderItem=({item,i})=>{
    return(
        <View>
            <Text>{item.item_name}</Text>

            <ListItem
            key={i}
            title={item.item_name}
            titleStyle={{fontWeight:"bold",color:'black'}}
            subtitle={"Requested by "+item.description}
            bottomDivider
            />
        </View>
    )
   }

    render(){
        return(
         this.state.allRequests.length===0?(
             <View style={styles.container}>
                 <View style={styles.headerContainer}>
                <Text style={styles.header}>Home Screen</Text>
                </View>
                <Text>List of all requested items</Text>
             </View>
         ):(<View style={styles.container}>
            <View style={styles.headerContainer}>
            <Text style={styles.header}>Home Screen</Text>
            </View>
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.allRequests}
            renderItem={this.renderItem}
            />
            </View>
         )
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
    }
})

    
