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
import axios from "axios";
import { data } from "../Api_web";
import icons from "../constant/icons";


function Viewid({ route, navigation }) {
    const { id } = route.params;
    //debugger;
    //console.log(id)

   // const [id, setid] = useState(null);

    const [searchText, setSearchText] = useState('')
    const filteredid = () => id.filter(item => item.ten.toLowerCase()
        .includes(searchText.toLowerCase()))

    // const renderData = () => {
    //     axios.get('http://10.0.2.2:3000/crawldata')
    //         .then(function (response) {
    //             const product = response.data.find(item => item.id === id)
    //             // handle success
    //             console.log(product);
    //             setid(product);

    //         })
    //         .catch(function (error) {

    //             // handle error
    //             console.log(error);
    //         })
    // }

    //useEffect(() => { renderData() }, [])

    return <View style={styles.container} key='dt'>
        {/* {
            renderData()}
        { */}
        { /* {filteredid().length > 0 ? <FlatList
            data={filteredid()}
            numColumns={2}
            renderItem={({ item, index }) => */}
        <ScrollView>
        {
            /* đây là khúc chính */
            <View 
                style={{
                    //flex: 0.70,
                    //height: 500,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginHorizontal: 30,
                    marginTop: 30,
                    borderRadius: 10,
                    alignItems: 'center'
                }}>
                <Image style={{
                    marginTop: 5,
                    width: 200,
                    height: 180,
                    borderBottomStartRadius: 5,
                    alignItems: 'center'
                }}
                    source={{
                        uri: id.hinh
                    }} />
                <Text style={{ marginHorizontal: 10, marginTop: 20, fontSize: 20,fontWeight: 'bold' }}>{id.name}</Text>
                {/* màn hình */}
                <View style={{ flexDirection: 'column', marginTop: 5 }}>            
                        <Text style={{ fontSize: 17 }} >Màn hình: {id.cauhinh[0]}</Text>
                        <Text style={{ fontSize: 17 }} >Cấu hình: {id.cauhinh[1]}</Text>
                        <Text style={{ fontSize: 17 }} >Bộ nhớ: {id.cauhinh[2]}</Text>
                        <Text style={{ fontSize: 17 }} >Pin: {id.cauhinh[3]}</Text>
                        <Text style={{ fontSize: 17 }} >{id.cauhinh[4]}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }} >Giá: {id.gia[0].gia}</Text>
                </View>
            </View >
        }
        {
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15
                }}>
                {
                     id.gia.map( Item =>
                        <View style={{
                            flexDirection: 'row',
                            width: '98%',
                            borderWidth: 1,
                            borderColor: 'black',
                            marginBottom: 5,
                        }}>
                            <Image source={{
                                uri: `${Item.hinh}`
                            }}
                            style={{
                                height: 70,
                                width: '20%',
                            }}
                            />
                            <Text style={{
                                fontSize: 15,
                                width: '30%',
                                marginLeft: 5
                            }}>{Item.tendt}</Text>
                            <Text style={{
                                fontSize: 15,
                                width: '15%',
                                marginLeft: 5
                            }}>
                                {Item.nhacc}
                            </Text>
                            <View style={{
                                width: '10%',
                                alignItems: 'center',
                                justifyContent: 'center'
                                
                            }}>
                                <Image source={{
                                    uri: `${Item.hinhnoiban}`
                                }}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                />
                            </View>
                            <Text style={{fontSize: 15,width: '25%'}}>{Item.gia}</Text>
                        </View>
                    )
                }
                </View>
        }  
        </ScrollView>       
    </View>
}

{/* <Text style={{ marginTop: 20, fontSize: 23, marginLeft: 10, marginLeft:30 }}>{id[0].picec}  {id[0].sale}</Text>
            <Text style={{
                marginLeft: 12,
                fontSize: 23,
                fontWeight: 'bold',
                justifyContent:'center',
                marginLeft:130
            }}>
                chỉ còn: {id[0].picecSale}
            </Text> */}

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
export default Viewid