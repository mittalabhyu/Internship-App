import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar,Dimensions } from 'react-native';
import './global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function home({ navigation }) {
    fetch(global.apii + "event-display", {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json()).then(data => {
            global.event = data;
        })
    const [active, setActive]= useState('1');
    const change=({nativeEvent})=>{
  const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
 
  if(slide==1)
  {
      setActive('2');
  }
  else
  if(slide==2){
      setActive('3');
  }
  else
  {
      setActive('1');
  }
  
    }
    return (
        <View style={styles.container}>        
                <Image style={{ width: 165, height: 150,alignSelf:'center' }}
                source={require('../android/app/src/main/assets/icon.png')}
            />
            <Text style={{ fontSize: 20, color: 'black',alignSelf:'center',fontFamily:'JosefinSans-Bold',marginVertical:'4%' }}>Connecting like-minded people!</Text>
            <View>
           <ScrollView snapToInterval={(Dimensions.get("screen").width)*0.85} decelerationRate="fast" onScroll={change} horizontal showsHorizontalScrollIndicator={false} >
           <View style={styles.card1} >
          <Text style={{fontFamily:'JosefinSans-SemiBold', alignSelf:'center',fontSize:25}}>Matchmaking</Text>
          <Image style={{ alignSelf:'center',marginVertical:20 }}
                source={require('../android/app/src/main/assets/matchmaking.png')}
            />
            <Text  style={{fontFamily:'JosefinSans-Regular', alignSelf:'center',fontSize:20,textAlign:'center'}}>The best matchmaking algorithm to find you the perfect match who shares the same interests as you.</Text>
            <View style={{justifyContent:'flex-end',flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={active=='1'?styles.activestyle: styles.notactive}> ⬤</Text>
            <Text style={active=='2'?styles.activestyle: styles.notactive}> ⬤</Text>
            <Text style={active=='3'?styles.activestyle: styles.notactive}> ⬤</Text>
            </View>
            </View>
            </View>
            <View  style={styles.card}>
            <Text style={{fontFamily:'JosefinSans-SemiBold', alignSelf:'center',fontSize:25}}>Chat</Text>
            <Image style={{ alignSelf:'center',marginVertical:20 }}
                source={require('../android/app/src/main/assets/chat.png')}
            />
             <Text  style={{fontFamily:'JosefinSans-Regular', alignSelf:'center',fontSize:20,textAlign:'center'}}>Share your thoughts, ideas and passions with people who will understand you.</Text>
             <View style={{justifyContent:'flex-end',flex:1}}>
             <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={active=='1'?styles.activestyle: styles.notactive}> ⬤</Text>
            <Text style={active=='2'?styles.activestyle: styles.notactive}> ⬤</Text>
            <Text style={active=='3'?styles.activestyle: styles.notactive}> ⬤</Text>
            </View>
            </View>
            </View>
           <View style={styles.card3}>
           <Text style={{fontFamily:'JosefinSans-SemiBold', alignSelf:'center',fontSize:25}}>Events</Text>
           <Image style={{ alignSelf:'center',marginVertical:20 }}
                source={require('../android/app/src/main/assets/eventbookings.png')}
            />
             <Text  style={{fontFamily:'JosefinSans-Regular', alignSelf:'center',fontSize:20,textAlign:'center'}}>Register/Book for events right here from the App.</Text>
            <View style={{justifyContent:'flex-end',flex:1}}>
             <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={active=='1'?styles.activestyle: styles.notactive}> ⬤</Text>
            <Text style={active=='2'?styles.activestyle: styles.notactive}> ⬤</Text>
            <Text style={active=='3'?styles.activestyle: styles.notactive}> ⬤</Text>
            </View>
            </View>
            </View>

           </ScrollView>
           </View>
            <StatusBar style="auto" />
            <View style={{marginTop:'4%'}}>
            <TouchableOpacity
                // onPress={() => {loginHandle( data.username, data.password )}}
                onPress={() =>  navigation.navigate('Home')}
                style={{ shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4,
                
                elevation: 7, backgroundColor: '#FFAD2F',borderRadius: 25, width: 118, height: 37, justifyContent: 'center' , height: 40, justifyContent: 'center',alignSelf:'center', fontWeight: 'bold' }}>
                <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 17,paddingRight:5,paddingBottom:3, color: 'white' ,alignSelf:'center'}}> Connect</Text>
            </TouchableOpacity>
           
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    activestyle:{
        color:'gray',
        marginHorizontal:10
    },
    notactive:{
        color:'lightgray',
        marginHorizontal:10

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center'
        
    
    },
   
    card:{
        flex:1,
        backgroundColor: '#fff',
        marginVertical:15,
        padding:'1.5%',
        width:(Dimensions.get("screen").width)*0.80,
        height:(Dimensions.get("screen").height)*0.43,
        borderRadius:30,
        elevation:6,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: "#000",
        borderColor:'#222222',
    


    },
    card1:{
        flex:1,
        backgroundColor: '#fff',
        marginVertical:15,
        padding:"1%",
        marginRight:(Dimensions.get("screen").width)*0.05,
        width:(Dimensions.get("screen").width)*0.80,
        height:(Dimensions.get("screen").height)*0.43,
        borderRadius:30,
        elevation:6,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: "#000",
        borderColor:'#222222',
    marginLeft:(Dimensions.get("screen").width)*0.10


    },
    card3:{
        flex:1,
        backgroundColor: '#fff',
        marginVertical:15,
        padding:"1.5%",
        width:(Dimensions.get("screen").width)*0.80,
        height:(Dimensions.get("screen").height)*0.43,
        borderRadius:30,
        elevation:6,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: "#000",
        borderColor:'#222222',
    marginRight:(Dimensions.get("screen").width)*0.10,
    marginLeft:(Dimensions.get("screen").width)*0.05


    }
});