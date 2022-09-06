import React,{useState} from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView, StatusBar,ActivityIndicator } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { Colors } from "../utils/Constants";
import {useDispatch,useSelector} from 'react-redux'
import { userLogin } from "../redux/actions";

const Login = ({ navigation }) => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [validator, setValidator]= useState(false);
    const dispatch = useDispatch()
    const state = useSelector(state => state.auth.isLoading)
    console.disableYellowBox = true;
    emailValidate = (email) => {
        console.log(email);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
        //   alert("Email is Not Correct");
          setValidator(false)
          setEmail(email)
          return false;
        }
        else {
          setEmail(email)
          setValidator(true)
        //   alert("Email is Correct");
        }
      }
    const login=()=>{
        // email!=''? validator? password.length != 0 ?
        // dispatch(userLogin(
        //     email,
        //     password,
        //     ()=>navigation.navigate('TabScreen')
        //     ))
        //     : alert(`Please enter password`) :alert("Please enter a valid email address"):alert('Please enter a email address')

        navigation.navigate('TabScreen')
    }
    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}>
            <ImageBackground style={{ width: '100%', height: 450 }} source={require('../assets/Background.png')} >
                    <Text style={styles.text} >Sign In</Text>
                <ImageBackground resizeMode="contain" style={styles.imageStyle} source={require('../assets/Playing-Football-v01.png')} >
                </ImageBackground>
            </ImageBackground>
            <View style={styles.input} >
                    <View style={{ marginTop: 15, width: "100%" }} >
                        <Input placeholder="Email" onChange={(value)=>emailValidate(value.toLowerCase())}/>
                    </View>
                    <View style={{ marginTop: 15, width: "100%" }} >

                        <Input secureTextEntry={true} placeholder="Password" onChange={(value)=>setPassword(value)}/>
                    </View>
                    <View style={{ marginTop: 15, width: "100%" }} >
                        <AppButton title="Sign In" onPress={()=>login()} state={state}/>
                    </View>

                    <View style={{ marginTop: 30,alignSelf:"flex-start", width: "90%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                        <Text style={{ color: "grey" }} >Need an Account ?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Signup1')}  >
                            <Text style={{ color: Colors.primaryColor }} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10,alignSelf:"flex-start", width: "90%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                        <Text style={{ color: "grey" }} >Forgot Your Password ?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword1')}  >
                            <Text style={{ color: Colors.primaryColor }} >Retrive</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:50,}} />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#FFF",
        alignSelf: "center",
        marginTop: 40,
        fontSize: 20
    },
    imageStyle: {
        alignSelf: "center",
        width: 500,
        height: 450,
        // marginTop:40,
        left:70
        // bottom: 10,
    },
    input: {
        alignItems: "center",
        width: "85%",
        alignSelf: "center"
    }
})



export default Login;