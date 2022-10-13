import React, { useEffect, useState,useRef } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { Colors } from "../utils/Constants";
import { Picker } from '@react-native-picker/picker';

const Signup2 = ({ navigation, route }) => {
    const [accountType, setAccountType] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState();

    const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}

 function selectType(){
   if(accountType  != "")  {
    //    alert('the ha')
       navigation.navigate('Signup3', { email: route.params.email, password: route.params.password, accountType: accountType })
   }
   else{
       alert('please select account type')
   }
 }

    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}  >
            <ImageBackground style={{ width: '100%', height: 450 }} source={require('../assets/Background.png')} >
                <ImageBackground resizeMode="contain" style={styles.imageStyle} source={require('../assets/Playing-Football.png')} >
                    <Text style={styles.text} >Sign Up</Text>
                </ImageBackground>
            </ImageBackground>
            <View style={styles.input} >
                <View style={{ marginTop: 15, width: "100%",borderWidth:1,borderRadius:5 }} >
                    {/* <Input placeholder="Account Type" onChange={(value) => setAccountType(value)} /> */}
                    <Picker
                    ref={pickerRef}
                    selectedValue={accountType}
                    onValueChange={(itemValue, itemIndex) =>
                        // console.log(itemValue)
                        // setSelectedLanguage(itemValue)
                        setAccountType(itemValue)
                    }>
                        <Picker.Item label="Select Account type" value="" />
                    <Picker.Item label="Fans" value="fan" />
                    <Picker.Item label="Athlete" value="athlete" />
                </Picker>
                </View>

                <View style={{ marginTop: 15, width: "100%" }} >
                    {/* <AppButton title="Continue" onPress={() => accountType == "" ? alert('Please enter the account type') : navigation.navigate('Signup3', { email: route.params.email, password: route.params.password, accountType: accountType })} /> */}
                    <TouchableOpacity  onPress={() => selectType()} style={{ width: "100%", alignItems: "center", borderRadius: 30, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: Colors.primaryColor }}  >  
                            <Text style={{ color: "#FFF", }}>
                                Continue
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30, width: "80%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                    <Text style={{ color: "grey" }} >Already have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} >
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