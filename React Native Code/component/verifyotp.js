import 'react-native-gesture-handler';
import React, { useState,useRef,useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import './global';
import CustomIcon from './CustomIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function verifyotp({ navigation }) {
    const [otp, setOTP] = useState("");
    const [email, setEmail] = useState("");
    const [otpp, setOTPP] = useState(true);
    const sendotp=()=>{
        fetch(global.apii + "verifyotp", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
               
            })
        })
            .then(res => res.json()).then(data => {
               console.log("otp ",data);
               setOTPP(false);
               
            })

    }
    const forward=()=>{
        if (otp=='123456')
               {
             navigation.navigate('ResetPassword',{email:email})      
               }
        else {
        Alert.alert('Invalid OTP');
        }
       
    }
    return (
        <View style={{ flex:1,
            backgroundColor: '#fff',paddingLeft:'3%',paddingTop:'3%'
            }}>
                 <CustomIcon name='back' color='black' size={30} onPress={() => navigation.goBack()} />
        
        <View style={styles.container}>
         
            
                <Text style={{fontFamily:'JosefinSans-SemiBold',fontSize:23,marginBottom:'10%'}}>Reset your password</Text>
            <TextInput
                style={{ height: 45,width: '80%',fontFamily:'JosefinSans-Regular', marginVertical: 10,  paddingLeft:20, backgroundColor: '#EBEDEF', borderRadius: 20, fontSize: 15 }}
                placeholder='Email'
                placeholderTextColor='darkgrey'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            
            
            <TouchableOpacity
                // onPress={() => {loginHandle( data.username, data.password )}}
                //onPress={() => submitdata()}
                onPress={() => sendotp()}
                style={{ shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4,
                
                elevation: 7,marginTop:'10%', backgroundColor: '#FFAD2F',borderRadius: 25, paddingVertical:'2%', paddingHorizontal:'5%', justifyContent: 'center' }}>
                <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 17,paddingRight:5,paddingBottom:3, color: 'white' ,alignSelf:'center'}}>Send OTP</Text>
            </TouchableOpacity>
            {
                otpp?null
                :
                <TextInput
                style={{ height: 45,width: '80%',fontFamily:'JosefinSans-Regular', marginVertical: 10,  paddingLeft:20, backgroundColor: '#EBEDEF', borderRadius: 20, fontSize: 15 }}
                placeholder='Enter OTP'
                keyboardType='phone-pad'
                placeholderTextColor='darkgrey'
                value={otp}
                onChangeText={text => setOTP(text)}
            />
            

            }
           {
               otpp?null:
               <TouchableOpacity
               // onPress={() => {loginHandle( data.username, data.password )}}
               //onPress={() => submitdata()}
               onPress={() => forward()}
               style={{ shadowColor: "#000",
               shadowOffset: {
                   width: 0,
                   height: 2,
               },
               shadowOpacity: 0.5,
               shadowRadius: 4,
               
               elevation: 7,marginTop:'10%', backgroundColor: '#FFAD2F',borderRadius: 25, paddingVertical:'2%', paddingHorizontal:'5%', justifyContent: 'center' }}>
               <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 17,paddingRight:5,paddingBottom:3, color: 'white' ,alignSelf:'center'}}>Verify OTP</Text>
           </TouchableOpacity>

           }
            
           
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