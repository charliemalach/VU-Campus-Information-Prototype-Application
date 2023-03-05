import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';


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

export default HealthCenter;
