import 'react-native-gesture-handler';
import React, { useState,useRef,useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import './global';
import CustomIcon from './CustomIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function forgotPass({ navigation,route }) {
    const {email}=route.params;
    const [pass, checkPass] = useState(false);
 
    const [passwor, setPassword] = useState("");
    const [ivp, validpass] = useState(true);
    const [cnfp, setcnfp] = useState("");
    const [dispPass,SetdispPass]=useState("");
    const Handelpass = (val) => {
        if (val.length < 8) {
            validpass(false);
        }
        else {
            validpass(true);
        }
    }
   
   const inputElementRef=useRef(null);
    const inputElementRef1=useRef(null);
    useEffect(()=>{
        console.log("Helllo");
      inputElementRef.current.setNativeProps({
          style:{ height: 45, marginTop: 10, padding: 5, paddingLeft: 20, fontFamily:'JosefinSans-Regular', backgroundColor: '#EBEDEF', width: "70%", borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: 15},
      });
        inputElementRef1.current.setNativeProps({
            style:{ height: 45, marginVertical: 10, padding: 5, paddingLeft: 20, fontFamily:'JosefinSans-Regular', backgroundColor: '#EBEDEF', width: "70%", borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: 15},
        });
    },[]);
    const submitdata = async () => {
        
        if (ivp == true) {
            if (cnfp != dispPass) {
                Alert.alert("Password and confirm password do not match")
            }
            else
                if (dispPass == "" || cnfp == "") {
                    Alert.alert("All fields are manadatory");
                }
                else {
                    fetch(global.apii + "forgotPassword", {
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: dispPass
                        })
                    })
                        .then(res => res.json()).then(data => {
                            if (data['message'] == "Password Updated") {
                                Alert.alert("Password Updated Successfully");
                                navigation.navigate("Home");
                            }
                            else {
                                Alert.alert("Mail Do not Exist");
                            }
                        })
                }
        }
        else {
            Alert.alert("Error");
        }
    }
    const [eye, SetEye] = useState('eye');
    function Setvisible(pass) {
        checkPass(pass);
        if (pass == false) {
            SetEye('eye-off');
        }
        else {
            SetEye('eye');
        }
    }
    return (
        <View style={{ flex:1,
            backgroundColor: '#fff',paddingLeft:'3%',paddingTop:'3%'
            }}>
                 <CustomIcon name='back' color='black' size={30} onPress={() => navigation.goBack()} />
        
        <View style={styles.container}>
         
            
                <Text style={{fontFamily:'JosefinSans-SemiBold',fontSize:23,marginBottom:'10%'}}>Reset your password</Text>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                {pass?
                 <TextInput 
                ref={inputElementRef1}
                 style={{ paddingLeft: 20, backgroundColor: '#EBEDEF',fontFamily:'JosefinSans-Regular', width: '70%',height:45,marginVertical:10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: 15}}
                     placeholder='Password'
                     placeholderTextColor='darkgrey'
                     secureTextEntry={pass}
                     value={dispPass}
                     onChangeText={text => SetdispPass(text)}
                     onEndEditing={(f) => Handelpass(f.nativeEvent.text)}
                     
                 />
                 :
                 <TextInput 
                 ref={inputElementRef1}
                 style={{ paddingLeft: 20, backgroundColor: '#EBEDEF',fontFamily:'JosefinSans-Regular', width: '70%',height:45,marginVertical:10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: 15}}
                     placeholder='Password'
                     placeholderTextColor='darkgrey'
                     secureTextEntry={pass}
                     value={dispPass}
                     onChangeText={text => SetdispPass(text)}
                     onEndEditing={(f) => Handelpass(f.nativeEvent.text)}
                
                 />
                }
               
                <TouchableOpacity onPress={() => Setvisible(!pass)}>
                    <Icon name={eye}
                        size={30}
                        style={{backgroundColor: '#EBEDEF', borderTopRightRadius: 20, color: "darkgray", borderBottomRightRadius: 20,marginVertical:10, width: 40, height: 45,paddingTop:'2%'  }} />
                </TouchableOpacity>
            </View>
            {ivp ? null :
                <Text style={{ color: 'red' }}>Password must be atleast 8 characters long</Text>
            }
           <View style={{ flexDirection: 'row',alignItems: 'center'}}>
                {pass?
                 <TextInput
                ref={inputElementRef}
                     style={{ paddingLeft: 20, backgroundColor: '#EBEDEF',fontFamily:'JosefinSans-Regular', width: '70%',height:45,marginVertical:10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: 15}}
                     placeholder='Confirm Password'
                     require={true}
                     placeholderTextColor='darkgrey'
                    secureTextEntry={pass}
                     value={cnfp}
                     onChangeText={text => setcnfp(text)}
                 />
                 :
                 <TextInput
                 ref={inputElementRef}
                     style={{ paddingLeft: 20, backgroundColor: '#EBEDEF',fontFamily:'JosefinSans-Regular', width: '70%',height:45,marginVertical:10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: 15}}
                     placeholder='Confirm Password'
                     require={true}
                     placeholderTextColor='darkgrey'
                     secureTextEntry={pass}
                     value={cnfp}
                     onChangeText={text => setcnfp(text)}
                 />
                }
               
                <TouchableOpacity onPress={() => Setvisible(!pass)}
                >
                    <Icon name={eye} size={30} style={{ backgroundColor: '#EBEDEF', borderTopRightRadius: 20, color: "darkgray", borderBottomRightRadius: 20, marginVertical:10,width: 40, height: 45,paddingTop:'2%' }} />
                </TouchableOpacity>
            </View>
            
            <StatusBar style="auto" />
            
            <TouchableOpacity
                // onPress={() => {loginHandle( data.username, data.password )}}
                onPress={() => submitdata()}
                //onPress={() => sendotp()}
                style={{ shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4,
                
                elevation: 7,marginTop:'10%', backgroundColor: '#FFAD2F',borderRadius: 25, paddingVertical:'2%', paddingHorizontal:'5%', justifyContent: 'center' }}>
                <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 17,paddingRight:5,paddingBottom:3, color: 'white' ,alignSelf:'center'}}> Reset Password</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:'15%'
    },
});