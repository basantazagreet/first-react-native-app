import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const InputDemo = () => {

    const [name, setName] = useState("");

  return (
    <View>
        <Text style={{ backgroundColor: 'red', fontSize: 30 }}>Inpput Demo component</Text>
        <Text style={{fontSize: 25}}>Your name is: {name}</Text>

        <TextInput
            placeholder='Enter your name'
            style={styles.TextInput}
            onChangeText={(text)=>setName(text)}
            value={name}
        
        />

        <Button
            title="Clear Input value"
            onPress={()=>setName("")}

        />
    </View>
  )
}

const styles = StyleSheet.create({
    TextInput : {
        fontSize: 18,
        color:'blue',
        margin: 10,
        borderWidth: 2,
        borderColor:'blue'

    }
})




export default InputDemo