import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';




const VUPDItem = () => {

    const callVUPD = async () => {
        const phoneNumber = '2192636758'; //this is my phone number. change this to make it call VUPD.
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={callVUPD}>
                <Text style={styles.buttonText}>Call VUPD</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '70%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      button: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        maxWidth: 200,
        width: 200,
        height: 45,
        maxHeight: 45,
      },
});

export default VUPDItem;
