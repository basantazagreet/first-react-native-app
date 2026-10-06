import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

class ClassCompDemo extends Component {

    constructor(){
        super();
        this.state = {
            name:"Anil"
        }
    }

    updateName(val){
        this.setState({name:val})
    }


    fruit = () => {
        console.warn("fruit");
    }


    render() {
        return (
            <View>
                <Text style={{ backgroundColor: 'red', fontSize: 30 }}>Class Component Demo</Text>
                <TextInput
                    placeholder="Enter your name"
                    onChangeText={(text) => this.updateName(text)}
                />
                <Text>{this.state.name}</Text>
                <Text>{this.props.address}</Text>
                <Button
                onPress={this.fruit}
                title='Trigger function'
                />
            </View>
        )
    }
}

export default ClassCompDemo