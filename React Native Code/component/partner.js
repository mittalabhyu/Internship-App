import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Linking, Text, View, Image, TextInput, Alert, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SocialIcon } from 'react-native-elements'
import './global';
export function partner({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactn, setcontact] = useState("");
    const [lastname, setLName] = useState("");
    const [ive, validemail] = useState(true);
    const [ivph, validphn] = useState(true);
    const Handelemail = (val) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(val) == false) {
            validemail(false);
        }
        else {
            validemail(true);
        }
    }
    const Handelphone = (val) => {
        if (val.length != 10) {
            validphn(false);
        }
        else {
            validphn(true);
        }
    }
    const submitdataa = () => {
        if (ive == true && ivph == true) {
            fetch(global.apii + "partner", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    Fullname: name,
                    EmailAddress: email,
                    Contact: contactn,
                    message: lastname
                })
            })
                .then(res => res.json()).then(data => {
                    console.log("Hello there", data);
                    if (data['message'] == "Thanks for partner     us") {
                        Alert.alert("Thanks you for your interest");
                        setName("");
                        setEmail("");
                        setLName("");
                        setcontact("");
                    }
                    else {
                        Alert.alert("There is some error");
                    }
                })
        }
        else {
            Alert.alert("Error");
        }
    }
    const submitdata = () => {
        if (name == "" || email == "" || contactn == "" || lastname == "") {
            Alert.alert("All fields are manadatory");
        }
        else {
            submitdataa();
        }
    }
    return (
        <ScrollView style={{
            flexGrow: 1,
            backgroundColor: '#fff'
        }}>
            <View style={{ alignItems: 'center', flex: 1 }}>
                <View style={{ justifyContent: 'center' }}><ImageBackground style={{ width: 300, height: 300 }}
                    source={require('../android/app/src/main/assets/pb.png')}
                >
                    <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginVertical: 5 }}>Partner With Us</Text>
                    <Text style={{ fontSize: 20, textAlign:'center' }}>We don't just do our own events only but we also collaborate with other event organizers as partners . </Text>
                    <Text style={{ fontSize: 20, textAlign:'center' }}>If you would like to have us as your event partner or would like to become a partner for any of our events , then fill this form right here.</Text>
                </ImageBackground></View>
            </View>
            <TextInput
                style={{ alignSelf: 'center', alignSelf: 'center', height: 50, fontWeight: 'bold', margin: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', width: 250, borderRadius: 20, fontSize: 20 }}
                placeholder='Full Name'
                placeholderTextColor='darkgrey'
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={{ alignSelf: 'center', height: 50, margin: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', fontWeight: 'bold', width: 250, borderRadius: 20, fontSize: 20 }}
                placeholder='Email Address'
                placeholderTextColor='darkgrey'
                value={email}
                onChangeText={text => setEmail(text)}
                onChangeText={text => setEmail(text)}
                onEndEditing={(e) => Handelemail(e.nativeEvent.text)}
            />
            {ive ? null :
                <Text style={{ color: 'red', marginLeft: "15%" }}>Invalid email type</Text>
            }
            <TextInput
                style={{ alignSelf: 'center', height: 50, fontWeight: 'bold', margin: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', width: 250, borderRadius: 20, fontSize: 20 }}
                placeholder='Contact'
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
                style={{ alignSelf: 'center', alignSelf: 'center', height: 50, fontWeight: 'bold', margin: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', width: 250, borderRadius: 20, fontSize: 20 }}
                placeholder='Message'
                placeholderTextColor='darkgrey'
                value={lastname}
                onChangeText={text => setLName(text)}
            />
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => submitdata()}
                    style={{ backgroundColor: 'orange', borderRadius: 20, alignSelf: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center', height: 40, width: 100, marginTop: 5, fontWeight: 'bold' }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Submit</Text>
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