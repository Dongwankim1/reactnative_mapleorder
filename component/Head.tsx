import React from 'react';
import {Button, StatusBar,StyleSheet, View,Text} from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
function Head(props) {
    const {top} = useSafeAreaInsets();
    return (
        <>
        <View style={[styles.statusBarPlaceholder,{height:top}]}></View>
        <View style={styles.block}>
            <StatusBar backgroundColor={"#3E444A"}/>
            <Text>MapleOrder</Text>
            <Button title={"추가"}></Button>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    statusBarPlaceholder:{
        backgroundColor:"#3E444A"

    },
    block:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#3E444A",
        padding:16,
    }
})

export default Head;