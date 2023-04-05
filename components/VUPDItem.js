import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import styles from './styles.js';


const VUPDItem = () => {

    const callVUPD = async () => {
        const phoneNumber = '2192636758'; //this is my phone number. change this to make it call VUPD.
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.panicbutton} onPress={callVUPD}>
                <Text style={styles.buttonText}>Call VUPD</Text>
            </TouchableOpacity>
        </View>
    );
};



export default VUPDItem;
