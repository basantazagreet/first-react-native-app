import React from 'react'
import { SectionList, Text, View } from 'react-native'

//Array of array ma used
const SectionListDemo = () => {

    //Keyword ma data nai huna parcha
    const users = [
        { id: 1, name: "Anil", data: ["react", "Vue", "angular"] },
        { id: 2, name: "Basanta", data: ["react", "Vue", "angular"] },
        { id: 3, name: "Bruce", data: ["react", "Vue", "angular"] },
        { id: 4, name: "Sam", data: ["react", "Vue", "angular"] },
    ];



    return (
        <View>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>SectionList Demo</Text>
            <SectionList
                sections={users}
                renderItem={({ item }) => <Text style={{ fontSize: 20, marginLeft: 20 }}>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => (
                    <Text style={{ fontSize: 25, color: "blue" }} >{name}</Text>
                )}
            />
        </View>
    )
}

export default SectionListDemo