import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from './context';
import './global';
import CustomIcon from './CustomIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function SignUp({ navigation,route }) {
    const { passwor } = route.params;
    const [ivp, validpass] = useState(true);
    const { email } = route.params;
    const [name, setName] = useState("");
    const [username, setuserName] = useState("");
    const [lastname, setLName] = useState("");
    {/*const Handelemail = (val) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(val) == false) {
            validemail(false);
        }
        else {
            validemail(true);
        }
    }*/}
    const submitdata = () => {
             if (name == "" || username == "" || lastname == "" ) {
                validpass(false);
                }
                else{             
                    navigation.navigate('Signup2', { passwor: passwor, email: email, name: name, username: username, lastname: lastname, cnfp: passwor });
                    validpass(true);
                    }
        
    }
    return (
        <View style={{ flex:1,
            backgroundColor: '#fff',paddingLeft:'3%',paddingTop:'3%'
            }}>
                 <CustomIcon name='back' color='black' size={30} onPress={() => navigation.goBack()} />
            <View style={styles.container}>
        
            <Text style={{color: 'black',alignSelf:'center', textAlign:'center',fontSize:23,fontFamily:'JosefinSans-Bold'}}>
                Let's setup your</Text>
                <Text style={{color: 'black',alignSelf:'center', textAlign:'center',fontSize:23,fontFamily:'JosefinSans-Bold',marginBottom:"5%"}}>profile</Text>
            <TextInput
                style={{ marginLeft: "1%", fontFamily:'JosefinSans-Regular',height: 40, width: 300, marginVertical: 10,paddingLeft:15, backgroundColor: '#EBEDEF', borderRadius: 20, fontSize: 17}}
                placeholder='First Name'
                placeholderTextColor='darkgrey'
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={{ marginLeft: "1%",fontFamily:'JosefinSans-Regular', height: 40, width: 300, marginVertical: 10,paddingLeft:15, backgroundColor: '#EBEDEF', borderRadius: 20, fontSize: 17 }}
                placeholder='Last Name'
                placeholderTextColor='darkgrey'
                value={lastname}
                onChangeText={text => setLName(text)}
            />
            
            <TextInput
                style={{ marginLeft: "1%", fontFamily:'JosefinSans-Regular',alignSelf:'center', height: 40, width: 300, marginVertical: 10,paddingLeft:15, backgroundColor: '#EBEDEF', borderRadius: 20, fontSize: 17 }}
                placeholder='Username'
                placeholderTextColor='darkgrey'
                value={username}
                onChangeText={text => setuserName(text)}
            />
            
            {ivp ? null :
                <Text style={{ color: 'red',fontFamily:'JosefinSans-Regular' }}>All fields are Mandatory</Text>
            }
            <TouchableOpacity
                // onPress={() => {loginHandle( data.username, data.password )}}
                onPress={() => submitdata()}
                style={{ shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4,
                
                elevation: 7, backgroundColor: '#FFAD2F',borderRadius: 25,marginTop:"5%", width: 118, height: 37, justifyContent: 'center' , height: 40, justifyContent: 'center', fontWeight: 'bold' }}>
                <Text style={{ fontFamily:'JosefinSans-Bold',fontSize: 17,paddingRight:5,paddingBottom:3, color: 'white' ,alignSelf:'center'}}> Next</Text>
            </TouchableOpacity>
               
    
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:'15%',

    },
});