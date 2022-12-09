import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TimeCheckList from "../component/TimeCheckList";
import Head from "../component/Head";
import {
    useFonts,
    Cabin_700Bold,
    Cabin_700Bold_Italic,
} from "@expo-google-fonts/cabin";

export default function Main() {
    let [fontsLoaded] = useFonts({
        Cabin_700Bold,
        Cabin_700Bold_Italic,
    });


    if (!fontsLoaded) {
        return null;
    }
    return (
        <LinearGradient colors={["#3E444A", "#08040A"]} style={styles.background}>
            <Head/>
            <TimeCheckList/>
        </LinearGradient>
    );

}



const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "Cabin_700Bold",
        fontSize: 12,
        color: "#fff",
        includeFontPadding: false,
    },
    text1: {
        fontFamily: "Cabin_700Bold",
        fontSize: 19,
        color: "black",
        includeFontPadding: false,
        textAlign: "center",
    },
    text2: {
        fontFamily: "Cabin_700Bold",
        fontSize: 13,
        color: "black",
        includeFontPadding: false,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 50,
    },
    text3: {
        fontFamily: "Cabin_700Bold",
        fontSize: 18,
        color: "black",
        includeFontPadding: false,
    },
    button: {
        width: 267,
        height: 397,
        alignItems: "center",
        // justifyContent: "space-between",
        borderRadius: 12,
        margin: 1,
        paddingHorizontal: 18,
        paddingTop: 50,
        paddingBottom: 40,
    },
    hr: {
        backgroundColor: "black",
        width: 200,
        height: 1.4,
        marginVertical: 10,
    },
});