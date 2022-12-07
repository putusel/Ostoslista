
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image, Dimensions, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => { 
    setData([...data, { key: text }]);
    setText('');
  }
  const buttonPressed2 = () => { 
    setData('');
  }


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://th.bing.com/th/id/OIP.gxvUa1_2vWnkr7qiWkQ2HgHaIm?w=150&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'}} />
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text}/>
      <View style={{ width:Dimensions.get("window").width * 0.4, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 20}}>
          <Button onPress={buttonPressed} title="ADD" />
          <Button onPress={buttonPressed2} title="CLEAR" />
      </View>
      <Text style={styles.text}>Shopping List</Text>
      <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) =>
            <Text>{item.key}</Text>
        }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image : {
    width: 250,
    height: 100,
    marginTop: 10, 
    marginBottom: 10,
  },
  input : {
    width:200, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginTop: 10, 
    marginBottom: 20,
  },
  text : {
    fontSize: 20,
    color: '#0000ff',
  }

});
