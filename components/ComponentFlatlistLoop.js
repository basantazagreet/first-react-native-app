import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const ComponentFlatlistLoop = () => {

    const users = [
        { id: 1, name: "Anil" },
        { id: 2, name: "Basanta" },
        { id: 3, name: "Bruce" },
        { id: 4, name: "Sam" },
    ];



    return (
        <View>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>Component in a Loop with Flatlist Demo</Text>
            <FlatList
                data={users}
                renderItem={({item})=> <UserData item={item}/>
                    
                    }
            />
       
        </View>
    )
}


const UserData = (props) => {
    const item = props.item;
    return (
        <View style={styles.box}>
                    <Text style={styles.item}>{item.id}</Text>
                    <Text style={styles.item}>{item.name}</Text>
                    </View>
    );
}



const styles = StyleSheet.create({
    item:{
        fontSize:24,
        color:"orange",
        flex:1,
        margin:2,
        backgroundColor:"green",
        textAlign:"center"


    },
    box:{
        flexDirection: 'row',
        borderWidth:2,
        borderColor: "orange",
        marginBottom:10

    }
})


export default ComponentFlatlistLoop