import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Colors } from "../utils/Constants";
import BackIcon from 'react-native-vector-icons/Ionicons'
import PlusIcon from 'react-native-vector-icons/AntDesign'
import { addPost } from "../redux/actions/postAction";
import { useDispatch, useSelector } from 'react-redux'
const dummy = "https://www.pinclipart.com/picdir/big/374-3742495_png-file-gallery-icon-png-white-clipart.png"

const InputForm = ({ navigation }) => {
    const dispatch = useDispatch()
    const [picture, setPicture] = useState(dummy);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const options = {
        mediaType: "Photo",
        maxWidth: 200,
        maxHeight: 300,
        saveToPhotos: true
    }
    const state = useSelector(state => state.postReducer.isLoading)
    const addPhoto = () => {
        launchImageLibrary(options, (res) => {
            const picUrl = res.assets[0]?.uri
            console.log("My Pic log --> ", picUrl);
            picUrl && setPicture(picUrl)
        });
    }
    const AddPost = () => {
        dispatch(addPost(
            title,
            description,
            picture,
            ()=>navigation.navigate('TabScreen')
        ))
    }
    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}  >
            <ImageBackground style={{ width: '100%', height: 450 }} source={require('../assets/Background.png')} >
                <View style={{ paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                    <BackIcon name="arrow-back-outline" size={25} color={"#FFF"} onPress={() => navigation.goBack()} />
                    <Text style={styles.text} >Add Post</Text>
                    <View/>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }} >
                    <TouchableOpacity onPress={() => addPhoto()}>
                    <Image  style={styles.imageStyle} source={{uri:picture}} resizeMode={'contain'}/>
                   </TouchableOpacity>
                    {/* <PlusIcon onPress={() => addPhoto()} name="plus" size={25} color="#FFF" style={{ alignSelf: "center", bottom: 50, right: 20 }} /> */}
                </View>
            </ImageBackground>
            <View style={styles.input} >
                {/* <View style={{ height: 60, width: 60, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', borderColor: '#ccc', borderRadius: 10 }}>
                    <BackIcon name="image-outline" size={60} />
                </View> */}
                <View style={{ marginTop: 15, width: "100%" }} >
                    <Input placeholder="Title" onChange={(value) => setTitle(value.toLowerCase())} />
                </View>
                <View style={{ marginTop: 15, width: "100%", borderRadius: 15, paddingHorizontal: 10, paddingVertical: Platform.OS === "ios" ? 15 : 0, borderColor: Colors.borderColor, borderWidth: 1 }}>
                    <TextInput placeholder='Description' placeholderTextColor={"grey"} style={{ color: "grey", }} multiline={true} numberOfLines={5} onChangeText={(value) => setDescription(value)} />
                </View>
                <View style={{ marginTop: 15, width: "100%" }} >
                    <AppButton onPress={() => AddPost()} title="Add" state={state}/>
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
        fontSize: 20
    },
    imageStyle: {
        alignSelf: "center",
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 40
    },
    input: {
        alignItems: "center",
        width: "85%",
        alignSelf: "center",
        marginTop: 20
    }
})

export default InputForm;