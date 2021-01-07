import 'react-native-gesture-handler';
import { setStatusBarBackgroundColor, setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';


import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity,ScrollView, Alert } from 'react-native';
import {Entypo} from 'react-native-vector-icons'

import  './global';




export function forgotPass({navigation}) {
  
    const [pass , checkPass] = useState(true);
  const [email,setEmail]=useState("");
    const [passwor,setPassword]=useState("");
    const [ivp, validpass]=useState(true);
    const [cnfp,setcnfp]=useState("");
 
   
    const Handelpass=(val)=>
    {
      if(val.length < 8)
      {
        validpass(false);
      }
      else
      {
        validpass(true);
      }

    }
  const submitdata=async()=>
    {
        if(ivp==true){

      
            if(cnfp!=passwor){
              Alert.alert("Password and confirm password do not match")
            }
            else
            if(email==""||passwor==""||cnfp=="")
            {
              Alert.alert("All fields are manadatory");
            }
            else{
               
      fetch(global.apii+"forgotPassword",{
        method:"post",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          
          email:email,
          password:passwor
         
        })
      })
      .then(res=>res.json()).then(data=>{
        console.log(data);
        if(data['message']=="Password Updated")
        {
         
            Alert.alert("Password Updated Successfully");
            navigation.navigate("Home");

        }
        else{
          Alert.alert("Mail Do not Exist");
          
        }
      })
   
}}
else{
    Alert.alert("Error");
}

    }
 
    
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
   

      return (
    
      <View style={styles.container}>
        <View style={{justifyContent:'center'}}><Image style={{width:300,height:300}}
        source={require('../assets/cc.png')}
         /></View>
         
        
        
         <TextInput
         style={{height:50,fontWeight:'bold',marginVertical:10,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:"70%",borderRadius:20,fontSize:20}}
         placeholder='Email' 
         placeholderTextColor='darkgrey'
         value={email}
         onChangeText={text=>setEmail(text)}
         
         
         />
         <View style={{flexDirection:'row',alignItems:'flex-end'}}>
           
          <TextInput
         style={{height:50,marginVertical:10,padding:5,paddingLeft:20,backgroundColor:'lightgray',fontWeight:'bold',width:"60%",borderTopLeftRadius:20,borderBottomLeftRadius:20,fontSize:20}}
         placeholder='Password' 
        
         placeholderTextColor='darkgrey'
         secureTextEntry={pass}
    
         value={passwor}
         onChangeText={text=>setPassword(text)}
         onEndEditing={(g)=>Handelpass(g.nativeEvent.text)}
         
         />
         <TouchableOpacity onPress={()=> Setvisible(!pass)}>
         
         <Entypo name={eye} size={30} style={{backgroundColor:'lightgrey',marginVertical:10,borderTopRightRadius:20,borderBottomRightRadius:20,width:40,height:50,color:"darkgray",paddingTop:8}}></Entypo>
        </TouchableOpacity>
        </View>
        {ivp ? null :
         <Text style={{color:'red'}}>Password must be atleast 8 characters long</Text>
         }
        <View style={{flexDirection:'row'}}>
          <TextInput
         style={{height:50,marginVertical:10,padding:5,paddingLeft:20,backgroundColor:'lightgray',fontWeight:'bold',width:"60%",borderTopLeftRadius:20,borderBottomLeftRadius:20,fontSize:20}}
         placeholder='Confirm Password' 
        require={true}
         placeholderTextColor='darkgrey'
         secureTextEntry={pass}
         value={cnfp}
         onChangeText={text=>setcnfp(text)}
         
         />
         <TouchableOpacity onPress={()=> Setvisible(!pass)}>
         
         <Entypo name={eye} size={30} style={{backgroundColor:'lightgrey',marginVertical:10,borderTopRightRadius:20,borderBottomRightRadius:20,width:40,height:50,color:"darkgray",paddingTop:8}}></Entypo>
        </TouchableOpacity>
        </View>
        
        <StatusBar style="auto" />
        
        
        <TouchableOpacity
         // onPress={() => {loginHandle( data.username, data.password )}}
         onPress={()=>submitdata()}
          style={{ backgroundColor: 'red',borderRadius:25,width:120,paddingLeft:20, height:40,marginVertical:10,justifyContent:'center',fontWeight:'bold' }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Submit</Text>
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