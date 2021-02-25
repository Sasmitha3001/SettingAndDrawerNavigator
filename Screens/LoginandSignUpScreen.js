import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import firebase from 'firebase';
require('firebase/auth')
import db from '../config'
import { ScrollView } from 'react-native';



export default class LoginAndSignUpScreen extends Component{
  constructor(){
    super()
    this.state={
      email:"k.sasy30@gmail.com",
      password:"sas3001",
      username:"",
      firstName:"",
      lastName:"",
      isModalVisible:false
    }
  }
  userSignUp=(email,password)=>{
      console.log("signupfunction")
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      db.collection('users').add({
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      password:this.state.password,
      username:this.state.username 
      })
     alert("User added successfully")
    })
    
    .catch((error)=>{
      var errorCode=error.code
      var errorMessage=error.message

      return Alert.alert(errorMessage)
    })
  }

  userLogin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      alert("User has logged in Successfully"),
      this.props.navigation.navigate('Home')
    console.log(this.state.isModalVisible)
    })

    .catch((error)=>{
      var errosCode=error.code
      var errorMessage=error.message
      
      return Alert.alert(errorMessage)
    })
  }
  showModal(){
    return(
      <View>
    
    <Modal
    animationType={'fade'}
    style={styles.modal}
    visible={this.state.isModalVisible}
    >
    <ScrollView>
      <Text style={styles.modalHeader}>Login Details</Text>
    <TextInput
        style={styles.modalInputEmail}
        placeholder={"Enter email id"}
        onChangeText={(text)=>{this.setState({
          email:text
        })}}/>

        <TextInput
        style={styles.modalInputpassword}
        placeholder={"Enter password"}
        secureTextEntry={true}
        onChangeText={(text)=>{this.setState({
          password:text
        })}}/>
        
        <TouchableOpacity
        style={styles.modalLoginButton}
        onPress={()=>{this.userLogin(this.state.email,this.state.password)}}
        >
          <Text style={styles.modalLoginButtonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
      style={styles.modalCancelButton}
      onPress={()=>{this.setState({isModalVisible:false})}}
      >
        <Text style={styles.modalCancelButtonText}>Cancel</Text>
      </TouchableOpacity>

    </ScrollView>
    </Modal>
    </View>
    )
    
  }

  componentDidMount(){
    console.log("component did mount")
    this.showModal()
  }
  
  render(){
    
    return(
      <SafeAreaProvider>
        <View style={styles.container}>
          <ScrollView>

        {this.showModal()}

        <Text style={styles.header}>Barter System</Text>

        <TextInput
        style={styles.inputFirstName}
        placeholder={"Enter First Name"}
        maxLength={8}
        onChangeText={(text)=>{this.setState({
          firstName:text
        })}}/>

      <TextInput
        style={styles.inputLastName}
        placeholder={"Enter Last Name "}
        maxLength={10}
        onChangeText={(text)=>{this.setState({
          lastName:text
        })}}/>

        <TextInput
        style={styles.inputEmail}
        placeholder={"Enter email id"}
        keyboardType={'email-address'}
        onChangeText={(text)=>{this.setState({
          email:text
        })}}/>

        <TextInput
        style={styles.inputpassword}
        placeholder={"Enter password (enter atleast 6 characters)"}
        secureTextEntry={true}
        onChangeText={(text)=>{this.setState({
          password:text
        })}}/>

        <TextInput
        style={styles.inputUsername}
        placeholder={"Enter username"}
        onChangeText={(text)=>{this.setState({
          username:text
        })}}/>

      <TouchableOpacity 
      style={styles.signInButton}
      onPress={()=>{this.userSignUp(this.state.email,this.state.password)}}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.message}>Already have an account ?</Text>

      <TouchableOpacity
      style={styles.loginButton}
      onPress={()=>{this.setState({isModalVisible:true})}}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      </ScrollView>
      </View>
      </SafeAreaProvider>
      

    )
  }
}

const styles=StyleSheet.create({
  inputUsername:{
    height:25,
    width:350,
    alignItems:'center',
    borderBottomWidth:1,
    marginTop:50,
    alignSelf:'center'
  },
  inputpassword:{
    height:25,
    width:350,
    alignItems:'center',
    borderBottomWidth:1,
    marginTop:50,
    alignSelf:'center'
  },
  inputFirstName:{
    height:25,
    width:350,
    alignItems:'center',
    borderBottomWidth:1,
    alignSelf:'center',
    marginTop:50
   
  },
  inputEmail:{
    height:25,
    width:350,
    alignItems:'center',
    borderBottomWidth:1,
    marginTop:50,
    alignSelf:'center'

  },
  inputLastName:{
    height:25,
    width:350,
    alignItems:'center',
    borderBottomWidth:1,
    marginTop:50,
    alignSelf:'center'
  },
  signInButton:{
    width:150,
    height:35,
    borderRadius:25,
    backgroundColor:'#0099FF',
    alignSelf:'center',
    marginTop:25
  },
  loginButton:{
    width:100,
    height:35,
    borderRadius:25,
    backgroundColor:'#0099FF',
    alignSelf:'center',
    marginTop:10
  },
  modal:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex:1,
    justifyContent:'center'
  },
  message:{
    alignSelf:'center',
    marginTop:70,
    color:'red',
    fontSize:20,
  },
  signInButtonText:{
    alignSelf:'center',
    color:'white',
    fontSize:20,
    marginTop:2
  },
  loginButtonText:{
    alignSelf:'center',
    color:'white',
    fontSize:20,
    marginTop:2

  },
  header:{
    color:'#682CBF',
    alignSelf:'center',
    fontSize:72,
    textAlign:'center'
    
  },
  modalInputEmail:{
    alignSelf:'center',
    borderBottomWidth:1,
    marginTop:10,
    height:25,
    width:350,
  },
  modalInputpassword:{
    alignSelf:'center',
    borderBottomWidth:1,
    marginTop:10,
    height:25,
    width:350,
  },
  modalHeader:{
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:25,
    color:'green'
  },
  modalLoginButton:{
    width:100,
    height:25,
    borderRadius:10,
    marginTop:25,
    alignSelf:'center',
    borderWidth:1,
    marginRight:165
  },
  modalLoginButtonText:{
    fontSize:15,
    alignSelf:'center',
    color:'#00CDAC',
    fontWeight:'bold',
    
  },
  container:{
    flex:1
  },
  modal:{
    flex:1,
   
  },
  modalCancelButton:{
    width:100,
    height:25,
    borderRadius:10,
    marginTop:15,
    alignSelf:'center',
    borderWidth:1,
    marginLeft:115,
    marginBottom:550
  },
  modalCancelButtonText:{
    fontSize:15,
    alignSelf:'center',
    color:'#00CDAC',
    fontWeight:'bold'
  }


})