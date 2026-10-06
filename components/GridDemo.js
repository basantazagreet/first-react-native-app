import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GridDemo = () => {
    const users = [
        { id:1, name:"Anil"},
        { id:2, name:"Basanta"},
        { id:3, name:"Bruce"},
        { id:4, name:"Sam"},
    ];


    return (
        <View>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>GridDemo Component</Text>
            <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>

                {
                    users.map((item) => <Text style={styles.item}>{item.name}</Text>)
                }
                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 25,
        backgroundColor:"blue",
        color: "white",
        margin:5,
        padding:5,
        width:120,
        height:120,
        textAlignVertical:"center",
        textAlign:"center"
    }
})





export default GridDemo