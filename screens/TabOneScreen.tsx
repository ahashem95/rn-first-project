import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {useEffect} from "react";

async function getIp() {
  const response = await fetch('https://api.ipify.org/?format=json');
  const {ip} = await response.json();
  return ip;
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const tabName = (name: string) => {
    const newName = 'Tab' + name + ' with development build';
    return newName;
  };

  useEffect(() => {
    console.log('Initializing app');
    getIp()
        .then(ip => console.log('IP is:', ip))
        .catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tabName('One')}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
