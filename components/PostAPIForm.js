import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const PostAPIForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const saveData = async () => {



        if(!name)
            setNameError(true)
        else
            setNameError(false)



        if(!email)
            setEmailError(true)
        else
            setEmailError(false)



        if(!password)
            setPasswordError(true)
        else
            setPasswordError(false)



        if(!name || !email || !password)
            return false

        


        const url = "http://10.0.2.2:3000/user";
        let result =await fetch(url, {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name, email, password})
        })
        result = await result.json();
        console.log(result)
    }

  return (
    <View>
        <Text style={{fontSize: 30}}>POST API with Input Field Data</Text>
        <TextInput 
            style={StylesDemo.input}
            placeholder='Enter Name'
            onChangeText={(text) => setName(text)}
            value={name}
            />
        {
            nameError ? 
                <Text style={StylesDemo.errorText}>Please enter valid name</Text>
            : null
        }


        <TextInput 
            style={StylesDemo.input}
            placeholder='Enter Email'
            onChangeText={(text) => setEmail(text)}
            value={email}
            />

        {
            emailError ? 
                <Text style={StylesDemo.errorText}>Please enter valid Email</Text>
            : null
        }

        <TextInput 
            style={StylesDemo.input}
            placeholder='Enter Password'
            onChangeText={(text) => setPassword(text)}
            value={password}
            />

        {
            passwordError ? 
                <Text style={StylesDemo.errorText}>Please enter valid Password</Text>
            : null
        }

        <Button 
            onPress={saveData}
            title='Submit'
        />
    </View>
  )
}

const StylesDemo = StyleSheet.create({
    input:{
        borderColor:"skyblue",
        borderWidth:1,
        margin:20,
        fontSize: 20
    },
    errorText:{
        color:"red",
        marginLeft:20
    }
})


export default PostAPIForm