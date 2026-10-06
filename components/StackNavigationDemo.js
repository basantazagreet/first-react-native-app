import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const StackNavigationDemo = () => {

    const btnAction = () => {
        console.warn("Button pressed")
    }

    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    title: "User Login",
                    headerStyle: {
                        backgroundColor: "blue",
                    },
                    headerTintColor: "orange",
                    headerTitleStyle: {
                        fontSize: 25
                    }
                }}

            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        //Left ma button ra right ma Search bar
                        headerTitle:()=><Button title='Left' onPress={btnAction}/>,
                        headerRight:()=><Header/>,
                        title:"User Login",
                        headerStyle:{
                            backgroundColor:"skyblue",
                        },
                        headerTintColor:"white",
                        headerTitleStyle:{
                            fontSize:40
                        }
                    }}
                />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
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

const Header = () => {
    return (
        <TextInput placeholder='Search' />
    );
}





export default StackNavigationDemo