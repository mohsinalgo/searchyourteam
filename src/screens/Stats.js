import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView, StatusBar } from 'react-native'
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import { Colors } from "../utils/Constants";
import BackIcon from 'react-native-vector-icons/Ionicons'
import DetailsIcon from 'react-native-vector-icons/Entypo'


const dummy = "https://lh3.googleusercontent.com/proxy/ZplMkeQ_tQvfu6yOx1E0CzuVGub1SdAraswYjrlrfzjTQnKi-tsyA3mSkrSBuxnDCJLeWczUX_cMxQb_cf41lvsC-3OUUnab_BM8aqBJPksnv1Li6xxS32OF"
const flag = "https://cdn.countryflags.com/thumbs/colombia/flag-400.png"
const statsArr = [
    { heading: "Value", value: "1.3M" },
    { heading: "Goals", value: "88" },
    { heading: "Leg", value: "R" },
    { heading: "Selected", value: "46%" },
    { heading: "Match", value: "89" }
]
const Stats = ({ navigation }) => {



    return (
        <ScrollView style={{ backgroundColor: "#fafafa", flex: 1 }}  >
            <StatusBar backgroundColor={"#fafafa"} />
            <View style={{ paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                <BackIcon onPress={() => navigation.goBack()} name="arrow-back-outline" size={25} color={"#000"} />
                <Text style={styles.text} >Footballer</Text>
                <DetailsIcon name="dots-three-vertical" size={25} color={"#000"} />

            </View>
            <View style={styles.profileContainer} >
                <View style={{ width: "50%", alignItems: "center" }} >
                    <View style={styles.pro} >
                        <Text style={styles.text} >Pro</Text>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-around", width: "100%", alignItems: "center" }} >
                        <Image resizeMode="contain" style={{ width: "20%", height: 22 }} source={{ uri: flag }} />
                        <View style={styles.textCont} >
                            <Text style={styles.text} >MF</Text>
                        </View>
                        <View style={styles.textCont} >
                            <Text style={styles.text} >Age: 29</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-around", width: "100%", alignItems: "center" }} >
                        <Text>  </Text>
                        <View style={styles.textCont} >
                            <Text style={styles.text} >183 cm</Text>
                        </View>
                        <View style={styles.textCont} >
                            <Text style={styles.text} >77 kg</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "flex-start", alignSelf: "flex-start", paddingHorizontal: 10, marginTop: 20 }} >
                        <Text style={{ fontSize: 25, fontWeight: "600",marginTop:20, }} >MATTHIEO LORAICHIE</Text>
                    </View>
                </View>
                <View style={{ width: "50%" }} >
                    <Image style={styles.imageStyle} source={require('../../assets/images/athlete1.png')} />
                </View>
            </View>

            <View style={styles.stats} >
                {
                    statsArr.map((item) => {
                        return <View>
                            <Text style={styles.Headingtext} >{item.heading}</Text>
                            <Text style={styles.itemText} >{item.value}</Text>
                        </View>
                    })
                }

            </View>
            <View style={{ paddingHorizontal: 5, width: "95%", borderRadius: 10, alignSelf: "center", backgroundColor: "#FFF", paddingVertical: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop:10 }} >
                <View style={{ backgroundColor: "#dedede", height: 50, width: 50, borderRadius: 200, alignItems: "center" }} >
                    <View style={{ backgroundColor: "#6dd400", height: 25, width: 25, marginTop: 12 }} >

                    </View>
                </View>
                <View >
                    <Text style={styles.text} >Current Frame</Text>
                    <Text style={styles.Headingtext} >Integer nec est at ipsum suscipit venenau:</Text>
                </View>
            </View>
            <View style={{ marginTop: 20 }} >
                <Text style={styles.text} >Teams</Text>
            </View>
            <View style={styles.statsCard} >
                <View style={styles.statsInternal} >
                    <View style={styles.statsInternal} >
                        <View style={{ backgroundColor: "#dedede", height: 50, width: 50, borderRadius: 200, alignItems: "center" }} />
                        <Text style={styles.Headingtext} >Ligue 1</Text>
                    </View>
                    <Text style={styles.text} >2020-2021</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <View style={{ alignSelf: "center" }} >
                        <Text style={styles.text}  >Paris-Sain-Germain</Text>
                    </View>
                    <View >
                        <Text style={styles.Headingtext} >Match</Text>
                        <Text style={styles.Headingtext}  >Goals</Text>
                        <Text style={styles.Headingtext} >Decisive pass</Text>
                    </View>
                    <View >
                        <Text style={styles.text} >8</Text>
                        <Text style={styles.text}  >6</Text>
                        <Text style={styles.text} >5</Text>

                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 5 }} >
                <Text style={styles.text} >Stats  Avg 83</Text>
                <Text style={styles.text} >(Certified by UEFA Coach) </Text>
                <Text style={styles.text} >Avg 83</Text>
            </View>

            <View style={{ backgroundColor: "#FFF", width: "95%", borderRadius: 10, alignSelf: "center", paddingVertical: 10, marginTop: 20 }} >
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }} >
                    <View style={{ flex: 0.4 }} >
                        <Text style={styles.text}>Pace</Text>
                    </View>
                    <View style={{
                        backgroundColor: "red",
                        // width:"88%",
                        flex: 0.88,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 12
                    }} >
                        <Text style={styles.scoreText} >88</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }} >
                    <View style={{ flex: 0.4 }} >
                        <Text style={styles.text}>Shooting</Text>
                    </View>
                    <View style={{
                        backgroundColor: "green",
                        // width:"90%",
                        flex: 0.77,
                        alignSelf: "flex-start",
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 12
                    }} >
                        <Text style={styles.scoreText} >77</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }} >
                    <View style={{ flex: 0.4 }} >
                        <Text style={styles.text}>Passing</Text>
                    </View>
                    <View style={{
                        backgroundColor: "blue",
                        // width:"90%",
                        flex: 0.6,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 12
                    }} >
                        <Text style={styles.scoreText} >60</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }} >
                    <View style={{ flex: 0.4 }} >
                        <Text style={styles.text}>Dribbling</Text>
                    </View>
                    <View style={{
                        backgroundColor: "orange",
                        // width:"90%",
                        flex: 0.75,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 12
                    }} >
                        <Text style={styles.scoreText} >75</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: "flex-end", paddingHorizontal: 10, marginTop: 20 }} >
                <Text style={styles.Headingtext}>Season 2020-2021</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30, alignSelf: "center", width: '100%', paddingHorizontal: 10 }} >
                <View style={{ paddingVertical: 10, flexDirection: "row", width: "40%", backgroundColor: "#FFF", justifyContent: "space-between", paddingHorizontal: 10 }} >
                    <View style={{ backgroundColor: "red", height: 60, width: 40, borderColor: "grey", borderWidth: 1 }} />
                    <View style={{ alignItems: "center" }} >
                        <Text style={styles.text} >Red Card</Text>
                        <Text style={styles.Headingtext}>6</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 10, flexDirection: "row", width: "40%", backgroundColor: "#FFF", justifyContent: "space-between", paddingHorizontal: 10 }} >
                    <View style={{ backgroundColor: "yellow", height: 60, width: 40, borderColor: "grey", borderWidth: 1 }} />
                    <View style={{ alignItems: "center" }} >
                        <Text style={styles.text} >Yellow Card</Text>
                        <Text style={styles.Headingtext} >4</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 50, marginTop: 20 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#000",
        // alignSelf: "center",
        // marginTop: 70,
        fontSize: 15,
        fontWeight: "bold",

        paddingHorizontal: 10
    },
    statsCard: {
        backgroundColor: "#FFF",
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "95%",
        alignSelf: "center",
        borderRadius: 8,
        marginTop: 10
    },

    scoreText: {
        color: "#FFF",
        fontWeight: "bold",
    },
    Headingtext: {
        color: 'grey',
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 10,
        alignSelf: "center"
        // textAlign:"center"
    },
    itemText: {
        color: '#000',
        fontSize: 15,
        fontWeight: "bold",
        paddingHorizontal: 10,
        textAlign: "center",
        lineHeight: 50
    },
    textCont: {
        backgroundColor: "#ededed",
        borderRadius: 8,
        paddingVertical: 5
    },
    profileContainer: {
        flexDirection: "row", alignItems: "center",
        paddingHorizontal: 5,
        backgroundColor: "#fafafa"
    },
    imageStyle: {
        alignSelf: "center",
        width: "90%",
        height: 300,
        marginTop: 20,
        borderRadius: 20
        // bottom: 40,
        // backgroundColor: "red",
    },
    input: {
        alignItems: "center",
        width: "85%",
        alignSelf: "center",
        marginTop: 20
    },
    pro: {
        backgroundColor: "yellow",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    stats: {
        marginTop: 30,
        backgroundColor: "#fafafa",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    statsInternal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default Stats;