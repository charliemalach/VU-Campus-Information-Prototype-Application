import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {loggedUser} from './Login.js'

const API_URL = 'https://d681-2601-248-c200-3170-599d-c89d-e5a1-d6ba.ngrok.io'; //change this link for the user db 

const EditProfileScreen = () => {
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
      updateProfilePicture({loggedUser}, result.uri)
    }
  };

  const updateProfilePicture = async ({loggedUser}, imageUrl) => {
    username = {loggedUser};
    try {
      const response = await fetch(`${API_URL}/users?username=${username}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          profilePicture: imageUrl
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        ) : (
          <View style={styles.profilePicturePlaceholder}>
            <Text style={styles.profilePicturePlaceholderText}>Upload a Profile Picture</Text>
          </View>
        )}
      </TouchableOpacity>
      <TextInput
        placeholder= {loggedUser}
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Save Profile')}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginVertical: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#613318',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    minWidth: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profilePicturePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicturePlaceholderText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EditProfileScreen;
