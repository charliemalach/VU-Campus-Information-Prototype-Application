import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const Counseling = () => {

    const callCounseling = async () => {
        const phoneNumber = '2194645002'; //this is my phone number. change this to make it call the counseling center.
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const emailCounseling = () => {
        const recepient = 'counseling.center@valpo.edu'; //change this email 
        const subject = 'Contact Counseling Center'; //change this subject
        const body = 'To whom it may concern, ';  //change this body 
        Linking.openURL(`mailto:${recepient}?subject=${subject}&body=${body}`);
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
          <Text>Contact the Counseling Center</Text>
          <TouchableOpacity style={styles.button} onPress={callCounseling}>
                <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={emailCounseling}>
                <Text style={styles.buttonText}>E-Mail</Text>
            </TouchableOpacity>
        </View>
        );
};

export default Counseling;
