import React from "react";
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Heart from 'react-native-vector-icons/Entypo'
import Chat from 'react-native-vector-icons/Ionicons'
const PostDetails = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
            <View style={{
                paddingLeft: 10, flexDirection: 'row',
                height: 80, paddingTop: 40, backgroundColor: '#7EAA7C'
            }}>
                <Icon name="menu" size={20} color='#fff' />
                <View style={{ paddingLeft: 120 }}>
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>SearchYourTeam</Text>
                </View>
            </View>
            <ScrollView style={{
                width: '95%',
                elevation: 5,
                padding: 20,
                marginTop: 20,
                backgroundColor: '#d9d9d9',
                shadowColor: "#000",
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowOffset: {
                    height: 1,
                    width: 1
                },
                backgroundColor: '#fff',
                borderRadius: 15,
                alignSelf: 'center',
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/logo/icon1.png')} />
                    <Text style={{ alignSelf: 'center', paddingLeft: 15, fontSize: 17 }}>Matthieu Laroche</Text>
                    <View style={{
                        backgroundColor: '#7EAA7C',
                        width: 80,
                        alignItems: 'center',
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 0,
                        borderRadius: 20,
                        height: 30,
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: '#fff', justifyContent: 'center' }}>Follow</Text>
                    </View>
                </View>
                <Text style={{
                    color:'#77838F',
                    letterSpacing: 0.7,
                    fontSize: 15,
                    fontWeight: 'bold',
                    opacity: 0.8,
                    paddingTop: 15,
                    lineHeight: 25
                }}>
                    Quisque blandit arcu quis turpis tincidunt ena facilisis fusce posuere eu.
                </Text>
                <Image source={require('../../assets/images/post.png')}
                    resizeMode='contain' style={{ justifyContent: 'center', alignSelf: 'center' }} />
                <View style={{ flexDirection: 'row' }}>
                    <Heart name='heart-outlined' size={20} style={{ color: '#7EAA7C' }} />
                    <Text style={{ color: '#7EAA7C', paddingHorizontal: 10 }}>110</Text>
                    <Chat name='chatbubble-outline' size={20} style={{ color: '#7EAA7C' }} />
                    <Text style={{ color: '#7EAA7C', paddingLeft: 10 }}>110</Text>
                    <TouchableOpacity style={{
                        position: 'absolute', right: 0, backgroundColor: '#7EAA7C',
                        borderRadius: 20, padding: 4
                    }}>
                        <Chat name='share-social-outline' size={20} color='#fff'
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                    <Image source={require('../../assets/logo/icon2.png')} />
                    <Text style={{ alignSelf: 'center', paddingLeft: 15, fontSize: 17 }}>Hugh Saturation</Text>
                    <Text style={{ justifyContent: 'center', opacity: 0.8, alignSelf: 'center', position: 'absolute', right: 0 }}>32 min</Text>
                </View>
                <View>
                    <Text style={{color:'#77838F', letterSpacing: 0.6, lineHeight: 20, fontSize: 15, paddingTop: 10 }}>Etiam auctor molestie mi a sodales posue Aenean imperdiet vestibulum tellus at.</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                    <Image source={require('../../assets/logo/icon3.png')} />
                    <Text style={{ alignSelf: 'center', paddingLeft: 15, fontSize: 17 }}>Hugh Saturation</Text>
                    <Text style={{ justifyContent: 'center', opacity: 0.8, alignSelf: 'center', position: 'absolute', right: 0 }}>32 min</Text>
                </View>
                <View style={{ paddingBottom: 30 }}>
                    <Text style={{color:'#77838F', letterSpacing: 0.6, lineHeight: 20, fontSize: 15, paddingTop: 10 }}>
                        Nulla sed ullamcorper ligula. Vivamus sit quis  amet tellus fermentum sodales.</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default PostDetails;