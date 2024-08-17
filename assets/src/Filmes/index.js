import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

function Filmes({data}) {
  return (
    <View style={styles.container}>
        <Text style={styles.nome}>{data.nome}</Text>
        
        <Image 
            source={{uri: data.foto}}
            style={styles.foto}
        />

        <View style={styles.areaBotao}>
            <TouchableOpacity style={styles.botao} onPress={()=> alert("cliclou")}>
                <Text style={styles.nomeBotao}>Leia mais</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        margin: 15,
        elevation: 2,
        
       
    },
    
    
    foto:{
       
        height: 300,
        zIndex:2

        
        
    },
    nome:{
        fontSize: 20,
        fontWeight: 'bold',
        
      
        padding: 15,
        position: '',
        top: 2,
        textAlign:'center'
        
    },
    areaBotao:{
        alignItems:'flex-end',
        marginTop: -45,
        marginRight: 10,
        zIndex: 9,
       
    },
    botao:{
        backgroundColor:'#55ff00',
        
    },
    nomeBotao:{
        padding: 10,
        
    }
  
})

export default Filmes