import React,{useState} from 'react'
import { View, Text, TextInput, FlatList,Image,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
export default function SearchPlayer(props) {
    const DATA = [
        {
            id:'1',
            profile:require('../../assets/logo/icon4.png'),
            title:'Benjamin Evalent',
            gender:'M',
            score:'89 average',
            distance:'10.8M',
            tag:'ST'
        },
        {
            id:'2',
            profile:require('../../assets/logo/icon4.png'),
            title:'Nathaneala Down',
            gender:'F',
            score:'91 average',
            distance:'14.6M',
            tag:'ST'
        },
        {
            id:'3',
            profile:require('../../assets/logo/icon4.png'),
            title:'Elon Gated',
            gender:'M',
            score:'92 average',
            distance:'17.2M',
            tag:'G'
        }

    ];
    const fanData=[
        {
            id:'1',
            image:require('../../assets/logo/icon4.png'),
            title:'@BenjaminEvalent'
        },
        {
            id:'2',
            image:require('../../assets/logo/icon4.png'),
            title:'@NathanealaDown'
        },
        {
            id:'3',
            image:require('../../assets/logo/icon4.png'),
            title:'@ElonGated'
        }
    ];

    const renderItem =({item, index})=>(
        <View>
            <View style={{flexDirection:'row',marginTop:10,marginHorizontal:10,borderRadius:10,padding:10,backgroundColor:index==0?'#7EAA7C':'#fff'}}>
                <Image source={item.profile}/>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{marginLeft:20,backgroundColor:'#f9f9f9',width:50,alignItems:'center',height:25,justifyContent:'center',borderRadius:10}}>
                        <Text style={{color:'#000'}}>{item.tag}</Text>
                    </View>
                    <View style={{marginLeft:20,backgroundColor:'#f9f9f9',width:40,alignItems:'center',height:25,justifyContent:'center',borderRadius:10}}>
                        <Text style={{color:'#000'}}>{item.gender}</Text>
                    </View>
                    </View>
                    <Text style={{color:index==0?'#fff':'#000',fontWeight:'bold',fontSize:16,paddingLeft:15}}>{item.title}</Text>
                    <Text style={{color:index==0?'#fff':'#000',fontWeight:'bold',fontSize:13,paddingLeft:15}}>{item.score}</Text>
                </View>
                <View style={{backgroundColor:'#E2EDE1',height:40,width:80,borderRadius:10,alignSelf:'center',justifyContent:'center',position:'absolute',right:10}}>
                    <Text style={{color:'#7EAA7C',fontWeight:'bold',fontSize:16,paddingLeft:15}}>{item.distance}</Text>
                </View>
            </View>
        </View>
    );
    const fanRenderItem=({item, index})=>(
        <View style={{flexDirection:'row',marginTop:10,marginHorizontal:10,borderRadius:10,padding:10,backgroundColor:index==0?'#7EAA7C':'#fff',alignItems:'center'}}>
             <Image source={item.image}/>
             <Text style={{color:index==0?'#fff':'#000',fontWeight:'bold',fontSize:16,paddingLeft:15}}>{item.title}</Text>
        </View>
    );
    const [fans, setFans] = useState(0);
    return (
        <View>
        <View style={{alignItems:'center',paddingHorizontal:10,flexDirection:'row',backgroundColor:'#7EAA7C',
        width:'100%',height:80}}>
           <TouchableOpacity>
           <Icon name="menu" size={20}  color='#fff'/>

           </TouchableOpacity>
           <View style={{backgroundColor:'#fff',marginLeft:30,height:40,width:300,borderRadius:20,justifyContent:'center',}}>
               <TextInput
               placeholder='Search' 
               style={{paddingLeft:20}}
               inlineImageRight='search_icon'
               />
               <Icon name="search" size={20}  color='#7EAA7C' style={{position:'absolute',right:15}} />
           </View>
        </View>
        <View style={{flexDirection:'row'}}>
            
        <TouchableOpacity onPress={()=>setFans(0)} style={{height:70,width:'45%',borderRadius:10,alignItems:'center',alignContent:'center',justifyContent:'center',backgroundColor:fans==0?'#7EAA7C':'#fff',marginTop:40,marginHorizontal:10}}>
        <View >
            <Text style={{color:fans==0?'#fff':'#000',fontWeight:'bold',fontSize:15,textAlign:'center'}}>{`Players/Teams\nAgents`}</Text>
        </View>
            </TouchableOpacity>
        
        
        <TouchableOpacity onPress={()=>setFans(1)} style={{height:70,width:'45%',borderRadius:10,alignItems:'center',alignContent:'center',justifyContent:'center',backgroundColor:fans==0?'#fff':'#7EAA7C',marginTop:40,marginHorizontal:10}}>
        <View >
        <Text style={{color:fans===0?'#000':'#fff',fontWeight:'bold',fontSize:15}}>Fans</Text>
        </View>
        </TouchableOpacity>
        
        </View>
        <View style={{marginHorizontal:10,marginTop:20,alignItems:'baseline',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold',letterSpacing:1,fontSize:17,color:'#000'}}>{fans==0?`Football Players`:`Fans`}</Text>
            {fans==0?( <Icon name='filter' size={20} color='#000'/>):<View/>}
        </View>
        {fans==0?( <View>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            />
        </View>):(<View>
            <FlatList
            data={fanData}
            renderItem={fanRenderItem}
            />
        </View>)}

    </View>
    );
}
