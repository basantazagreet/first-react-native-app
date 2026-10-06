import React from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native'

const PlatformDemo = () => {
    return (
        <View>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>Platform Demo</Text>
            <Text style={{ backgroundColor: 'green', fontSize: 30 }}>Platform: {Platform.OS}</Text>
            <Text style={{ backgroundColor: 'blue', fontSize: 30 }}>{JSON.stringify(Platform)}</Text>


            {
                Platform.OS==='android' ?
                    <View style={styles.text}></View>
                    :
                    <View style={styles.text}></View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        width:100,
        height:100,
        backgroundColor: Platform.OS === 'android' ? "skyblue" : "orange"
    }
})



export default PlatformDemo