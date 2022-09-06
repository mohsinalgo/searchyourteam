import React,{useEffect, useState} from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { Colors } from "../utils/Constants";

const Signup2 = ({ navigation,route }) => {
    const [accountType, setAccountType] = useState('');

    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}  >
            <ImageBackground style={{ width: '100%', height: 450 }} source={require('../assets/Background.png')} >
                <ImageBackground resizeMode="contain" style={styles.imageStyle} source={require('../assets/Playing-Football.png')} >
                    <Text style={styles.text} >Sign Up</Text>
                </ImageBackground>
            </ImageBackground>
            <View style={styles.input} >
                    <View style={{ marginTop: 15, width: "100%" }} >
                        <Input placeholder="Account Type" onChange={(value)=>setAccountType(value)}/>
                    </View>
                    <View style={{ marginTop: 15, width: "100%" }} >
                        <AppButton title="Continue" onPress={()=>accountType== ""?alert('Please enter the account type'):navigation.navigate('Signup3',{email:route.params.email,password:route.params.password,accountType:accountType})} />
                    </View>
                    <View style={{ marginTop: 30, width: "80%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                        <Text style={{ color: "grey" }} >Already have an account ?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                            <Text style={{ color: Colors.primaryColor }} >Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:50}} />
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



export default Signup2;