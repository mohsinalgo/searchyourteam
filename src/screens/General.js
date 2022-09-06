import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Feather'
export default function General({navigation}) {
    const [gender, setGender] = useState(false);
    return (
        <View>
            <View style={{ paddingHorizontal: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>

                <Ionic onPress={()=>navigation.goBack()} name='arrow-back' size={25} color='#000' />
                <Text style={{ color: '#000', alignSelf: 'center', fontSize: 18 }}>General</Text>
                <View />
            </View>
            {/* <View style={{ marginHorizontal: 15, marginTop: 50 }}>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>Language</Text>
                <TextInput style={styles.inputs} placeholder='English' />
            </View> */}
            <View style={{ marginHorizontal: 15, marginTop: 20 }}>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>Name</Text>
                <TextInput style={styles.inputs} placeholder='Matthieu Laroche' />
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 20 }}>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>Email</Text>
                <TextInput style={styles.inputs} placeholder='Marrhiewlaroche@gmail.com' />
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 20 }}>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>Date of Birth</Text>
                <TextInput style={styles.inputs} placeholder='07-02-1992' />
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 20 }}>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>Gender</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, height: 40, width: '45%', backgroundColor: '#F9F9F9', borderRadius: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setGender(false)}>
                            <Ionic size={17} color={!gender ? 'green' : 'grey'} name={!gender ? 'ios-checkmark-circle' : 'radio-button-off'} />
                            <Text style={{ fontSize: 15, letterSpacing: 1, paddingLeft: 5 }}>Female</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingVertical: 10, flexDirection: 'row', marginLeft: 20, alignItems: 'center', paddingLeft: 10, height: 40, width: '45%', backgroundColor: '#F9F9F9', borderRadius: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setGender(true)}>
                            <Ionic size={17} color={gender ? 'green' : 'gray'} name={gender ? 'ios-checkmark-circle' : 'radio-button-off'} />
                            <Text style={{ fontSize: 15, letterSpacing: 1, paddingLeft: 5 }}>Male</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 20 }}>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>Username</Text>
                <TextInput style={styles.inputs} placeholder='Miaroche' />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    inputs: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 10,
        paddingLeft: 10,
        paddingVertical: 10
    }
})