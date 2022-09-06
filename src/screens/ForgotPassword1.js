import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { Colors } from "../utils/Constants";
import BackIcon from 'react-native-vector-icons/Ionicons'
import { forgotPassword,verifyCode,resetPassword } from "../redux/actions";
import { useDispatch,useSelector } from 'react-redux'

const dummy = "https://www.kindpng.com/picc/m/182-1820429_fifa-cup-football-player-vector-world-clipart-football.png"
const ForgotPassword1 = ({ navigation }) => {
    const dispatch = useDispatch()
    const [userPic, setUserPic] = useState(dummy);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [code, setCode]=useState('');
    const [forgot, setForgot] = useState(true);
    const [verifyCodeState, setVerifyCode] = useState(false);
    const [resetPasswordState, setResetPassword] = useState(false);
    const [validator, setValidator] = useState(false)
    const options = {
        mediaType: "Photo",
        maxWidth: 200,
        maxHeight: 300,
        saveToPhotos: true
    }
    const state = useSelector(state => state.auth.isLoading)
    emailValidate = (email) => {
        console.log(email);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
          setValidator(false)
          setEmail(email)
          return false;
        }
        else {
          setEmail(email)
          setValidator(true)
        }
      }
    const ForgotPassword = () => {
    //    {email!=''? validator? dispatch(forgotPassword(
    //         email,
    //         () => { setForgot(false), setVerifyCode(true) }
    //     )):alert("Please enter a valid email address"):alert('Please enter email')}
    navigation.navigate('ForgotPassword2')
    }
    const VerifyCode = () => {
        {code.length==4? dispatch(verifyCode(
            email,
            code,
            () => { setVerifyCode(false), setResetPassword(true) }
        )):alert('Please enter a valid code')}
    }
    const ResetPassword = () => {
        {password.length>5?password== confirmPassword? dispatch(resetPassword(
            email,
            password,
            () => navigation.navigate('TabScreen')
        )):alert(`Password didn't match`):alert('Password length must greater than 6')}
    }
    const addPhoto = () => {
        launchImageLibrary(options, (res) => {
            const picUrl = res.assets[0]?.uri
            console.log("My Pic log --> ", picUrl);
            picUrl && setUserPic(picUrl)
        });
    }
    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}  >
            <ImageBackground style={{ width: '100%', height: 450 }} source={require('../assets/Background.png')} >
                <View style={{ paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                    <BackIcon name="arrow-back-outline" size={25} color={"#FFF"} onPress={()=>navigation.goBack()}/>
                    <Text style={styles.text} >Forgot Password</Text>
                    <Text style={styles.text} ></Text>
                </View>
            </ImageBackground>
            <View style={styles.input} >
                {forgot && <View style={{ marginTop: 15, width: "100%" }} >
                    <Input placeholder="Your Email" onChange={(value)=>emailValidate(value.toLowerCase())}/>
                </View>}
                {verifyCodeState && <View style={{ marginTop: 15, width: "100%" }} >
                    <Input placeholder="Your verification code" onChange={(value)=>setCode(value)}/>
                </View>}
                {!resetPasswordState && <View style={{ marginTop: 0, width: "100%" }}>
                    <View style={{ marginTop: 15, width: "100%" }} >
                        <Input secureTextEntry={true} placeholder="Your New Password" onChange={(value)=>setPassword(value)}/>
                    </View>
                    <View style={{ marginTop: 15, width: "100%" }} >
                        <Input secureTextEntry={true} placeholder="Confirm Password" onChange={(value)=>setConfirmPassword(value)}/>
                    </View>
                </View>}
                <View style={{ marginTop: 15, width: "100%" }} >
                    <AppButton title="Continue" onPress={() => {forgot&&ForgotPassword(),verifyCodeState&& VerifyCode(), resetPasswordState&& ResetPassword()}} state={state}/>
                </View>
                <View style={{ marginTop: 30, width: "80%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                    <Text style={{ color: "grey" }} >Already have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
                        <Text style={{ color: Colors.primaryColor }} >Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 50 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#FFF",
        alignSelf: "center",
        // marginTop: 70,
        fontSize: 20
    },
    imageStyle: {
        alignSelf: "center",
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 300
        // bottom: 40,
        // backgroundColor: "red",
    },
    input: {
        alignItems: "center",
        width: "85%",
        alignSelf: "center",
        marginTop: 20
    }
})

export default ForgotPassword1;