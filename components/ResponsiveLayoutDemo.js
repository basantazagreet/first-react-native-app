import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResponsiveLayoutDemo = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>ResponsiveLayout Demo</Text>
            <View style={{ flex: 1 }}>
                <View style={styles.box1}>
                    <View style={styles.InnerBox1} ></View>
                    <View style={styles.InnerBox2} ></View>
                    <View style={styles.InnerBox3} ></View>

                </View>
                <View style={{ flex: 1, backgroundColor: "red" }}></View>
                <View style={{ flex: 1, backgroundColor: "blue" }}></View>
                <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    box1:{
        flex:2,
        backgroundColor: "green",
        flexDirection:"row"
    },
    InnerBox1:{
        flex:1,
        backgroundColor:'yellow',
        margin:10,
    },
    InnerBox2:{
        flex:1,
        backgroundColor:'red',
        margin:10,
    },
    InnerBox3:{
        flex:1,
        backgroundColor:'skyblue',
        margin:10,
    }
})



export default ResponsiveLayoutDemo