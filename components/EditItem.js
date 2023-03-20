import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const EditItem = () => {
    const navigation = useNavigation();

    const Edit = () => {
      navigation.navigate('Edit');
    };


    // the view on the screen for the user main menu 
    return (
        <View style={styles.container}>
          
          <TouchableOpacity style={styles.button} onPress={Edit}>
            <Text style={styles.buttonText}>Edit Profile</Text>
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
      button_special: {
        flex: 1,
        backgroundColor: '#ffcc00',
        padding: 10,
        borderRadius: 5,
        marginVertical: 55,
        maxWidth: 200,
        width: 200,
        height: 45,
        maxHeight: 45,
      },
    });
  
  export default EditItem;
  