import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image,TextInput,Button, ImageBackground,Alert,TouchableOpacity,ScrollView } from 'react-native';
import {AuthContext} from './context';
import {Entypo} from 'react-native-vector-icons'


export function SignUp({navigation}){
    const [pass , checkPass] = useState(true);
    const [name,setName]=useState("");
    const [username,setuserName]=useState("");
    const [email,setEmail]=useState("");
    const [passwor,setPassword]=useState("");
    const [city,setCity]=useState("");
    const [countryn,setcountry]=useState("");
    const [contactn,setcontact]=useState("");
    const [lastname,setLName]=useState("");
    const [cnfp,setcnfp]=useState("");
    const [ivp, validpass]=useState(true);
    const [ive, validemail]=useState(true);
    const [ivph, validphn]=useState(true);
    const Handelemail=(val)=>
    {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(reg.test(val)==false)
      {
        validemail(false);
      }
      else
      {
        validemail(true);
      }

    }
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
    const Handelphone=(val)=>
    {
      if(val.length !=10)
      {
        validphn(false);
      }
      else
      {
        validphn(true);
      }

    }
    const submitdata=()=>
    {
      if(ive==true && ivp==true && ivph==true){

      
      if(cnfp!=passwor){
        Alert.alert("Password and confirm password do not match")
      }
      else
      if(name==""||username==""||email==""||passwor==""||city==""||countryn==""||contactn==""||lastname==""||cnfp=="")
      {
        Alert.alert("All fields are manadatory");
      }
      else{
      navigation.navigate('Interest',{city:city,passwor:passwor,contactn:contactn,countryn:countryn,email:email,name:name,username:username,lastname:lastname,cnfp:cnfp});

    }
  }
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
    const [passw,checkpsw]=useState('');
    const Passlen=(enteredText)=>{
      checkpsw(enteredText);
      
    };
    
    return(
      <ScrollView style={{flexGrow: 1,
        backgroundColor: '#fff'}}>
        
        <View style={{justifyContent:'center',flex:1}}><Image style={{width:300,height:65,marginTop:20,marginBottom:10,alignSelf:'center'}}
        source={require('../assets/c.png')}
         /></View>
        
        
         <TextInput
         style={{marginLeft:"15%",height:50,fontWeight:'bold',marginVertical:10,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:"70%",borderRadius:20,fontSize:20}}
         placeholder='First Name'
         placeholderTextColor='darkgrey'
         value={name}
         onChangeText={text=>setName(text)}
         />
         <TextInput
         style={{marginLeft:"15%",height:50,fontWeight:'bold',marginVertical:10,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:"70%",borderRadius:20,fontSize:20}}
         placeholder='Last Name'
         placeholderTextColor='darkgrey'
         value={lastname}
         onChangeText={text=>setLName(text)}
         />
          <TextInput
         style={{marginLeft:"15%",height:50,fontWeight:'bold',marginVertical:10,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:"70%",borderRadius:20,fontSize:20}}
         placeholder='Email' 
         placeholderTextColor='darkgrey'
         value={email}
         onChangeText={text=>setEmail(text)}
         onEndEditing={(e)=>Handelemail(e.nativeEvent.text)}
         
         />
         {ive ? null :
         <Text style={{color:'red',marginLeft:"15%"}}>Invalid email type</Text>
         }
         
          <TextInput
         style={{marginLeft:"15%",height:50,fontWeight:'bold',marginVertical:10,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:"70%",borderRadius:20,fontSize:20}}
         placeholder='Username'
         placeholderTextColor='darkgrey'
         value={username}
         onChangeText={text=>setuserName(text)}
         />
          <TextInput
         style={{marginLeft:"15%",height:50,fontWeight:'bold',marginVertical:10,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:"70%",borderRadius:20,fontSize:20}}
         placeholder='Contact No.'
         keyboardType='phone-pad'
         placeholderTextColor='darkgrey'
         value={contactn}
         onChangeText={text=>setcontact(text)}
         onEndEditing={(f)=>Handelphone(f.nativeEvent.text)}
         />
          {ivph ? null :
         <Text style={{color:'red',marginLeft:"15%"}}>Invalid Phone Number</Text>
         }
        
         
          <TextInput
         style={{marginLeft:"15%",height:50,fontWeight:'bold',marginVertical:10,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:"70%",borderRadius:20,fontSize:20}}
         placeholder='Country'
         placeholderTextColor='darkgrey'
         value={countryn}
         onChangeText={text=>setcountry(text)}
         />
          <TextInput
         style={{marginLeft:"15%",height:50,fontWeight:'bold',marginVertical:10,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:"70%",borderRadius:20,fontSize:20}}
         placeholder='City'
         placeholderTextColor='darkgrey'
         value={city}
         onChangeText={text=>setCity(text)}
         />
         <View style={{flexDirection:'row',alignItems:'flex-end'}}>
           
          <TextInput
         style={{height:50,marginVertical:10,marginLeft:'15%',padding:5,paddingLeft:20,backgroundColor:'lightgray',fontWeight:'bold',width:"60%",borderTopLeftRadius:20,borderBottomLeftRadius:20,fontSize:20}}
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
         <Text style={{color:'red',marginLeft:"15%"}}>Password must be atleast 8 characters long</Text>
         }
        <View style={{flexDirection:'row'}}>
          <TextInput
         style={{height:50,marginVertical:10,padding:5,paddingLeft:20,marginLeft:'15%',backgroundColor:'lightgray',fontWeight:'bold',width:"60%",borderTopLeftRadius:20,borderBottomLeftRadius:20,fontSize:20}}
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
         <View style={{flex:1}}>
          <TouchableOpacity
          onPress={() => submitdata()}
          style={{ backgroundColor: 'orange',borderRadius:20,alignSelf:'center',paddingLeft:25,paddingTop:5, height:40,width:100,marginTop:5,fontWeight:'bold' }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Next</Text>
        </TouchableOpacity>
        </View>
        
        </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });