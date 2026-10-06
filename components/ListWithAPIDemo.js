import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
const ListWithAPIDemo = () => {

    const [data, setData] = useState([]);
  
    const getAPIData = async () => {
        //api call
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result);

    }

    useEffect(()=>{
        getAPIData();
    }, [])
  
    return (

    <ScrollView>
        <Text style={{fontSize:30}}>List with API call</Text>
        {
            data.length ? 
            
            data.map((item) => 
                <View style={{padding:10, borderBottomColor:"#ccc", borderBottomWidth:1}}>
                <Text style={{fontSize:20,padding:5, backgroundColor:"#f2f2f2"}}>ID: {item.id}</Text>
                <Text style={{fontSize:30}}>Title: {item.title}</Text>
                <Text style={{fontSize:30}}>Body: {item.body}</Text>
            </View> 
            )
            
            : null
        }
    </ScrollView>
  )
}

export default ListWithAPIDemo