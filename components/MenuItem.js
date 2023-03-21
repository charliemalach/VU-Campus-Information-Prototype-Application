import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

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

export default MenuItem;
