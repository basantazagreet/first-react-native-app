import React, {useState, useEffect} from 'react'
import { FlatList, View, Text } from 'react-native'

const FlatListWithAPIDemo = () => {

    const [data, setData] = useState([]);

    const getAPIData = async () => {
        //api call
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result);

    }

    useEffect(() => {
        getAPIData();
    }, [])

    return (

        <View>
            <Text style={{ fontSize: 30 }}>List with API call</Text>
            {
                data.length ?

                    <FlatList
                        data={data}
                        renderItem={({item}) => <View style={{borderBottomColor:"orange", borderBottomWidth:1, padding:10}}>
                            <Text style={{fontSize:20, backgroundColor:"orange", padding:5}}>{item.id}</Text>
                            <Text style={{fontSize:18}}>{item.title}</Text>
                            <Text style={{fontSize:18}}>{item.body}</Text>
                        </View>}
                    />

                    : null
            }
        </View>
    )
}

export default FlatListWithAPIDemo