import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
export class Login extends Component {
  render() {
    return (
        <View style={[styles.container]}>
            <Text style={styles.loginText}>Login</Text>        
            <TextInput placeholder="Name" style={styles.inputbutton}></TextInput>
            <TextInput placeholder="Password" style={styles.passwordbutton}></TextInput>
            <TouchableOpacity style={styles.LoginStyles} onPress={() =>this.props.navigation.navigate('Index')}><Text style={styles.loginButtontext}>Login</Text></TouchableOpacity>
        </View>
      );
  }
}
const styles = StyleSheet.create({
    container:{
        display:"flex",
    },
    inputbutton:{
        marginTop:250,
        borderRadius:2,
        borderBottomWidth:1,
        backgroundColor:"#f8f9fa",
        borderBottomColor:"black",
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto"
    },
    passwordbutton:{
        marginTop:20,
        borderRadius:2,
        borderBottomWidth:1,
        borderBottomColor:"black",
        backgroundColor:"#f8f9fa",
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto"
    },
    loginButtontext:{
        textAlign:"center",
        color:"white"
    },
    LoginStyles:{
        backgroundColor:"#1bb1dc",
        padding:10,
        marginTop:20,
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:3,
    },
    loginText:{
        fontSize:20,
        marginTop:150,
        marginBottom:-190,
        textAlign:"center",
        color:"black",
    },
    });
export default Login;