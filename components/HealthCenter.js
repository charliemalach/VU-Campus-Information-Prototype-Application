import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import styles from './styles.js';


const HealthCenter = () => {

    const callHealthCenter = async () => {
        const phoneNumber = '2194645002'; //this is my phone number. change this to make it call the health center.
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const emailHealthCenter = () => {
        const recepient = 'health.center@valpo.edu'; //change this email 
        const subject = 'Contact Health Center'; //change this subject
        const body = 'To whom it may concern, ';  //change this body 
        Linking.openURL(`mailto:${recepient}?subject=${subject}&body=${body}`);
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
          <Text>Contact the Health Center</Text>
          <TouchableOpacity style={styles.button} onPress={callHealthCenter}>
                <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={emailHealthCenter}>
                <Text style={styles.buttonText}>E-Mail</Text>
            </TouchableOpacity>
        </View>
        );
};

export default HealthCenter;
