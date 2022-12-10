import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Head from "./component/Head";
import TimeCheckList from "./component/TimeCheckList";
import {useState} from "react";
export default function App() {
  const [timeItem,setTimeItem] = useState([
    {id:1},
  ])

  const onRemove = id =>{
    const nextTimeItme = timeItem.filter(v => v.id !=id);
    setTimeItem(nextTimeItme)
  }

  return (
      <SafeAreaProvider>
        <SafeAreaView edges={['bottom']} style={styles.block}>
          <Head timeItem={timeItem} setTimeItem={setTimeItem}/>
          <TimeCheckList timeItem={timeItem} setTimeItem={setTimeItem} onRemove={onRemove}/>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block:{
    flex:1,
  }
});
