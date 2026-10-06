import React, { useState } from 'react'
import { View, Button, Modal, StyleSheet, Text } from 'react-native'

const 
ModalDemo = () => {

    const [showModal, setShowModal] = useState(true);


    return (
        <View style={styles.main}>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>Modal demo</Text>

            <Modal
                transparent={true}
                visible={showModal}
                animationType='fade'
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello Code step by step</Text>
                        <Button
                            title='Close Modal'
                            onPress={() => setShowModal(false)}
                        />

                    </View>
                </View>
            </Modal>




            <View style={styles.buttonView}>
                <Button
                    title='Open Modal'
                    onPress={() => setShowModal(true)}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        backgroundColor: "skyblue",
        padding: 40,
        borderRadius: 20,
        shadowColor: "black",
        elevation: 5

    },

    modalText: {
        fontSize: 30,
        marginBottom: 20

    }
})








export default ModalDemo