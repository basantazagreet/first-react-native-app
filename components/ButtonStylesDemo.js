import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const ButtonStylesDemo = () => {
    return (
        <View style={styles.main}>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>Button StylesDemo Component</Text>
            <TouchableHighlight>
                <Text style={styles.button}>Button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.success]}>Success Button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.primary]}>Success Button</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1
    },
    button:{
        backgroundColor:'#bbb',
        color: '#fff',
        fontSize: 24,
        textAlign: "center",
        padding: 10,
        margin:10,
        borderRadius:10,
        shadowColor: 'red',
        elevation: 10,
        shadowOpacity: 1,

    },
    success:{
        backgroundColor:"green",
    },
    primary:{
        backgroundColor:"blue",
    }

})



export default ButtonStylesDemo