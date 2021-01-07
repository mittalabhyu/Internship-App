import 'react-native-gesture-handler';
import './global';
import React, { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, FlatList, View,Text,TextInput,TouchableOpacity,RefreshControl } from 'react-native';
import io from "socket.io-client";
import { ActivityIndicator } from 'react-native-paper';
const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
export function Login({ navigation, route }) {
    const { name } = route.params;
    const socket = io("https://comunev.com:9000/");
    socket.emit('join', { user: global.draweruname, room: name });
    const [message,setMessage]=useState("");
    const receivemsg = async () => {
            socket.on('new message',function(data){
                console.log("received ",data);
               global.msg.unshift(data);
               onRefresh();
              });
    }
    useEffect(() => {
        receivemsg();
    }, [])
    const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = React.useCallback(() => {
  setRefreshing(true);

  wait(100).then(() => setRefreshing(false));
}, []);
    const onSendd = (data) => {
        
        if(data!=""){
          console.log(data);
            socket.emit('message',{room: name, user:global.draweruname, message: data});
            setMessage("");
            }
    }
    return (
        <View style={styles.container}>
         <FlatList
         inverted
        width="90%"
        data={global.msg}      
        renderItem={itemss=>(
          <View>
            {itemss.item["user"]==global.draweruname?( <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
         <Text></Text>
              <TouchableOpacity
              onPress={() =>{}}
              style={{ backgroundColor: "blue",marginVertical:5,borderRadius:15,justifyContent:'center',padding:2,fontWeight:'bold' }}>
              <Text style={{ fontSize: 20, color: 'white',textAlign:'right',paddingHorizontal:5 }}>{itemss.item["message"]}</Text>
            </TouchableOpacity>              
            </View>):
             <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
             <Text></Text>
                  <TouchableOpacity
                  onPress={() =>{}}
                  style={{ backgroundColor: "orange",marginVertical:5,borderRadius:15,justifyContent:'center',padding:2,fontWeight:'bold' }}>
                  <Text style={{ fontSize: 20, color: 'white',textAlign:'left',paddingHorizontal:5 }}>{itemss.item["message"]}</Text>
                </TouchableOpacity>                  
                </View>}
                 </View>
            )}/>
            
      <View style={{flexDirection:'row'}}>
      <TextInput
          style={{alignSelf:'center',height:50,fontWeight:'bold',padding:5,paddingLeft:20,borderRadius:20, backgroundColor:'lightgray',width:'80%',fontSize:20}}
          placeholder='message'
          placeholderTextColor='darkgrey'
          onEndEditing={()=>onSendd(message)}
          value={message}
           onChangeText={text=>setMessage(text)}
          />
          <TouchableOpacity onPress={()=>onSendd(message)} style={{backgroundColor:'red',borderRadius:20}}> 
           <Icon name="send-outline"
                          color="white"
                          size={50}
                          /></TouchableOpacity>
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
    },
});

