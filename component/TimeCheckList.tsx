import {Text, View, TextInput, StyleSheet, Button} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState,useEffect,useRef} from "react";
import { Audio } from 'expo-av';

export default function TimeCheckList(){

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

    const [status, setStatus] = useState({count:0,id:0});
    const [btnStatus,setBtnStatus] = useState(true);
    const [second,setSecond] = useState(0);
    const [isPlay, setIsPlay] = useState(false);
    const [timerInterval, setTimerInterval] = useState(0);
    const [sound,setSound]=useState();

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

    const customInterval = useInterval(
        () => {
            time();
        },
        isPlay ? 1000 : null
    );
    useEffect(()=>{

        // @ts-ignore
        setTimerInterval(customInterval);
    },[])
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
    return(
        <LinearGradient
            start={[1, 1]}
            end={[0, 0]}
            colors={["#323232", "#696969", "#6C6C6C"]}
            style={styles.button}
        >
            <View style={styles.container}>
                <Text >qw</Text>
                <TextInput
                    style={styles.input}

                    value={String(second)}
                />
                 {btnStatus ?<Button title={"시작"} onPress={startTimeCheck}></Button>: <Button title={"정지"} onPress={stopTimeCheck}></Button>}

            </View>

            <View style={styles.container}>
                <Text>qw</Text>
                <TextInput
                    style={styles.input}

                    value={"asdqwdww"}
                />
            </View>
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
        marginTop:4
    },
    input: {
        height: 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }, button: {
        width: 267,
        height: 397,
        alignItems: "center",
        // justifyContent: "space-between",
        borderRadius: 12,
        margin: 1,
        paddingHorizontal: 18,
        paddingTop: 20,
        paddingBottom: 20,
    },
});