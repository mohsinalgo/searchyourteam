import React, { useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Heart from 'react-native-vector-icons/Entypo'
import Chat from 'react-native-vector-icons/Ionicons'
import VideoPlayer from 'react-native-video-player'
import { Colors } from "../utils/Constants";
export default TrialProgram = ({ navigation }) => {
    const [progress, setProgress] = useState(true);
    const [schedule, setSchedule] = useState(false);
    const [about, setAbout] = useState(false);

    const DATA = [
        {
            id: '1',
            schedule: 'Now    ',
            lesson: 'Lessons',
            duration: '90 mins',
            color: '#fff',
        },
        {
            id: '2',
            schedule: `02:30\npm`,
            lesson: 'Warm-up Exercises',
            duration: '30 mins',
            color: '#7EAA7C',
        },
        {
            id: '3',
            schedule: `04:00\npm`,
            lesson: 'Sports Therapy',
            duration: '45 mins',
            color: '#FF7A7A',
        },
        {
            id: '4',
            schedule: `05:15\npm`,
            lesson: 'Match Training',
            duration: '90 mins',
            color: '#3E90DC',
        },
    ];

    const renderItem = ({ item, index }) => (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, marginRight: 10 }}>{item.schedule}</Text>
                <View style={{ flexDirection: 'column', borderRadius: 10, backgroundColor: item.color, width: 300, height: 70, paddingLeft: 20, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.lesson}</Text>
                    <Text style={{ fontWeight: '600', opacity: 0.7 }}>{item.duration}</Text>
                </View>

            </View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../../assets/images/trial.png')}
                    resizeMode='cover'
                    style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 15 }}>
                        <Chat onPress={() => navigation.goBack()} name="arrow-back-outline" size={25} style={{ color: '#fff' }} />
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Trial Details</Text>
                        <Icon name='more-vertical' size={25} style={{ color: '#fff' }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center', marginBottom: 35 }}>
                        <Image source={require('../../assets/logo/Icon.png')} />
                        <TouchableOpacity onPress={() => navigation.navigate('VideoModal',{video:require('../assets/football.mp4')})} style={{ marginLeft: 10 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Play Video</Text>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>3:45</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', width: '90%', height: 50, borderRadius: 20, alignSelf: 'center',
                backgroundColor: '#fff', marginTop: -25
            }}>
                <TouchableOpacity onPress={() => { setProgress(true); setSchedule(false); setAbout(false) }} style={{ width: '34%', alignItems: 'center', backgroundColor: progress ? '#7EAA7C' : '#fff', justifyContent: 'center', height: 50, borderRadius: 20 }}>
                    <View >
                        <Text style={[
                            {
                                fontWeight: 'bold', fontSize: 15,
                                color: progress ? '#fff' : '#000'
                            }
                        ]}>Programs</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setProgress(false); setSchedule(true); setAbout(false) }} style={{ width: '33%', alignItems: 'center', backgroundColor: schedule ? '#7EAA7C' : '#fff', justifyContent: 'center', height: 50, borderRadius: 20 }}>
                    <View >
                        <Text style={[
                            {
                                fontWeight: 'bold', fontSize: 15,
                                color: schedule ? '#fff' : '#000'
                            }
                        ]}>Schedule</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setProgress(false); setSchedule(false); setAbout(true) }} style={{ width: '33%', alignItems: 'center', justifyContent: 'center', backgroundColor: about ? '#7EAA7C' : '#fff', height: 50, borderRadius: 20 }}>
                    <View >
                        <Text style={[
                            {
                                fontWeight: 'bold', fontSize: 15,
                                color: about ? '#fff' : '#000'
                            }
                        ]}>About</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {progress ? (<View style={{ marginBottom: 10, marginTop: 20 }}>
                <View style={{ backgroundColor: '#fff', width: 50, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 15, marginLeft: 20, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <Text>U9</Text>
                    <Icon name='chevron-down' />
                </View>
                <View style={{ backgroundColor: '#fff', width: '95%', marginHorizontal: '5%', marginTop: 10, alignSelf: 'center', padding: 10, borderRadius: 10 }}>
                    <Image source={require('../../assets/logo/Logo.png')} />
                    <Text style={{ fontWeight: 'bold', fontSize: 17, paddingTop: 15 }}>Manchester City’s Trial</Text>
                    <View
                        style={{ flexDirection: 'row', marginTop: 13, alignItems: 'baseline' }}>
                        <Text style={{ fontWeight: '800', fontSize: 17, color: '#7EAA7C' }}>$2400</Text>
                        <Text style={{ opacity: 0.8, fontWeight: '600' }}>/person</Text>
                    </View>
                    <Text style={{ marginTop: 8 }}>⭐ ⭐ ⭐ ⭐ ⭐  4.9</Text>
                    <Text style={{ marginTop: 8, fontSize: 15, letterSpacing: 1.2, lineHeight: 25, fontWeight: 'bold' }}>{`Cras in libero urna. Ut semper\nneque id nulla malesuada.`}</Text>
                    <View style={{ backgroundColor: '#E2EDE1', marginTop: 20, width: 200, borderRadius: 10, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#7EAA7C', fontWeight: 'bold' }}>
                            Register to this trial
                        </Text>
                    </View>
                </View>
            </View>) : <View />}

            {about ? (<View style={{ backgroundColor: '#fff', marginBottom: 10, padding: 20, marginTop: 45, marginHorizontal: 10, borderRadius: 10 }}>
                <Image source={require('../../assets/logo/Logo.png')} />
                <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 16, marginBottom: 30 }}>Manchester City</Text>
                <Text style={{ letterSpacing: 1, marginBottom: 10, lineHeight: 20, fontWeight: '500' }}>{`Cras in libero urna. Ut semper neque id nulla malesuada. Cras in libero urna. Ut semper neque id nulla malesuada. Cras in libero urna. Ut semper neque id nulla malesuada. Cras in libero urna. Ut semper neque id nulla malesuada. Cras in libero urna. Ut semper neque id nulla malesuada.`}</Text>
            </View>) : <View />}

            {schedule ? (<View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{ backgroundColor: '#fff', width: 50, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 15, marginLeft: 20, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <Text>U9</Text>
                        <Icon name='chevron-down' />
                    </View>
                    <View style={{ backgroundColor: '#7EAA7C', marginLeft: 15, height: 40, width: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Mon</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', marginLeft: 10, height: 40, width: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Wen</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', marginLeft: 10, height: 40, width: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Fri</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', marginLeft: 10, height: 40, width: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Sun</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 10, marginTop: 20 }}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                    />
                </View>
            </View>) : <View />}
        </View>
    )
}
const styles = StyleSheet.create({
    trendingVideo: {
        borderRadius: 8,
        backgroundColor: Colors.primaryColor
    },
})