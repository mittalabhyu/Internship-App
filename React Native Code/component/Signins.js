import React, { useState,  useRef,useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert ,Modal,ImageBackground,Dimensions ,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from './context';
import './global';
import CustomIcon from './CustomIcon';
import { ActivityIndicator } from 'react-native-paper';
import{
    GoogleSignin,
    GoogleSigninButton,
    statusCodes
} from '@react-native-community/google-signin';
export function Signinn({ navigation }) {
        const Move=()=>{
            
            navigation.navigate('Sign Up',{email:data.username,passwor:dispPass});
            data.username="";
            SetdispPass("");
            SethidePass("");
            setVisibility(false);
            LoadingState(false);

        }
        const inputElementRef1=useRef(null);
    useEffect(()=>{
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '618438027488-6rkkca1cdrvc5rfa7ci3ksi245s1iiuc.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            //hostedDomain: '', // specifies a hosted domain restriction
            //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            //accountName: '', // [Android] specifies an account name on the device that should be used
            //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
          });
          if (inputElementRef1) {
        inputElementRef1.current.setNativeProps({
            style:{ padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF',fontFamily:'JosefinSans-Regular', width: 260,height:40, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: 15},
        });
    }
    },[]);
    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          //signin(dataa['token'], dataa['response']['_id'], dataa['response']['username'], dataa);
         // this.setState({ userInfo });
         console.log("google signin ",userInfo);
        } catch (error) {
            console.log("google signin error ",error);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };
    const [isLoading, LoadingState] = useState(false);
    const [isLoadingg, LoadingStatee] = useState(false);
    const { signin } = React.useContext(AuthContext);
    const [visibility,setVisibility]=useState(false);
    const [ivp, validpass] = useState(true);
    const [dispPass,SetdispPass]=useState("");
    const [hidePass,SethidePass]=useState("");
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
    });
    const [pass, checkPass] = useState(true);
    const [eye, SetEye] = useState('eye');
    const Load=()=>{
        setVisibility(false);
         LoadingState(false);
    }
    const Setvisible = (pass) => {
        
        checkPass(pass);
        if (pass == false) {
            SetEye('eye-off');
           
        }
        else {
            SetEye('eye');
        }
    }
    const submitdata = () => {
        if (data.username == "" || dispPass == "") {
            validpass(false);
        }
        else {
            console.log("Password ",dispPass);
            validpass(true);
            submitdataa();
        }
    }
    const submitdataa = async () => {
        LoadingState(true);
        LoadingStatee(true);
        fetch(global.apii+"login", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.username,
                password: dispPass
            })
        })
            .then(res => res.json()).then(dataa => {
                LoadingStatee(false);
                if (dataa['message'] == "Auth successful") {
                    global.drawername = dataa['response']['firstname'];
                    global.draweruname = dataa['response']['username'];
                    signin(dataa['token'], dataa['response']['_id'], dataa['response']['username'], dataa);
                }
                else {
                    setVisibility(true);
                    
                }
            })
    }
    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:StatusBar.currentHeight }}>
                <ImageBackground style={{ width:Dimensions.get("screen").width,height:(Dimensions.get("screen").height),justifyContent:'center' }}
                    source={require('../android/app/src/main/assets/Blur.png')}
                    blurRadius={2}
                >
                    {isLoadingg?
                     <ActivityIndicator color="#E71D36" size='large' />
                     :
                     <Modal transparent={true} visible={visibility} animationType="fade">
                     <View style={{flex:1,justifyContent:'center'}}>
                   
                          <View style={{justifyContent:'center',padding:20,backgroundColor:'white',borderRadius:10,marginHorizontal:'10%',shadowColor: "#000",
                       shadowOffset: {
                           width: 0,
                           height: 2,
                       },
                       shadowOpacity: 0.5,
                       shadowRadius: 4,
                       
                       elevation: 7}}>
                     <Text style={{textAlign:'center',fontFamily:'JosefinSans-Regular',fontSize:20}}>We don't have any account by this email. Would you like to create a new account?</Text>
                     <TouchableOpacity
                     
                       // onPress={() => {loginHandle( data.username, data.password )}}
                       onPress={() =>Move() }
                       style={{ shadowColor: "#000",
                       shadowOffset: {
                           width: 0,
                           height: 2,
                       },
                       shadowOpacity: 0.5,
                       shadowRadius: 4, 
                       elevation: 7,padding:"3%", backgroundColor: '#E71D36',borderRadius: 20, height: 40, justifyContent: 'center' , marginVertical: 10,alignSelf:'center' }}>
                       <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 20, color: 'white' ,textAlign:'center',paddingBottom:5,paddingRight:2}}> Create new account</Text>
                   </TouchableOpacity>
                   <TouchableOpacity
                       // onPress={() => {loginHandle( data.username, data.password )}}
                       onPress={() => Load()}
                       style={{ marginVertical: 10, justifyContent: 'center',alignSelf:'center' }}>
                       <Text style={{ fontFamily:'JosefinSans-Regular',fontSize: 20, color: '#525252' ,alignSelf:'center'}}>No, go back</Text>
                   </TouchableOpacity>
                     </View>
                     
                     
                     </View>
                 </Modal>       

                    }
               
                </ImageBackground>
            </View>
        );
    }

    
     
    
    return (
        <View style={{ flex:1,
            backgroundColor: '#fff',paddingLeft:'3%',paddingTop:'3%'
            }}>
                   <CustomIcon name='back' color='black' size={30} onPress={() => navigation.goBack()} />
               
        <View style={styles.container}>
             
        <Image style={{width: 158, height: 153}}
                source={require('../android/app/src/main/assets/icon.png')}/>
            
             <View style={{ justifyContent: 'center',marginVertical:15 }}>
                 <Text style={{fontSize:20,fontFamily:'JosefinSans-SemiBold'}}>Login/Sign-up</Text>
            </View>
            <TextInput
                style={{ marginTop:10, fontFamily:'JosefinSans-Regular', margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15,height:40 }}
                placeholder='Email'
                autoCapitalize = 'none'
                placeholderTextColor='darkgrey'
                onChangeText={(val) => textInputChange(val)}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center',marginVertical:15 }}>
                {pass?
                 <TextInput
                  ref={inputElementRef1}
                    style={{padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF',fontFamily:'JosefinSans-Regular', width: 260,height:40, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: 15}}
                      placeholder='Password'
                      autoCapitalize = 'none'
                      placeholderTextColor='darkgrey'
                     secureTextEntry={(dispPass.length<=0)?false:pass}
                      value={dispPass}
                      onChangeText={(val) => SetdispPass(val)}
                  />
                
                :
                <TextInput
                ref={inputElementRef1}
                  style={{padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF',fontFamily:'JosefinSans-Regular', width: 260,height:40, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: 15}}
                    placeholder='Password'
                    autoCapitalize = 'none'
                    placeholderTextColor='darkgrey'
                    secureTextEntry={(dispPass.length<=0)?false:pass}
                    value={dispPass}
                    onChangeText={(val) => SetdispPass(val)}
                />

                }
               
                
                <TouchableOpacity onPress={() => Setvisible(!pass)} >
                    <Icon
                        size={30}
                        name={eye}
                        style={{ backgroundColor: '#EBEDEF', borderTopRightRadius: 20, color: "darkgray", borderBottomRightRadius: 20, width: 40, height: 40,paddingTop:'1%' }}
                    />
                </TouchableOpacity>
            </View>
            {ivp ? null :
                <Text style={{ color: 'red',fontFamily:'JosefinSans-Regular' }}>Email and password should not be empty</Text>
            }
            
            <TouchableOpacity onPress={() => navigation.navigate('VerifyOTP')}>
                <Text style={{ alignSelf: 'center',fontSize: 16,color: 'black' ,paddingBottom:15,paddingLeft:160,fontFamily:'JosefinSans-Regular'}}>Forgot Password?</Text>
            </TouchableOpacity>
    
            <TouchableOpacity
                // onPress={() => {loginHandle( data.username, data.password )}}
               onPress={() => submitdata()}
                //onPress={() => setVisibility(true)}
                style={{ shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4,
                
                elevation: 7, backgroundColor: '#FFAD2F',borderRadius: 25, width: 118, justifyContent: 'center' , height: 40, justifyContent: 'center', fontWeight: 'bold' }}>
                <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 17,paddingRight:5,paddingBottom:3, color: 'white' ,alignSelf:'center'}}> Connect</Text>
            </TouchableOpacity>
            
            <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop:50}}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#d5d5d5' }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center', fontFamily:'JosefinSans-Bold', fontSize:13,color: '#292929' }}>OR</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#d5d5d5'}} />
            </View>
        
            <View style={{alignSelf:'center',paddingTop:20,paddingBottom:20}}>
            <GoogleSigninButton
    style={{ width: 220, height: 48, padding:10 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Light}
   // onPress={signIn}
   onPress={()=>Alert.alert("Functionality will be avaliable soon")}
    />
    </View>  
        </View>
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