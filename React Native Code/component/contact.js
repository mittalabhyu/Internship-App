import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Linking, Text, View, Image, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SocialIcon } from 'react-native-elements'
import './global';
export function contact({ navigation }) {
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
            fetch(global.apii + "contact", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    fullname: name,
                    email: email,
                    contact: contactn,
                    message: lastname
                })
            })
                .then(res => res.json()).then(data => {
                    if (data['message'] == "Thanks for contacting us") {
                        Alert.alert("Message Sent");
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
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Connect with us</Text></View>
            <TextInput
                style={{ alignSelf: 'center', alignSelf: 'center', height: 50, fontWeight: 'bold', margin: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', width: 250, borderRadius: 20, fontSize: 20 }}
                placeholder='Full Name'
                placeholderTextColor='darkgrey'
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={{ alignSelf: 'center', height: 50, margin: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', fontWeight: 'bold', width: 250, borderRadius: 20, fontSize: 20 }}
                placeholder='Email'
                placeholderTextColor='darkgrey'
                value={email}
                onChangeText={text => setEmail(text)}
                onEndEditing={(e) => Handelemail(e.nativeEvent.text)}
            />
            {ive ? null :
                <Text style={{ color: 'red', marginLeft: "15%" }}>Invalid email type</Text>
            }
            <TextInput
                style={{ alignSelf: 'center', height: 50, fontWeight: 'bold', margin: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', width: 250, borderRadius: 20, fontSize: 20 }}
                placeholder='Contact No.'
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
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
                <View style={{ alignItems: 'center', flex: 1, marginVertical: 10 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Get in touch</Text>
                </View>
                <View style={{ paddingLeft: 20, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 20 }}>For any queries, questions or doubts:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20 }}>Email us at </Text>
                        <TouchableOpacity onPress={() => Linking.openURL("mailto:support@comunev.com")}>
                            <Text style={{ fontSize: 20, color: 'blue' }}>support@comunev.com</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, marginTop: 10 }}>If it is urgent, here's our contact:</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("tel:+918595473072")}>
                        <Text style={{ fontSize: 20, color: 'blue' }}>8595473072</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginTop: 10 }}>Social Media:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <SocialIcon
                            type='twitter'
                            onPress={() => Linking.openURL("https://twitter.com/comunevindia")}
                        />
                        <SocialIcon
                            type='facebook'
                            onPress={() => Linking.openURL("https://www.facebook.com/comunev")}
                        />
                        <SocialIcon
                            onPress={() => Linking.openURL("https://www.linkedin.com/company/comunev")}
                            type='linkedin'
                        />
                        <SocialIcon
                            onPress={() => Linking.openURL("https://www.instagram.com/comunevindia")}
                            type='instagram'
                        />
                    </View>
                    <Text style={{ fontSize: 20, marginTop: 10 }}>We are also avaliable on Whatsapp:</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://wa.me/918595473072")}
                            style={{ backgroundColor: 'green', alignself: 'center', borderRadius: 5, alignContent: 'center', justifyContent: 'center', alignItems: 'center', height: 40, width: 100, marginTop: 5, fontWeight: 'bold' }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Message</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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