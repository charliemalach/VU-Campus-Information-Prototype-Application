import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import styles from './styles.js';


const StudentSenate = () => {

    const callStudentSenate = async () => {
        const phoneNumber = '2194645002'; //this is my phone number. change this to make it call the health center.
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const emailStudentSenate = () => {
        const recepient = 'senate.president@valpo.edu'; //change this email 
        const subject = 'Contact Student Senate'; //change this subject
        const body = 'To whom it may concern, ';  //change this body 
        Linking.openURL(`mailto:${recepient}?subject=${subject}&body=${body}`);
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
          <Text>Contact the Health Center</Text>
          <TouchableOpacity style={styles.button} onPress={callStudentSenate}>
                <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={emailStudentSenate}>
                <Text style={styles.buttonText}>E-Mail</Text>
            </TouchableOpacity>
        </View>
        );


};

export default StudentSenate;
