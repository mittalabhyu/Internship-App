import React from 'react';
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
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from './context';
import './global';
export function DrawerContent1(props) {
    const { signout } = React.useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="calendar-blank-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Events"
                            onPress={() => { props.navigation.navigate('Events') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="microphone-variant"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Become a Speaker"
                            onPress={() => { props.navigation.navigate('Become a Speaker') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="alpha-s-circle"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Sponsor Us"
                            onPress={() => { props.navigation.navigate('Sponsor') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="emoticon-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Partner with us"
                            onPress={() => { props.navigation.navigate('Partner') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="map-marker-circle"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Become Venue Partner"
                            onPress={() => { props.navigation.navigate('venue') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        {/* <DrawerItem
                    icon={({color,size})=>(
                        <Icon name="settings-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Settings"
                    onPress={() => {props.navigation.navigate('Settings')}}
                    />*/}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About us"
                            onPress={() => { props.navigation.navigate('About Us') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="phone-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Contact us"
                            onPress={() => { props.navigation.navigate('contact') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfosection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
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
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});