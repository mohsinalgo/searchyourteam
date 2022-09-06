import React from "react";
import { Text, View, Image, FlatList, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from "../utils/Constants";
const ProfileFan = () => {
    const { width: windowWidth } = useWindowDimensions();
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

            {/* PROFILE SECTION */}
            <View style={styles.headerContainer}>
                <Icon name="menu" size={20} t color='#fff' />
                <View style={styles.titleContainer}>
                    <Text style={styles.headerTitle}>Fan</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.profileContainer}>
                    <Image source={require('../../assets/images/athlete1.png')}
                        resizeMode='contain' style={styles.profileImage} />
                    <View style={styles.profileContent}>
                        <Text style={styles.profileName}>Chrismand229</Text>
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

                {/* FOLLOW BUTTON */}
                <View style={styles.followBtnContainer}>
                    <TouchableOpacity style={styles.followBtn}>
                        <Text style={styles.followBtnText}>Follow</Text>
                    </TouchableOpacity>
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

export default ProfileFan;

const styles = StyleSheet.create({
    headerContainer: {
        paddingLeft: 10,
        flexDirection: 'row',
        height: 80,
        paddingTop: 40,
        backgroundColor:Colors.primaryColor
    },
    titleContainer: {
        paddingLeft: 160
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
        width: '100%',
        alignItems: 'center'
    },
    profileImage: {
        height: 200,
        width: 200,
        alignSelf: 'center'
    },
    profileContent: {
        marginTop: 10,
        flexDirection: 'column',
        paddingLeft: 10
    },
    profileName: {
        letterSpacing: 1,
        color: '#000',
        opacity: 0.7,
        fontSize: 18,
        paddingTop: 15,
        alignSelf: 'center'
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
    followBtnContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    followBtn: {
        backgroundColor: Colors.primaryColor,
        width: 374,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
    },
    followBtnText: {
        color: '#fff'
    },
    lastPostContainer: {
        marginTop: 30,
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
})