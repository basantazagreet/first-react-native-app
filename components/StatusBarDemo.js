import React, { useState } from 'react'
import { View, StatusBar, StyleSheet, Button } from 'react-native'

const StatusBarDemo = () => {

    const [hide, setHide] = useState(false);
    const [barStyle, setBarStyle] = useState("default");

  return (
    <View>
        <StatusBar
            backgroundColor="orange"
            barStyle={barStyle}
            hidden={hide}
        
        />

        <Button 
            title='Toggle status bar'
            onPress={()=>setHide(!hide)}
        />
        <Button 
            title='Update style'
            onPress={()=>setBarStyle("dark-content")}
        />

    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center"
    }

})




export default StatusBarDemo