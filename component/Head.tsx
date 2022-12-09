import React from 'react';
import {Button, StatusBar,StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
function Head(props) {
    const {top} = useSafeAreaInsets();
    return (
        <>
        <View style={[styles.statusBarPlaceholder,{height:top}]}></View>
        <View style={styles.block}>
            <StatusBar backgroundColor={"#3E444A"}/>
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
        padding:16,
    }
})

export default Head;