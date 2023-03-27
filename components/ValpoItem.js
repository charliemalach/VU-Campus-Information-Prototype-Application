import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';

const ValpoItem = () => {
    const navigation = useNavigation();

    const DataVULink = () => {
        Linking.openURL('https://datavu.valpo.edu:8444/WebAdvisor/WebAdvisor');
    };
    const BBVULink = () => {
        Linking.openURL('https://blackboard.valpo.edu/');
    };
    const Menu = () => {
      navigation.navigate('Menu');
    };

    const ValpoNav = () => {
      Linking.openURL('http://vas.cis.valpo.edu/~valponav/');
    };

    const Resources = () => {
      navigation.navigate('Resources');
    };

    const VUPD = () => {
      navigation.navigate('VUPD');
    };

    // the view on the screen for the user main menu 
    return (
        <View style={styles.container}>
          
          <TouchableOpacity style={styles.button} onPress={BBVULink}>
            <Text style={styles.buttonText}>BlackBoard</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={DataVULink}>
            <Text style={styles.buttonText}>DataVU</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={Menu}>
            <Text style={styles.buttonText}>Founders Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={Resources}>
            <Text style={styles.buttonText}>Student Resources</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={ValpoNav}>
            <Text style={styles.buttonText}>ValpoNav</Text>
          </TouchableOpacity>

          

          <TouchableOpacity style={styles.button_special} onPress={VUPD}>
            <Text style={styles.buttonText}>Call VUPD</Text>
          </TouchableOpacity>
        </View>
      );
    };
  
  export default ValpoItem;
  