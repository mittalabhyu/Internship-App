import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import './global';
import {
    Avatar
} from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
export function Eventd({ navigation, route }) {
    const { name } = route.params;
    const { date } = route.params;
    const { cost } = route.params;
    const { venue } = route.params;
    const { description } = route.params;
    const { about } = route.params;
    const { eventimg } = route.params;
    const { organizerimg } = route.params;
    const { organizer } = route.params;
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '95%' }}>
                <Card style={{ backgroundColor: 'orange', borderRadius: 10 }}>
                    <CardImage style={{ flex: 3 }}
                        source={{ uri: eventimg }}
                    />
                    <CardTitle
                        title={name}
                        titleStyle={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30 }}
                    />
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontWeight: 'bold' }}>Date </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'blue' }}>{date} </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontWeight: 'bold' }}>Cost </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'blue' }}>{cost} </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontWeight: 'bold' }}>Venue </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'blue' }}>{venue} </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontWeight: 'bold' }}>Description </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'blue' }}>{description} </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontWeight: 'bold' }}>About </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'blue' }}>{about} </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontWeight: 'bold' }}>Organizer </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 15, color: 'blue' }}>{organizer} </Text>
                    <Text style={{ alignSelf: 'center', marginVertical: 4, fontSize: 20, fontWeight: 'bold' }}>Gallery </Text>
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
                    onPress={() => { navigation.navigate("Form", { cost: cost }) }}
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});