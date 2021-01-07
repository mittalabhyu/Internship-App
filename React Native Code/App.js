/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React,{useEffect, useState,useCallback,Component} from 'react';
import CustomIcon from './component/CustomIcon'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image,TextInput,Button, ImageBackground,Alert,TouchableOpacity,ScrollView} from 'react-native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from './component/context';
import {DrawerContent} from './component/Drawer';
import {DrawerContent1} from './component/Drawer1';
import {Interest} from './component/Interests';
import {home} from './component/home';
import {Signup2} from './component/signup2';
import {SignUp} from './component/Signups';
import {forgotPass} from './component/forgotPass';
import {contact} from './component/contact';
import {sponsor} from './component/sponsor';
import {venue} from './component/venuepartner';
import {becomespeaker} from './component/becomespeaker';
import {partner} from './component/partner';
import {About} from './component/About';
import {Signinn} from './component/Signins';
import {Search} from './component/Search';
import {Eventf} from './component/Events';
import {Eventd} from './component/Eventdisplay';
import {notificationscreen} from './component/Notification';
import {Eventdisplay} from './component/EventDisplaylogin';
import {form} from './component/Form';
import {Login} from './component/chat';
import {homechat} from './component/homechat';
import {privacypolicy} from './component/PrivacyPolicy';
import {communityscreenadd} from './component/Profilepage';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage  from '@react-native-community/async-storage';
import {verifyotp} from './component/verifyotp';
//import { AsyncStorage } from 'react-native';
 
const Loginstack = createStackNavigator();
const RootStack=createStackNavigator();
const Root1Stack=createStackNavigator();
const Root2Stack=createStackNavigator();
const Root3Stack=createStackNavigator();
const Root5Stack=createStackNavigator();
const Addstack = createStackNavigator();
const Root6Stack=createStackNavigator();
const Root8Stack=createStackNavigator();
const Root10Stack=createStackNavigator();
const Drawer = createDrawerNavigator();
const communitystack=createStackNavigator();
const eventstack=createStackNavigator();
const event1stack=createStackNavigator();
const Tab = createBottomTabNavigator();
const LoginScreen=({navigation})=>(
<Loginstack.Navigator screenOptions={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign:'center',
        
      cardStyleInterpolator:CardStyleInterpolators.forNoAnimation
      }}>
        <Loginstack.Screen name="Comunevv" component={homechat}options={{
          headerLeft:()=>(
            <CustomIcon name='back' color="black" size={30} style={{paddingLeft:15}} onPress={()=>{ navigation.goBack()}} />
            
          )    
        }}/>
         <Loginstack.Screen name="Message"  options={{ headerLeft:()=>(
            <CustomIcon name='back' color="black" size={30} style={{paddingLeft:15}}  onPress={()=>{ navigation.navigate("Comunevv")}} />    
          )
        }} component={Login}/>
    </Loginstack.Navigator>
);
const CommunityScreen=({navigation})=>(
<communitystack.Navigator screenOptions={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign:'center',
        
      }}>
        <communitystack.Screen name="Comunev" component={communityscreenadd}options={{
          headerLeft:()=>(
            <CustomIcon name='menu' color={color} size={33} backgroundColor='white' style={{paddingLeft:15}} color='black' onPress={()=>
              navigation.openDrawer()} /> 
          ),
          headerRight:()=>(
            <CustomIcon name='chat' color='black' backgroundColor='white' size={30} style={{paddingRight:15}}  onPress={()=>
              navigation.navigate('Chat')} />
          )
        }}/>
    </communitystack.Navigator>
);
const Notification=({navigation})=>(
  <communitystack.Navigator screenOptions={{
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleAlign:'center',
          
        }}>
          <communitystack.Screen name="Comunev" component={notificationscreen}options={{
            headerLeft:()=>(
              <CustomIcon name='menu' color={color} size={33} backgroundColor='white' color='black' style={{paddingLeft:15}}  onPress={()=>
                navigation.openDrawer()} />
            ),
            headerRight:()=>(
              <CustomIcon name='chat' color='black' backgroundColor='white' size={30} style={{paddingRight:15}}  onPress={()=>
                navigation.navigate('Chat')} />
            )
          }}/>
      </communitystack.Navigator>
  );
