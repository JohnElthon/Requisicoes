import {useState} from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity,Modal } from "react-native";

import Detalhes from "../Modal";

export default function Filmes({ data }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image style={styles.capa} source={{ uri:data.foto }} />
            </View>
            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={()=>setModalVisible(true)}>
                    <Text style={styles.textoBotao}>Ver Mais</Text>
                </TouchableOpacity>
            </View>
            <Modal animationType="slide" visible={modalVisible} transparent={true} >
                <Detalhes filme={data} fecharModal={()=> setModalVisible(false)}/>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#a6a6a6',
        margin: 15,
        elevation:2,
        borderRadius:10
    },
    capa: {
        
        height: 250,
        zIndex: 2,
    },
    titulo:{
        fontSize: 20,
        fontWeight:'bold',
        padding:15,

    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -43,
        marginRight: 15

    },
    botao:{
        width:100,
        backgroundColor:'#09a6ff',
        padding:5,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        opacity:0.8

    },
    textoBotao:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:13,
        textAlign:'center'
    }

});