import React, {useState} from 'react'
import {View, Text, Button, TextInput } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();

const TabNavigatorDemo = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='Home' component={Home} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const Home = (props) => {
    console.warn(props.route.params);
    const {name, age} = props.route.params;


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Home Screen</Text>
            <Text style={{ fontSize: 30 }}>Name: {name}</Text>
            <Text style={{ fontSize: 30 }}>Age: {age}</Text>
        </View>
    );
}
const Login = (props) => {

    const [name, setName] = useState("");
    const age = 30;


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Login Screen</Text>
            <TextInput
                onChangeText={(text) => setName(text)}
                placeholder='Enter name'
            
            />
            <Button
                title="Goto homepage"
                onPress={() => props.navigation.navigate("Home", {name:name, age:age})}
            />
        </View>
    );
}




export default TabNavigatorDemo