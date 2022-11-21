import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
            <LinearGradient
                start={[0.5, 1]}
                end={[0.5, 0]}
                colors={["#3E444A", "#1C1E22"]}
                style={{ borderRadius: 12 }}
            >
                <LinearGradient
                    start={[1, 1]}
                    end={[0, 0]}
                    colors={["#323232", "#696969", "#6C6C6C"]}
                    style={styles.button}
                >
                    <Text style={styles.text1}>
                        Allows “Maps” to acces your location while you are using the app?
                    </Text>
                    <Text style={styles.text2}>
                        Your current location will be displayed on the map and used for
                        directions, nearby search results, and estimated travel times.
                    </Text>
                    <View style={styles.hr}></View>
                    <Text style={styles.text3}>Allow While Using App</Text>
                    <View style={styles.hr}></View>
                    <Text style={styles.text3}>Allow Once</Text>
                    <View style={styles.hr}></View>
                    <Text style={styles.text3}>Don't Allow</Text>
                </LinearGradient>
            </LinearGradient>
            {/* Wallet 아이콘 이미지 */}
            <Image
                source={require("../assets/wallet.png")}
                style={{
                    height: 200,
                    width: 200,
                    marginTop: -20,
                    marginBottom: -50,
                    resizeMode: "contain",
                }}
            />
            <Text style={styles.text}>Tap to connect Phantom wallet</Text>
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