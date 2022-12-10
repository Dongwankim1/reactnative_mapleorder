import React from 'react';
import {Button, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
function Head(props) {
    const {top} = useSafeAreaInsets();
    return (
        <>
        <View style={[styles.statusBarPlaceholder,{height:top}]}></View>
        <View style={styles.block}>
            <StatusBar backgroundColor={"#3E444A"}/>
            <Text style={styles.text}>MapleOrdersss</Text>
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.buttonStyle}>
                    <Image source={require('../assets/images/add_white.png')} style={styles.image}></Image>
                </View>
            </TouchableOpacity>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    statusBarPlaceholder:{
        backgroundColor:"#3E444A"

    },
    buttonStyle:{
      alignItems:'center',
      justifyContent:'center',
      width:48,
      height:48,
      backgroundColor:'#26a69a',
      borderRadius:24
    },
    block:{
        height:64,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
        backgroundColor:"#3E444A",
        borderTopWidth:1,
        borderBottomWidth:1,
        paddingHorizontal:16,
    },
    image:{
        width:24,
        height:24
    },text:{
        fontSize:16,
        paddingVertical:8,
    }
})

export default Head;