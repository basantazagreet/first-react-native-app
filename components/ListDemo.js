import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'

const ListDemo = () => {

    const users = [
        { id:1, name:"Anil"},
        { id:2, name:"Basanta"},
        { id:3, name:"Bruce"},
        { id:4, name:"Sam"},
    ];




  return (
    <View>
         <Text style={{ backgroundColor: 'red', fontSize: 30 }}>ListDemo Component</Text>

            {
                users.map((user) => <Text style={styles.item}>{user.name}</Text>)

            }
            

         <Text style={{ backgroundColor: 'green', fontSize: 30 }}>ListDemo Flatlist </Text>
         <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text> }
        keyExtractor={item=>item.id}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
        fontSize: 24,
        padding:10,
        color:"#fff",
        backgroundColor:'blue',
        borderWidth:1,
        borderColor:"black",
        margin:10

    }
})





export default ListDemo