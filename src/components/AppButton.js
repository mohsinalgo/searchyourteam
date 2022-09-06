import React from "react";
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Colors } from "../utils/Constants";

const AppButton = ({ placeholderTextColor, placeholder, title, onPress, state }) => {
    return (
        <TouchableOpacity disabled={state} onPress={onPress} style={{ width: "100%", alignItems: "center", borderRadius: 30, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: Colors.primaryColor }}  >
            {state ? <ActivityIndicator color={'#fff'}/> :
                <Text style={{ color: "#FFF", }} >
                    {title}
                </Text>
            }
        </TouchableOpacity>
    )
}

export default AppButton;