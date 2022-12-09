import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/Main'
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Head from "./component/Head";
import TimeCheckList from "./component/TimeCheckList";
export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView edges={['bottom']} style={styles.block}>
          <Head/>
          <TimeCheckList/>
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