function LogoTitle() {
  return (
    <Image
      style={{ width: 175, height: 25}}
      source={require('./android/app/src/main/assets/heading.png')}
    />
  );
}
const AddScreen=({navigation})=>(
<Addstack.Navigator screenOptions={{
       headerTitle: props => <LogoTitle {...props} />,
       headerTitleAlign:'center',
       
      }}>
        <Addstack.Screen name="Comunev" component={Search} options={{ headerLeft:()=>(
            <CustomIcon name='menu' color={color} size={33} backgroundColor='white' color='black' style={{paddingLeft:15}} onPress={()=>
              navigation.openDrawer()} />
          ),
          headerRight:()=>(
            <CustomIcon name='chat' color='black' backgroundColor='white' size={30} style={{marginRight:15}} onPress={()=>
              navigation.navigate('Chat')} />
          )
        }}/>
    </Addstack.Navigator>
);
const Eventsreenn=({navigation})=>(
  <eventstack.Navigator screenOptions={{
           headerTitle: props => <LogoTitle {...props} />,
          headerTitleAlign:'center',
         
          cardStyleInterpolator:CardStyleInterpolators.forNoAnimation
        }}> 
          <eventstack.Screen name="Comunev" component={Eventf} options={{ headerLeft:()=>(
              <CustomIcon name='menu' color={color} size={33} backgroundColor='white' color='black' style={{paddingLeft:15}} onPress={()=>
                navigation.openDrawer()} />
            ),
            headerRight:()=>(
              <CustomIcon name='chat' color='black' backgroundColor='white' size={30} style={{paddingRight:15}} onPress={()=>
                navigation.navigate('Chat')} />
            )
          }}/>     
           <eventstack.Screen  name="Register" component={Eventdisplay}    
          />        
      </eventstack.Navigator>
  );
  const Eventsreenn1=({navigation})=>(
    <event1stack.Navigator screenOptions={{
           headerStyle:{
            backgroundColor:'red'
          },
          headerTintColor:'white',
          headerTitleAlign:'center',
            
          cardStyleInterpolator:CardStyleInterpolators.forNoAnimation
          }}>
            <event1stack.Screen name="Comunev" component={Eventf} options={{ headerLeft:()=>(
               <CustomIcon name='menu' color={color} size={30} backgroundColor='white' style={{paddingLeft:15}}  color='black' onPress={()=>
                navigation.openDrawer()} />
              )
            }}/>     
             <event1stack.Screen  name="Register" component={Eventd}    
            />     
            <event1stack.Screen  name="Form" component={form}  
              />     
        </event1stack.Navigator>
    );
   const RootStackScreen=({navigation})=>(
       <RootStack.Navigator  screenOptions={{
      headerStyle:{
       backgroundColor:'white',height:'18%',
     },
     headerTintColor:'white',
     headerTitleAlign:'center',
     headerShown:false,
     cardStyleInterpolator:CardStyleInterpolators.forNoAnimation
     }}>
       <RootStack.Screen name="first" component={home}options={{title:'Home', headerLeft:()=>(
            <Icon.Button name='menu' size={30} backgroundColor='white'color="black" onPress={()=>
              navigation.openDrawer()
            }></Icon.Button>
          )}}/>
       <RootStack.Screen name="Home" component={Signinn} options={{title:'Sign-in'}}/>
        <RootStack.Screen name="Sign Up" component={SignUp} />
        <RootStack.Screen name="Signup2" component={Signup2} />
       <RootStack.Screen name="Interest" component={Interest} />
       <RootStack.Screen name="VerifyOTP" component={verifyotp} /> 
       <RootStack.Screen name="ResetPassword" component={forgotPass} /> 
   </RootStack.Navigator>
    );
    const RootStackScreen1=({navigation})=>(
      <Root1Stack.Navigator screenOptions={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign:'center',
    }}>
      <Root1Stack.Screen name="Contact" component={contact}options={{ headerLeft:()=>(
           <CustomIcon name='menu' color={color} size={30} backgroundColor='white' style={{paddingLeft:15}}  color='black' onPress={()=>
            navigation.openDrawer()} />
         )}}/>  
  </Root1Stack.Navigator>
   );
 const RootStackScreen3=({navigation})=>(
  <Root3Stack.Navigator screenOptions={{
    headerTitle: props => <LogoTitle {...props} />,
    headerTitleAlign:'center',
}}>
  <Root3Stack.Screen name="About Us" component={About}options={{ headerLeft:()=>(
      <CustomIcon name='menu' color={color} size={30} backgroundColor='white' style={{paddingLeft:15}} color='black' onPress={()=>
        navigation.openDrawer()} />
     )}}/>
</Root3Stack.Navigator>
);
const RootStackScreen5=({navigation})=>(
  <Root5Stack.Navigator screenOptions={{
  headerStyle:{
  backgroundColor:'red'
  },
  headerTintColor:'white',
  headerTitleAlign:'center'
  }}>
  <Root5Stack.Screen name="Settings" component={Settings}options={{ headerLeft:()=>(
       <CustomIcon name='menu' color={color} size={30} backgroundColor='white' style={{paddingLeft:15}}  color='black' onPress={()=>
        navigation.openDrawer()} />
     )}}/>
  </Root5Stack.Navigator>
  );
  const RootStackScreen6=({navigation})=>(
    <Root6Stack.Navigator screenOptions={{
      headerTitle: props => <LogoTitle {...props} />,
      headerTitleAlign:'center',
  }}>
    <Root6Stack.Screen name="Comunev" component={becomespeaker}options={{ headerLeft:()=>(
        <CustomIcon name='menu' color={color} size={30} backgroundColor='white' style={{paddingLeft:15}} color='black' onPress={()=>
          navigation.openDrawer()} />
       )}}/>  
</Root6Stack.Navigator>
 );
