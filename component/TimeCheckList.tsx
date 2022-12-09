import {Text, View, TextInput, StyleSheet, Button} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState,useEffect,useRef} from "react";
import { Audio } from 'expo-av';
import TimeCheckItem from "./TimeCheckItem";

export default function TimeCheckList(){



    const [status, setStatus] = useState({count:0,id:0});





    return(
        <LinearGradient
            start={[1, 1]}
            end={[0, 0]}
            colors={["#323232", "#696969", "#6C6C6C"]}
            style={styles.container}
        >
            <TimeCheckItem/>


        </LinearGradient>

    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        backgroundColor: '#ECF0F1',
        alignItems: 'center', //Centered vertically
        flexDirection: "row",
        flexWrap: "wrap",
        padding:8,
        marginTop:4,
        flex:1

    },
    input: {
        height: 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});