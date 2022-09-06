import React, { useEffect } from "react";
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity, useWindowDimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from "../utils/Constants";
import VideoPlayer from 'react-native-video-player'
const ProfileAthlete = () => {
    const { width: windowWidth } = useWindowDimensions();
    console.reportErrorsAsExceptions = false;
    const DATA = [
        {
            id: '1',
            image: require('../../assets/images/Image1.png')
        },
        {
            id: '2',
            image: require('../../assets/images/Image2.png')
        },
        {
            id: '3',
            image: require('../../assets/images/image4.png')
        },
        {
            id: '4',
            image: require('../../assets/images/image5.png')
        },
    ];
    const renderItem = ({ item, index }) => (
        <View style={{ width: windowWidth / 2, height: 140, justifyContent: 'center' }} >
            <Image source={item.image} resizeMode='cover'
                style={{ width: windowWidth / 2.4, height: 140, borderRadius: 20, alignSelf: 'center' }}
            />
        </View>
    );
    return (
        <View>

            {/* HEADER */}
            <View style={styles.headerContainer}>
                <Icon name="menu" size={20} color='#fff' />
                <View style={styles.titleContainer}>
                    <Text style={styles.headerTitle}>Athlete</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollContainer}>

                {/* PROFILE SECTION */}
                <View style={styles.profileContainer}>
                    <Image source={require('../../assets/images/athlete1.png')}
                        resizeMode='contain' style={styles.profileImage} />

                    <View style={styles.profileContent}>
                        <Text style={styles.profileName}>{`Matthieu \nLaroche`}</Text>
                        <View style={styles.flagContainer}>
                            <Image
                                style={styles.flagImage}
                                source={require('../../src/assets/france_hires.png')} />
                            <View style={styles.proContainer}>
                                <Text style={styles.proText}>PRO</Text>
                            </View>
                        </View>

                        <View style={styles.ageContainer}>
                            <View style={styles.ageBox}>
                                <Text style={styles.age}>Age : 21</Text>
                            </View>
                            <View style={styles.genderContainer}>
                                <Text style={styles.gender}>MF</Text>
                            </View>
                        </View>

                        <View style={styles.countryContainer}>
                            <Text style={styles.country}>Paris-Saint-Germain</Text>
                        </View>

                        <TouchableOpacity style={styles.statsBtn}>
                            <Text style={styles.stats}>Stats</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* FOLLOWER SECTION */}
                <View style={styles.followerSection}>
                    <View style={styles.followerContainer}>
                        <Text style={styles.followers}>Followers</Text>
                        <Text style={styles.numFollow}>1,293</Text>
                    </View>
                    <View style={styles.followerContainer}>
                        <Text style={styles.followers}>Following</Text>
                        <Text style={styles.numFollow}>1,506</Text>
                    </View>
                    <View style={styles.followerContainer}>
                        <Text style={styles.followers}>Likes</Text>
                        <Text style={styles.numFollow}>6K</Text>
                    </View>
                </View>

                {/* HIGHLIGHT SECTION */}
                <View style={styles.highlightSection}>
                    <View style={styles.highlight_followBtn}>

                        <View style={styles.onlyHighlight}>
                            <Text style={styles.highlighText}>Highlight</Text>
                        </View>

                        <View style={styles.followBtn}>
                            <TouchableOpacity style={styles.btnContainer}>
                                <Text style={styles.btnText}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.videosContainer}>
                        <VideoPlayer
                            style={styles.highlightVideos}
                            video={require('../assets/football.mp4')}
                            videoWidth={200}
                            resizeMode="cover"
                            videoHeight={120}
                            thumbnail={require('../../assets/images/Image1.png')}
                        />
                    </View>


                </View>

                {/* LAST POST SECTION */}
                <View style={[styles.lastPostContainer, { width: windowWidth, }]}>
                    <Text style={styles.lastPostText}>Last posts</Text>
                    <FlatList
                        data={DATA}
                        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                        renderItem={renderItem}
                        key={'#'}
                        keyExtractor={item => "#" + item.id}
                        // keyExtractor={item => item.in}
                        numColumns={2}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileAthlete;

const styles = StyleSheet.create({
    headerContainer: {
        paddingLeft: 10,
        flexDirection: 'row',
        height: 80,
        paddingTop: 40,
        backgroundColor: Colors.primaryColor
    },
    titleContainer: {
        paddingLeft: 130
    },
    headerTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',

    },
    scrollContainer: {
        marginTop: 15,
    },
    profileContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    profileImage: {
        height: 300,
        width: 200,
        justifyContent: 'flex-start',
        width: '50%'
    },
    profileContent: {
        flexDirection: 'column',
        paddingLeft: 20,
        justifyContent: 'flex-end',
        width: '50%'
    },
    profileName: {
        letterSpacing: 1,
        color: '#000',
        opacity: 0.7,
        fontSize: 26,
        paddingTop: 15,
        textAlign: 'left'
    },
    flagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    flagImage: {
        width: 40,
        height: 30
    },
    proContainer: {
        backgroundColor: '#F4EF85',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 10,
        marginLeft: 20
    },
    proText: {

    },
    ageContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    ageBox: {
        backgroundColor: '#DBDBDB',
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 10
    },
    age: {},
    genderContainer: {
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: '#DBDBDB',
        marginLeft: 20,
    },
    gender: {},
    countryContainer: {
        marginTop: 20
    },
    country: {
        fontSize: 18,
    },
    statsBtn: {
        backgroundColor: Colors.primaryColor,
        marginTop: 20,
        borderRadius: 14,
        width: 106,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    stats: {
        fontSize: 18,
        color: '#fff'
    },
    followerSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        paddingHorizontal: 30
    },
    followerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '33%',
    },
    followers: {
        fontWeight: '600',
        fontSize: 15,
        color: '#77838F'
    },
    numFollow: {
        fontWeight: '600',
        fontSize: 15,
        marginTop: 5
    },
    highlightSection: {
        width: '100%',
        marginTop: 30,
    },
    highlight_followBtn: {
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    onlyHighlight: {
        width: '50%',
        alignItems: 'flex-start'
    },
    highlighText: {
        fontSize: 14,
        color: '#77838F'
    },
    followBtn: {
        width: '50%',
        alignItems: 'flex-end',
    },
    btnContainer: {
        backgroundColor: Colors.primaryColor,
        width: 106,
        height: 40,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 13
    },
    videosContainer: {
        marginHorizontal: 20,
        width: 386,
        marginTop: 20,
        marginBottom: 20,
    },
    highlightVideos: {
        borderRadius: 10,
        backgroundColor: Colors.primaryColor
    },
    lastPostContainer: {
        marginTop: 15,
        marginBottom: 100,
        paddingHorizontal: 0,
    },
    lastPostText: {
        letterSpacing: 0.6,
        fontSize: 16,
        marginBottom: 20,
        color: '#77838F',
        marginLeft: 20
    }


});