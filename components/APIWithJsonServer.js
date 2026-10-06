import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

const APIWithJsonServer = () => {
    const [data, setData] = useState([])

    const getAPIData = async () => {
        const url = "http://192.168.1.65:3000/user";
        let result = await fetch(url)
        result = await result.json();
        setData(result);
    }

    useEffect(()=>{
        getAPIData();
    },[])


  return (
    <View>
        {
            data.length? 
            data.map((item) => 
            <View style={{borderWidth:1, borderColor:"orange", padding:1}}>
            <Text style={{fontSize:30}}>{item.name}</Text>
            <Text style={{fontSize:30}}>{item.email}</Text>
            </View>
            )
                       
            : null
        }
    </View>
  )
}

export default APIWithJsonServer