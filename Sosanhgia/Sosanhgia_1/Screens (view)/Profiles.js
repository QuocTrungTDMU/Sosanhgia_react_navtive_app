import { useNavigation } from "@react-navigation/native";
import { template } from "handlebars";
import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    FlatList,
    Icon,
    position,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../Api_web";
import icons from "../constant/icons";

function Profile(props){
    return <SafeAreaView style={{
        flex:1,
        backgroundColor:'green',
        
    }}>
       
    </SafeAreaView>
}
export default Profile