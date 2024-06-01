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
function SonyProducts(props) {
    const [Products, setProducts] = useState([])
    

    const [categories, setCategories] = useState([
        {
            name: 'Iphone',
            id: 'apple',
            url: 'https://img.sosanhgia.com/images/500x320/03fbf6bbfea943e5a36b71a2356fa5be/iphone-13-pro-max-128gb.jpeg'
        },
        {
            name: 'Samsung',
            id:'samsung',
            url: 'https://img.sosanhgia.com/images/500x320/17a7c0ca5cdd4e808c588af1af12b01b/samsung-galaxy-z-fold-3-5g-12gb512gb.jpeg'
        },
        {
            name: 'Xiaomi',
            id:'xiaomi',
            url: 'https://img.sosanhgia.com/images/500x320/38514b32149348d7be0e7dee2375a338/xiaomi-mi-11-256gb8gb.jpeg'
        },
        {
            name: 'Oppo',
            id:'oppo',
            url: 'https://img.sosanhgia.com/images/500x320/48620a3153f540c7a86ef05ff07b5353/oppo-reno-7-5g-8gb256gb.jpeg'
        },
        {
            name: 'Vivo',
            id:'vivo',
            url: 'https://img.sosanhgia.com/images/500x320/70c9d614598d4aa6b448e49ee3eb3b7a/vivo-t1-5g-8gb128gb.jpeg'
        },
        {
            name: 'Nokia',
            id:'nokia',
            url: 'https://img.sosanhgia.com/images/500x320/916dec22ea264629b4d7baa37090e5b4/nokia-g11-plus-3gb64gb.jpeg'
        },
        {
            name: 'Realme',
            id:'realme',
            url: 'https://img.sosanhgia.com/images/500x320/d5c25f8e9e0646be93e5584a0cc12840/realme-9-pro-plus-5g-8gb128gb.jpeg'
        },
        {
            name: 'Vsmart',
            id:'vsmart',
            url: 'https://img.sosanhgia.com/images/500x320/d989abdcb1904ddc868a09198804cbc5/dien-thoai-vsmart-active-1+.jpeg'
        },
        {
            name: 'Sony',
            id:'sony',
            url: 'https://img.sosanhgia.com/images/500x320/2b1dff75558843a8a6fe7fd6bc8cde4a/sony-xperia-1.jpeg'
        },
        {
            name: 'LG',
            id:'lg',
            url: 'https://img.sosanhgia.com/images/500x320/b00785f7e2494cbd9b548c262989f48a/lg-g8-thinq-6gb128gb.jpeg'
        },

    ])
    const [searchText, setSearchText] = useState('')
    const filteredProducts = () => Products.filter(item => item.name.toLowerCase()
        .includes(searchText.toLowerCase()))
    const [products,setproduct] =useState([]);
   
    const navigator = useNavigation()
    const renderData = (thuonghieu) => {
        axios.get('http://10.0.2.2:3000/crawldata')
            .then(function (response) {
                // handle success
                const filteredHang = response.data.filter( x => 
                    x.thuonghieu == thuonghieu,
                   );
                setProducts(filteredHang);s
                
              //  debugger;
                 console.log(response.data);

            })
            .catch(function (error) {

                // handle error
                console.log(error);
            })
    }
    return <View style={styles.container} key='dt'>
        {renderData('Samsung')}
        <View style={{ height: 140, }}>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
            }} >
                <Image name={'search'} source={icons.search} style={{
                    width: 35,
                    height: 35,
                }} />
                <TextInput onChangeText={(text) => {
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
                <TouchableOpacity>
                    <Image name={'bars'} source={icons.scale} style={{
                        width: 35,
                        height: 35,
                    }} />
                    {/* onPress={() => {
                        let Template = data.sort((a,b) => 
                        a.title > b.title ? 1 : - 1);
                        setProducts(template);
                        setVisible(false);
                    }} */}
                </TouchableOpacity>
            </View>
            <View style={{
                height: 1,
                backgroundColor: 'black',
            }} />
            <FlatList
                horizontal={true}
                data={categories}
                keyExtractor={item => item.name}
               
                renderItem={({ item }) => {
                    return <TouchableOpacity
                        //if(item.name==)1
                        onPress={() => {
                            if(item.id == 'apple')
                              navigator.navigate('IphoneProducts');
                            else if(item.id == 'samsung')
                             navigator.navigate('SamsungProducts')
                            else if(item.id == 'xiaomi')
                             navigator.navigate('XiaomiProducts')
                             else if(item.id == 'oppo')
                             navigator.navigate('OppoProducts')
                             else if(item.id == 'nokia')
                             navigator.navigate('NokiaProducts')
                             else if(item.id == 'vivo')
                             navigator.navigate('VivoProducts')
                             else if(item.id == 'realme')
                             navigator.navigate('RealmeProducts')
                             else if(item.id == 'vsmart')
                             navigator.navigate('VsmartProducts')
                             else if(item.id == 'lg')
                             navigator.navigate('LgProducts')
                             else 
                             navigator.navigate('SonyProducts')
                        }}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image style={{
                            width: 40,
                            height: 40,
                            margin: 10,
                            resizeMode: 'cover',
                            borderRadius: 25,

                        }} source={{
                            uri: item.url
                        }} />

                        <Text style={{
                            color: 'black',
                            fontSize: 12,
                        }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                }}
            
                style={{ flex: 1 }}>

            </FlatList>
            <View style={{ height: 1, backgroundColor: 'black' }} />
        </View>
        {filteredProducts().length > 0 ? <FlatList
            data={filteredProducts()}
            numColumns={2}
            renderItem={({ item, index }) =>
                <TouchableOpacity
                    onPress={() => navigator.navigate('ViewProducts', { id: item })}
                    style={{
                        //backgroundColor: index%2 ? 'blue' : 'green',
                        flex: 0.52,
                        height: 400,
                        borderWidth: 1,
                        borderColor: 'black',
                        //marginRight: index%2==0 && index==Products.length-1 ? 10 : 0,
                        marginRight: 10,
                        marginBottom: 10,
                        marginTop: 10,
                        marginLeft: 10,
                        borderRadius: 10,
                    }}>
                    <Image style={{
                        marginTop: 5,
                        width: 160,
                        height: 160,
                        borderBottomStartRadius: 5,
                        marginLeft:5,
                    }}
                        source={{
                           uri: item.gia[0].hinh
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
                                height: 20,
                                marginRight: 5
                            }}
                        />
                        <Text style={{ fontSize: 11, color: 'white' }}>Sale to đón Tết</Text>
                    </View>
                    <Text style={{ marginHorizontal: 10, marginTop: 5, fontSize: 20 }}>{item.name}</Text>
                    {/* màn hình */}
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <TouchableOpacity style={{
                            backgroundColor: "#C0C0C0",
                            marginHorizontal: 5
                        }}>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            // backgroundColor: "#C0C0C0",
                            marginRight: 13,
                        }}>


                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }} >
                                Giá: {item.gia[0].gia}</Text>
                            <Image style={{ width: 20, height: 20 }} source={item.hinh} />
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>
            }
        /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
                color: 'black',
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
export default SonyProducts