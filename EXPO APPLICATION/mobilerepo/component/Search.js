import 'react-native-gesture-handler';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import React,{useEffect, useState} from 'react';

import { StyleSheet, Text, View, Image,TextInput,Button, ImageBackground,Alert,TouchableOpacity,ScrollView,FlatList} from 'react-native';


export function Search(){
  
    //var textInputComponents = global.namee.map(type => <Text style={{fontSize:20,color:'blue'}}>{type}</Text> )
     return(
       <View style={styles.container}>
         
          <TextInput
        style={{alignSelf:'center',height:50,fontWeight:'bold',margin:10,padding:5,paddingLeft:20, backgroundColor:'lightgray',width:'90%',borderRadius:20,fontSize:20}}
        placeholder='Find a new connection'
        placeholderTextColor='darkgrey'
        />
        
        
    
        
        <FlatList
     
     flex={1}
     width="90%"
     data={global.namee} 
     renderItem={itemss=>(
       
        
           
             <Card style={{backgroundColor:'pink',borderRadius:10}}>
            
             <CardTitle 
             
               title={itemss.item["firstname"] +" "+itemss.item["lastname"]}
               titleStyle={{alignSelf:'center',fontWeight:'bold'}}
               
              />
               <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>Contact </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:15,color:'red'}}>{itemss.item["contact"]} </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>City </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:15,color:'red'}}>{itemss.item["city"]} </Text>
    <Text style={{alignSelf:'center',marginVertical:4,fontSize:20,fontWeight:'bold'}}>Intrests... </Text>
    
             <CardAction 
               separator={true} 
               inColumn={false}>
                
                  <FlatList
     
     flex={1}
     width="90%"
     data={itemss.item["intrest"]} 
     renderItem={items=>(
      
      <TouchableOpacity
        onPress={() =>{}}
        style={{alignSelf:'center', backgroundColor: "orange",borderRadius:25,width:120, height:40,marginHorizontal:20,marginVertical:5,justifyContent:'center',fontWeight:'bold' }}>
        <Text style={{ fontSize: 20, color: 'white',textAlign:'center',alignSelf:'center' }}>{items.item}</Text>
      </TouchableOpacity>
  )}/>
                 
              
             </CardAction>
             
           </Card>
           
         
         )}/>
                 
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