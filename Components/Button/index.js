import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Botao( {title, onPress}){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        margin: 10,
        backgroundColor: '#313638',
        justifyContent:'center',
        textAlign: 'center',
        alignSelf:'center',
        width: '70%',
        height: 67,
        borderRadius: 50,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'center'
    }
})