import 'react-native-gesture-handler';

import React,{useEffect, useState} from 'react';

import { StyleSheet, Text, View, Image,TextInput, Alert,TouchableOpacity} from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

import {
  Avatar
  } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
export function Eventd({navigation,route}){
  const {name}=route.params;
  const {date}=route.params;
  const {cost}=route.params;
  const {venue}=route.params;
  const {description}=route.params;
  const {about}=route.params;
  const {organizer}=route.params;
  return(
    <View style={styles.container}>

<ScrollView style={{width:'95%'}}>
    <Card style={{backgroundColor:'pink',borderRadius:10}}>
    <CardImage style={{flex:3}}
     source={{uri: 'data:image/jpeg;base64,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'}} 
     
     
    />
    <CardTitle 
     title={name} 
     
     titleStyle={{alignSelf:'center',fontWeight:'bold',fontSize:30}}
     
    />
     <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>Date </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:15,color:'blue'}}>{date} </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>Cost </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:15,color:'blue'}}>{cost} </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>Venue </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:15,color:'blue'}}>{venue} </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>Description </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:15,color:'blue'}}>{description} </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>About </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:15,color:'blue'}}>{about} </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>Organizer </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:15,color:'blue'}}>{organizer} </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>Gallery </Text>

    
    
   
    
    
    </Card>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <Avatar.Image source={{
                         uri:'https://images.app.goo.gl/FdRfwijfMzdtVfLt6'
                     }}
                     margin={10}
                     size={50}
                     />
                     <Avatar.Image source={{
                         uri:'https://images.app.goo.gl/FdRfwijfMzdtVfLt6'
                     }}
                     margin={10}
                     size={50}
                     />
                      <Avatar.Image source={{
                         uri:'https://images.app.goo.gl/FdRfwijfMzdtVfLt6'
                     }}
                     margin={10}
                     size={50}
                     />
                      <Avatar.Image source={{
                         uri:'https://images.app.goo.gl/FdRfwijfMzdtVfLt6'
                     }}
                     margin={10}
                     size={50}
                     />
                     </View>
                     <TouchableOpacity
        onPress={() => {navigation.navigate("Form")}}
        style={{ backgroundColor: "red",borderRadius:25,width:120, height:40,margin:10,marginBottom:40,justifyContent:'center',fontWeight:'bold' ,alignSelf:'center'}}>
        <Text style={{ fontSize: 20, color: 'white',textAlign:'center' }}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
    )}
   
     const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });