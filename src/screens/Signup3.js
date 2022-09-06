import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { Colors } from "../utils/Constants";
import PlusIcon from 'react-native-vector-icons/AntDesign'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { userRegister } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
const dummy = "https://www.kindpng.com/picc/m/182-1820429_fifa-cup-football-player-vector-world-clipart-football.png"
const Signup3 = ({ navigation, route }, props) => {

    const [userPic, setUserPic] = useState(dummy)
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [dob, setDob] = useState('')
    const state = useSelector(state => state.auth.isLoading)
    const dispatch = useDispatch()
    const options = {
        mediaType: "Photo",
        maxWidth: 200,
        maxHeight: 300,
        saveToPhotos: true
    }

    const addPhoto = () => {
        launchImageLibrary(options, (res) => {
            const picUrl = res.assets && res.assets[0]?.uri
            console.log("My Pic log --> ", picUrl);
            picUrl && setUserPic(picUrl)
        });
    }
    const registration = () => {
        // {
        //     username && fullname && dob ? dispatch(userRegister(
        //         username,
        //         route.params.email,
        //         route.params.password,
        //         fullname,
        //         dob,
        //         route.params.accountType,
        //         () => navigation.navigate('TabScreen')
        //     )) : alert('Please enter all the required fields')
        // }

        navigation.navigate('AuthleteSoccer',{accountType:route.params.accountType})
    }

    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}  >
            <ImageBackground style={{ width: '100%', height: 450 }} source={require('../assets/Background.png')} >
                <Text style={styles.text} >Sign Up</Text>
                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }} >
                    <Image style={styles.imageStyle} source={require('../assets/Image.png')} />
                    <PlusIcon onPress={() => addPhoto()} name="plus" size={25} color="#FFF" style={{ alignSelf: "center", bottom: 50, right: 20 }} />
                </View>
            </ImageBackground>
            <View style={styles.input} >
                <View style={{ marginTop: 15, width: "100%" }} >
                    <Input placeholder="User Name" onChange={(value) => setUsername(value)} />
                </View>
                <View style={{ marginTop: 15, width: "100%" }} >
                    <Input placeholder="Full Name" onChange={(value) => setFullname(value)} />
                </View>
                <View style={{ marginTop: 15, width: "100%" }} >
                    <Input placeholder="Date of Birth" onChange={(value) => setDob(value)} />
                </View>

                {(route.params.accountType).toLowerCase() === 'athlete' ? <View style={{ marginTop: 15, width: "100%" }} >
                    <Input placeholder="Sports" />
                </View> : null}

                <View style={{ marginTop: 15, width: "100%" }} >
                    <AppButton onPress={() => registration()} title="Continue" state={state} />
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
        marginTop: 70,
        fontSize: 20
    },
    imageStyle: {
        alignSelf: "center",
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 300,
        borderColor: '#fff',
        borderWidth: 4,
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

export default Signup3;