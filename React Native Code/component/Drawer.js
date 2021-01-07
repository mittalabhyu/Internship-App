import React from 'react';
import CustomIcon from './CustomIcon';
import {
    createDrawerNavigator,
    DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { StyleSheet, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from './context';
import './global';
export function DrawerContent(props) {
    const { signout } = React.useContext(AuthContext);
    const signoutt=()=>{
        props.navigation.closeDrawer();
        signout();
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                <View style={{ flexDirection:'row',paddingVertical:'5.5%',padding:'6%',marginTop:'-3%',
                 marginHorizontal:'-1%',
                borderBottomWidth:0,
                borderBottomColor:'#000000',
                 //shadowColor: "#525252",
                 //shadowOffset: { width: 0, height: 2 }, // change this for more shadow
                 //shadowOpacity: 0.9,
                 //shadowRadius: 1,
                 // elevation:2,
                 
                 shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.18,
shadowRadius: 1.00,
elevation: 3,}}>
                         <CustomIcon name='back' color="black" size={30} onPress={()=>{ props.navigation.closeDrawer()}} />
                         <Image style={{width: 190, height: 30,marginLeft:'5%'}}
                source={require('../android/app/src/main/assets/heading.png')}/>   
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='event' color='black' size={20} />
                            )}
                            label="Events"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('Event') }}
                        />
                        <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='connection' color='black' size={20} />
                            )}
                            label="Connections"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('Add') }}
                        />
                        <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='notification' color='black' size={20} />
                            )}
                            label="Notifications"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('Notification') }}
                        />
                        <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='profile' color='black' size={20} />
                            )}
                            label="Profile"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('Community') }}
                        />
                        <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='chat' color='black' size={20} />
                            )}
                            label="Chat"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('Chat') }}
                        />
                          </Drawer.Section>
                          <Drawer.Section style={styles.drawerSection}>
                       <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='eventpartner' color='black' size={20} />
                            )}
                            label="Event Partnership"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('Partner') }}
                        />
                        <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='speaker' color='black' size={20} />
                            )}
                            label="Become A Speaker"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('Become a Speaker') }}
                        />
                        <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='sponsor' color='black' size={20} />
                            )}
                            label="Sponsor Us"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('Sponsor') }}
                        />
                        </Drawer.Section>
                       {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="map-marker-circle"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Become Venue Partner"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('venue') }}
                        />
                   
                    
                         <DrawerItem
                    icon={({color,size})=>(
                        <Icon name="settings-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Settings"
                    onPress={() => {props.navigation.navigate('Settings')}}

                    />*/}
                       <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='aboutus' color='black' size={20} />
                            )}
                            label="About Us"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('About Us') }}
                        />
                        <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='contact' color='black' size={20} />
                            )}
                            label="Contact Us"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('contact') }}
                        />
                        <DrawerItem style={styles.item}
                            icon={({ color, size }) => (
                                <CustomIcon name='privacypolicy' color='black' size={20} />
                            )}
                            label="Privacy Policy"
                            labelStyle={styles.labels}
                            onPress={() => { props.navigation.navigate('PrivacyPolicy') }}
                        />
                        </Drawer.Section>
                     <DrawerItem style={styles.item}
                    icon={({ color, size }) => (
                        <CustomIcon name='signout' color='black' size={20} />
                    )}
                    label="Log Out"
                    labelStyle={styles.labels}
                    onPress={() => { signoutt() }}
                />
                </View>
            </DrawerContentScrollView>
          <Text style={{ alignSelf:'center',fontFamily:'JosefinSans-Regular',paddingBottom:"1%",fontSize:12}}>All Rights Reserved </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        
    },
    userInfosection: {
        paddingLeft: '25%',
        paddingLeft: 20,
        
    },
    
   
    item: {
        marginVertical:1
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        
        borderBottomWidth:1,
        borderColor:'#525252'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'black',
        borderTopWidth: 1
    },
   
    labels:{
       fontFamily:"JosefinSans-Regular",
       color:'black',
       fontSize:15
    }
});