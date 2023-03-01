import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Counseling = () => {
    const navigation = useNavigation();

    const callCounseling = async () => {
        const phoneNumber = '2194645002'; //this is my phone number. change this to make it call VUPD.
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const emailCounseling = () => {
        const recepient = 'charlie.malachinski@valpo.edu'; //change this email 
        const subject = 'test'; //change this subject
        const body = 'test';  //change this body 
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
    button: {
        backgroundColor: '#613318',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        maxWidth: '70%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Counseling;
