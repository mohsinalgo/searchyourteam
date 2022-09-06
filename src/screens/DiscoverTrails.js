import React from "react";
import { Text, View, Image, FlatList, TouchableOpacity,ImageBackground, StatusBar, TextInput, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Heart from 'react-native-vector-icons/Entypo'
import Chat from 'react-native-vector-icons/Ionicons'
const DiscoverTrails = (props) => {
    const {navigation}  = props;
    const DATA = [
        {
            id: '1',
            title: 'Manchester City’s Trial',
            logo:require('../../assets/logo/Logo.png'),
            price:'$2400',
            rating:'4.9',
            description:`Cras in libero urna. Ut semper\nneque id nulla malesuada.`,
            tags:['U7','U9','U12']
        },
        {
            id: '2',
            title:'Liedekerke F.C’s Trial',
            logo:require('../../assets/logo/Logo.png'),
            price:'$1800',
            rating:'4.8',
            description:'Quisque sollicitudin, nibh in\nconvallis scelerisque.',
            tags:['U7','U9','U15']
        },
      ];
      const renderItem = ({ item, index }) => (
          <TouchableOpacity onPress={()=>props.navigation.navigate("TrialProgram")}>
          <View style={{flexDirection:'column',
          backgroundColor:'#fff',
          padding:15,
          borderRadius:15,
          marginHorizontal:10}}>
              
              <Image source={item.logo}/>
        <Text style={{marginTop:15,fontSize:16,fontWeight:'600'}}>{item.title}</Text>
        <View
        style={{flexDirection:'row',marginTop:20,alignItems:'baseline'}}>
            <Text style={{fontWeight:'800',fontSize:17,color:'#7EAA7C'}}>{item.price}</Text>
            <Text style={{opacity:0.8,fontWeight:'600'}}>/person</Text>
        </View>
                <Text style={{marginTop:15}}>⭐ ⭐ ⭐ ⭐ ⭐  {item.rating}</Text>
            <Text style={{marginTop:15,fontSize:15}}>{item.description}</Text>
            <View style={{flexDirection:'row',marginTop:20}}>
                <Text style={{backgroundColor:'gray',
                opacity:0.5, 
                fontWeight:'600',
                color:'#000',
                height:25,alignSelf:'center',justifyContent:'center',padding:5,marginLeft:10}}>
                    {item.tags[0]}
                </Text>
                <Text style={{backgroundColor:'gray',
                opacity:0.5, 
                fontWeight:'600',
                color:'#000',
                height:25,alignSelf:'center',justifyContent:'center',padding:5,marginLeft:10}}>
                    {item.tags[1]}
                </Text>
                <Text style={{backgroundColor:'gray',
                opacity:0.5, 
                fontWeight:'600',
                color:'#000',
                height:25,alignSelf:'center',justifyContent:'center',padding:5,marginLeft:10}}>
                    {item.tags[2]}
                </Text>
            </View>
        </View>
        </TouchableOpacity>
      );
    return (
        // <View style={{ flex: 1,}}>
            <ImageBackground source={require('../../assets/images/background.png')}
            resizeMode='cover' style={{flex:1}}>
                <View style={{flexDirection:'row',paddingLeft:10,paddingTop:40}}>
                    <TouchableOpacity onPress={()=>{}}>
                    <Icon onPress={()=>props.navigation.openDrawer()} name="menu" size={20} color='#fff'/>
                    </TouchableOpacity>
                    <View style={{alignItems:'center'}}>
                    <Text style={{
                        alignSelf:'center',
                        color:'#fff',
                        fontWeight:'bold',
                        paddingLeft:140,
                        fontSize:18,
                        letterSpacing:0.6
                }}>Trial</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:10,marginTop:20}}>
                    <Text style={{fontSize:25,color:'#fff',fontWeight:'700',
                    letterSpacing:0.8}}>{`Discover soccer\ntrials`}</Text>
                    <View style={{paddingRight:25,marginTop:20,flexDirection:'row',height:50,
                    alignItems:'center',
                    justifyContent:'center'}}>
                        <TextInput style={{paddingVertical:10, backgroundColor:'#fff',width:'75%',
                        borderRadius:25,alignSelf:'center',paddingLeft:20}}placeholder='Search'/>
                        <Icon name="search" size={20}  color='#7EAA7C' style={{position:'absolute',right:90}} />
                    </View>

                </View>
                <View style={{position:'absolute',bottom:0,marginHorizontal:10}}>
                    <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
                <View style={{height:20,}} />
                </View>

            </ImageBackground>
        // </View>
    )
}

export default DiscoverTrails;