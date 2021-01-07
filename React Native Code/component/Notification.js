import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Linking, Text, View, Image, TextInput, Alert, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import './global';
export function notificationscreen({ navigation }) {
  
    return (
        <View style={styles.container}><Text style={{textAlign:'center',fontFamily:'JosefinSans-Regular',fontSize:20,marginHorizontal:10,color:'#FFAD2F'}}>Upcoming feature, launching soon!
        Stay connected to get updated</Text></View>
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