const RootStackScreen8=({navigation})=>(
  <Root8Stack.Navigator screenOptions={{
    headerTitle: props => <LogoTitle {...props} />,
    headerTitleAlign:'center',
}}>
  <Root8Stack.Screen name="Comunev" component={sponsor}options={{ headerLeft:()=>(
      <CustomIcon name='menu' color={color} size={30} backgroundColor='white' style={{paddingLeft:15}}  color='black' onPress={()=>
        navigation.openDrawer()} />
     )}}/>  
</Root8Stack.Navigator>
);
const RootStackScreen10=({navigation})=>(
  <Root10Stack.Navigator screenOptions={{
    headerTitle: props => <LogoTitle {...props} />,
    headerTitleAlign:'center',
}}>
  <Root10Stack.Screen name="Comunev" component={partner}options={{ headerLeft:()=>(
       <CustomIcon name='menu' color={color} size={30} backgroundColor='white' style={{paddingLeft:15}} color='black' onPress={()=>
        navigation.openDrawer()} />
     )}}/>
</Root10Stack.Navigator>
);
const PrivacyPolicy=({navigation})=>(
  <Root10Stack.Navigator screenOptions={{
    headerTitle: props => <LogoTitle {...props} />,
    headerTitleAlign:'center',
}}>
  <Root10Stack.Screen name="Comunev" component={privacypolicy}options={{ headerLeft:()=>(
       <CustomIcon name='menu' color={color} size={30} backgroundColor='white' style={{paddingLeft:15}} color='black' onPress={()=>
        navigation.openDrawer()} />
     )}}/>
</Root10Stack.Navigator>
);
const RootStackScreen2=({navigation})=>(
  <Root2Stack.Navigator screenOptions={{
 headerStyle:{
  backgroundColor:'red'
},
headerTintColor:'white',
headerTitleAlign:'center'
}}>
  <Root2Stack.Screen name="Comunev" component={venue}options={{ headerLeft:()=>(
       <CustomIcon name='menu' color={color} size={30} backgroundColor='white' style={{paddingLeft:15}} color='black' onPress={()=>
        navigation.openDrawer()} />
     )}}/>
</Root2Stack.Navigator>
);

    function Tabscreen(){
      return (
       <Tab.Navigator
          initialRouteName="Community"
          
          tabBarOptions={{
            showLabel:false,
            activeTintColor: '#FFAD2F',
            inactiveTintColor:'black',
            style:{
            height:'8%', 
           top:2
           
          }
          }}
        >
          <Tab.Screen
          
            name="Event"
            component={Eventsreenn}
            options={{
              tabBarLabel: 'Event',
              tabBarIcon: ({ color, size }) => (
                <CustomIcon name='event' color={color}  size={32}  />
              ),
            }}
          />
          <Tab.Screen
            name="Add"
            component={AddScreen}
            options={{
              tabBarLabel: 'Connections',
              tabBarIcon: ({ color, size }) => (
                <CustomIcon name='connection' color={color}  size={35} />
              ),
            }}
          />
           
          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              tabBarLabel: 'Notifications',
              //tabBarBadge: 3,
              tabBarIcon: ({ color, size }) => (
                <CustomIcon name='notification' color={color}  size={35} />
              ),   
            }}
          />
          <Tab.Screen
            name="Community"
            component={CommunityScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <CustomIcon name='profile' color={color}  size={35} />
              ),
            }}    
          />
        </Tab.Navigator>      
    ) 
    }
 export default function App(){
const initialLoginState={
  isLoading:true,
  userName:null,
  userToken:null,
};
   const loginReducer = (prevState, action) =>{
     switch (action.type) {
       case 'RETRIEVE_TOKEN':
         return {
           ...prevState,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGIN':
         return {
           ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGOUT':
         return {
           ...prevState,
           userName: null,
           userToken: null,
           isLoading: false,
          
         };
       case 'REGISTER':
         return {
           ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
         };
     }
   }
const [loginState,dispatch]=React.useReducer(loginReducer,initialLoginState);
   const authContext=React.useMemo(()=>
   ({
     signin:async(token,uid,uname,data)=>{
       let userToken,userName;
         userToken=token;
         userName=uname;
         global.dataa=data;
         global.valuee=uid;
         AsyncStorage.setItem(
          'Data',
          JSON.stringify(data),
          () => {});
       dispatch({type:'LOGIN',id:userName,token:userToken});
     },
     signout:async()=>{
      const aa= await AsyncStorage.removeItem('Data');
       dispatch({type:'LOGOUT'});
     },
   }),[]);
   useEffect(()=>{
     setTimeout(()=>{
     Gettoken();
     },1000);
   },[]);
   async function Gettoken()
   {
    try {
      const myArray = await AsyncStorage.getItem('Data');
     // const myArray=null;
      if(myArray!=null){
   global.dataa=JSON.parse(myArray);
      const value = global.dataa["token"];
        // We have data!!
        global.drawername =global.dataa["response"]["firstname"];
        global.draweruname=global.dataa["response"]["username"];
        global.valuee=global.dataa["response"]["_id"];
        dispatch({type:'RETRIEVE_TOKEN',token:value});
      }
      else
      {
        dispatch({type:'RETRIEVE_TOKEN',token:null});
      }
    } catch (error) {
      console.log(error);
    }
   }
   //const [userToken, setUserToken]=useState(null);
  if(loginState.isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#fff"}}>
         <Image style={{width: 158, height: 153}}
                source={require('./android/app/src/main/assets/icon.png')}/>
      </View>
    );
  }
  return( 
    <AuthContext.Provider value={authContext} >
  <NavigationContainer>
    { loginState.userToken !=null ?(
      <Drawer.Navigator drawerContent={props => <DrawerContent{...props}/>}>
        <Drawer.Screen name="Name" component={Tabscreen} />
      <Drawer.Screen name="Settings" component={RootStackScreen5} />
      <Drawer.Screen name="About Us" component={RootStackScreen3} />  
      <Drawer.Screen name="contact" component={RootStackScreen1} />
      <Drawer.Screen name="Become a Speaker" component={RootStackScreen6} /> 
      <Drawer.Screen name="Sponsor" component={RootStackScreen8} />
      <Drawer.Screen name="Partner" component={RootStackScreen10} />
      <Drawer.Screen name="venue" component={RootStackScreen2} />
      <Drawer.Screen name="Chat" component={LoginScreen} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Drawer.Navigator>
    )
    :
    /*<RootStackScreen/>*/
<Drawer.Navigator initialRouteName="Home"drawerContent={props => <DrawerContent1{...props}/>}>
        <Drawer.Screen name="Home" component={RootStackScreen}  />
        <Drawer.Screen name="contact" component={RootStackScreen1} />
        <Drawer.Screen name="About Us"  component={RootStackScreen3} />
        <Drawer.Screen name="Become a Speaker" component={RootStackScreen6} /> 
        <Drawer.Screen name="Sponsor" component={RootStackScreen8} />
        <Drawer.Screen name="Partner" component={RootStackScreen10} />
        <Drawer.Screen name="venue" component={RootStackScreen2} />
        <Drawer.Screen name="Events" component={Eventsreenn1} />
      </Drawer.Navigator>
    }
    </NavigationContainer>
    </AuthContext.Provider>
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
