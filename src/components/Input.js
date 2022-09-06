import React from "react";
import { Text, View, TextInput, Platform } from 'react-native'
import { Colors } from "../utils/Constants";

const Input = ({ placeholderTextColor, placeholder, secureTextEntry,onChange }) => {
    return (
        <View style={{width:"100%",borderRadius:15, paddingHorizontal: 10, paddingVertical:Platform.OS==="ios"? 15:0, borderColor: Colors.borderColor, borderWidth: 1 }}  >
            <TextInput maxLength={30} placeholderTextColor={"grey"}
                placeholder={placeholder} secureTextEntry={secureTextEntry}
                style={{ color: "grey", }}
                onChangeText={onChange}
            />
        </View>
    )
}

export default Input;