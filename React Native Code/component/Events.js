import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert,TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import './global';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    Avatar
} from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
export function Eventf({ navigation }) {
   
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
      
        wait(1000).then(() => setRefreshing(false));
      }, []);
      useEffect(() => {
        onRefresh();
    }, [])
      const [refreshing, setRefreshing] = React.useState(false);
    const Sort = (val) => {
        if(val=="name")
        {
         for(let i=0;i<global.event.length;i++)
         {
             for(let j=0;j<global.event.length-1;j++){
                 if(global.event[j]["name"]>global.event[j+1]["name"])
                 {
                     let flag=global.event[j];
                     global.event[j]=global.event[j+1];
                     global.event[j+1]=flag;
                 }
                
             }
         }   

            console.log(global.event);
            onRefresh();
        }
        else
        if(val=="cost")
        {
            for(let i=0;i<global.event.length;i++)
         {
             for(let j=0;j<global.event.length-1;j++){
                 if(global.event[j]["cost"]>global.event[j+1]["cost"])
                 {
                     let flag=global.event[j];
                     global.event[j]=global.event[j+1];
                     global.event[j+1]=flag;
                 }
                
             }
         }   
            console.log(global.event);
            onRefresh();
        }
        else
        if(val=="date")
        {
            for(let i=0;i<global.event.length;i++)
         {
             for(let j=0;j<global.event.length-1;j++){
                 if(global.event[j]["date"]>global.event[j+1]["date"])
                 {
                     let flag=global.event[j];
                     global.event[j]=global.event[j+1];
                     global.event[j+1]=flag;
                 }
               
             }
         }   
            console.log(global.event);
            onRefresh();
        }
        
    }
    const submitData = (name, date, cost, venue, description, about, organizer,eventimg,organizerimg,eventid) => {
        navigation.navigate("Register", { name: name, date: date, cost: cost, venue: venue, description: description, about: about, organizer: organizer,eventimg:eventimg,organizerimg:organizerimg,eventid:eventid });
    }
   const months=["null","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
   const hour=["null","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",1,2,3,4,5,6,7,8,9,10,11];
   const noon=["AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","PM","PM","PM","PM","PM","PM","PM","PM","PM","PM","PM","PM"];
    return (
        <ScrollView style={styles.container}>
              
       {/*}       <DropDownPicker
    items={[
        {label: 'Name', value: 'name',  hidden: true},
        {label: 'Cost', value: 'cost',},
        {label: 'Date', value: 'date',},
    ]}
    //defaultValue={this.state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => Sort(item.value)
    }
/>   
<FlatList
                flex={1}
                width="99%"
                data={global.eventt}
                renderItem={items => (
                    <Card style={{ backgroundColor: 'white', borderRadius: 8,margin:10,width:"95%",elevation:6,
                    shadowOffset: {
                        width: 1,
                        height: 1,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    shadowColor: "#000", }} >
                       
                        
                          <Text style={{ marginVertical: 4, fontFamily:'JosefinSans-SemiBold',fontSize:20 }}> {items.item["name"]}</Text>
                        <Text style={{ marginVertical: 4,marginLeft:5, fontFamily:'JosefinSans-Regular',color:"#2EC4B6",fontSize:15 }}> {items.item["cost"]} </Text>
                        <Text style={{ marginVertical: 4,marginLeft:5, fontFamily:'JosefinSans-Regular',color:"#2EC4B6",fontSize:15 }}> {items.item["date"]} </Text>
                        <Text style={{ marginVertical: 4,marginLeft:10, fontFamily:'JosefinSans-Regular' }}>By Comunev</Text>
                    
            
                    </Card>
                )} />*/}
              
         <FlatList
                flex={1}
                width="99%"
                data={global.event}
                renderItem={items => (
                    <Card style={{ backgroundColor: 'white', borderRadius: 8,margin:10,width:"95%",elevation:6,
                    shadowOffset: {
                        width: 1,
                        height: 1,
                    },
                    paddingBottom:4,
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    shadowColor: "#000", }} onPress={() => submitData(items.item["name"], items.item["date"], items.item["cost"], items.item["venue"], items.item["description"], items.item["about"], items.item["organizer"],items.item['eventimg'],items.item['organizerimg'],items.item['_id'])}>
                        <CardImage style={{ flex: 3 }}
                            source={{ uri:items.item['eventimg'] }}
                        />

                          <Text style={{  fontFamily:'JosefinSans-Bold',fontSize:20,marginTop:-10 }}> {items.item["name"]+": "}</Text>
                          <Text style={{  fontFamily:'JosefinSans-Bold',fontSize:20 }}> {items.item["description"]}</Text>
                        <Text style={{ marginLeft:5, fontFamily:'JosefinSans-Regular',color:"#086688",fontSize:16 }}> {items.item["date"].substring(8,10)+" "+months[items.item["date"].substring(5,7)]+" "+items.item["date"].substring(0,4)+" | "+hour[items.item["date"].substring(11,13)]+items.item["date"].substring(13,16)+" "+noon[items.item["date"].substring(11,13)]+" IST"} </Text>
                        <Text style={{marginLeft:10, fontFamily:'JosefinSans-Regular',paddingBottom:5 }}>By Comunev</Text>
                    
            
                    </Card>
                )} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
      
    },
});