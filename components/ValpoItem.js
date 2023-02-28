import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={ValpoNav}>
            <Text style={styles.buttonText}>ValpoNav</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={Resources}>
            <Text style={styles.buttonText}>Contact Resoruces</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_special} onPress={VUPD}>
            <Text style={styles.buttonText}>Call VUPD</Text>
          </TouchableOpacity>



        </View>

        


      );
    };
    
    // the stylesheet for the styles on the home menu screen
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

      button_special: {
        backgroundColor: '#ffcc00',
        padding: 10,
        borderRadius: 5,
        marginVertical: 55,
        maxWidth: '70%',
      },

      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },

    });
  
  export default ValpoItem;
  