import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../screens/Search'
import Chat from '../screens/Chat'
import Home from "../screens/Home";
import ProfileFan from "../screens/ProfileFan";
import HomeIcon from 'react-native-vector-icons/AntDesign'
import ChatIcon from 'react-native-vector-icons/Ionicons'
import ProfileIcon from 'react-native-vector-icons/FontAwesome5'
import { Colors } from "../utils/Constants";
import AddScreen from "../screens/AddScreen";
import Profile from "../screens/Profile";
import HomeStack from "./HomeStack";
import SearchPlayer from "../screens/SearchPlayer";
import DrawerNavigation from "./Drawer";
import TrialProgram from "../screens/TrialProgram";
import ProfileAthlete from "../screens/ProfileAthlete";
import PostDetails from "../screens/PostDetail";
import Stats from "../screens/Stats";
import Video from "../screens/Video";
// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();


export default function BottomTabs(props) {

    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: "#FFF", height: 70, alignItems: "center" }, tabBarShowLabel: false }} >
            <Tab.Screen
                // screenOptions={{headerShown:false}}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <HomeIcon color={focused ? Colors.primaryColor : Colors.borderColor} name="home" size={30} />
                }}
                component={DrawerNavigation}
                name="HomeStack"
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <HomeIcon color={focused ? Colors.primaryColor : Colors.borderColor} name="search1" size={30} />

                }}
                component={SearchPlayer}
                name="Search"
            />
            <Tab.Screen

                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <HomeIcon style={{ position: "absolute", top: 4, zIndex: 10 }} color={Colors.primaryColor} name="pluscircle" size={50} />

                }}
                component={Video}
                name="Video"
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <ChatIcon color={focused ? Colors.primaryColor : Colors.borderColor} name="chatbubble" size={30} />

                }}
                component={Stats}
                name="Stats"
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <ProfileIcon color={focused ? Colors.primaryColor : Colors.borderColor} name="user-alt" size={30} />
                }}

                component={props?.route?.params?.accountType == 'Fan' ? ProfileFan : ProfileAthlete}
                name="Profile"
            />
            {/* <Tab.Screen name="Login" component={Login} />
            <Tab.Screen  name="Signup" component={Signup} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen  name="Chat" component={Chat} /> */}

        </Tab.Navigator>

    )
}

