import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Heart from 'react-native-vector-icons/Entypo'
import HeartFill from 'react-native-vector-icons/AntDesign'
import Chat from 'react-native-vector-icons/Ionicons'
import { getPost } from "../redux/actions/postAction";
import { useSelector, connect, useDispatch } from "react-redux";
import VideoPlayer from 'react-native-video-player'
import { Colors } from "../utils/Constants";
import { LogBox } from 'react-native';
const Home = ({ navigation }) => {
    const DATA = [
        {
            id: '1',
            title: 'Matthieu Laroche',
            image: require('../../assets/images/Image1.png'),
            icon: require('../../assets/logo/icon1.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
        {
            id: '2',
            title: 'Carlos Vanelliope',
            image: require('../../assets/images/Image2.png'),
            icon: require('../../assets/logo/icon2.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
        {
            id: '3',
            title: 'Matthieu Laroche',
            image: require('../../assets/images/Image1.png'),
            icon: require('../../assets/logo/icon1.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
        {
            id: '4',
            title: 'Carlos Vanelliope',
            image: require('../../assets/images/Image2.png'),
            icon: require('../../assets/logo/icon2.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        }, {
            id: '5',
            title: 'Matthieu Laroche',
            image: require('../../assets/images/Image1.png'),
            icon: require('../../assets/logo/icon1.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
        {
            id: '6',
            title: 'Carlos Vanelliope',
            image: require('../../assets/images/Image2.png'),
            icon: require('../../assets/logo/icon2.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
    ];
    console.reportErrorsAsExceptions = false;
    const dispatch = useDispatch();
    const userName = useSelector(state => state.auth.user)
    const state = useSelector(state => state.postReducer.data)
    const [like, setLike] = useState([]);
    const newArr = Object.keys(state).map((key) => {
        state[key]._id = key;
        return state[key];
    });
    useEffect(() => {
        // dispatch(getPost())
    }, [])
    const handleSelection = (id) => {
        var selectedIds = [...like] // clone state

        if (selectedIds.includes(id)) {
            let index = selectedIds.indexOf(id)
            selectedIds.splice(index, 1)
            setLike(selectedIds)
        }
        else {
            selectedIds.push(id)
            setLike(selectedIds)
        }
    }

    const renderItem = ({ item, index }) => (
        <View style={styles.renderTrending}>
            <VideoPlayer
                style={styles.trendingVideo}
                video={require('../assets/football.mp4')}
                videoWidth={220}
                resizeMode="stretch"
                videoHeight={160}
                thumbnail={require('../../assets/images/Image2.png')}
            />
            <View style={styles.trendingProf}>
                <Image source={item.icon} resizeMode='contain' style={styles.trendingImg} />
                <Text style={styles.profTitle}>{item.title}</Text>
            </View>
        </View>
    );
    const renderPostDetail = ({ item, index }) => (
        <View style={styles.renderPostDetail}>
            <View style={styles.profileSec}>
                <Image source={item.icon} resizeMode='contain' style={styles.postProImg} />
                <View style={styles.postTitles}>
                    <Text style={styles.postheadText}>{item.title}</Text>
                    <Text style={styles.postHour}>1  hour  ago</Text>
                </View>
                <Icon name='more-horizontal' size={30} style={styles.dotIcon} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('PostDetails')} activeOpacity={0.9}>
                <Image source={item.image}
                    resizeMode='stretch'
                    style={styles.postImage} />
            </TouchableOpacity>

            <Text style={styles.postDesc}>
                {item.description}
            </Text>
            <View style={styles.socialBtns}>
                <TouchableOpacity style={styles.heartIcon} onPress={() => handleSelection(item?._id)}>
                    <HeartFill name='heart' size={22} style={{ color: item._id == like.includes(item._id) ? 'red' : '#ccc' }} />
                    <Text style={{ color: like ? Colors.primaryColor : '#ccc', paddingHorizontal: 10 }}>{item._id == like.includes(item._id) ? 1 : 0}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.commentIcon}>
                    <Chat name='chatbubble-outline' size={20} style={{ color: Colors.primaryColor }} />
                    <Text style={{ color: Colors.primaryColor, paddingLeft: 10 }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareIcon}>
                    <Chat name='share-social-outline' size={20} color="#fff" />
                </TouchableOpacity>
            </View>

        </View>

    )

    const rendetItemApi = ({ item, index }) => (
        <View>
            <Image source={{ uri: item.url }} style={{ alignSelf: 'baseline', height: 100, width: 100 }} resizeMode={'contain'} />
        </View>
    );
    return (
        <View nestedScrollEnabled={true}
            style={styles.mainContainer}>

            {/* HEADER SECTION */}
            <View style={styles.header}>
                <Icon style={styles.drawerIcon} name="menu" size={20} onPress={() => navigation.openDrawer()} color='#fff' />
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerText}>SearchYourTeam</Text>
                </View>
                {/* <TouchableOpacity onPress={() => navigation.navigate('InputForm')} style={{ paddingRight: 15 }}>
                    <Text style={{ color: '#fff', paddingTop: 5 }}>Add Post</Text>
                </TouchableOpacity> */}
                {/* <Chat name="add" size={25} color={'#fff'}   /> */}
            </View>

            <ScrollView nestedScrollEnabled={true}>
                {/* TRENDING SECTION */}
                <View style={styles.trendingContainer}>
                    <View style={styles.trending}>
                        <Text style={styles.trendingText}>Trending </Text>
                    </View>

                    <View style={styles.trendingData}>
                        <FlatList
                            horizontal
                            data={DATA}
                            keyExtractor={item => item.id.toString()}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* POST DETAIL SECTION */}
                <View style={styles.postDetails}>
                    <FlatList
                        data={DATA}
                        extraData={like}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderPostDetail}
                        ListFooterComponent={() => (<View style={{ height: 50 }} />)}
                    />
                </View>
            </ScrollView>
            <View style={{ marginTop: 20 }} />
        </View>
    )
}
// const mapStateToProps = ({ postReducer}) => {
//     const {
//     } = postReducer;
//     return {
//       selectedBranch
//     };
//   };
export default
    // connect(mapStateToProps, {getPost})
    (Home);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1

    },
    header: {
        paddingLeft: 10,
        flexDirection: 'row',
        height: 80,
        paddingTop: 40,
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center'
    },
    drawerIcon: {
        position: 'absolute',
        top: '100%',
        left: 20,
    },
    headerTitleContainer: {

    },
    headerText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    trendingContainer: {
        paddingLeft: 15
    },
    trending: {
        paddingTop: 25,
    },
    trendingText: {
        fontSize: 17,
        color: "#000"
    },
    trendingData: {
        marginTop: 10
    },
    renderTrending: {
        marginRight: 10
    },
    trendingVideo: {
        borderRadius: 8,
        backgroundColor: Colors.primaryColor
    },
    trendingProf: {
        paddingTop: 10,
        flexDirection: 'row'
    },
    trendingImg: {
        alignSelf: 'baseline',
        borderRadius: 40,
        height: 30,
        width: 30
    },
    profTitle: {
        paddingLeft: 8,
        color: "#000"
    },
    postDetails: {
        marginTop: 30,
        backgroundColor: '#eee',
        shadowColor: '#a7a7a7',
        shadowRadius: 10,
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    renderPostDetail: {
        marginTop: 15,
        paddingBottom: 10
    },
    profileSec: {
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    postProImg: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    postTitles: {
        flexDirection: 'column',
        paddingLeft: 10
    },
    postheadText: {
        color: "#000",
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 6
    },
    postHour: {
        opacity: 0.6,
        marginVertical: 4
    },
    dotIcon: {
        position: 'absolute',
        right: 0,
        opacity: 0.5,
        paddingRight: 20
    },
    postImage: {
        height: 180,
        width: '90%',
        borderRadius: 4,
        alignSelf: 'center',
        marginTop: 8
    },
    postDesc: {
        color: "#666666",
        paddingHorizontal: 30,
        fontSize: 16,
        paddingVertical: 18
    },
    socialBtns: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 10
    },
    heartIcon: {
        flexDirection: 'row'
    },
    commentIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shareIcon: {
        position: 'absolute',
        right: 20,
        top: 8,
        backgroundColor: Colors.primaryColor,
        borderRadius: 20,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }



});