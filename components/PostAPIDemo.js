import React from 'react'
import { View, Text, Button } from 'react-native'

const PostAPIDemo = () => {

    const saveAPIData = async () => {
        const data = {
            name: "Zenith Sharma",
            email: "zenith.sharma@gmail.com",
            password: "Zenith123",
            id: 5
        }

        const url = "http://10.0.2.2:3000/user";

        let result = await fetch(url, {
            method: "POST",
            headers: {"Content-Type" : "application/json"  },
            body: JSON.stringify(data)
        })

        result = await result.json();
        console.warn(result);
    }


  return (
    <View>
        <Text style={{fontSize: 30}}>POST API Call</Text>
        <Button 
            title="Save data"
            onPress={saveAPIData}
        />
    </View>
  )
}

export default PostAPIDemo