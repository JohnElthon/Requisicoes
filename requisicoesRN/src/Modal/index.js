import { useState } from "react";
import { Text, View, StyleSheet, Modal, TouchableOpacity } from "react-native";

export default function Detalhes(props) {

    return (
        <View style={styles.Modal}>
            <Text style={styles.Sinopse}>{props.Sinopse}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(false)}>
                <Text style={styles.textoBotao}>Sair</Text>
            </TouchableOpacity>


        </View>

    );
}
const styles = StyleSheet.create({
    botao:{
        width:100,
        backgroundColor:'#09a6ff',
        padding:5,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        opacity:0.8

    },
    Sinopse: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold'
    }

});
