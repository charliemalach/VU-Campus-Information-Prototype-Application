import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';


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
        backgroundColor: '#613318',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        maxWidth: 200,
        width: 200,
        height: 45,
        maxHeight: 45,
      },
});

export default Counseling;
