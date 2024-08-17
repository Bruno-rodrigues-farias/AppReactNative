import Slider from '@react-native-community/slider';
import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import api from './services/api'
import Filmes from './assets/src/Filmes';


export default function App(){

 const [filmes, setFilmes] = useState([]);

 useEffect(()=>{

  async function loadFilmes(){
    const response = await api.get('r-api/?api=filmes');

    setFilmes(response.data)
  }

  loadFilmes();

 },[])

  return(
    <View style={styles.container}>
      
     
    <FlatList 
    data={filmes}
    keyExtractor={item => String(item.id)}
    renderItem={({item})=><Filmes data={item} />}
    />
      
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    flex:1,
   
  },
  
})