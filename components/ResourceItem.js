import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';

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

export default ResourceItem;
