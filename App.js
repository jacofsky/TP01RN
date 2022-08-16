import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


const App = () => {
  
  const [textValue, setTextValue] = useState('')
  const [show, setShow] = useState(false)
  

  return (
    <SafeAreaView style={{backgroundColor: '#A9D6E5', flex: 1}}>
      <View style={{marginHorizontal: 20}}>
        <TextInput placeholder='Introduzca un texto!' autoCapitalize style={{backgroundColor: '#468FAF', color: 'white', fontWeight: 'bold', fontSize: 25, borderRadius: 50, paddingHorizontal: 20, marginTop: 20}} onChangeText={setTextValue} onChange={() => setShow(false)} value={textValue}/>

        {
          (textValue.length > 0)
          &&
          <Text style={{color: 'white', fontWeight: 'bold'}}>CARACTERES: {textValue.length}</Text>
        }

        <TouchableOpacity style={{backgroundColor: '#013A63', paddingVertical: 10, marginVertical: 20, borderRadius: 100}} onPress={() => {setShow(true)}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>VER TEXTO</Text>
        </TouchableOpacity>

        {
          show
          &&
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center', marginVertical: 10}}>{textValue}</Text>
        }
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
