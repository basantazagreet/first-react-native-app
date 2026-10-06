import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

const FormDemo = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false);


    const resetFormData = () => {
        setDisplay(false);
        setEmail("");
        setName("");
        setPassword("");
    }

    return (
        <View>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>FormDemo component</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter username"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <View style={{ marginBottom: 10 }}>
                <Button
                    color={"green"}
                    title="Print Details"
                    onPress={()=>setDisplay(true)}
                />
            </View>
            <Button
                title="Clear Details"
                onPress={resetFormData}
            />

            {
                display ?
                    <View>
                        <Text style={{fontSize: 15}}>Username is: {name}</Text>
                        <Text style={{fontSize: 15}}>Email is: {email}</Text>
                        <Text style={{fontSize: 15}}>Password is: {password}</Text>
                    </View>
                     : null
            }

        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: 'blue',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10
    }
})




export default FormDemo