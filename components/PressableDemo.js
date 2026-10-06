import React from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'

const PressableDemo = () => {
  return (
    <View style={styles.main}>
                    <Text style={{ backgroundColor: 'red', fontSize: 30 }}>Pressable demo</Text>

        <Pressable 
            onPress={()=> console.log("Normal Press")}
            onLongPress={()=> console.log("Long Press")}
            onPressIn={()=> console.log("Press in")}
            onPressOut={()=> console.log("Press Out")}
        >
            <Text style={styles.PressableBtn}>Pressable</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center"
    },
    PressableBtn:{
        backgroundColor:"blue",
        color:"#fff",
        padding:10,
        margin:10,
        borderRadius:10,
        fontSize:20,
        textAlign:"center",
        shadowColor: '#000',
        elevation:5

    }
})





export default PressableDemo