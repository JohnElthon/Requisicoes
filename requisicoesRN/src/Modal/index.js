import { useState } from "react";
import { Text, View, StyleSheet, Modal, TouchableOpacity } from "react-native";

export default function Detalhes(props) {

    return (
        <View style={styles.container}>
            <View style={styles.containerModal}>
                
            <TouchableOpacity style={styles.botao} onPress={(props.fecharModal)}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.textoTitulo}>{props.filme.nome}</Text>
            <Text style={styles.Sinopse}>Sinopse:</Text>
            <Text style={styles.texoSinopse}>{props.filme.sinopse}</Text>

            </View>


        </View>

    );
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    containerModal:{
        backgroundColor:'black',
        height:'50%',
        width:'92%',
        //opacity:0.9,
        borderRadius:15
        // borderTopLeftRadius:10,
        // borderTopRightRadius:10,
        
       
    },
    botao:{
        
        width:'100%',
        backgroundColor:'#09a6ff',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        
    },
    textoBotao:{
        padding:8,
        color:'#fff',
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'

    },
    textoTitulo:{
        marginTop:10,
        color:'#fff',
        fontSize: 25,
        marginBottom:10,
        fontWeight:'bold',
        textAlign:'center'
    },
    Sinopse:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        marginLeft: 6

    },
    texoSinopse: {
        marginTop:10,
        marginLeft: 6,
        fontWeight:'bold',
        color:'#fff',
        fontSize: 15
    }

});
