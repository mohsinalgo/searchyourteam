import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView, FlatList } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { Colors } from "../utils/Constants";
import PlusIcon from 'react-native-vector-icons/AntDesign'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { userRegister } from '../redux/actions'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux'
const dummy = "https://www.kindpng.com/picc/m/182-1820429_fifa-cup-football-player-vector-world-clipart-football.png"
const AuthleteSoccer = ({ navigation, route }, props) => {
    const DATA = [
        {
            id: '1',
            title1: 'France - Ligue 1',
            title2: 'Lyon - Pro',
            year: '2020-2021',
            lw: 'LW - 18 - 6 - 27',
            point1: '1',
            point2: '8',
            follows: '100K',
            addBtn: true,
        },
        {
            id: '2',
            title1: 'France - Ligue 1',
            title2: 'A.S Monaco - Pro',
            year: '2020-2021',
            lw: 'LW - 18 - 6 - 27',
            point1: '0',
            point2: '7',
            follows: 'N/A',
            addBtn: false,
        },
        {
            id: '3',
            title1: 'Belgium - Jupiler League',
            title2: 'Genk - Pro',
            year: '2018-2019',
            lw: 'LW - 18 - 6 - 27',
            point1: '1',
            point2: '0',
            follows: 'N/A',
            addBtn: false,
        }
    ]
    
    const [userPic, setUserPic] = useState(dummy)
    const [wherePlaying, setWherePlaying] = useState('')
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
        //     wherePlaying && fullname && dob ? dispatch(userRegister(
        //         wherePlaying,
        //         route.params.email,
        //         route.params.password,
        //         fullname,
        //         dob,
        //         route.params.accountType,
        //         () => navigation.navigate('TabScreen')
        //     )) : alert('Please enter all the required fields')
        // }

        navigation.navigate('TabScreen', { accountType: route.params.accountType })
    }


    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}  >
            <ImageBackground style={{ width: '100%', height: 450 }} source={require('../assets/Background.png')} >
                <Text style={styles.text} >Statistics</Text>
                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }} >
                    <Image style={styles.imageStyle} source={require('../assets/Image.png')} />
                </View>
            </ImageBackground>
            <View style={styles.input} >
              

             
                <View style={{
                    backgroundColor: '#fff',
                    width: '90%', alignItems: 'center', borderRadius: 20, marginTop: 30, paddingBottom: 20,
                    shadowColor: '#d0d0d0', shadowOffset: { width: 0, height: 1 }, shadowRadius: 10, shadowOpacity: 0.7
                }}>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Country" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Division" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Team" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Level" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Season" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Position" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Goal" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Decisive Pass" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="How Many Match Played" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Yellow Card" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Red Card" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Height" onChange={(value) => setWherePlaying(value)} />
                    </View>
                    <View style={{ marginTop: 15, width: "80%" }} >
                        <Input placeholder="Weight" onChange={(value) => setWherePlaying(value)} />
                    </View>

                  
                </View>

            



                <View style={{ marginTop: 15, width: "100%" }} >
                    <AppButton onPress={() => registration()} title="Confirm" state={state} />
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
    },
    titles: {
        color: Colors.primaryColor
    }
})

export default AuthleteSoccer;