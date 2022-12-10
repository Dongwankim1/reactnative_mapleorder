import {FlatList, View,Text, StyleSheet} from "react-native";
import {useState,useEffect,useRef} from "react";
import TimeCheckItem from "./TimeCheckItem";

export default function TimeCheckList({timeItem,onRemove}){

    useEffect(()=>{
        console.log(timeItem);
    },[])

    const renderItem = ({ item }) => (
        <TimeCheckItem id={item.id} onRemove={onRemove}/>
    );

    return(
        <FlatList style={styles.list}
            data={timeItem}
            renderItem={renderItem}
                  keyExtractor={item=>item.id.toString()}
        />
    )
}


const styles = StyleSheet.create({
    list:{
        flex:1,
    },
    container:{
        height:200,
    }

});