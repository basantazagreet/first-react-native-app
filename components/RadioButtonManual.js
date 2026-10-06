import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const RadioButtonManual = () => {

    const [selectedRadio, setSelectedRadio] = useState(1);
    const skills = [
        { id: 1, name: "Java" },
        { id: 2, name: "PHP" },
        { id: 3, name: "Node" },
        { id: 4, name: "SQL" },
        { id: 5, name: "Python" },
    ]


    return (
        <View style={styles.main}>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>Radio button manual</Text>

            {
                skills.map((item, index) =>

                    <TouchableOpacity
                        onPress={() => setSelectedRadio(item.id)}
                        key={index}
                    >
                        <View style={styles.radioWrapper}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === item.id ? <View style={styles.radioBG}></View> : null
                                }

                            </View>
                            <Text style={styles.radioText}>
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>


                )
            }











            {/* <TouchableOpacity onPress={()=>setSelectedRadio(2)}>            
            <View style={styles.radioWrapper}>
                <View style={styles.radio}>
                {
                        selectedRadio === 2 ? <View style={styles.radioBG}></View> : null
                    }
                </View>
                <Text style={styles.radioText}>
                    Radio 2
                </Text>
            </View>
        </TouchableOpacity> */}
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    radioText: {
        fontSize: 20,
        color: "skyblue"
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: "blue",
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: "center"
    },
    radioBG: {
        backgroundColor: "black",
        height: 28,
        width: 28,
        borderRadius: 20,
        margin: 4
    }
})


export default RadioButtonManual