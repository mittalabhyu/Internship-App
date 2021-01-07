import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert,Image } from 'react-native';
import './global';
import CustomIcon from './CustomIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function Interest({ navigation, route }) {
    const [interest, setInterest] = useState("");
    const [interest1, setInterest1] = useState("");
    const [interest2, setInterest2] = useState("");
    const [interest3, setInterest3] = useState("");
    const [interest4, setInterest4] = useState("");
    const [interest5, setInterest5] = useState("");
    const [interest6, setInterest6] = useState("");
    const [interest7, setInterest7] = useState("");
    const [interest8, setInterest8] = useState("");
    const [interest9, setInterest9] = useState("");
    const [interest10, setInterest10] = useState("");
    const [interest11, setInterest11] = useState("");
    const submitdata = async () => {
        const { city } = route.params;
        const { passwor } = route.params;
        const { contactn } = route.params;
        const { countryn } = route.params;
        const { email } = route.params;
        const { name } = route.params;
        const { username } = route.params;
        const { lastname } = route.params;
        const { cnfp } = route.params;
        var intr = [interest, interest1, interest2, interest3, interest4, interest5, interest6, interest7, interest8, interest9, interest10, interest11];
        var intrr = [];
        for (let i = 0; i < intr.length; i++) {
            if (intr[i] != "") {
                intrr.push(intr[i]);
            }
        }
        if (intrr.length == 0) {
            Alert.alert("Select atleast 1 interest");
        }
        else {
            fetch(global.apii + "signup", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    city: city,
                    confirmpassword: cnfp,
                    contact: contactn,
                    country: countryn,
                    email: email,
                    firstname: name,
                    intrest: intrr,
                    lastname: lastname,
                    password: passwor,
                    username: username
                })
            })
                .then(res => res.json()).then(data => {
                    if (data['message'] == "User created") {
                        Alert.alert("Thanks for Connecting with us");
                        navigation.navigate('Home');
                    }
                    else
                        if (data['message'] == "Mail exists") {
                            Alert.alert("Mail id already Exists");
                        }
                        else {
                            Alert.alert("You are missing out something");
                        }
                })
        }
    }
    const [pass, checkPass] = useState('#292929');
    function Setvisible(pass) {
        if (pass == '#2ec4b6') {
            pass = '#292929';
            setInterest("");
        }
        else {
            pass = '#2ec4b6';
            setInterest("Public Speaking");
        }
        checkPass(pass);
    }
    const [pass1, checkPass1] = useState('#292929');
    function Setvisible1(pass1) {
        if (pass1 == '#2ec4b6') {
            pass1 = '#292929';
            setInterest1("");
        }
        else {
            pass1 = '#2ec4b6';
            setInterest1("Startups");
        }
        checkPass1(pass1);
    }
    const [pass2, checkPass2] = useState('#292929');
    function Setvisible2(pass2) {
        if (pass2 == '#2ec4b6') {
            pass2 = '#292929';
            setInterest2("");
        }
        else {
            pass2 = '#2ec4b6';
            setInterest2("Business");
        }
        checkPass2(pass2);
    }
    const [pass3, checkPass3] = useState('#292929');
    function Setvisible3(pass3) {
        if (pass3 == '#2ec4b6') {
            pass3 = '#292929';
            setInterest3("");
        }
        else {
            pass3 = '#2ec4b6';
            setInterest3("DEbate");
        }
        checkPass3(pass3);
    }
    const [pass4, checkPass4] = useState('#292929');
    function Setvisible4(pass4) {
        if (pass4 == '#2ec4b6') {
            pass4 = '#292929';
            setInterest4("");
        }
        else {
            pass4 = '#2ec4b6';
            setInterest4("Fitness");
        }
        checkPass4(pass4);
    }
    const [pass5, checkPass5] = useState('#292929');
    function Setvisible5(pass5) {
        if (pass5 == '#2ec4b6') {
            pass5 = '#292929';
            setInterest5("");
        }
        else {
            pass5 = '#2ec4b6';
            setInterest5("Books");
        }
        checkPass5(pass5);
    }
    const [pass6, checkPass6] = useState('#292929');
    function Setvisible6(pass6) {
        if (pass6 == '#2ec4b6') {
            pass6 = '#292929';
            setInterest6("");
        }
        else {
            pass6 = '#2ec4b6';
            setInterest6("AI");
        }
        checkPass6(pass6);
    }
    const [pass7, checkPass7] = useState('#292929');
    function Setvisible7(pass7) {
        if (pass7 == '#2ec4b6') {
            pass7 = '#292929';
            setInterest7("");
        }
        else {
            pass7 = '#2ec4b6';
            setInterest7("Blockchain");
        }
        checkPass7(pass7);
    }
    const [pass8, checkPass8] = useState('#292929');
    function Setvisible8(pass8) {
        if (pass8 == '#2ec4b6') {
            pass8 = '#292929';
            setInterest8("");
        }
        else {
            pass8 = '#2ec4b6';
            setInterest8("Art");
        }
        checkPass8(pass8);
    }
    const [pass9, checkPass9] = useState('#292929');
    function Setvisible9(pass9) {
        if (pass9 == '#2ec4b6') {
            pass9 = '#292929';
            setInterest9("");
        }
        else {
            pass9 = '#2ec4b6';
            setInterest9("Food");
        }
        checkPass9(pass9);
    }
    
    return (
        <View style={{ flex:1,
            backgroundColor: '#fff',paddingTop:'4%',paddingLeft:'3%'
            }}>
                <CustomIcon name='back' color='black' size={30} onPress={() => navigation.goBack()} />
        <View style={styles.container}>
        <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center',paddingVertical:'10%'}}>
                <Text style={{ fontSize: 23,fontFamily:'JosefinSans-Bold'}}>Choose your </Text>
            <Text style={{fontSize:23,fontFamily:'JosefinSans-Bold',color:'#2ec4b6'}}>interests</Text>
            </View>
            <View style={{height:'45%',paddingRight:'5%'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center',  justifyContent: 'center', flex: 1}}>
                <TouchableOpacity
                    onPress={() => Setvisible(pass)}
                    style={{ shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7,backgroundColor: pass, borderRadius: 25,paddingHorizontal:'7%',paddingVertical:'2%',marginHorizontal:'3%', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'white', textAlign: 'center',paddingBottom:3,fontFamily:'JosefinSans-Regular' }}>Public Speaking</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Setvisible1(pass1)}
                    style={{shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7, backgroundColor: pass1, borderRadius: 25,paddingHorizontal:'6%',paddingVertical:'2%' , justifyContent: 'center' }}>
                    <Text style={{fontFamily:'JosefinSans-Regular', fontSize: 18, color: 'white',paddingBottom:3, textAlign: 'center' }}>Startups</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flex: 1}}>
                <TouchableOpacity
                    onPress={() => Setvisible2(pass2)}
                    style={{ shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7,backgroundColor: pass2, borderRadius: 25, paddingHorizontal:'8%',paddingVertical:'2%', marginHorizontal: '3%', justifyContent: 'center'}}>
                    <Text style={{ fontFamily:'JosefinSans-Regular',fontSize: 18, color: 'white',paddingBottom:3, textAlign: 'center' }}>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Setvisible3(pass3)}
                    style={{shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7, backgroundColor: pass3, borderRadius: 25,paddingHorizontal:'8%',paddingVertical:'2%', justifyContent: 'center'}}>
                    <Text style={{fontFamily:'JosefinSans-Regular', fontSize: 18, color: 'white',paddingBottom:3, textAlign: 'center' }}>Debate</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center',flex: 1 }}>
                <TouchableOpacity
                    onPress={() => Setvisible4(pass4)}
                    style={{ shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7,backgroundColor: pass4, borderRadius: 25, paddingHorizontal:'11%',paddingVertical:'2%', marginHorizontal:'3%', justifyContent: 'center' }}>
                    <Text style={{ fontFamily:'JosefinSans-Regular',fontSize: 18,paddingBottom:5, color: 'white', textAlign: 'center' }}>Fitness</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Setvisible5(pass5)}
                    style={{ shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7,backgroundColor: pass5, borderRadius: 25, paddingHorizontal:'7%',paddingVertical:'2%', justifyContent: 'center'}}>
                    <Text style={{ fontFamily:'JosefinSans-Regular',fontSize: 18, color: 'white',paddingBottom:3, textAlign: 'center' }}>Books</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flex: 1 }}>
                <TouchableOpacity
                    onPress={() => Setvisible6(pass6)}
                    style={{ shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7,backgroundColor: pass6, borderRadius: 25,paddingHorizontal:'7%',paddingVertical:'2%', marginHorizontal: '3%', justifyContent: 'center' }}>
                    <Text style={{fontFamily:'JosefinSans-Regular', fontSize: 18, color: 'white',paddingBottom:3, textAlign: 'center' }}>AI</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Setvisible7(pass7)}
                    style={{ shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7,backgroundColor: pass7, borderRadius: 25, paddingHorizontal:'7%',paddingVertical:'2%',justifyContent: 'center'}}>
                    <Text style={{ fontFamily:'JosefinSans-Regular',fontSize: 18, color: 'white',paddingBottom:3, textAlign: 'center' }}>Blockchain</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flex: 1 }}>
                <TouchableOpacity
                    onPress={() => Setvisible8(pass8)}
                    style={{shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7, backgroundColor: pass8, borderRadius: 25, paddingHorizontal:'7%',paddingVertical:'2%', marginHorizontal:'3%', justifyContent: 'center' }}>
                    <Text style={{ fontFamily:'JosefinSans-Regular',fontSize: 18, color: 'white',paddingBottom:3, textAlign: 'center' }}>Art</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Setvisible9(pass9)}
                    style={{ shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    
                    elevation: 7,backgroundColor: pass9, borderRadius: 25,paddingHorizontal:'7%',paddingVertical:'2%', justifyContent: 'center' }}>
                    <Text style={{ fontFamily:'JosefinSans-Regular',fontSize: 18, color: 'white',paddingBottom:3,textAlign: 'center' }}>Food</Text>
                </TouchableOpacity>
            </View> 
            </View>
            <View style={{paddingVertical:'10%'}}>
            <TouchableOpacity
               onPress={() => submitdata()}
                style={{ shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4,
                
                elevation: 7, backgroundColor: '#FFAD2F',borderRadius: 25, width: 118, justifyContent: 'center' , height: 40, justifyContent: 'center', fontWeight: 'bold' }}>
                <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 17,paddingRight:5,paddingBottom:3, color: 'white' ,alignSelf:'center'}}> Connect</Text>
            </TouchableOpacity>
               
            </View>
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