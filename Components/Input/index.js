import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';

export default function Input(props){
    return(
        <View style={styles.container}>
            <TextInput {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        margin: 10,
        backgroundColor: '#FFF',
        justifyContent:'center',
        alignSelf:'center',
        width: '70%',
        height: 50,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
})