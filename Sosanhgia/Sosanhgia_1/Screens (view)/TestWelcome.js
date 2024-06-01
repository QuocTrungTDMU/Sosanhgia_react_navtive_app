import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { response } from "express";
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
import icons from "../constant/icons";

function TestWelcome(props) {
    
    return <View style={{
        backgroundColor: 'white',
        flex: 100
    }}>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                // justifyContent: 'center',
                flex: 100,
            }}

        >
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Image source={require('../assets/icon_scale.png')}
                        style={{
                            marginLeft: 10,
                            marginRight: 5,
                            width: 30,
                            height: 30,
                            //alignSelf:'center',

                        }}
                    />
                    <Text style={{
                        color: 'white',
                    }}> SOSANHGIA </Text>
                    <View style={{ flex: 1 }} />
                    <Image source={require('../assets/icon_question.png')}
                        style={{

                            width: 25,
                            height: 25,
                            marginRight: 10,
                        }}
                    />
                </View>
            </View>
            <View style={{
                flex: 20,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <Text style={{
                    marginBottom: 10, 
                    color: 'white',
                    fontSize:15,
                }}> Welcome to app</Text>
                <Text style={{
                    marginBottom: 10, 
                    color: 'white',
                    fontWeight:'bold',
                    fontSize: 20,
                }}> SOSANHGIA !</Text>
                <Text style={{
                    marginBottom: 10, 
                    color: 'white',
                    fontSize:15,
                }}> Please choose the product you want </Text>
            </View>
            <View style={{
                flex: 40,
                 
            }} >
                <TouchableOpacity 
                 onPress={() => navigator.navigate('Test')}
                style={{
                    borderColor: 'white',
                    borderWidth: 1,
                    height: 50,
                    borderRadius: 5,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    backgroundColor:'white',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        color:'white',
                        color:'#ffc850',
                        fontSize: 20,
                    }}> Điện Thoại </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={() => navigator.navigate('Test')}
                style={{
                    borderColor: 'white',
                    borderWidth: 1,
                    height: 50,
                    borderRadius: 5,
                    marginHorizontal: 20,
                    // marginVertical: 10,
                    backgroundColor:'white',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        color:'white',
                        color:'#ffc850',
                        fontSize: 20,
                    }}> Máy Tính Xách Tay </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity 
                onPress={() => navigator.navigate('IphoneProducts')}
                style={{
                    borderColor: 'white',
                    borderWidth: 1,
                    height: 50,
                    borderRadius: 5,
                    marginHorizontal: 20,
                     marginVertical: 10,
                    backgroundColor:'white',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        color:'white',
                        color:'#ffc850',
                        fontSize: 20,
                    }}>Đồ Gia Dụng</Text>
                </TouchableOpacity> */}
            </View>
            
            <View style={{
                flex: 20,
                
                
            }} />
        </ImageBackground>
    </View>
}
 
export default TestWelcome;