import React, {useEffect, useRef, useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button, TouchableOpacity, Image} from "react-native";
import {Audio} from "expo-av";

function TimeCheckItem({id,onRemove}) {
    function useInterval(callback, delay) {
        const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

        useEffect(() => {
            savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
        }, [callback]);

        useEffect(() => {
            function tick() {
                // @ts-ignore
                savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
            }
            if (delay !== null) {
                // 만약 delay가 null이 아니라면
                let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
                return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
            }
        }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
    }
    const [btnStatus,setBtnStatus] = useState(true);
    const [isPlay, setIsPlay] = useState(false);
    const [timerInterval, setTimerInterval] = useState(0);
    const [sound,setSound]=useState();
    const [second,setSecond] = useState(0);
    function startTimeCheck(){
        setBtnStatus(false)

        setIsPlay(true)
    }
    function stopTimeCheck(){
        setIsPlay(false);
        setBtnStatus(true)
        clearInterval(timerInterval);
        setSecond(0);

    }

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/test.mp3')
        );
        // @ts-ignore
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }
    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                // @ts-ignore
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    const time =  () =>{

        if(second>5){
            /**
             * 소리 나게하기
             */
            // @ts-ignore
            playSound();
            setSecond(0);
        }else{

            setSecond(second+1);
        }
    }
    useEffect(()=>{

        // @ts-ignore
        setTimerInterval(customInterval);
    },[])

    const customInterval = useInterval(
        () => {
            time();
        },
        isPlay ? 1000 : null
    );
    const onButtonStart = function(){
        return btnStatus ? startTimeCheck() : stopTimeCheck();
    }

    return (
        <View style={styles.container}>

            <View style={styles.buttonStyle}>
                <TextInput
                    style={styles.input}

                    value={String(second)}
                />
            </View>
            <Text >노래</Text>
            <View style={styles.btnStyle}>
            <TouchableOpacity activeOpacity={0.5} onPress={onButtonStart}>
            {btnStatus ?<Image source={require('../assets/images/start.png')}  style={styles.image}></Image>: <Image source={require('../assets/images/stop.png')}  style={styles.image}></Image>}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
                    <Image source={require('../assets/images/music.png')} style={styles.image}></Image>
            </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={onRemove}>
                    <Image source={require('../assets/images/close.png')} style={styles.image}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        backgroundColor: '#ECF0F1',
        alignItems: 'center', //Centered vertically
        flexDirection: "row",
        flexWrap: "wrap",
        padding:8,
        marginTop:4
    },
    btnStyle:{
        flexDirection: "row"
    },
    buttonStyle:{
        alignItems:'center',
        justifyContent:'center',
        width:48,
        height:48,
        backgroundColor:'white',
        borderRadius:24
    },
    image:{
        width:48,
        height:48
    },
    input: {
        fontSize:32,
    fontWeight: "bold"
    }
});
export default TimeCheckItem;