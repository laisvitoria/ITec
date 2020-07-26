import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native';
import icon from '../../assets/ion_logo-react.png'

export default function Login(){
    return(
        <View style={styles.container}>
            <View style={styles.circle}>
                <Image source={icon}/>
            </View>
            <View style={styles.login}>
                <View style={styles.line}/>
                <Text style={styles.text}>LOGIN</Text>
                <View style={styles.line}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F06543',
        justifyContent: 'center'

    },
    circle:{
        backgroundColor: '#DA5C3D',
        borderRadius: 100,
        alignSelf: 'center',
        padding: 10,
        marginBottom: 20
    },
    login:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    line:{
        width: '20%',
        height: 1,
        backgroundColor: '#313638'
    },
    text:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 42,
        color: '#313638',
        textAlign: 'center'
    }
})