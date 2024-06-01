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
import { data } from "../Api_web";
import icons from "../constant/icons";

function ViewProducts(props) {
    const [Products, setProducts] = useState([
        {
            name: 'Samsung Galaxy Z Flip4 128GB',
            uri: 'https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(6).jpg',
            dungluong: [
                '128GB',
                '256GB',
                '512GB',
            ],
            manhinh: [
                'Chính 6.7 & Phụ 1.9',
                'FullHD'
            ],
            picec: '23.990.000',
            sale: '-22%',
            picecSale: '18.490.000',
            danhgia: '48'
        },
    ])

    const [searchText, setSearchText] = useState('')
    const filteredProducts = () => Products.filter(item =>item.name.toLowerCase()
                                  .includes(searchText.toLowerCase()))
    return <View style={styles.container}>
        <View style={{ height: 50, }}>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
            }} >
                <Image name={'search'} source={icons.search} style={{
                    width: 35,
                    height: 35,
                    /*  position:'absolute',
                     top:10,
                     left:5, */
                }} />
                <TextInput onChangeText ={(text) =>{
                        setSearchText(text)
                    }}
                    style={{
                    backgroundColor: 'rgb(233,223,214)',
                    height: 40,
                    flex: 1,
                    marginEnd: 8,
                    borderRadius: 5,
                    paddingStart: 10,  
                }} />
                <Image name={'bars'} source={icons.scale} style={{
                    width: 35,
                    height: 35,
                }} />
            </View>
            <View style={{
                height: 1,
                backgroundColor: 'black',
            }} />

            <View style={{ height: 1, backgroundColor: 'black' }} />
        </View>
        {filteredProducts().length > 0 ? <FlatList
            data={filteredProducts()}
            numColumns={2}
            renderItem={({ item, index }) =>
                <TouchableOpacity style={{
                    //backgroundColor: index%2 ? 'blue' : 'green',
                    flex: 0.52,
                    height: 400,
                    borderWidth: 1,
                   // borderColor: 'black',
                    //marginRight: index%2==0 && index==Products.length-1 ? 10 : 0,
                    marginRight: 10,
                    marginBottom: 10,
                    marginTop: 10,
                    marginLeft: 10,
                    borderRadius: 10,
                    justifyContent: 'center'
                }}>
                    <Image style={{
                        marginTop: 5,
                        width: 160,
                        height: 160,
                        borderBottomStartRadius: 5
                    }}
                        source={{
                            uri: item.uri
                        }} />

                    <View style={{
                        width: '60%',
                        backgroundColor: 'red',
                        height: 22,
                        marginLeft: 10,
                        marginTop: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        {/* đây là  hình điện thoại */}
                        <Image source={{ uri: 'https://cdn.tgdd.vn/2022/12/content/Label-50x50-1.png' }}
                            style={{
                                width: 22,
                                height: 22,
                                marginRight: 5
                            }}
                        />
                        <Text style={{ fontSize: 11, color: 'white' }}>Sale to đón Tết</Text>
                    </View>
                    <Text style={{ marginHorizontal: 5, marginTop: 10 }}>{item.name}</Text>
                    {/* màn hình */}
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity style={{
                            backgroundColor: "#C0C0C0",
                            marginHorizontal: 5
                        }}>
                            <Text style={{ fontSize: 13 }}>{item.manhinh[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: "#C0C0C0",
                            marginHorizontal: 5
                        }}>
                            <Text style={{ fontSize: 13 }} >{item.manhinh[1]}</Text>
                        </TouchableOpacity>
                    </View>
                    {/*đây là dung lượng */}
                    <View style={{ marginTop: 10, flexDirection: 'row', marginHorizontal: 5 }}>
                        {item.dungluong.map(Eachdata =>
                            <TouchableOpacity style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '30%',
                                height: 20,
                                borderWidth: 1,
                                borderColor: 'black',
                                marginRight: 8
                            }}>
                                <Text>{Eachdata}</Text>
                            </TouchableOpacity>)}
                    </View>

                    <Text style={{ marginTop: 20, fontSize: 15, marginLeft: 10 }}>{item.picec}  -{item.sale}</Text>
                    <Text style={{
                        marginLeft: 12,
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>
                        chỉ còn: {item.picecSale}
                    </Text>
                </TouchableOpacity>
            }
       /> : <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{
                color:'black',
                fontSize: 30,
                }}> No Product Found</Text>
       </View>}
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gridView: {
        flex: 0.5,
        backgroundColor: 'blue',
        height: 200
    }
})
export default ViewProducts