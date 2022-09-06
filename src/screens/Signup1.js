import React,{useState} from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView, StatusBar } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { addPost } from "../redux/actions/postAction";
import { Colors } from "../utils/Constants";
const Signup1 = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [validator, setValidator] = useState(false)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
    const passwordCheck = () => {
        // {
        //   email!=''? validator? password.length > 5 ? password == confirmPassword ?
        //         navigation.navigate('Signup2', { email: email, password: password })
        //         : alert(`Password didn't match`) : alert('Password length must greater than 6'):alert("Please enter a valid email address"):alert('Please enter a email address')
        // }
        navigation.navigate("Signup2",{email:'demo123@gmail.com',password:'admin123'})
    }
    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}  >
            <StatusBar backgroundColor={Colors.primaryColor} />
            <ImageBackground style={{ width: '100%', height: 450 }} source={require('../assets/Background.png')} >
                <ImageBackground resizeMode="contain" style={styles.imageStyle} source={require('../assets/Playing-Football.png')} >
                    <Text style={styles.text} >Sign Up</Text>
                </ImageBackground>
            </ImageBackground>
            <View style={styles.input} >
                <View style={{ marginTop: 15, width: "100%" }} >
                    <Input placeholder="Email" onChange={(value) => emailValidate(value.toLowerCase())} />
                </View>
                <View style={{ marginTop: 15, width: "100%" }} >

                    <Input secureTextEntry={true} placeholder="Password" onChange={(value) => setPassword(value)} />
                </View>
                <View style={{ marginTop: 15, width: "100%" }} >

                    <Input secureTextEntry={true} placeholder="ConfirmPassword" onChange={(value) => setConfirmPassword(value)} />
                </View>
                <View style={{ marginTop: 15, width: "100%" }} >
                    <AppButton title="Continue" onPress={() => passwordCheck()} />
                </View>

                <View style={{ marginTop: 30, width: "80%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                    <Text style={{ color: "grey" }} >Already have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
                        <Text style={{ color: Colors.primaryColor }} >Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#FFF",
        alignSelf: "center",
        marginTop: 70,
        fontSize: 20
    },
    imageStyle: {
        alignSelf: "center",
        width: 700,
        height: 500,
        bottom: 40
    },
    input: {
        alignItems: "center",
        width: "85%",
        alignSelf: "center"
    }
})



export default Signup1;