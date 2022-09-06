import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Feather'
export default function Settings({ navigation }) {
    const DATA = [
        {
            id: '1',
            title: 'General',
            color: '#7677FF',
            icon: 'ios-grid-outline',
        },
        {
            id: '2',
            title: 'Privacy',
            color: '#FE7A2C',
            icon: 'lock-closed-outline'
        },
        {
            id: '3',
            title: 'Help Center',
            color: '#E60000',
            icon: 'help-circle-outline'
        },
        {
            id: '4',
            title: 'Settings',
            color: '#009EBB',
            icon: 'settings-outline'
        },
        {
            id: '5',
            title: 'Payment',
            color: '#77838F',
            icon: 'card-outline'
        },
    ];
    const renderItem = ({ item, index }) => (
        <View style={{ width: '100%', backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('General')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 10, backgroundColor: '#f9f9f9', height: 35, width: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 40 }}>
                        <Ionic name={item.icon} size={20} color={item.color} />
                    </View>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
                <Icon name='edit-2' size={20}/>
            </View>
        </View>
    );
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
            <Ionic onPress={() => navigation.goBack()} name='arrow-back' size={25} color='#000' style={{ paddingLeft: 10, paddingBottom: 20 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f5f5f5', borderRadius: 20, height: 50, alignItems: 'center', marginHorizontal: 30 }}>
                <View style={{
                    width: '50%', borderRadius: 10, backgroundColor: '#fff', alignItems: 'center', height: 45,elevation:10, justifyContent: 'center',
                    shadowColor:'#d0d0d0',shadowOpacity:0.7,shadowRadius:10,shadowOffset:{width:1,height:1}
                }}>
                    <Text style={{ color: '#7EAA7C' }}>Profile</Text>
                </View>
                <View style={{ width: '50%', borderRadius: 10, backgroundColor: '#f5f5f5', alignItems: 'center', height: 50, justifyContent: 'center' }}>
                    <Text>Statistics</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../assets/logo/icon1.png')} style={{ height: 100, width: 100, marginTop: 15 }} />
                <Text style={{ fontSize: 16, fontWeight: '500', paddingTop: 10 }}>Matthieu Laroche</Text>
                <Text style={{ fontSize: 16, paddingVertical: 10 }}>Athlete</Text>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}
