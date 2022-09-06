import React from 'react'
import { View, Text, ImageBackground,Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Circle from 'react-native-vector-icons/MaterialIcons'
import Ionic from 'react-native-vector-icons/Ionicons'
export default function Video() {
    return (
        <View style={{flex:1}}>
            <ImageBackground style={{flex:1}} resizeMode='cover' source={require('../../assets/images/videoBackground.png')}>
                <View style={{backgroundColor:'#fff',position:'absolute',right:15,top:20, height:40,width:100,flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between',alignItems:'center',borderRadius:10}}>
                    <Text style={{color:'#A5A5A5',fontSize:16,fontWeight:'bold'}}>For you</Text>
                    <Icon name='chevron-down'size={25} style={{color:'#A5A5A5'}}/>
                </View>
                
                <View style={{flexDirection:'row',marginTop:80,justifyContent:'space-evenly'}}>
                    <View style={{alignItems:'center',justifyContent:'center',height:30,width:80,borderRadius:10,backgroundColor:'#7EAA7C'}}>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>Soccer</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',height:30,width:80,borderRadius:10,backgroundColor:'#979797'}}>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>Basket</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',height:30,width:80,borderRadius:10,backgroundColor:'#979797'}}>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>Tennis</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',height:30,width:80,borderRadius:10,backgroundColor:'#979797'}}>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>Boxing</Text>
                    </View>
                </View>
                <View style={{justifyContent:'flex-end',flex:1}}>
                <View style={{flexDirection:'row',marginHorizontal:10,justifyContent:'space-between',alignItems:'center'}}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../../assets/logo/icon1.png')}/>
                            <View style={{flexDirection:'column',marginLeft:10}}>
                                <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Chris Niansa</Text>
                                <Text style={{color:'#fff',fontSize:13}}>Yaoundé</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:15}}>23.50 views  |  478 comments</Text>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>{`Yacht pleasure👍 #foot #soccer\n#team #africa #talent #skills`}</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon name='music' size={15} style={{color:'#fff'}}/>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:15}}>  Wizkid - Come Closer</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View style={{alignItems:'center'}}>
                        <View style={{height:40,width:40,opacity:0.5,alignItems:'center',justifyContent:'center',backgroundColor:'gray',borderRadius:50}}>
                        <Circle name='favorite-border' size={25} style={{color:'#fff'}}/>
                        </View>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>1.7K</Text>
                        </View>
                        <View style={{alignItems:'center',paddingVertical:20}}>
                        <View style={{height:40,width:40,opacity:0.5,alignItems:'center',justifyContent:'center',backgroundColor:'gray',borderRadius:50}}>
                        <Ionic name='chatbubble-outline' size={25} style={{color:'#fff'}}/>
                        </View>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>478</Text>
                        </View>
                        <View style={{alignItems:'center',marginBottom:30}}>
                        <View style={{height:40,width:40,opacity:0.5,alignItems:'center',justifyContent:'center',backgroundColor:'gray',borderRadius:50}}>
                        <Icon name='share-2' size={25} style={{color:'#fff'}}/>
                        </View>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>380</Text>
                        </View>
                    </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
