import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api  from './src/services/api';
import Filme from './src/Filmes'
 
export default function App() {
 
  const [filmes, setfilmes] = useState(['']);

  useEffect(()=>{

    async function getFilmes(){
      const resposta = await api.get('r-api/?api=filmes');
        // o array filmes ja esta guardando
        // console.log(resposta.data);
      setfilmes(resposta.data);
    }
    getFilmes();
  },[])
 
 
  return (
    <View style={styles.container}>
   
      <FlatList
        data={filmes}
        renderItem={({item})=> <Filme data={item}></Filme>}
      ></FlatList>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
   //backgroundColor: '#fff',
   //alignItems: 'center',
   //justifyContent: 'center',
   },
});
