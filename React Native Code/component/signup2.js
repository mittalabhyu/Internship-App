import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from './context';
import './global';
import CustomIcon from './CustomIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function Signup2({ navigation,route }) {
    const { passwor } = route.params;
    const [ivp, validpass] = useState(true);
    const { email } = route.params;
    const {name}=route.params;
    const {username}=route.params;
    const {lastname}=route.params;
const [city, setCity] = useState("");
const [countryn, setcountry] = useState("");
const [contactn, setcontact] = useState("");
const [ivph, validphn] = useState(true);
const Handelphone = (val) => {
    if (val.length != 10) {
        validphn(false);
    }
    else {
        validphn(true);
    }
}
const submitdata = () => {
    if ( ivph == true) {
         if (city == "" || countryn == "" || contactn == "" ) {
            validpass(false);
            }
            else{             
                navigation.navigate('Interest', { city: city, passwor: passwor, contactn: contactn, countryn: countryn, email: email, name: name, username: username, lastname: lastname, cnfp: passwor });
                validpass(true);   
            }
}
    else {
        Alert.alert("Error");
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
                style={{ marginLeft: "1%", height: 40,width: 300,fontFamily:'JosefinSans-Regular', marginVertical: 10,  paddingLeft:15, backgroundColor: '#EBEDEF', borderRadius: 20, fontSize: 17 }}
                placeholder='Phone Number'
                keyboardType='phone-pad'
                placeholderTextColor='darkgrey'
                value={contactn}
                onChangeText={text => setcontact(text)}
                onEndEditing={(f) => Handelphone(f.nativeEvent.text)}
            />
            {ivph ? null :
                <Text style={{ color: 'red', marginLeft: "15%" }}>Invalid Phone Number</Text>
            }

            <TextInput
            style={{ marginLeft: "1%", height: 40,width: 300, fontFamily:'JosefinSans-Regular', marginVertical: 10,  paddingLeft:15, backgroundColor: '#EBEDEF', borderRadius: 20, fontSize: 17 }}
            placeholder='City'
            placeholderTextColor='darkgrey'
            value={city}
            onChangeText={text => setCity(text)}
        />

        <TextInput
        style={{ marginLeft: "1%", height: 40,width: 300, fontFamily:'JosefinSans-Regular', marginVertical: 10,  paddingLeft:15, backgroundColor: '#EBEDEF', borderRadius: 20, fontSize: 17 }}
        placeholder='Country'
        placeholderTextColor='darkgrey'
        value={countryn}
        onChangeText={text => setcountry(text)}
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
        paddingBottom:'15%'
    },
});