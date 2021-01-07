import 'react-native-gesture-handler';
import RazorpayCheckout from 'react-native-razorpay';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import { Entypo } from 'react-native-vector-icons'
import DatePicker from 'react-native-datepicker';
import './global';
export function form({ navigation, route }) {
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [uname, setUName] = useState("");
    const [email, setEmail] = useState("");
    const [Country, setCountry] = useState("");
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear();
    const dobdob = date + "-" + month + "-" + year;
    const { cost } = route.params;
    const submitdata = () => {
        fetch(global.apii + "payment/order", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: 100 * cost
            })
        })
            .then(res => res.json()).then(data => {
                console.log(data);
                const options = {
                    "key": "rzp_test_OX0m0Zk3yHg5dA",  //Enter your razorpay key
                    "currency": "INR",
                    "name": "Razor Tutorial",
                    "description": "Razor Test Transaction",
                    "image": "https://previews.123rf.com/images/subhanbaghirov/subhanbaghirov1605/subhanbaghirov160500087/56875269-vector-light-bulb-icon-with-concept-of-idea-brainstorming-idea-illustration-.jpg",
                    "order_id": data["sub"]["id"],
                    "theme": {
                        "color": "#FF7F50"
                    }
                }
                RazorpayCheckout.open(options).then((dataa) => {
                    // handle success
                    console.log(dataa);
                    fetch(global.apii + "payment/verify", {
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            userid: uname,
                            razorpay_payment_id: dataa["razorpay_payment_id"],
                            razorpay_order_id: dataa["razorpay_order_id"],
                            razorpay_signature: dataa["razorpay_signature"],
                        })
                    })
                        .then(res => res.json()).then(dataaa => {
                            console.log(dataaa);
                        })
                    alert(`Success: ${dataa.razorpay_payment_id}`);
                }).catch((error) => {
                    // handle failure
                    alert("Payment Cancelled");
                });
            })
        setCountry("");
        setDOB("");
        setName("");
        setUName("");
        setEmail("");
    }
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center' }}><Text style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold', fontSize: 30, paddingTop: 40, paddingHorizontal: 20 }}>Register and meet your </Text>
                <Text style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold', fontSize: 30, paddingHorizontal: 20 }}> tribe!</Text></View>
            <View style={{ flex: 1, width: '90%', marginTop: 20 }}>
                <TextInput
                    style={{ alignSelf: 'center', height: 50, fontWeight: 'bold', marginVertical: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', width: "70%", borderRadius: 20, fontSize: 20 }}
                    placeholder='Name'
                    placeholderTextColor='darkgrey'
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    style={{ alignSelf: 'center', height: 50, fontWeight: 'bold', marginVertical: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', width: "70%", borderRadius: 20, fontSize: 20 }}
                    placeholder='Username'
                    placeholderTextColor='darkgrey'
                    value={uname}
                    onChangeText={text => setUName(text)}
                />
                <TextInput
                    style={{ alignSelf: 'center', height: 50, fontWeight: 'bold', marginVertical: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', width: "70%", borderRadius: 20, fontSize: 20 }}
                    placeholder='Email'
                    placeholderTextColor='darkgrey'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <DatePicker
                    style={{ alignSelf: 'center', height: 50, color: 'red', fontWeight: 'bold', marginVertical: 10, padding: 5, backgroundColor: 'lightgray', width: "70%", borderRadius: 20, fontSize: 20 }}
                    date={dob} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="Date of Birth"
                    format="DD-MM-YYYY"
                    minDate="01-01-1900"
                    maxDate={dobdob}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            alignSelf: 'center'
                        },
                        dateInput: {
                            alignSelf: 'center',
                            borderRadius: 20,
                            width: "70%"
                        },
                        dateText: {
                            fontSize: 20,
                            fontWeight: 'bold'
                        },
                        placeholderText: {
                            color: 'darkgray',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }
                    }}
                    onDateChange={text => setDOB(text)}
                />
                <TextInput
                    style={{ alignSelf: 'center', height: 50, fontWeight: 'bold', marginVertical: 10, padding: 5, paddingLeft: 20, backgroundColor: 'lightgray', width: "70%", borderRadius: 20, fontSize: 20 }}
                    placeholder='Country'
                    placeholderTextColor='darkgrey'
                    value={Country}
                    onChangeText={text => setCountry(text)}
                />
                <StatusBar style="auto" />
                <TouchableOpacity
                    // onPress={() => {loginHandle( data.username, data.password )}}
                    onPress={() => submitdata()}
                    style={{ alignSelf: 'center', backgroundColor: 'red', borderRadius: 25, width: 120, paddingLeft: 20, height: 40, marginVertical: 10, justifyContent: 'center', fontWeight: 'bold' }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Pay Now!</Text>
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
    },
});