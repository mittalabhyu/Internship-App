import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import './global';
export function About({ navigation }) {
    return (
        <ScrollView style={{
            flexGrow: 1,
            backgroundColor: '#fff'
        }}>
            <View style={{ justifyContent: 'center', flex: 1 }}><Image style={{ width: 300, height: 65, marginTop: 20, marginBottom: 10, alignSelf: 'center' }}
                source={require('../android/app/src/main/assets/c.png')}
            /></View>
            <View style={{ paddingLeft: 20, paddingRight: 10 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Who we are ?</Text>
                <Text style={{ fontSize: 20 }}>Comunev is a startup from Delhi-building an interest-based social media platform.Our missionis
                   to bring people together and help them make real life-connections that are meaningful and delightful as well. We aim to create Social Media
            2.0, one where connecting is more than just swiping.</Text>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>What we do ?</Text>
                <Text style={{ fontSize: 20 }}>We help people make new connections, relationships and frendships by matching them with
                   other like-minded people based of common interests . Our patform also lets people form interest based communities and do real world networking
            through local events & meetups.</Text>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Why you should care ?</Text>
                <Text style={{ fontSize: 20 }}>If you have struggled to form new connections or have not been able to find like-minded people
            ,If you have faced too many boring connections or have never met your online friend in real life-then this is the right place for you.</Text>
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