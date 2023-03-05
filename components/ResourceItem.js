import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResourceItem = () => {
    const navigation = useNavigation();

      const Counseling = () => {
        navigation.navigate('Counseling');
      };

      const HealthCenter = () => {
        navigation.navigate('HealthCenter');
      };

      const StudentSenate = () => {
        navigation.navigate('StudentSenate');
      };


    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={Counseling}>
                <Text style={styles.buttonText}>Counseling Center</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={HealthCenter}>
                <Text style={styles.buttonText}>Health Center</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={StudentSenate}>
                <Text style={styles.buttonText}>Student Senate</Text>
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

export default ResourceItem;
