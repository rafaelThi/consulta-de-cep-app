import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import api from './api';

interface CepsParms {
  logradouro:string;
  bairro:string;
  localidade:string;
  uf:string;
}

export default function Home() {
const [ceps, setCeps] = useState('');
const [cep, setCep] = useState<CepsParms>();

function Buscar() {
  api.get(`/${ceps}/json/`).then(response=>{
    const cep = response.data
    console.log(response.data)
    setCep(cep);
    setCeps('')
  })
}
  return (
    <View style={styles.container}>
      <Text>Digite o CEP que deseja buscar</Text>

      <TextInput 
      keyboardType={"numeric"}
      style={styles.input}
      value={ceps}
      onChangeText={setCeps}
      />
     <Button onPress={Buscar} title='Buscar'/>
      
      <View  style={styles.container2}>
        <Text>Logradouro: {cep?.logradouro}</Text>
        <Text>Bairro: {cep?.bairro}</Text>
        <Text>Cidade: {cep?.localidade}</Text>
        <Text>UF: {cep?.uf}</Text>
      </View>
     
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
  container2: {
    margin:25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  input: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    height: 36,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
});
