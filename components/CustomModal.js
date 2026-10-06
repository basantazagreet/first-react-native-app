import React, { useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'

const CustomModal = () => {

    const [show, setShow] = useState(false);


    return (
        <View style={styles.container}>

            {
                show ?
                    <View style={styles.modal}>
                        <View style={styles.body}>
                            <Text>Some text</Text>
                            <Button
                                title='Close'
                                onPress={() => setShow(false)}
                            />
                        </View>
                    </View>


                    : null
            }


            <Button
                title="Open dialog"
                onPress={() => setShow(true)}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(50,50,50, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        justifyContent: 'flex-end',
        borderRadius: 10

    },
    body: {
        backgroundColor: "#fff",
        height: 300,
        width: 300,
    }
})


export default CustomModal