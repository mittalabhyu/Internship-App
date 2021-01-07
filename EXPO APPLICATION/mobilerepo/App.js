import 'react-native-gesture-handler';
import { setStatusBarBackgroundColor, setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React,{useEffect, useState,useCallback} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image,TextInput,Button, ImageBackground,Alert,TouchableOpacity,ScrollView} from 'react-native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from './component/context';
import {DrawerContent} from './component/Drawer';
import {DrawerContent1} from './component/Drawer1';
import {HomeScreen} from './component/Signins';
import {Interest} from './component/Interests';
import {SignUp} from './component/Signups';
import {forgotPass} from './component/forgotPass';
import {contact} from './component/contact';
import {sponsor} from './component/sponsor';
import {venue} from './component/venuepartner';
import {becomespeaker} from './component/becomespeaker';
import {partner} from './component/partner';
import {Settings} from './component/Settings';
import {About} from './component/About';
import {Search} from './component/Search';
import {Eventf} from './component/Events';
import {Eventd} from './component/Eventdisplay';
import {form} from './component/Form';
import {Login} from './component/chat';
import {homechat} from './component/homechat';
import {communityscreenadd} from './component/Profilepage';
import { ActivityIndicator } from 'react-native-paper';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { AsyncStorage } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import {
  Avatar
  } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
 

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
const Tab = createBottomTabNavigator();
const LoginScreen=({navigation})=>(
<Loginstack.Navigator screenOptions={{
       headerStyle:{
        backgroundColor:'red'
      },
      headerTintColor:'white',
      headerTitleAlign:'center'
      }}>
        <Loginstack.Screen name="Comunev" component={homechat}options={{
          headerLeft:()=>(
            <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
              navigation.openDrawer()
            }></Icon.Button>
          )
        }}/>
         <Loginstack.Screen name="Message" component={Login}/>
       
       
    
    </Loginstack.Navigator>
);
const CommunityScreen=({navigation})=>(
<communitystack.Navigator screenOptions={{
       headerStyle:{
        backgroundColor:'red'
      },
      headerTintColor:'white',
      headerTitleAlign:'center'
      }}>
        <communitystack.Screen name="Comunev" component={communityscreenadd}options={{
          headerLeft:()=>(
            <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
              navigation.openDrawer()
            }></Icon.Button>
          )
        }}/>
       
       
    
    </communitystack.Navigator>
);
const AddScreen=({navigation})=>(
<Addstack.Navigator screenOptions={{
       headerStyle:{
        backgroundColor:'red'
      },
      headerTintColor:'white',
      headerTitleAlign:'center'
      }}>
       
        <Addstack.Screen name="Comunev" component={Search} options={{ headerLeft:()=>(
            <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
              navigation.openDrawer()
            }></Icon.Button>
          )
        }}/>
        
       
    
    </Addstack.Navigator>
);
const Eventsreenn=({navigation})=>(
  <eventstack.Navigator screenOptions={{
         headerStyle:{
          backgroundColor:'red'
        },
        headerTintColor:'white',
        headerTitleAlign:'center'
        }}>
         
          <eventstack.Screen name="Comunev" component={Eventf} options={{ headerLeft:()=>(
              <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
                navigation.openDrawer()
              }></Icon.Button>
            )
          }}/>     
           <eventstack.Screen  name="Register" component={Eventd} 
            
          />     
          <eventstack.Screen  name="Form" component={form} 
            
            />     
      </eventstack.Navigator>

  );




   const RootStackScreen=({navigation})=>(
       <RootStack.Navigator  screenOptions={{
      headerStyle:{
       backgroundColor:'red'
     },
     headerTintColor:'white',
     headerTitleAlign:'center'
     }}>
       <RootStack.Screen name="Home" component={HomeScreen}options={{ headerLeft:()=>(
            <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
              navigation.openDrawer()
            }></Icon.Button>
          )}}/>
        <RootStack.Screen name="Sign Up" component={SignUp} />
       <RootStack.Screen name="Interest" component={Interest} />
       <RootStack.Screen name="ResetPassword" component={forgotPass} />
      
   </RootStack.Navigator>
    );
   
    const RootStackScreen1=({navigation})=>(
      <Root1Stack.Navigator screenOptions={{
     headerStyle:{
      backgroundColor:'red'
    },
    headerTintColor:'white',
    headerTitleAlign:'center'
    }}>
      <Root1Stack.Screen name="Contact" component={contact}options={{ headerLeft:()=>(
           <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
             navigation.openDrawer()
           }></Icon.Button>
         )}}/>
      
  </Root1Stack.Navigator>
   );
    
  
    

 const RootStackScreen3=({navigation})=>(
  <Root3Stack.Navigator screenOptions={{
 headerStyle:{
  backgroundColor:'red'
},
headerTintColor:'white',
headerTitleAlign:'center'
}}>
  <Root3Stack.Screen name="About Us" component={About}options={{ headerLeft:()=>(
       <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
         navigation.openDrawer()
       }></Icon.Button>
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
       <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
         navigation.openDrawer()
       }></Icon.Button>
     )}}/>
  
  </Root5Stack.Navigator>
  );
  const RootStackScreen6=({navigation})=>(
    <Root6Stack.Navigator screenOptions={{
   headerStyle:{
    backgroundColor:'red'
  },
  headerTintColor:'white',
  headerTitleAlign:'center'
  }}>
    <Root6Stack.Screen name="Comunev" component={becomespeaker}options={{ headerLeft:()=>(
         <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
           navigation.openDrawer()
         }></Icon.Button>
       )}}/>
    
</Root6Stack.Navigator>
 );
 
 
const RootStackScreen8=({navigation})=>(
  <Root8Stack.Navigator screenOptions={{
 headerStyle:{
  backgroundColor:'red'
},
headerTintColor:'white',
headerTitleAlign:'center'
}}>
  <Root8Stack.Screen name="Comunev" component={sponsor}options={{ headerLeft:()=>(
       <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
         navigation.openDrawer()
       }></Icon.Button>
     )}}/>
  
</Root8Stack.Navigator>
);

const RootStackScreen10=({navigation})=>(
  <Root10Stack.Navigator screenOptions={{
 headerStyle:{
  backgroundColor:'red'
},
headerTintColor:'white',
headerTitleAlign:'center'
}}>
  <Root10Stack.Screen name="Comunev" component={partner}options={{ headerLeft:()=>(
       <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
         navigation.openDrawer()
       }></Icon.Button>
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
       <Icon.Button name='ios-menu' size={30} backgroundColor='red'onPress={()=>
         navigation.openDrawer()
       }></Icon.Button>
     )}}/>
  
</Root2Stack.Navigator>
);




    function Tabscreen(){
      return (
       <Tab.Navigator
          initialRouteName="Community"
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="Add"
            component={AddScreen}
            options={{
              tabBarLabel: 'Connect',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-plus" color={color} size={size} />
              ),
            }}
          />
           <Tab.Screen
            name="Event"
            component={Eventsreenn}
            options={{
              tabBarLabel: 'Event',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar-blank-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Comunev"
            component={LoginScreen}
            options={{
              tabBarLabel: 'Chat',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chat" color={color} size={size} />
              ),
              
            }}
          />
          <Tab.Screen
            name="Community"
            component={CommunityScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
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
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size='large' />
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
