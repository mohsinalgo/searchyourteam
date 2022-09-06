import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { Colors } from "../utils/Constants";
import BackIcon from 'react-native-vector-icons/Ionicons'


const dummy = "https://www.kindpng.com/picc/m/182-1820429_fifa-cup-football-player-vector-world-clipart-football.png"
const ForgotPassword2 = ({ navigation }) => {

    const [userPic, setUserPic] = useState(dummy)
    const options = {
        mediaType: "Photo",
        maxWidth: 200,
        maxHeight: 300,
        saveToPhotos: true
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
                    <BackIcon name="arrow-back-outline" size={25} color={"#FFF"} />
                    <Text style={styles.text} >Login Again</Text>
                    <Text style={styles.text} ></Text>
                </View>
            </ImageBackground>
            <View style={styles.input} >
                <View style={{ marginTop: 10, width: "100%" }} >
                    <Image style={{alignSelf:"center"}} source={require('../assets/Icon.png')} />
                </View>
                <View style={{ marginTop: 15, width: "80%" }} >
                    <Text style={{ color: "grey",textAlign:"center" }} >Please check your email </Text>
                    <Text style={{ color: "grey",textAlign:"center",paddingVertical:5 }} >for password reset instructions</Text>

                </View>
                <View style={{ marginTop: 30, width: "100%" }} >
                    <AppButton onPress={() => navigation.navigate('Login')} title="Login Again" />
                </View>
            </View>
            <View style={{height:50,marginTop:20}} />

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

export default ForgotPassword2;