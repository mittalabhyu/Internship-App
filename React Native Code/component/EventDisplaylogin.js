import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import './global';
import {
    Avatar
} from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
export function Eventdisplay({ navigation, route }) {
    const { name } = route.params;
    const { date } = route.params;
    const { cost } = route.params;
    const { venue } = route.params;
    const { description } = route.params;
    const { about } = route.params;
    const { organizer } = route.params;
    const { eventimg } = route.params;
    const { organizerimg } = route.params;
    const { eventid } = route.params;
    const submitdata = () => {
        if(cost!=0){
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
                    "image": "https://previews.123rf.com/images/subhanbcon-with-concept-of-idea-brainstorming-idea-illustration-.jpg",
                    "order_id": data["sub"]["id"],
                    "theme": {
                        "color": "#FF7F50"
                    }
                }
                RazorpayCheckout.open(options).then((dataa) => {
                    // handle success
                    console.log("Hey ", dataa);
                    alert(`Success: ${dataa.razorpay_payment_id}`);
                    fetch(global.apii + "payment/verify", {
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: global.dataa["response"]["email"],
                            userid: global.draweruname,
                            razorpay_payment_id: dataa["razorpay_payment_id"],
                            razorpay_order_id: dataa["razorpay_order_id"],
                            razorpay_signature: dataa["razorpay_signature"],
                        })
                    })
                        .then(res => res.json()).then(dataaa => {
                            console.log("suno na", dataaa);
                            Alert.alert("Payment Id", dataaa["payment_id"]);
                        }).catch((error) => {
                            // console.log("hyyy",error)
                            // alert("andar wala");
                        });
                }).catch((error) => {
                    // handle failure
                    // console.log(error);
                    alert("Payment Cancelled");
                });
            })
        }
       
        fetch(global.apii +"event-registration", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:dataa['response']['firstname'],
                email:global.dataa["response"]["email"],
                username:dataa['response']['username'],
                whatsapp:global.dataa["response"]["contact"],
                event_id:eventid,
                payment_status:"success",
                event_name:name
            })
        })
            .then(res => res.json()).then(data => {
                if(data["message"]=="Registration successful")
                {
                Alert.alert("Successfully registered");
                }
                else{
                    Alert.alert("FALIURE");
                }
            })
    }
    const months=["null","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const hour=["null","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",1,2,3,4,5,6,7,8,9,10,11];
    const noon=["AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","PM","PM","PM","PM","PM","PM","PM","PM","PM","PM","PM","PM"];
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '98%' }}>
                <Card style={{ backgroundColor: 'white', borderRadius: 10 }}>
                    <CardImage style={{ flex: 3 }}
                        source={{ uri: eventimg }}
                    />
                    <CardTitle
                        title={name}
                        titleStyle={{ alignSelf: 'center', fontSize: 30,textAlign:'center',fontFamily:'JosefinSans-Bold' }}
                    />
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20,fontFamily:'JosefinSans-SemiBold' }}>Date </Text>
                    <Text style={{ marginVertical: 4,marginLeft:5, fontFamily:'JosefinSans-Regular',color:"#086688",fontSize:15,textAlign:'center',alignSelf:'center' }}> {date.substring(8,10)+" "+months[date.substring(5,7)]+" "+date.substring(0,4)+" | "+hour[date.substring(11,13)]+date.substring(13,16)+" "+noon[date.substring(11,13)]+" IST"}</Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20,fontFamily:'JosefinSans-SemiBold' }}>Cost </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'black',fontFamily:'JosefinSans-Regular' }}>{cost} </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontFamily:'JosefinSans-SemiBold'}}>Venue </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'black',fontFamily:'JosefinSans-Regular' }}>{venue} </Text>
                   
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20,fontFamily:'JosefinSans-SemiBold' }}>About </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'black',textAlign:'center',fontFamily:'JosefinSans-Regular' }}>{about} </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontFamily:'JosefinSans-SemiBold' }}>Organizer </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'black',fontFamily:'JosefinSans-SemiBold' }}>{organizer} </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontFamily:'JosefinSans-SemiBold' }}>Organizer Description </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'black',fontFamily:'JosefinSans-Regular' }}>{description} </Text>
                    
                   
                   
                </Card>
               
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                   
                    <Avatar.Image source={{
                        uri: organizerimg
                    }}
                        margin={10}
                        size={100}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => { submitdata() }}
                    style={{ backgroundColor: "red", borderRadius: 25, width: 120, height: 40, margin: 10, marginBottom: 40, justifyContent: 'center', fontWeight: 'bold', alignSelf: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    
        alignItems: 'center',
        justifyContent: 'center',
    },
});