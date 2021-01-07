import 'react-native-gesture-handler';

import React,{useState} from 'react';

import {StyleSheet,  Text, View,TouchableOpacity,ScrollView,Alert } from 'react-native';

import {AuthContext} from './context';
import { AsyncStorage } from 'react-native';
import { registerRootComponent } from 'expo';



export function Interest({navigation,route}){
  const [interest,setInterest]=useState("");
  const [interest1,setInterest1]=useState("");
  const [interest2,setInterest2]=useState("");
  const [interest3,setInterest3]=useState("");
  const [interest4,setInterest4]=useState("");
  const [interest5,setInterest5]=useState("");
  const [interest6,setInterest6]=useState("");
  const [interest7,setInterest7]=useState("");
  const [interest8,setInterest8]=useState("");
  const [interest9,setInterest9]=useState("");
  const [interest10,setInterest10]=useState("");
  const [interest11,setInterest11]=useState("");
  const submitdata=async()=>
    {
     const {city}=route.params;
     const {passwor}=route.params;
     const {contactn}=route.params;
     const {countryn}=route.params;
     const {email}=route.params;
     const {name}=route.params;
     const {username}=route.params;
     const {lastname}=route.params;
     const {cnfp}=route.params;
     var intr=[interest,interest1,interest2,interest3,interest4,interest5,interest6,interest7,interest8,interest9,interest10,interest11];
     var intrr=[];
     for(let i=0;i<intr.length;i++)
     {
       if(intr[i]!="")
       {
         intrr.push(intr[i]);
       }
     }
     
     if(intrr.length==0){
       Alert.alert("Select atleast 1 interest");

     }
     else{
  
      fetch(global.apii+"signup",{
        method:"post",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          city:city,
          confirmpassword:cnfp,
          contact:contactn,
          country:countryn,
          email:email,
          firstname:name,
          intrest:intrr,
          lastname:lastname,
          password:passwor,
          username:username
         
        })
      })
      .then(res=>res.json()).then(data=>{
        if(data['message']=="User created")
        {
         
          Alert.alert("Thanks for Connecting with us");
          navigation.navigate('Home');


        }
        else
        if(data['message']=="Mail exists")
        {
          Alert.alert("Mail id already Exists");

        }
        else{
          Alert.alert("You are missing out something");
        }
      })
     
    }
    }
    const [pass , checkPass] = useState('black');
    function Setvisible(pass){
      if(pass=='orange')
      {
      pass='black';
      setInterest("");
      }
      else{
        pass='orange';
        setInterest("Memes");
      }
      checkPass(pass);
    }
    const [pass1 , checkPass1] = useState('black');
    function Setvisible1(pass1){
      if(pass1=='orange')
      {
      pass1='black';
      setInterest1("");
      }
      else{
        pass1='orange';
        setInterest1("Comics");
      }
      checkPass1(pass1);
    }
    const [pass2 , checkPass2] = useState('black');
    function Setvisible2(pass2){
      if(pass2=='orange')
      {
      pass2='black';
      setInterest2("");
      }
      else{
        pass2='orange';
        setInterest2("News");
      }
      checkPass2(pass2);
    }
    const [pass3 , checkPass3] = useState('black');
    function Setvisible3(pass3){
      if(pass3=='orange')
      {
      pass3='black';
      setInterest3("");
      }
      else{
        pass3='orange';
        setInterest3("AI");
      }
      checkPass3(pass3);
    }
    const [pass4 , checkPass4] = useState('black');
    function Setvisible4(pass4){
      if(pass4=='orange')
      {
      pass4='black';
      setInterest4("");
      }
      else{
        pass4='orange';
        setInterest4("Science");
      }
      checkPass4(pass4);
    }
    const [pass5 , checkPass5] = useState('black');
    function Setvisible5(pass5){
      if(pass5=='orange')
      {
      pass5='black';
      setInterest5("");
      }
      else{
        pass5='orange';
        setInterest5("Blogging");
      }
      checkPass5(pass5);
    }
    const [pass6 , checkPass6] = useState('black');
    function Setvisible6(pass6){
      if(pass6=='orange')
      {
      pass6='black';
      setInterest6("");
      }
      else{
        pass6='orange';
        setInterest6("DIY");
      }
      checkPass6(pass6);
    }
    const [pass7 , checkPass7] = useState('black');
    function Setvisible7(pass7){
      if(pass7=='orange')
      {
      pass7='black';
      setInterest7("");
      }
      else{
        pass7='orange';
        setInterest7("Art");
      }
      checkPass7(pass7);
    }
    const [pass8 , checkPass8] = useState('black');
    function Setvisible8(pass8){
      if(pass8=='orange')
      {
      pass8='black';
      setInterest8("");
      }
      else{
        pass8='orange';
        setInterest8("Jokes");
      }
      checkPass8(pass8);
    }
    const [pass9 , checkPass9] = useState('black');
    function Setvisible9(pass9){
      if(pass9=='orange')
      {
      pass9='black';
      setInterest9("");
      }
      else{
        pass9='orange';
        setInterest9("Food");
      }
      checkPass9(pass9);
    }
    const [pass10 , checkPass10] = useState('black');
    function Setvisible10(pass10){
      if(pass10=='orange')
      {
      pass10='black';
      setInterest10("");
      }
      else{
        pass10='orange';
        setInterest10("Music");
      }
      checkPass10(pass10);
    }
    const [pass11 , checkPass11] = useState('black');
    function Setvisible11(pass11){
      if(pass11=='orange')
      {
      pass11='black';
      setInterest11("");
      }
      else{
        pass11='orange';
        setInterest11("Dance");
      }
      checkPass11(pass11);
    }
    return(
      
      <View style={styles.container}>
        <Text style={{fontSize:35}}>Choose your interests</Text>
        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',flex:1}}>
        <TouchableOpacity
      onPress={() =>  Setvisible(pass)}
      style={{ backgroundColor:pass,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white',textAlign:'center' }}>Memes</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => Setvisible1(pass1)}
      style={{ backgroundColor: pass1,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white',textAlign:'center' }}>Comics</Text>
    </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',flex:1}}>
        <TouchableOpacity
      onPress={() => Setvisible2(pass2)}
      style={{ backgroundColor: pass2,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white',textAlign:'center' }}>News</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => Setvisible3(pass3)}
      style={{ backgroundColor: pass3,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white' ,textAlign:'center' }}>AI</Text>
    </TouchableOpacity>
       </View>
       <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',flex:1}}>
        <TouchableOpacity
      onPress={() => Setvisible4(pass4)}
      style={{ backgroundColor: pass4,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white',textAlign:'center' }}>Science</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => Setvisible5(pass5)}
      style={{ backgroundColor: pass5,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white' ,textAlign:'center' }}>Blogging</Text>
    </TouchableOpacity>
       </View>
       <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',flex:1}}>
        <TouchableOpacity
      onPress={() => Setvisible6(pass6)}
      style={{ backgroundColor: pass6,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white',textAlign:'center' }}>DIY</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>Setvisible7(pass7)}
      style={{ backgroundColor: pass7,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white' ,textAlign:'center' }}>Art</Text>
    </TouchableOpacity>
       </View>
       <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',flex:1}}>
        <TouchableOpacity
      onPress={() => Setvisible8(pass8)}
      style={{ backgroundColor: pass8,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white',textAlign:'center' }}>Jokes</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => Setvisible9(pass9)}
      style={{ backgroundColor: pass9,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white' ,textAlign:'center' }}>Food</Text>
    </TouchableOpacity>
       </View>
       <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',flex:1}}>
        <TouchableOpacity
      onPress={() =>Setvisible10(pass10)}
      style={{ backgroundColor: pass10,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white',textAlign:'center' }}>Music</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => Setvisible11(pass11)}
      style={{ backgroundColor: pass11,borderRadius:25,width:120, height:40,marginHorizontal:20,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white' ,textAlign:'center' }}>Dance</Text>
    </TouchableOpacity>
       </View>
        <View style={{flex:1}}>
      <TouchableOpacity
      onPress={() =>submitdata()}
      style={{ backgroundColor: 'red',borderRadius:25,width:120, height:40,marginTop:10,justifyContent:'center',fontWeight:'bold' }}>
      <Text style={{ fontSize: 20, color: 'white' ,textAlign:'center' }}>Connect</Text>
    </TouchableOpacity>
    </View>
    </View>
    )}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });