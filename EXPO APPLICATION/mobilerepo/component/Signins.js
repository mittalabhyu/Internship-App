import 'react-native-gesture-handler';
import { setStatusBarBackgroundColor, setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';


import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity,ScrollView, Alert } from 'react-native';
import {Entypo} from 'react-native-vector-icons'
import {AuthContext} from './context';
import  './global';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { AsyncStorage } from 'react-native';



export function HomeScreen({navigation}) {
  const {signin}=React.useContext(AuthContext);
  const [ivp, validpass]=useState(true);
  const submitdata=()=>{
    if(data.username==""||data.password=="")
    {
       validpass(false);
    }
    else
    {
      validpass(true);
      submitdataa();
    }
  }
 
  const submitdataa=async()=>
    {
      fetch(global.apii+"login",{
        method:"post",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          
          email:data.username,
          password:data.password
         
        })
      })
      .then(res=>res.json()).then(data=>{
        
        if(data['message']=="Auth successful")
        {
         global.drawername=data['response']['firstname'];
         global.draweruname=data['response']['username'];
         
        signin(data['token'],data['response']['_id'],data['response']['username'],data);
        
        }
        else{
          Alert.alert("Invalid Login Details")
          
        }
      })
      

    }
 
    const [pass , checkPass] = useState(true);
    const [eye,SetEye]=useState('eye');
    function Setvisible(pass){
      checkPass(pass);
      if(pass==false)
      {
      SetEye('eye-with-line');
      }
      else{
        SetEye('eye');
      }
    }
    const [data, setData] = React.useState({
      username: '',
      password: '',
      check_textInputChange: false,
  
  });

  

  const textInputChange = (val) => {
      if( val.trim().length >= 4 ) {
          setData({
              ...data,
              username: val,
              check_textInputChange: true
          });
      } else {
          setData({
              ...data,
              username: val,
              check_textInputChange: false
              
          });
      }
  }

  const handlePasswordChange = (val) => {
      
          setData({
              ...data,
              password: val,
              
          });
        }
      return (
    
      <View style={styles.container}>
        <View style={{justifyContent:'center'}}><Image style={{width:300,height:300}}
        source={require('../assets/cc.png')}
         /></View>
          <View style={{justifyContent:'center'}}><Image style={{width:300,height:65,margin:2}}
        source={require('../assets/c.png')}
         /></View>
        
        
         <TextInput
         style={{fontWeight:'bold',margin:5,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:260,borderRadius:20,fontSize:20}}
         placeholder='Email'
         placeholderTextColor='darkgrey'
         onChangeText={(val) => textInputChange(val)}
         />
         <View style={{flexDirection:'row',alignItems:'center'}}>
          <TextInput
         style={{padding:5,paddingLeft:20,backgroundColor:'lightgray',fontWeight:'bold',width:220,borderTopLeftRadius:20,borderBottomLeftRadius:20,fontSize:20}}
         placeholder='Password' 
    
         placeholderTextColor='darkgrey'
         secureTextEntry={pass}
         onChangeText={(val) => handlePasswordChange(val)}
         />
         <TouchableOpacity onPress={()=> Setvisible(!pass)}>
           <Entypo name={eye} size={30} style={{backgroundColor:'lightgrey',borderTopRightRadius:20,color:"darkgray",borderBottomRightRadius:20,width:40,height:38,paddingTop:5}}></Entypo>
    
        </TouchableOpacity>
        </View>
        
        <StatusBar style="auto" />
        
        {ivp ? null :
         <Text style={{color:'red'}}>Email and password should not be empty</Text>
         }
         <TouchableOpacity  onPress={()=>navigation.navigate('ResetPassword')}>
         <Text style={{alignSelf:'center',paddingHorizontal:5,color:'red'}}>forgot password?</Text>
         </TouchableOpacity>
        <TouchableOpacity
         // onPress={() => {loginHandle( data.username, data.password )}}
         onPress={()=>submitdata()}
          style={{ backgroundColor: 'red',borderRadius:25,width:120,paddingLeft:20, height:40,marginVertical:10,justifyContent:'center',fontWeight:'bold' }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Connect</Text>
        </TouchableOpacity>
        
      
       
      
      
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <View style={{flex: 1, height: 1, backgroundColor: 'red'}} />
    <View>
      <Text style={{width: 50, textAlign: 'center',fontWeight:'bold',color:'red'}}>OR</Text>
    </View>
    <View style={{flex: 1, height: 1, backgroundColor: 'red'}} />
  </View>
  
  <Text style={{alignSelf:'center',paddingHorizontal:5,color:'red'}}>New User</Text>
           <TouchableOpacity
          onPress={() => navigation.navigate('Sign Up')}
          style={{ backgroundColor: 'red',borderRadius:20,alignSelf:'center',paddingLeft:18,paddingTop:5, height:40,width:160,marginTop:5,fontWeight:'bold' }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Connect Now</Text>
        </TouchableOpacity>
       </View>
     
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });