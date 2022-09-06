import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup1 from "../screens/Signup1";
import BottomTabs from "./BottomTab";
import Signup2 from "../screens/Signup2";
import Signup3 from "../screens/Signup3";
import Login from "../screens/Login";
import ForgotPassword1 from "../screens/ForgotPassword1";
import ForgotPassword2 from "../screens/ForgotPassword2";
import Stats from "../screens/Stats";

import TrialProgram from "../screens/TrialProgram";
import PostDetails from "../screens/PostDetail";
import Home from "../screens/Home";
import DiscoverTrails from "../screens/DiscoverTrails";
// import Drawer from "./Drawer";

const Stack = createNativeStackNavigator();
export default function HomeStack() {
    return (
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
                {/* <Stack.Screen name="Drawer" component={Drawer}/> */}
                <Stack.Screen name="TrialProgram" component={TrialProgram} options={{ headerShown: false }}/>
                <Stack.Screen name="PostDetails" component={PostDetails} options={{ headerShown: false }}/>
                <Stack.Screen options={{headerShown:false}} name="DiscoverTrial" component={DiscoverTrails} />

            </Stack.Navigator>

    )
}