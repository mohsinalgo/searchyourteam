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
import General from '../screens/General'
import TrialProgram from "../screens/TrialProgram";
import PostDetails from "../screens/PostDetail";
import DiscoverTrails from "../screens/DiscoverTrails";
import Settings from '../screens/Settings'
import InputForm from "../screens/InputForm";
import ProfileAthlete from "../screens/ProfileAthlete";
import SignupFan from "../screens/SignupFan";
import AuthleteSoccer from "../screens/AuthleteSoccer";
import Board from "../screens/Board";
import VideoModal from "../screens/VideoModal";

const Stack = createNativeStackNavigator();
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen options={{headerShown:false}} name="Signup1" component={Signup1} />
                <Stack.Screen options={{headerShown:false}} name="Signup2" component={Signup2} />
                <Stack.Screen options={{headerShown:false}} name="Signup3" component={Signup3} />
                <Stack.Screen options={{headerShown:false}} name="SignupFan" component={SignupFan} />
                <Stack.Screen options={{headerShown:false}} name="AuthleteSoccer" component={AuthleteSoccer} />
                <Stack.Screen options={{headerShown:false}} name="Board" component={Board} />
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown:false}} name="ForgotPassword1" component={ForgotPassword1} />
                <Stack.Screen options={{headerShown:false}} name="ForgotPassword2" component={ForgotPassword2} />
                <Stack.Screen options={{headerShown:false}} name="Stats" component={Stats} />
                <Stack.Screen options={{headerShown:false}} name="General" component={General} />
                <Stack.Screen options={{headerShown:false}} name="DiscoverTrails" component={DiscoverTrails} />
                <Stack.Screen options={{headerShown:false}} name="Settings" component={Settings} />
                <Stack.Screen options={{headerShown:false}} name="TabScreen" component={BottomTabs} />
                <Stack.Screen options={{headerShown:false}} name="ProfileAthlete" component={ProfileAthlete} />
                {/* <Stack.Screen name="Drawer" component={Drawer}/> */}
                <Stack.Screen name="TrialProgram" component={TrialProgram} options={{ headerShown: false }}/>
                <Stack.Screen name="VideoModal" component={VideoModal} options={{ headerShown: false }}/>
                <Stack.Screen name="PostDetails" component={PostDetails} options={{ headerShown: false }}/>
                <Stack.Screen options={{headerShown:false}} name="InputForm" component={InputForm}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}