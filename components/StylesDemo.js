import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ExStyles from './style'
const StylesDemo = () => {
    return (
        <View>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>StylesDemo Component</Text>
            <Text style={styles.textBox}>Internal Stylesheet</Text>
            <Text style={ExStyles.textBox}>External Stylesheet</Text>
            <Text style={[styles.textBox, ExStyles.textBox, { marginTop: 20 }]}>Both Styles</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textBox: {
        color: '#333',
        fontSize: 30,
        backgroundColor: 'lightblue',
        marginBottom: 10,
        padding: 4,
        borderRadius: 10,
        height: 100,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderColor: 'red',
        borderWidth: 2
    }
})

export default StylesDemo