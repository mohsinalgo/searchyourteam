import React from "react"
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import BottomTabs from "./BottomTab";
import HomeStack from "./HomeStack";
import Icon from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import SearchPlayer from "../screens/SearchPlayer";
import ProfileFan from "../screens/ProfileFan";
import { Colors } from "../utils/Constants";
import DiscoverTrails from "../screens/DiscoverTrails";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ navigation }) {
    return (
        <Drawer.Navigator

            drawerStyle={{ width: '75%', backgroundColor: "#FFF" }}
            drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName="MyTabs">
            <Drawer.Screen
                name="MyHome"
                component={HomeStack}
                options={{
                    swipeEnabled: true,
                    drawerIcon: () => (
                        <View
                            style={{
                                backgroundColor: "#212230",
                                borderRadius: 100,
                                padding: 5,
                            }}>
                            <Icon
                                name="md-home-sharp"
                                size={20}
                                color={"#FFF"}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                    ),
                    drawerLabel: () => (
                        <View
                            style={{
                                borderBottomWidth: 0.5,
                                borderColor: "#212230",
                                paddingBottom: 8,
                            }}>
                            <Text
                                style={{
                                    color: "#212230",
                                    fontWeight: '600',
                                    fontSize: 18,
                                }}>
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />
            <Drawer.Screen
                name="Search"
                component={SearchPlayer}
                options={{
                    swipeEnabled: true,
                    drawerIcon: () => (
                        <View
                            style={{
                                backgroundColor: "#212230",
                                borderRadius: 100,
                                padding: 5,
                            }}>
                            <Icon
                                name="md-search"
                                size={20}
                                color={"#FFF"}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                    ),
                    drawerLabel: () => (
                        <View
                            style={{
                                borderBottomWidth: 0.5,
                                borderColor: "#212230",
                                paddingBottom: 8,
                            }}>
                            <Text
                                style={{
                                    color: "#212230",
                                    fontWeight: '600',
                                    fontSize: 18,
                                }}>
                                search
                            </Text>
                        </View>
                    ),
                }}
            />

            <Drawer.Screen
                name="Profile"
                component={ProfileFan}
                options={{
                    swipeEnabled: true,
                    drawerIcon: () => (
                        <View
                            style={{
                                backgroundColor: "#212230",
                                borderRadius: 100,
                                padding: 5,
                            }}>
                            <Icon
                                name="md-search"
                                size={20}
                                color={"#FFF"}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                    ),
                    drawerLabel: () => (
                        <View
                            style={{
                                borderBottomWidth: 0.5,
                                borderColor: "#212230",
                                paddingBottom: 8,
                            }}>
                            <Text
                                style={{
                                    color: "#212230",
                                    fontWeight: '600',
                                    fontSize: 18,
                                }}>
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            />
              <Drawer.Screen
                name="DiscoverTrails"
                component={DiscoverTrails}
                options={{
                    swipeEnabled: true,
                    drawerIcon: () => (
                        <View
                            style={{
                                backgroundColor: "#212230",
                                borderRadius: 100,
                                padding: 5,
                            }}>
                            <Icon
                                name="md-search"
                                size={20}
                                color={"#FFF"}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                    ),
                    drawerLabel: () => (
                        <View
                            style={{
                                borderBottomWidth: 0.5,
                                borderColor: "#212230",
                                paddingBottom: 8,
                            }}>
                            <Text
                                style={{
                                    color: "#212230",
                                    fontWeight: '600',
                                    fontSize: 18,
                                }}>
                                Discover Trial
                            </Text>
                        </View>
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}




const CustomDrawer = props => {
    // const [userName, setUserName] = useState('')
    // const [token, setToken] = useState('')
    // const [switchValue, setSwitchvalue] = useState(false)
    // const [loading, setLoading] = useState(false)
    // const dark = useSelector(state => state.darkModeReducer.data)
    // // alert(dark)
    // const dispatch = useDispatch()
    // // let name =""
    // // const data= useSelector(state=>state.authReducer)
    // const changeMode = () => {
    //     setLoading(true)
    //     setSwitchvalue(!switchValue)
    //     dark ?
    //         dispatch(setDarkMode(false, () => setLoading(false))) : dispatch(setDarkMode(true, () => setLoading(false)))
    // }
    // useEffect(() => {
    //     Asyncstorage.getItem('@user').then((res) => {
    //         let allData
    //         res ? allData = JSON.parse(res) : null
    //         setToken(allData.token)
    //         console.log("All Dataa  ", allData);
    //         setUserName(allData.name)
    //     }).catch(e => {
    //         setToken(null)
    //         setUserName('')
    //     })
    // })

    // console.log("My Token  ", token);
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <View
                    style={{
                        width: '100%',
                        height: (Dimensions.get('screen').height * 15) / 100,
                        // flexDirection: 'row',
                        // alignItems: 'center',
                        // justifyContent: 'space-around',
                        // marginTop: 10,
                        backgroundColor: Colors.primaryColor,
                        // paddingHorizontal: 10,
                        bottom: 5,
                    }}>
                    <View style={{ paddingLeft: 10, marginTop: 50, flexDirection: 'row', height: 80, paddingTop: 40, backgroundColor: '#7EAA7C' }}>
                        <Icon name="menu" size={20} color='#fff' />

                    </View>
                </View>
                <Text style={{ fontSize: 20, paddingHorizontal: 12, paddingVertical: 10, marginLeft:14 }} >Account</Text>
                <View style={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", paddingHorizontal: 10 }} >
                    <Image resizeMode="contain" style={{ width: 110, height: 110 }} source={require('../assets/Image.png')} />
                    <View style={{marginRight:10}}  >
                        <Text style={{ fontSize: 20, lineHeight: 40 }} >Matthew Lorache</Text>
                        <Text style={{ fontSize: 20, color: "grey" }}  >@MLorache</Text>
                    </View>
                </View>
                <View style={{ marginTop: 50, paddingHorizontal: 25 }} >
                    <TouchableOpacity onPress={()=>props.navigation.navigate('DiscoverTrails')} style={styles.navigationText} >
                        <Text style={styles.navigationStyles} >Discover Trial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Settings')}  style={styles.navigationText}  >
                        <Text style={styles.navigationStyles} >Settings </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Login')} style={styles.navigationText}  >
                        <Text style={styles.navigationStyles} >Log Out</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}  style={styles.navigationText}  >
                        <Text style={styles.navigationStyles} >Rate Us</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <DrawerItemList
                {...props}
                itemStyle={{ backgroundColor: '#FFF', width: '100%' }}
            /> */}
        </DrawerContentScrollView>
    );
};



const styles = StyleSheet.create({
    navigationStyles: {
        color: "grey",
        fontSize: 20,
    },
    navigationText:{
        marginTop:20,
        paddingVertical:15,
        paddingHorizontal:10
    }
})