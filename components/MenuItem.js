import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const MenuItem = () => {

    const openPDF = async () => {
        const url = 'https://www.charliemalachinski.com/Valpo_Menu.pdf'; // Replace with your PDF URL
        await Linking.openURL(url);
    };

    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={openPDF}>
                <Text style={styles.buttonText}>Menu</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MenuItem;
