import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const ValpoItem = () => {
    const DataVULink = () => {
        Linking.openURL('https://datavu.valpo.edu:8444/WebAdvisor/WebAdvisor');
      };
    const BBVULink = () => {
        Linking.openURL('https://blackboard.valpo.edu/');
    };

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={DataVULink}>
            <Text style={styles.buttonText}>DataVU</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={BBVULink}>
            <Text style={styles.buttonText}>BlackBoard</Text>
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
  
  export default ValpoItem;
  